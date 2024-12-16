import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { ReadUserDto } from './dto/read-user.dto';
import { plainToInstance } from 'class-transformer';
import { UpdateUserDto } from './dto/update-user.dto';
import { Privilege, PrivilegeDocument } from 'src/schemas/privilege.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
        @InjectModel(Privilege.name)
        private readonly privilegeModel: Model<PrivilegeDocument>
    ) { }

    async create(user: CreateUserDto): Promise<ReadUserDto> {
        const createdUser = new this.userModel(user)
        const savedUser = await createdUser.save()
        const createdPrivilege = new this.privilegeModel({ userId: savedUser._id })
        await createdPrivilege.save()
        return plainToInstance(ReadUserDto, savedUser)
    }

    async update(user: UpdateUserDto, userId: string): Promise<ReadUserDto> {
        const foundUser = await this.getUserByEmail(user.email)
        if (foundUser && !foundUser._id.equals(userId)) {
            throw new Error("Existe un usuario con el mismo email")
        } else {
            await this.userModel.updateOne({ _id: userId }, user)
            await this.privilegeModel.updateOne({ userId }, user.privileges)
            return plainToInstance(ReadUserDto, user)
        }
    }

    async countUsers(): Promise<number> {
        return this.userModel.countDocuments({ deletedAt: null })
    }

    async getUserById(userId: string): Promise<ReadUserDto> {
        const foundUser = await this.userModel.findOne({ _id: userId }).populate([
            { path: 'privileges', options: { lean: true } },
            'commercial'
        ])
        if (foundUser) {
            return plainToInstance(ReadUserDto, foundUser)
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getUserByEmail(email: string): Promise<UserDocument | null> {
        const foundUser = await this.userModel.findOne({ email }).populate('privileges')
        if (foundUser) {
            return foundUser
        } else {
            return null
        }
    }

    async getUsersByPage(
        pageIndex: number,
        pageSize: number,
        isDeleted: string | undefined,
    ): Promise<ReadUserDto[]> {
        const queryObject: any = { deletedAt: null }

        if (isDeleted) {
            queryObject.deletedAt = { $ne: null }
        }

        const foundUsers = await this.userModel.find(queryObject)
            .populate('commercial')
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            
        return plainToInstance(ReadUserDto, foundUsers)
    }

    async getUsersByKey(key: string): Promise<ReadUserDto[]> {
        const regExp = new RegExp(key, 'i')
        const query: any = {
            isActive: true,
            $or: [{ name: regExp }, { email: regExp }]
        }
        const foundUsers = await this.userModel.find(query)
            .sort('-createdAt')
        return plainToInstance(ReadUserDto, foundUsers)
    }

    async getUsers(): Promise<ReadUserDto[]> {
        const foundUsers = await this.userModel.find({ isActive: true })
        return plainToInstance(ReadUserDto, foundUsers)
    }

}

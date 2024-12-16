import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BeneficiariesService } from './beneficiaries.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { ReadBeneficiaryDto } from './dto/read-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

@UseGuards(JwtAuthGuard)
@Controller('beneficiaries')
export class BeneficiariesController {

    constructor(
        private readonly beneficiariesService: BeneficiariesService,
    ) { }

    @Get('byKey/:key')
    async getBeneficiariesByKey(
        @Param('key') key: string,
    ): Promise<ReadBeneficiaryDto[]> {
        try {
            return await this.beneficiariesService.getBeneficiariesByKey(key);
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Get(':pageIndex/:pageSize')
    async getBeneficiariesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadBeneficiaryDto[]> {
        return this.beneficiariesService.getBeneficiariesByPage(pageIndex, pageSize);
    }

    @Get('count')
    async getCount(): Promise<number> {
        return await this.beneficiariesService.count();
    }

    @Get(':beneficiaryId')
    async getBeneficiaryById(
        @Param('beneficiaryId') beneficiaryId: string,
    ): Promise<ReadBeneficiaryDto> {
        try {
            return await this.beneficiariesService.getBeneficiaryById(beneficiaryId);
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Post()
    async create(
        @Body('beneficiary') beneficiary: CreateBeneficiaryDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadBeneficiaryDto> {
        try {
            const foundBeneficiary = await this.beneficiariesService.getBeneficiaryByDocument(beneficiary.document);
            if (foundBeneficiary) {
                throw new Error("Existe un beneficiario con el mismo N° de documento");
            } else {
                return await this.beneficiariesService.create(beneficiary, auth);
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Put(':beneficiaryId')
    async update(
        @Body('beneficiary') beneficiary: UpdateBeneficiaryDto,
        @Param('beneficiaryId') beneficiaryId: string,
    ): Promise<void> {
        try {
            const foundBeneficiary = await this.beneficiariesService.getBeneficiaryByDocument(beneficiary.document);
            if (foundBeneficiary && !foundBeneficiary._id.equals(beneficiaryId)) {
                throw new Error("Existe un beneficiario con el mismo N° de documento");
            } else {
                await this.beneficiariesService.update(beneficiary, beneficiaryId);
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST);
            }
        }
    }

}

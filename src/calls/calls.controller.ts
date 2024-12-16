import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CallsService } from './calls.service';
import { ReadCallDto } from './dto/read-call.dto';
import { CreateCallDto } from './dto/create-call.dto';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('calls')
export class CallsController {

    constructor(
        private readonly callsService: CallsService,
    ) { }

    @Get('todayCalls')
    async getTodayCalls(
        @AuthUser() auth: Auth,
    ): Promise<ReadCallDto[]> {
        return await this.callsService.getTodayCalls(auth.userId)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getCallsByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @AuthUser() auth: Auth,
    ): Promise<ReadCallDto[]> {
        return await this.callsService.getCallsByPage(pageIndex, pageSize, auth.userId)
    }

    @Post()
    async create(
        @Body('call') call: CreateCallDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadCallDto> {
        return this.callsService.create(call, auth)
    }

}

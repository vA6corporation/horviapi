import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReadPaymentDto } from './dto/read-payment.dto';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dt';
import { UpdatePaymentDto } from './dto/update-payment.dt';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';

@UseGuards(JwtAuthGuard)
@Controller('payments')
export class PaymentsController {

    constructor(
        private readonly paymentsService: PaymentsService,
    ) { }

    @Get('countPayments')
    async getCountPayments(): Promise<number> {
        return await this.paymentsService.getCountPayments()
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getPaymentsByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadPaymentDto[]> {
        return await this.paymentsService.getPaymentsByPage(pageIndex, pageSize)
    }

    @Post()
    async create(
        @Body('payment') payment: CreatePaymentDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadPaymentDto> {
        return await this.paymentsService.create(payment, auth)
    }

    @Put(':paymentId')
    async update(
        @Body('payment') payment: UpdatePaymentDto,
        @Param('paymentId') paymentId: string
    ): Promise<void> {
        await this.paymentsService.update(payment, paymentId)
    }
    
}

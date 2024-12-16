import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from '../auth/auth.decorator';
import { Auth } from '../auth/auth.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProvidersService } from '../providers/providers.service';
import { CreatePaymentOrderDto } from './dto/create-payment-order.dto';
import { ReadPaymentOrderDto } from './dto/read-payment-order.dto';
import { PaymentOrdersService } from './payment-orders.service';

@UseGuards(JwtAuthGuard)
@Controller('paymentOrders')
export class PaymentOrdersController {

    constructor(
        private readonly paymentOrdersService: PaymentOrdersService,
        private readonly providersService: ProvidersService,
    ) { }

    @Get('byId/:paymentOrderId')
    async getPaymentOrderById(
        @Param('paymentOrderId') paymentOrderId: string,
    ): Promise<ReadPaymentOrderDto> {
        return await this.paymentOrdersService.getPaymentOrderById(paymentOrderId)
    }

    @Get('countPaymentOrders')
    async getCountPaymentOrders(
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
    ): Promise<number> {
        return await this.paymentOrdersService.getCountPaymentOrders(startDate, endDate)
    }

    @Get('byRangeDate/:startDate/:endDate')
    async getPaymentOrdersByRangeDate(
        @Param('startDate') startDate: string,
        @Param('endDate') endDate: string,
    ): Promise<ReadPaymentOrderDto[]> {
        return await this.paymentOrdersService.getPaymentOrdersByRangeDate(startDate, endDate)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getPaymentOrdersByRangeDatePage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Param('startDate') startDate: string | undefined,
        @Param('endDate') endDate: string | undefined,
    ): Promise<ReadPaymentOrderDto[]> {
        return await this.paymentOrdersService.getPaymentOrdersByPage(
            pageIndex,
            pageSize,
            startDate,
            endDate,
        )
    }

    @Get('byKey')
    async getPaymentOrdrsByKey(
        @Query('key') key: string,
    ): Promise<ReadPaymentOrderDto[]> {
        const foundProviders = await this.providersService.getProvidersByKey(key)
        return await this.paymentOrdersService.getPaymentOrdersByKey(key, foundProviders)
    }

    @Post()
    async create(
        @Body('paymentOrder') paymentOrder: CreatePaymentOrderDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadPaymentOrderDto> {
        return await this.paymentOrdersService.create(paymentOrder, auth)
    }

    @Put(':paymentOrderId')
    async update(
        @Param('paymentOrderId') paymentOrderId: string,
        @Body('paymentOrder') paymentOrder: CreatePaymentOrderDto,
    ): Promise<void> {
        await this.paymentOrdersService.update(paymentOrder, paymentOrderId)
    }

    @Delete(':paymentOrderId')
    async delete(
        @Param('paymentOrderId') paymentOrderId: string,
    ): Promise<void> {
        await this.paymentOrdersService.delete(paymentOrderId)
    }

}

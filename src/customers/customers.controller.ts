import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@UseGuards(JwtAuthGuard)
@Controller('customers')
export class CustomersController {

    constructor(
        private readonly customersService: CustomersService,
    ) { }

    @Get('countCustomers')
    getCountCustomers() {
        return this.customersService.getCountCustomers()
    }

    @Get('byId/:customerId')
    getCustomerById(
        @Param('customerId') customerId: string,
    ) {
        return this.customersService.getCustomerById(customerId)
    }

    @Get('byKey/:key*')
    getCustomersByKey(
        @Param('key') key: string,
    ) {
        return this.customersService.getCustomersByKey(key)
    }

    @Get('byPage/:pageIndex/:pageSize')
    getByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ) {
        return this.customersService.getCustomersByPage(pageIndex, pageSize)
    }

    @Post()
    async create(
        @Body('customer') customer: CreateCustomerDto,
        @AuthUser() auth: Auth,
    ) {
        const foundCustomer = await this.customersService.getCustomerByDocument(customer.document)
        if (foundCustomer) {
            throw new HttpException('Existe un cliente con este mismo RUC', HttpStatus.BAD_REQUEST)
        } else {
            return this.customersService.create(customer, auth)
        }
    }

    @Put(':customerId')
    async update(
        @Body('customer') customer: CreateCustomerDto,
        @Param('customerId') customerId: string,
    ) {
        const foundCustomer = await this.customersService.getCustomerByDocument(customer.document)
        if (foundCustomer && foundCustomer._id !== customerId) {
            throw new HttpException('Existe un cliente con este mismo RUC', HttpStatus.BAD_REQUEST)
        } else {
            return this.customersService.update(customer, customerId)
        }
    }

}

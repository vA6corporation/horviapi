import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { ReadInvestmentDto } from './dto/read-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';
import { InvestmentsService } from './investments.service';

@UseGuards(JwtAuthGuard)
@Controller('investments')
export class InvestmentsController {

  constructor(
    private readonly investmentsService: InvestmentsService,
  ) { }

  @Get('byId/:investmentId')
  async getInvestmentById(
    @Param('investmentId') investmentId: string,
  ): Promise<ReadInvestmentDto> {
    return await this.investmentsService.getInvestmentById(investmentId);
  }

  @Get('byKey')
  async getPropertiesByKey(
    @Query('key') key: string,
  ): Promise<ReadInvestmentDto[]> {
    return await this.investmentsService.getPropertiesByKey(key);
  }

  @Get('byPage/:pageIndex/:pageSize')
  async getPropertiesByPage(
    @Param('pageIndex') pageIndex: number,
    @Param('pageSize') pageSize: number
  ): Promise<ReadInvestmentDto[]> {
    return await this.investmentsService.getPropertiesByPage(pageIndex, pageSize);
  }

  @Get('count')
  async getPropertiesCount(): Promise<number> {
    return await this.investmentsService.getPropertiesCount();
  }

  @Post()
  async create(
    @Body('investment') investment: CreateInvestmentDto,
    @AuthUser() auth: Auth,
  ): Promise<ReadInvestmentDto> {
    return await this.investmentsService.create(investment, auth);
  }

  @Put(':investmentId')
  async update(
    @Body('investment') investment: UpdateInvestmentDto,
    @Param('investmentId') investmentId: string,
  ): Promise<void> {
    await this.investmentsService.update(investment, investmentId);
  }

}

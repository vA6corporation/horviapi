import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateMovablePropertyDto } from './dto/create-movable-property.dto';
import { ReadMovablePropertyDto } from './dto/read-movable-property.dto';
import { UpdateMovablePropertyDto } from './dto/update-movable-property.dto';
import { MovablePropertiesService } from './movable-properties.service';

@UseGuards(JwtAuthGuard)
@Controller('movableProperties')
export class MovablePropertiesController {

  constructor(
    private readonly movablePropertiesService: MovablePropertiesService,
  ) { }

  @Get('byId/:movablePropertyId')
  async getMovablePropertyById(
    @Param('movablePropertyId') movablePropertyId: string,
  ): Promise<ReadMovablePropertyDto> {
    return await this.movablePropertiesService.getMovablePropertyById(movablePropertyId);
  }

  @Get('byKey')
  async getMovablePropertiesByKey(
    @Query('key') key: string,
  ): Promise<ReadMovablePropertyDto[]> {
    return await this.movablePropertiesService.getMovablePropertiesByKey(key);
  }

  @Get('byPage/:pageIndex/:pageSize')
  async getMovablePropertiesByPage(
    @Param('pageIndex') pageIndex: number,
    @Param('pageSize') pageSize: number
  ): Promise<ReadMovablePropertyDto[]> {
    return await this.movablePropertiesService.getMovablePropertiesByPage(pageIndex, pageSize);
  }

  @Get('count')
  async getMovablePropertiesCount(): Promise<number> {
    return await this.movablePropertiesService.getMovablePropertiesCount();
  }

  @Post()
  async create(
    @Body('movableProperty') movableProperty: CreateMovablePropertyDto,
    @AuthUser() auth: Auth,
  ): Promise<ReadMovablePropertyDto> {
    return await this.movablePropertiesService.create(movableProperty, auth);
  }

  @Put(':movablePropertyId')
  async update(
    @Body('movableProperty') movableProperty: UpdateMovablePropertyDto,
    @Param('movablePropertyId') movablePropertyId: string,
  ): Promise<void> {
    await this.movablePropertiesService.update(movableProperty, movablePropertyId);
  }

}

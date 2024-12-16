import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReadNotificationDto } from './dto/read-notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {

    constructor(
        private readonly notificationsService: NotificationsService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get('countNotifications')
    async getCountNotifications(
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('objectContract') objectContract: string | undefined,
        @Query('commercialId') commercialId: string | undefined,
    ): Promise<number> {
        return await this.notificationsService.getCountNotifications(startDate, endDate, objectContract, commercialId)
    }

    @UseGuards(JwtAuthGuard)
    @Get('byPage/:pageIndex/:pageSize')
    async getNotificationsByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('objectContract') objectContract: string | undefined,
        @Query('commercialId') commercialId: string | undefined,
    ): Promise<ReadNotificationDto[]> {
        return await this.notificationsService.getNotificationsByPage(pageIndex, pageSize, startDate, endDate, objectContract, commercialId)
    }

    @Get('processNotifications')
    getProcessNotifications() {
        this.notificationsService.processNotifications()
    }


}

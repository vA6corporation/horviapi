import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seace, SeaceSchema } from 'src/schemas/seace.schema';
import { Business, BusinessSchema } from 'src/schemas/business.schema';
import { Notification, NotificationSchema } from 'src/schemas/notification.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Notification.name, schema: NotificationSchema },
            { name: Seace.name, schema: SeaceSchema },
            { name: Business.name, schema: BusinessSchema },
        ]),
    ],
    providers: [NotificationsService],
    controllers: [NotificationsController]
})
export class NotificationsModule { }

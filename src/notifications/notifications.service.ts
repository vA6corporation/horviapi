import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Business, BusinessDocument } from 'src/schemas/business.schema';
import { Seace, SeaceDocument } from 'src/schemas/seace.schema';
import { ReadNotificationDto } from './dto/read-notification.dto';
import { Notification, NotificationDocument } from 'src/schemas/notification.schema';

@Injectable()
export class NotificationsService {

    constructor(
        @InjectModel(Notification.name)
        private readonly notificationModel: Model<NotificationDocument>,
        @InjectModel(Seace.name)
        private readonly seaceModel: Model<SeaceDocument>,
        @InjectModel(Business.name)
        private readonly businessModel: Model<BusinessDocument>,
    ) { }

    async getCountNotifications(
        startDate: string | undefined,
        endDate: string | undefined,
        objectContract: string | undefined,
        commercialId: string | undefined,
    ): Promise<number> {
        const queryObject: any = {}

        if (objectContract) {
            queryObject.objectContract = objectContract
        }
        
        if (commercialId) {
            queryObject.commercialId = commercialId
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            queryObject.adjudicatedAt = { $gte: sd, $lt: ed }
        }
        
        return this.notificationModel.countDocuments(queryObject)
    }

    async getNotificationsByPage(
        pageIndex: number,
        pageSize: number,
        startDate: string | undefined,
        endDate: string | undefined,
        objectContract: string | undefined,
        commercialId: string | undefined,
    ): Promise<ReadNotificationDto[]> {
        const queryObject: any = {}

        if (objectContract) {
            queryObject.objectContract = objectContract
        }

        if (commercialId) {
            queryObject.commercialId = commercialId
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            queryObject.adjudicatedAt = { $gte: sd, $lt: ed }
        }

        const foundNotifications = await this.notificationModel.find(queryObject)
            .populate(['business', 'seace', 'commercial'])
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-adjudicatedAt')
        return plainToInstance(ReadNotificationDto, foundNotifications.map(e => e.toObject()))
    }

    async processNotifications() {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        today.setDate(today.getDate() - 7)

        const foundBusinesses = await this.businessModel.find({}, { document: 1, commercialId: 1 })
        const foundSeaces = await this.seaceModel.find({ adjudicatedAt: { $gt: today }, winners: { $in: foundBusinesses.map(e => new RegExp(e.document)) } })
        for (const seace of foundSeaces) {
            const foundBusiness = foundBusinesses.find(business => {
                if (seace.winners.find(e => e.includes(business.document))) {
                    return business
                }
            })
            if (foundBusiness) {
                const foundNotification = await this.notificationModel.findOne({ seaceId: seace._id, businessId: foundBusiness._id })
                if (foundNotification === null) {
                    const createdNotification = new this.notificationModel({
                        publishedAt: seace.publishedAt,
                        adjudicatedAt: seace.adjudicatedAt,
                        objectContract: seace.objectContract,
                        businessId: foundBusiness._id,
                        commercialId: foundBusiness.commercialId,
                        seaceId: seace._id,
                    })
                    await createdNotification.save()
                }
            }
        }
    }

}

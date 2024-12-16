import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Business, BusinessDocument } from 'src/schemas/business.schema';
import { Model } from 'mongoose'
import { Partnership, PartnershipDocument } from 'src/schemas/partnership.schema';

@Injectable()
export class ToolsService {

    constructor(
        @InjectModel(Business.name)
        private readonly businessModel: Model<BusinessDocument>,
        @InjectModel(Partnership.name)
        private readonly partnershipModel: Model<PartnershipDocument>
    ) { }

    async importBusinesses(
        businesses: any[]
    ) {
        console.log(businesses)
        for (const business of businesses) {
            if (business.representativeName && business.representativeDocumentType && business.representativeDocument) {
                const createdBusiness = new this.partnershipModel({
                    ...business,
                })
                await createdBusiness.save()
            }
        }
    }

}

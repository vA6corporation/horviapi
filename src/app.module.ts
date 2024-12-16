require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BanksModule } from './banks/banks.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { BusinessesModule } from './businesses/businesses.module';
import { ChequesModule } from './cheques/cheques.module';
import { CommercialsModule } from './commercials/commercials.module';
import { DepositsModule } from './deposits/deposits.module';
import { FinanciersModule } from './financiers/financiers.module';
import { InsuranceNodesModule } from './insurance-nodes/insurance-nodes.module';
import { InsurancesModule } from './insurances/insurances.module';
import { InvestmentsModule } from './investments/investments.module';
import { MovablePropertiesModule } from './movable-properties/movable-properties.module';
import { NotificationsModule } from './notifications/notifications.module';
import { OperationsModule } from './operations/operations.module';
import { PartnershipsModule } from './partnerships/partnerships.module';
import { PaymentOrdersModule } from './payment-orders/payment-orders.module';
import { PaymentsModule } from './payments/payments.module';
import { PropertiesModule } from './properties/properties.module';
import { ProvidersModule } from './providers/providers.module';
import { Shareholder } from './schemas/shareholder.schema';
import { SeaceNodesModule } from './seace-nodes/seace-nodes.module';
import { SeacesModule } from './seaces/seaces.module';
import { ShareholdersModule } from './shareholders/shareholders.module';
import { SuretiesModule } from './sureties/sureties.module';
import { SuretyNodesModule } from './surety-nodes/surety-nodes.module';
import { TemplatesCrecerModule } from './templates-crecer/templates-crecer.module';
import { TemplatesInsurModule } from './templates-insur/templates-insur.module';
import { TemplatesMapfreModule } from './templates-mapfre/templates-mapfre.module';
import { TemplatesSecrexModule } from './templates-secrex/templates-secrex.module';
import { TemplatesModule } from './templates/templates.module';
import { TenderNodesModule } from './tender-nodes/tender-nodes.module';
import { TendersModule } from './tenders/tenders.module';
import { ToolsModule } from './tools/tools.module';
import { OperationSuretiesModule } from './operation-sureties/operation-sureties.module';
import { OperationSuretyNodesModule } from './operation-surety-nodes/operation-surety-nodes.module';
import { CallsModule } from './calls/calls.module';

let seaceString: string

if (process.env.NODE_ENV === 'production') {
    seaceString = process.env.DB_HOST || ''
} else {
    seaceString = process.env.DB_HOST_DEV || ''
}

@Module({
    imports: [
        MongooseModule.forRoot(seaceString),
        AuthModule,
        CommercialsModule,
        BusinessesModule,
        SeacesModule,
        PartnershipsModule,
        FinanciersModule,
        BeneficiariesModule,
        PaymentsModule,
        PropertiesModule,
        Shareholder,
        InvestmentsModule,
        MovablePropertiesModule,
        TendersModule,
        ShareholdersModule,
        TemplatesSecrexModule,
        TemplatesCrecerModule,
        SuretiesModule,
        TemplatesModule,
        InsurancesModule,
        InsuranceNodesModule,
        ToolsModule,
        NotificationsModule,
        TemplatesMapfreModule,
        SuretyNodesModule,
        TenderNodesModule,
        ChequesModule,
        DepositsModule,
        TemplatesInsurModule,
        PaymentOrdersModule,
        ProvidersModule,
        BanksModule,
        ToolsModule,
        SeaceNodesModule,
        OperationsModule,
        OperationSuretiesModule,
        OperationSuretyNodesModule,
        CallsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }

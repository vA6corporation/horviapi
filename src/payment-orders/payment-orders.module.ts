import { Module } from '@nestjs/common';
import { PaymentOrdersService } from './payment-orders.service';
import { PaymentOrdersController } from './payment-orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentOrder, PaymentOrderSchema } from '../schemas/payment-order.schema';
import { ProvidersModule } from '../providers/providers.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: PaymentOrder.name, schema: PaymentOrderSchema }
        ]),
        ProvidersModule
    ],
    providers: [PaymentOrdersService],
    controllers: [PaymentOrdersController]
})
export class PaymentOrdersModule { }

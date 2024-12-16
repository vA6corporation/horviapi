import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Template } from "./template.schema";
import { User } from "./user.schema";

export type GuaranteeDocument = Guarantee & Document;

@Schema({ timestamps: true })
export class Guarantee {

    @Prop({ type: String, required: true })
    guaranteeType!: string

    @Prop({ type: String, required: true })
    currencyCode!: string

    @Prop({ type: Number, required: true })
    amount!: number

    @Prop({ type: Date, required: true })
    startAt!: string

    @Prop({ type: Date, required: true })
    endAt!: string

    @Prop({ type: Number, required: true })
    daysLimit!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Template.name, required: true })
    templateId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const GuaranteeSchema = SchemaFactory.createForClass(Guarantee)

GuaranteeSchema.set('toObject', { virtuals: true })

GuaranteeSchema.virtual('guaranteeLabel').get(function () {
    switch (this.guaranteeType) {
        case 'GAOS':
            return 'SERIEDAD EN LA OFERTA'
        case 'GFWE':
            return 'GARANTIA DE BUENA EJECUCIÓN DE OBRA'
        case 'GAMF':
            return 'ADELANTO DE MATERIALES'
        case 'GADF':
            return 'ADELANTO DIRECTO'
        case 'GFCF':
            return 'FIEL CUMPLIMIENTO'
    }
})
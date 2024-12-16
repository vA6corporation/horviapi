import { Exclude, Expose, Transform, Type } from "class-transformer";
import { ReadCommercialDto } from "src/commercials/dto/read-commercial.dto";
import { ReadNotificationDto } from "src/notifications/dto/read-notification.dto";
import { ReadOperationDto } from "src/operations/dto/read-operation.dto";
import { SeaceFileType } from "src/schemas/seace-node.schema";

@Exclude()
export class ReadSeaceDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly idProcess!: string

    @Expose()
    readonly description!: string

    @Expose()
    readonly convener!: string

    @Expose()
    readonly publishedAt!: string

    @Expose()
    readonly offerAt!: string | null

    @Expose()
    readonly goodProAt!: string

    @Expose()
    readonly adjudicatedAt!: string

    @Expose()
    readonly objectContract!: string

    @Expose()
    readonly nomenclature!: string

    @Expose()
    readonly referenceValue!: number | null

    @Expose()
    readonly state!: string

    @Expose()
    readonly department!: string

    @Expose()
    readonly isOfferAtag!: string

    @Expose()
    readonly isBaseAtag!: boolean

    @Expose()
    @Type(() => ReadNotificationDto)
    readonly notification!: ReadNotificationDto

    @Expose()
    @Type(() => ReadOperationDto)
    readonly operation!: ReadOperationDto

    @Expose()
    @Type(() => ReadCommercialDto)
    readonly commercial!: ReadCommercialDto | null

    @Expose()
    readonly observations!: string

    @Expose()
    readonly color!: string

    @Expose()
    @Transform(({ obj }) => {
        let isCompleteDocument: boolean = false
        if (obj.nodes) {
            const seaceNodes = obj.nodes.map(e => e.fileType)
            if (Object.values(SeaceFileType).every(e => seaceNodes.includes(e))) {
                isCompleteDocument = true
            }
        }
        return isCompleteDocument
    })
    readonly isCompleteDocument!: boolean

    @Expose()
    @Transform(({ obj }) => {
        let isActive = false
        if (obj.offerAt) {
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            isActive = new Date(obj.offerEndAt).getTime() > today.getTime()
        }
        return isActive
    })
    readonly isActive!: boolean

    @Expose()
    readonly winners!: string[]

}
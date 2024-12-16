import { IsNotEmpty } from 'class-validator';

export class CreateGuaranteeDto {

    @IsNotEmpty()
    readonly advanceMaterialsO!: string
    
    @IsNotEmpty()
    readonly advanceMaterialsV!: string
    
    @IsNotEmpty()
    readonly advancePercent!: string
    
    @IsNotEmpty()
    readonly directAdvanceO!: string
    
    @IsNotEmpty()
    readonly directAdvanceV!: string
    
    @IsNotEmpty()
    readonly faithfulComplianceO!: string
    
    @IsNotEmpty()
    readonly faithfulComplianceV!: string
    
    @IsNotEmpty()
    readonly nameSuretyEntities!: string
    
    @IsNotEmpty()
    readonly tenderObjectContract!: string
}

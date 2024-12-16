import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

const numberRegex = /^\d+$/;

@ValidatorConstraint({ name: 'validateDocument', async: false })
export class ValidateDocument implements ValidatorConstraintInterface {

    validate(text: string | null, args: ValidationArguments) {
        const customer: any = args.object

        if (text && !numberRegex.test(text)) {
            return false
        }

        switch (customer[args.constraints[0] || 'documentType']) {
            case 'RUC':
                if (text) {
                    return text.length === 11
                } else {
                    return false
                }
            case 'DNI':
                if (text) {
                    return text.length === 8
                } else {
                    return true
                }
            case 'CE':
                if (text) {
                    return text.length === 9
                } else {
                    return true
                }
            default:
                if (text) {
                    return text.length === 11
                } else {
                    return false
                }
        }
    }

    defaultMessage(args: ValidationArguments) {
        const customer: any = args.object
        switch (customer[args.constraints[0] || 'documentType']) {
            case 'RUC':
                return 'El N° de documento debe tener 11 digitos numericos'
            case 'DNI':
                return 'El N° de documento debe tener 8 digitos numericos'
            case 'CE':
                return 'El N° de documento debe tener 9 digitos numericos'
            default:
                return 'El N° de documento debe tener 11 digitos numericos'
        }
    }
}
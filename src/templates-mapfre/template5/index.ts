import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, Header, BorderStyle, ImageRun } from 'docx';
import { styles } from './styles';
import { numbering } from './numbering';
import * as fs from 'fs';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class SuretyFinanceUnit {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }


    async create(): Promise<Document> {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()

        let imageBuffer: ArrayBuffer | string = ''
        let width = 0
        let height = 0

        if (this.business.urlSignature) {
            const arrayBuffer = await fetch(this.business.urlSignature).then(res => res.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
            const dimensions = sizeOf(buffer)
            const ratio = calculateAspectRatio(dimensions.width, dimensions.height, 200, 200)
            width = ratio.width
            height = ratio.height
            imageBuffer = arrayBuffer
        }

        return new Document({
            styles,
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(6),
                                right: convertMillimetersToTwip(14),
                                bottom: convertMillimetersToTwip(20),
                                left: convertMillimetersToTwip(12),
                                header: 500,
                            },
                            size: {
                                height: convertMillimetersToTwip(290.7),
                                width: convertMillimetersToTwip(210),
                            },
                        },
                    },
                    headers: {
                        default: new Header({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'UNIDAD DE CAUCIONES Y FIANZAS ',
                                            size: 24,
                                            color: '000000',
                                            font: 'Arial',
                                            bold: true,
                                        }),
                                    ],
                                    indent: {
                                        left: -400,
                                    },
                                }),
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            floating: {
                                                zIndex: 1,
                                                horizontalPosition: {
                                                    offset: 5350000,
                                                },
                                                verticalPosition: {
                                                    offset: 220000,
                                                },
                                            },
                                            data: fs.readFileSync('./src/templates-mapfre/template5/logo.png'),
                                            transformation: {
                                                width: 220,
                                                height: 36,
                                            },
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: {
                                        after: 45,
                                    },
                                }),
                            ],
                        }),
                    },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Las condiciones generales establecidas en el presente documento, son aplicables para la emisión y las renovaciones de las cartas fianza y/o pólizas de caución, en adelante denominadas simplemente “garantías”, que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'emita a pedido de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'quien suscribe el presente documento en señal de conformidad y aceptación.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'declara conocer que la información contenida en el formato que consta al reverso, así como toda información o documentación proporcionada a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'con motivo de la presente solicitud, tiene el carácter de declaración jurada; consecuentemente, su falsedad está sancionada por la ley.',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'se obliga a informar a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'respecto de cualquier modificación de la información que proporciona con motivo de la solicitud de garantías a que se refiere el presente documento. Asimismo, se obliga a proporcionar toda información que sea requerida por ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE. ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'Asimismo, ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'queda obligado, sin necesidad de ser requerido por ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'a informar a ésta de cualquier circunstancia o controversia que pudiera afectar, directa o indirectamente, el cumplimiento de las obligaciones respaldadas mediante las garantías emitidas. ',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'mediante el formato que consta al reverso, ha solicitado la emisión de garantías señalando los términos, condiciones, plazos, beneficiarios y demás características para la emisión de dichas garantías. ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'por su parte se reserva el derecho de aceptar, rechazar o modificar dichas condiciones y especificaciones.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'acepta y autoriza por este acto, que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'podrá prorrogar los plazos de vigencia de las garantías que hubiere emitido o emitir renovaciones, si así lo estimase por conveniente. En ese caso, las garantías que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'acepte prorrogar o renovar, se regirán por las mismas condiciones que contiene el presente documento, quedando ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'en obligación de asumir el costo de las primas correspondientes. La concesión de prórrogas o renovaciones conllevará la subsistencia de todas las contra garantías que respaldan la presente solicitud, las mismas que se mantendrán vigentes hasta y en tanto ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'no devuelva los originales de las garantías expedidas o presente la declaración expresa y por escrito de los beneficiarios respectivos liberando a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'de las obligaciones derivadas del honramiento de las garantías.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Es obligación de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'comunicar a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'la culminación de la ejecución del contrato garantizado, mediante la entrega oportuna del Acta de Conformidad de Prestación (bienes y servicios), o de la Resolución que aprueba la Liquidación final con saldo a favor del contratista o de la constancia de pago a favor de la Entidad (ejecución y consultoría de obras); caso contrario, las renovaciones emitidas con posterioridad a dichos eventos no serán anuladas. ',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'declara que las garantías que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'emita al amparo de esta solicitud, tendrán los alcances que se desprendan de sus respectivas condiciones y estipulaciones que literalmente se señalen en cada caso. ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'declara conocer y acepta expresamente que si las garantías solicitadas fueran extendidas con carácter solidario, sin beneficio de excusión, incondicionales, de ejecución automática y/o a simple requerimiento del beneficiario, el pago de las garantías por parte de ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'se efectuará de inmediato de acuerdo a las disposiciones legales sobre la materia. ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'declara conocer que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'no podrá suspender, retener o negarse al pago exigido por el beneficiario ni oponer excepción alguna frente al requerimiento de pago, por tanto libera a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'de toda responsabilidad por el pago que efectúe. ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'renuncia expresamente a exigir a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'cualquier responsabilidad derivada del pago, siendo entendido también que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'en su calidad de garante será ajeno a cualquier litigio o controversia que pudiera surgir entre el beneficiario y ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'con relación a la obligación principal o las garantías.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'renuncia expresamente a la facultad de interponer excepciones en contra de ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'aún en el caso de que no se le haya comunicado el honramiento, renunciando en consecuencia a los beneficios que señalan los artículos 1892° y 1894° del Código Civil.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Cuando se trate de garantías que estuvieran sujetas a algún tipo de reajuste en su monto, la liquidación practicada por ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'y el monto efectivamente pagado al beneficiario, no serán materia de observación, ni contradicción por parte de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'reconociendo y aceptando desde ya la procedencia de tal pago. ',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Para los fines de atender los pagos y ejecuciones de las garantías, ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'se obliga a proveer a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'de los fondos necesarios, a simple requerimiento de ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE. ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'En caso contrario, si ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'se viese obligado a honrar o pagar dichas garantías con recursos propios, ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'tendrá el derecho de exigir a ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'el integro de lo que hubiese pagado al beneficiario, quedando desde esa fecha automáticamente constituido en mora, sin necesidad de requerimiento previo ni comunicación alguna, generándose en consecuencia, la obligación a cargo de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'de pagar los intereses compensatorios y moratorios respectivos a las tasas más altas aplicables a las operaciones ajenas al sistema financiero, los que se generarán desde el día de pago hasta su reembolso y pago efectivo. ',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Todo gasto adicional por concepto de pago de las ejecuciones de las garantías, tributos presente o futuros y demás cargos que el presente contrato origine, así como los gastos, costas y costos en que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'se viera obligado a incurrir en razón de la cobranza extrajudicial o judicial de sus acreencias, serán de cuenta de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE. ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'Asimismo, tratándose de obras públicas, ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'autoriza expresamente a ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE. ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'en caso que se advierta riesgo de ejecución de las garantías otorgadas, a contratar Ingenieros Especialistas, quienes verificarán in situ el estado de las obras. Los gastos que estas acciones generen, serán asumidos en su totalidad por ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE. ',
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Si ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'hubiera suscrito o aceptado un título valor incompleto para representar la obligación que se genere en caso de honramiento de las garantías, en caso de ejecución de las mismas, ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'queda facultado a integrar dicho título valor con el importe total que se hubiera visto obligada a pagar y que no hubiera sido reembolsado por ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'consignando además las tasas de interés establecidas en el numeral 9. ',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'conforme a lo previsto por el artículo 1288° del Código Civil, autoriza expresa e irrevocablemente a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'a retener y/o compensar y/o aplicar a las obligaciones o contingencias derivadas de la emisión, renovación u honramiento de las garantías emitidas, todo depósito o suma de dinero o valores que a nombre de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'puedan encontrarse en poder de ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'o que estén destinados a serle abonados o entregados a ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE. ',
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'se obliga a pagar a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'por adelantado las primas según las tarifas que ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'tenga establecidas en la oportunidad de la emisión. Esta prima se generará igualmente en la oportunidad de cada una de las prórrogas o renovaciones, cuando así ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'convenga en concederlas. ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'se compromete a devolver a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'el original de las garantías otorgadas, una vez culminada la obligación garantizada o vencidas las mismas. Entre tanto, ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'continuará percibiendo las primas a que se hace referencia en la presente cláusula.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'autoriza expresamente a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'a proporcionar información relativa al incumplimiento de sus obligaciones, incluyendo centrales de riesgo, pudiendo ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'difundir dicha información sin ninguna responsabilidad para ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE. ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'Del mismo modo, ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'autoriza expresamente a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'a verificar, actualizar e intercambiar con otros acreedores o terceros, incluyendo centrales de riesgo, los datos e información que le proporcione ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'así como a obtener información sobre el patrimonio de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'y cumplimiento con sus pagos frente a terceros acreedores. ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'queda liberado de cualquier pago y de cualquier responsabilidad por la difusión y/o comercialización por terceros de dichas informaciones, quedando únicamente obligada a rectificar la información que haya proporcionado en caso que ésta no corresponda a la situación real de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE. ',
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'En caso que ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'actúe mediante representantes, ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'reconocerá a los que como tales hubieren sido comunicados por ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'no surtiendo ningún efecto frente a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'las revocatorias o modificaciones que pueda haber practicado ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'aún cuando se hayan inscrito en el respectivo Registro Público, si no comunica por escrito y bajo cargo, con la debida anticipación a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'de tal cambio, acompañando necesariamente los nuevos poderes. Conforme a las reglas de la buena fe, los actos practicados por los representantes registrados ante ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'tendrán validez en tanto, no comunique a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'el cambio o revocatoria. En casos de conflicto o duda de la representación legal de ',
                                }),
                                new TextRun({
                                    text: 'EL SOLICITANTE, ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'queda autorizado a suspender las emisiones o renovaciones de las garantías, en tanto no se precise a los legítimos representantes o las facultades con las que actúan éstos.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'renuncia al fuero de su domicilio y se somete a la competencia de los Jueces del Distrito Judicial de la ciudad en la que se suscribe el presente contrato, siendo válidos para todos los fines judiciales o extrajudiciales a los que pudiera dar lugar el presente contrato, los domicilios que se consignan en este documento.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'declara como su domicilio el indicado al pie del presente documento, lugar donde se tendrán por válidas las comunicaciones y notificaciones vinculadas al presente contrato. En caso de variación del domicilio, para que sea válida deberá haber sido comunicada notarialmente a ',
                                }),
                                new TextRun({
                                    text: 'MAPFRE ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'y haber sido señalada en el radio urbano de la Ciudad en la que se suscribe el presente.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: imageBuffer,
                                    transformation: {
                                        width,
                                        height,
                                    },
                                    floating: {
                                        zIndex: 1,
                                        behindDocument: true,
                                        horizontalPosition: {
                                            offset: 1000000,
                                        },
                                        verticalPosition: {
                                            offset: 8000000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            border: {
                                bottom: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                            },
                            children: [
                                new TextRun({
                                    text: `LIMA, ${day} de ${month} de ${year}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '(Ciudad, fecha)',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Identificación de EL SOLICITANTE',
                                    break: 1,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: '________________________________________________________________________________________________________',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Para persona jurídica: representante(s) legal(es) / para persona natural: cliente y cónyuge',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Nombre / Razón Social ${this.business.representativeName != null ? this.business.representativeName : '__________________________'}.`,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `D.N.I. / R.U.C. ${this.business.representativeDocument != null ? this.business.representativeDocument : '____________________'}. Estado Civil: ${this.business.representativeMaritalStatus}.`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Domicilio ${this.business.representativeAddressResidence} Código Postal _______________`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Nombre representante legal / cónyuge: ${this.business.representativeSpouseName != null ? this.business.representativeSpouseName : '___________________________'} D.N.I: ${this.business.representativeSpouseDocument != null ? this.business.representativeSpouseDocument : '_______________'}.`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Nombre representante legal:  ${this.business.representativeName != null ? this.business.representativeName : '__________________________'} D.N.I:  ${this.business.representativeDocument != null ? this.business.representativeDocument : '__________________'}.`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Poderes inscritos en: Asiento ______ Ficha / Partida: ${typeof this.business.electronicDeparture !== 'undefined' ? this.business.electronicDeparture : '________'} del Registro de Personas Jurídicas de ______.`,
                                    break: 1,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: '                        Firma(s) de EL SOLICITANTE                                                                                Firma(s) de MAPFRE',
                                    break: 9,
                                    bold: true,
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });
    }
}

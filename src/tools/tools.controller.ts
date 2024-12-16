import { Body, Controller, Get, Post } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { TendersService } from 'src/tenders/tenders.service';

@Controller('tools')
export class ToolsController {

    constructor(
        private readonly toolsService: ToolsService,
        private readonly tendersService: TendersService,
    ) { }

    @Get()
    fixTenderCodex() {
        this.tendersService.fixCodes()
        return 'reparando'
    }

    @Post('importBusinesses')
    importBusinesses(
        @Body('businesses') businesses: any
    ) {
        this.toolsService.importBusinesses(businesses)
    }

}

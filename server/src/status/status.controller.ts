import { Controller, Get } from '@nestjs/common'

@Controller('status')
export class StatusController {
  @Get()
  status() {
    return {
      status: 'up',
      timestamp: new Date(),
    }
  }
}

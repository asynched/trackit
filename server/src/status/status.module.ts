import { Module } from '@nestjs/common'
import { StatusController } from 'src/status/status.controller'

@Module({
  controllers: [StatusController],
})
export class StatusModule {}

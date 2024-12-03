import { Module } from '@nestjs/common'
import { MetricsController } from 'src/metrics/metrics.controller'
import { MetricsService } from 'src/metrics/metrics.service'

@Module({
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class MetricsModule {}

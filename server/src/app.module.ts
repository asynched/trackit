import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MetricsModule } from 'src/metrics/metrics.module'
import { StatusModule } from 'src/status/status.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StatusModule,
    MetricsModule,
  ],
})
export class AppModule {}

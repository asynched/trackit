import { Injectable, type OnModuleInit } from '@nestjs/common'
import { collectDefaultMetrics, register } from 'prom-client'

@Injectable()
export class MetricsService implements OnModuleInit {
  getMetrics() {
    return register.metrics()
  }

  onModuleInit() {
    register.setDefaultLabels({
      app: 'trackit.server',
    })

    collectDefaultMetrics({
      register,
    })
  }
}

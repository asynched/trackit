import { NestFactory } from '@nestjs/core'
import { AppModule } from 'src/app.module'

const app = await NestFactory.create(AppModule)

app.enableCors()

await app.listen(process.env.PORT ?? 3000)
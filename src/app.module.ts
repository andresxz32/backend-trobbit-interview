import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagenesModule } from './imagenes/imagenes.module';
import { GatosModule } from './gatos/gatos.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://andresxz32:Ccuhhe2IfG4VsmQa@cluster0.38tw3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    ImagenesModule,
    GatosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

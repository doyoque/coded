import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}

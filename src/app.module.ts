import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TestcrudModule } from './testcrud/testcrud.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule, TestcrudModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}

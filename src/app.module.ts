import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './board/board.controller';
import { BoardModule } from './board/board.module';
import { BoardService } from './board/board.service';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardModule,
  ],
  providers: [BoardService],
  controllers: [BoardController],
  // 실질적으로 사용되는 BoardService, BoardController를 넣어줘야한다.
  // imports 에 BoardModule 만 넣어준다고 사용이 안된다.
})
export class AppModule { }


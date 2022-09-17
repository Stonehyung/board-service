import { Module } from '@nestjs/common';
import { BoardController } from './board/board.controller';
import { BoardModule } from './board/board.module';
import { BoardService } from './board/board.service';

@Module({
  imports: [BoardModule],
  providers: [BoardService],
  controllers: [BoardController],

})
export class AppModule { }


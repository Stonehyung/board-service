import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './board.controller';
import { BoardEntitiy } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardService } from './board.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [BoardEntitiy]),//다른 곳에서 사용가능하도록 설정(엔티티명 적기)

  ],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule { }

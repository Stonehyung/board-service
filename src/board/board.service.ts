import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardService {
    private boards: Board[] = []; // 원래는 db에 저장해야하지만 지금은
    // boards 라는 배열안에 값을 저장하도록 하겠다.
    // board.model.ts 에서 만든 Board 타입을 배열형태로 [] 표시하고
    // Board에 정의된 타입으로 받겠다는 타입스크립트 문법


    getAllBoard(): Board[] {
        return this.boards;
    }
}

import { ConsoleLogger, Injectable } from '@nestjs/common';
import { BoardStatus } from './board.status'
import { v1 as uuid } from 'uuid'
@Injectable()
export class BoardService {















    /*
       getAllBoard(): Board[] {
        //console.log(this.boards);
        return this.boards;
    }
    createBoard(createboarddto) { //타이틀과 설명으로 이루어진 게시물 생성
        const title = createboarddto.title
        const description = createboarddto.description
        const newboard: Board = { //게시물 생성
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,

        }
        //console.log(newboard);
        this.boards.push(newboard); //생성된 게시물을 boards(DB)에 push를 이용하여 저장
        return newboard;  // 이 게시물에 어떠한정보가 들어있는지 리턴을 통해 확인해보자
    }
    getBoardById(postid: string): Board {
        console.log(postid)
        console.log(this.boards.find((board) => board.id === postid));
        return

    }
    updateBoardById(updateid: string, updateStatus: BoardStatus): Board {
        const board = this.getBoardById(updateid);
        board.status = updateStatus;
        return board;
    }


    deleteBoardById(deleteid: string): void {
        this.boards = this.boards.filter((board) => board.id !== deleteid);
    }
    */
}

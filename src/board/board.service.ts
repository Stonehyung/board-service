import { ConsoleLogger, Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status'
import { v1 as uuid } from 'uuid'
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardEntitiy } from './board.entity';
import { create } from 'domain';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntitiy)//엔티티명 적어주기
        private boardres: BoardRepository,
    ) { } // Repository Injection을 해준다. 
    //이를 통해 BoardRepository를 변수 boardres를 이용해서 사용이 가능하다.


    async getAllBoard(): Promise<BoardEntitiy[]> {
        return this.boardres.find();
    }



    async createBoard(board: CreateBoardDto): Promise<BoardEntitiy> {

        const { title, description } = board;

        const createboard = this.boardres.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
        })

        await this.boardres.save(createboard);
        return createboard;


    }

    async getBoardById(dbid: number): Promise<BoardEntitiy> {
        const found = await this.boardres.findOne(dbid);

        if (!found) {
            throw new NotFoundException(`${dbid}를 찾을 수 없습니다.`)
        }
        return found;
    }

    async deleteBoard(deleteId: number): Promise<void> {
        const result = await this.boardres.delete(deleteId);
        if (result.affected === 0) {
            throw new NotFoundException(`삭제하고자 하는 ${deleteId}가 존재하지 않습니다.`)
        }
        console.log(`정상적으로 삭제되었습니다.`)
        console.log('result', result);
    }

    async updateBoardStatus(updateId: number, updateStatus: BoardStatus): Promise<BoardEntitiy> {
        const board = await this.getBoardById(updateId);
        board.status = updateStatus;
        await this.boardres.save(board);
        return board;
    }














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

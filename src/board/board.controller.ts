import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { targetModulesByContainer } from '@nestjs/core/router/router-module';
import { BoardStatus } from './board.status';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardEntitiy } from './board.entity';
import { resourceLimits } from 'worker_threads';

@Controller('board')
export class BoardController {
    constructor(private boardsService: BoardService) { }


    @Get()
    getAllBoard(): Promise<BoardEntitiy[]> {
        return this.boardsService.getAllBoard();
    }


    @Post()
    createBoard(@Body() board: CreateBoardDto): Promise<BoardEntitiy> {
        return this.boardsService.createBoard(board);
    }


    @Get('/:id')
    getBoardByID(@Param('id') dbid: number): Promise<BoardEntitiy> {
        return this.boardsService.getBoardById(dbid);

    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) deleteId): Promise<void> {

        return this.boardsService.deleteBoard(deleteId);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) updateId: number,
        @Body('status') updateStatus: BoardStatus
    ) {
        return this.boardsService.updateBoardStatus(updateId, updateStatus)
    }

    /*
    @Get('/allBoard')
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoard()
    }
    @Post('/create')
    clientCreateBoard(
        @Body() createboarddto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createboarddto)
    }
    @Get('/:id')
    searchBoardById(
        @Param('id') postid: string) {
        return this.boardsService.getBoardById(postid)
    }
    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') updateid: string,
        @Body('status') updateStauts: BoardStatus,
    ) {
        return this.boardsService.updateBoardById(updateid, updateStauts);
    }



    @Delete('/:id')
    deleteBoard(@Param('id') deleteid: string): void {
        this.boardsService.deleteBoardById(deleteid);
    }
    */
}

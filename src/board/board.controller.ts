import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { targetModulesByContainer } from '@nestjs/core/router/router-module';
import { BoardStatus } from './board.status';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
    constructor(private boardsService: BoardService) { }







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

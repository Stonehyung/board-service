import { EntityRepository, Repository } from "typeorm";
import { BoardEntitiy } from "./board.entity";
import { BoardStatus } from "./board.status";
import { CreateBoardDto } from "./dto/create-board.dto";


@EntityRepository(BoardEntitiy) //이 클래스가 BoardEntitiy를 컨트롤해줄수있는 저장소임을 선언해준다.
export class BoardRepository extends Repository<BoardEntitiy>{

    async createBoardEntitiy(board: CreateBoardDto): Promise<BoardEntitiy> {
        const { title, description } = board;

        const createboard = this.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
        })

        await this.save(createboard);
        return createboard;

    }

} 
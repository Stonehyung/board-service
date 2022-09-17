import { EntityRepository, Repository } from "typeorm";
import { BoardEntitiy } from "./board.entity";



@EntityRepository(BoardEntitiy) //이 클래스가 BoardEntitiy를 컨트롤해줄수있는 저장소임을 선언해준다.
export class BoardRepository extends Repository<BoardEntitiy>{


}
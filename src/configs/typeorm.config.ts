import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { BoardEntitiy } from "src/board/board.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'board',
    entities: [
        BoardEntitiy
    ],
    synchronize: true

}
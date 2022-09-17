import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatus } from './board.status';

@Entity() // Create Table Board 부분이다.
export class BoardEntitiy extends BaseEntity {
    @PrimaryGeneratedColumn() //기본 키
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;

}


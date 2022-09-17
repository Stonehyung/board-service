// 게시글의 모델을 모두 정의해 줬다.
export interface Board {
    id: string,
    title: string,
    description: string,
    status: BoardStatus;
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
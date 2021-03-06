import { IPost } from '../interfaces/blog.interface';

export class Post implements IPost {
    constructor(
        public id: number,
        public title: string,
        public text: string,
        public author: string,
        public date?: Date
    ) { }
}
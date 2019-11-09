import {IPost} from '../interface/post.interface';

export class Post implements IPost {
  constructor(
    public id: number,
    public title: string,
    public posted: string,
    public content: string
  ) {}
}

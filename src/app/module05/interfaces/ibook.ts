export interface IBook {
  BookID: string;
  BookName: string;
  Price: number;
  Image: string;
}

export class Book {
  constructor(
    public BookID: string = '',
    public BookName: string = '',
    public Price: number = 0,
    public Image: string = ''
  ) {}
}

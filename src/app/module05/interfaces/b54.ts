export interface IB54 {
  isbn: string;
  title: string;
  subtitle: string;
  price: number;
  author: string;
  published: string;
  inventory: number;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

export class CB54 {
  constructor(
    public isbn: string = '',
    public title: string = '',
    public subtitle: string = '',
    public price: number = 0,
    public author: string = '',
    public published: string = '',
    public inventory: number = 0,
    public publisher: string = '',
    public pages: number = 0,
    public description: string = '',
    public website: string = ''
  ) {}
}

export class Section {
  readonly id: number;
  title: string;
  description: string;
  imgUrl: string;
  routeUrl: string;

  constructor(_id: number) {
    this.id = _id;
  }
}

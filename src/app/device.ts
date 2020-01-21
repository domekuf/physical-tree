import { Board } from './board';

export class Device {
  constructor(
    name: string,
    public key: number
  ){
    this.board = new Board(name, key as unknown as string);
  }
  public board: Board;
  public cpri_device: Device[] = [];
}
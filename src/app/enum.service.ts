import { Injectable } from '@angular/core';

@Injectable()
export class EnumService {

  d: number = (new Date).getTime();
  constructor() { }

  public next(): number  {
    return this.d++;
  }

}
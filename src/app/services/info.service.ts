import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() {}

  name: string = 'ahmed hamdy';
  title: string = 'software engineer';
  github: string = 'https://github.com/ahmed-hm';
  linkedin: string = 'https://www.linkedin.com/in/ahmd-hm';
}

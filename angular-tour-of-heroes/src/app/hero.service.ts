import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}return HEROES;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}


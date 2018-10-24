import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetch heroes');
    return this.http.get<Hero[]>(this.heroUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetch hero ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero" id="secondDiv">
          <h2>{{hero.name}}</h2>
          <p>{{hero.description}}</p>
          <div><label>ID: </label>{{hero.id}}</div>
          <div>
              <label>name: </label>
              <input [(ngModel)]="hero.name" placeholder="name"/>
          </div>
    </div>      
    `
})

export class HeroDetailComponent{

    @Input() hero: Hero;

}
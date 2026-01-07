import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Third } from './third/third';
import { ButtEx } from './butt-ex/butt-ex';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,First,Second,Third,ButtEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngCiCd');
}

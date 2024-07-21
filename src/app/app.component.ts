import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {
    const body: HTMLElement = document.querySelector('body') as HTMLElement;
    const toggle: HTMLElement = document.querySelector('#button') as HTMLElement;
    

    toggle.addEventListener('click', () => {
      body.classList.toggle('dark');
    });

      }
  title = 'MyProject';
}

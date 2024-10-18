import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  duasTagsH1: string[] = ["Guizão","Lucas"];

  addItems() {
    this.duasTagsH1.push("Léo não é incrível");
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Convertisseur } from "./features/models/convertisseur/convertisseur";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Convertisseur],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

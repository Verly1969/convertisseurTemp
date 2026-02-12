import { Component } from '@angular/core';
import { ConvertPipe } from '../../shared/pipes/convert-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertisseur',
  imports: [ConvertPipe, FormsModule],
  templateUrl: './convertisseur.html',
  styleUrl: './convertisseur.css',
})
export class Convertisseur {
  donnee: string = "0";
  temp1: "C" | "F" = "C";
  temp2: "C" | "F" = "F";
}

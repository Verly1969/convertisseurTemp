import { Pipe, PipeTransform } from '@angular/core';
import { Convertisseur } from '../../models/convertisseur/convertisseur';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, temp1: string, temp2: string): string {

    if(temp1 === "C" && temp2 === "F"){
      // de Celsius en Fahreneit
      let fahr = parseFloat(value)
      fahr = (fahr * 1.8) + 32;
      return fahr.toFixed(1).toString() + " °F";

    } else if(temp1 === "F" && temp2 === "C"){
      // de Fahreneit en Celsius
      let cel = parseFloat(value);
      cel = (cel - 32) / 1.8;
      return cel.toFixed(1).toString() + " °C";

    } else {
      return value + " °" + temp1;
    }
    
  }

  

}

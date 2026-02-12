import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToFahr',
})
export class ConvertToFahrPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return "";
  }

}

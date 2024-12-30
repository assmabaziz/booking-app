import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seperator'
})
export class SeperatorPipe implements PipeTransform {
  transform(value: any[]): any[] {
    if (!value || value.length <= 2) {
      return value;
    }
    return value.slice(0, 2);
  }

}

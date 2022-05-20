import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: Array<any> | null, field: string, value: string): any[] {

    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }


    return items.filter(str => {
      return str[field].toLowerCase().includes(value.toLowerCase());
    });
  }

}

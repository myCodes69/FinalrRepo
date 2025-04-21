import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modify'
})
export class ModifyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    return value+6
    
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  public transform(data: any[], name: string): any[] {
    if (name == undefined || data == undefined)
       return null;
    let result: any[] = data;
    
     result =  result.sort((a, b) => a[name].localeCompare(b[name]))
     
    return result;
  }

 
}
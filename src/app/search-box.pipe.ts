import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: any, searchText: string) {
    return data.filter((item: any) => item.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
  }
}



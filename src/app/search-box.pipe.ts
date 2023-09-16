import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: any, searchText: any): any {
    function getData(item: any, key: any) {
      if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        return data[key]
      }
    }
    return data.filter(getData);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(itemList:any[], searchText:string,keys:string[]): any[] {
    debugger;
    if(searchText != '') {
      const searchVal= searchText.toLocaleLowerCase()
      // return itemList.filter(item=> {
      //   return item.toString().toLowerCase().includes(searchVal) // ini pokoknya yang ada mengandung karakter string search query
      // });
      // return itemList.filter(item=> {
      //   return item.toString().toLowerCase().startsWith(searchVal) // ini yang mulai dengan karakter string search query
      // });
       return itemList.filter(item=> { // buat array objek
        return keys.some(key=> {
          const value = item[key]

          if(typeof value === 'boolean') {
            return value.toString().toLowerCase() === searchVal
          }
          return value?.toString().toLowerCase().includes(searchVal)
        })
        // return item.toString().toLowerCase().startsWith(searchVal) // ini yang mulai dengan karakter string search query
      });
    } else {
      return itemList;
    }
  }

}

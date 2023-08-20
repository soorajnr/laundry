import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Add properties you want to search in here
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.id.toString().toLowerCase().includes(searchText)
      );
    });
  }
}

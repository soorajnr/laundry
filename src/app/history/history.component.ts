import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryItems } from '../home/histotry-model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  searchText: string = '';
  fromDate: Date | null = null; // Change to Date type
  toDate: Date | null = null; // Change to Date type
  filteredItems: HistoryItems[] = [];
  //historyForm: FormGroup;

  historyForm = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });
  constructor(private formBuilder: FormBuilder) {
      // this.historyForm = this.formBuilder.group({
      //     startDate: null,
      //     endDate: null,
      // });
  }
  ngOnInit(){}
  items: HistoryItems[] = [
    {
      id: 1251,
      name: "Washing machine repair 1",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      fromDate: new Date('2023-08-03'), 
      toDate: new Date('2023-08-05'),
      machinemodel: "Wirlpool"
    },
    {
      id: 1252,
      name: "Washing machine repair 2",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      fromDate: new Date('2023-05-08'), 
      toDate: new Date('2023-06-08'),
      machinemodel: "Wirlpool"
    },
    {
      id: 1253,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      fromDate: new Date('2023-05-08'), 
      toDate: new Date('2023-06-08'),
      machinemodel: "Wirlpool"
    },
    {
      id: 1254,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      fromDate: new Date('2023-05-08'), 
      toDate: new Date('2023-06-08'),
      machinemodel: "Wirlpool"
    },
    {
      id: 1255,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      fromDate: new Date('2023-05-08'), 
      toDate: new Date('2023-06-08'),
      machinemodel: "Wirlpool"
    },
    {
      id: 1256,
      name: "Washing machine repair",
      task: "onprocess",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      fromDate: new Date('2023-05-08'), 
      toDate: new Date('2023-06-08'),
      machinemodel: "Wirlpool"
    },
    {
      id: 1257,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      fromDate: new Date('2023-05-08'), 
      toDate: new Date('2023-06-08'),
      machinemodel: "Wirlpool"
    },
  ];

  // navigateToDetailPage(id: number) {
  //   const selectedItem = this.items.find(item => item.id === id);
  //   this.router.navigate(['/detail', id], { state: { item: selectedItem } });
  // }

  isWithinDateRange(item:any): boolean {
    const startDate = this.historyForm.value.startDate;
    const endDate = this.historyForm.value.endDate;

    if (startDate && endDate) {
        const itemDate = item.fromDate;

        return itemDate >= startDate && itemDate <= endDate;
    }

    return true;
}

clearAllFilters() {
  this.searchText = ''; // Clear the search text
  this.historyForm.controls.startDate.setValue(null);
  this.historyForm.controls.endDate.setValue(null);
  this.filteredItems = this.items.filter(item => item.task === 'Completed');
}
}

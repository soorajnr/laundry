import { Component } from '@angular/core';
import { ListtingItems } from '../home/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assigned-task',
  templateUrl: './assigned-task.component.html',
  styleUrls: ['./assigned-task.component.scss']
})
export class AssignedTaskComponent {
  searchText: string = '';
  constructor(private router: Router) {}
  items: ListtingItems[] = [
    {
      id: 1251,
      name: "Washing machine repair 1",
      task: "assigned",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1252,
      name: "Washing machine repair 2",
      task: "assigned",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1253,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1254,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1255,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1256,
      name: "Washing machine repair",
      task: "onprocess",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1257,
      name: "Washing machine repair",
      task: "onprocess",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
  ];

  navigateToDetailPage(id: number) {
    const selectedItem = this.items.find(item => item.id === id);
    this.router.navigate(['/detail', id], { state: { item: selectedItem } });
  }
}

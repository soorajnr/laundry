import { Component } from '@angular/core';
import { ListtingItems } from './model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent {


  
  items: ListtingItems[] = [
    {
      id: 1256,
      name: "Washing machine repair",
      task: "assigned",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1258,
      name: "Washing machine repair",
      task: "assigned",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1258,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1258,
      name: "Washing machine repair",
      task: "Completed",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1258,
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
      task: "onprocess",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
    {
      id: 1252,
      name: "Washing machine repair",
      task: "onprocess",
      phtoto:"https://akam.cdn.jdmagicbox.com/images/xperts_t/t_wm.png",
      place: "thrissur",
      date: "11-07-2023",
      machinemodel: "Wirlpool"
    },
  ];

  
}

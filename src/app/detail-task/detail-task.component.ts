import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListtingItems } from '../home/model';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.scss']
})
export class DetailTaskComponent {
  itemId!: number;
  selectedItem!: ListtingItems;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedItem = history.state.item;
  }
}

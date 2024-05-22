import { Component, Input, OnInit, Output } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { Inventory } from '../../model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit {
  @Input() list: Inventory[]=[];
  @Output() onAddItem = new Subject<Inventory>();

// constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    console.log("Inventory List: ", this.list);
  }

  addItem(index: number){
    this.onAddItem.next(this.list[index]);
    console.log(`Inventory List[ ${index} ] selected`);
  }
}

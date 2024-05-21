import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Inventory } from '../../model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit {
  @Input()
  list: Inventory[]=[];
  itemForm!: FormGroup;


  ngOnInit(): void {
    console.log("Inventory List: ", this.list);
  }

  selected(index: number){
    console.log(`Inventory List[ ${index} ] selected`);

  }
}

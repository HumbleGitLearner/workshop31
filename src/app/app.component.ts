import { Component } from '@angular/core';
import { Inventory } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workshop31';
  myInventory: Inventory[]=[];

formSubmit(item: Inventory){
  console.log('Inventory submitted:', item);
  this.myInventory.push(item);
  }
}

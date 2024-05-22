import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Inventory } from '../../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cart = new Map<Inventory, number>();
  @Output() removeItem= new Subject<Inventory>();
  
  remove(item:Inventory){
    this.cart.delete(item)
    this.removeItem.next(item);
    console.log(`Item ${item.name} removed.`)
  // console.log('Item '+item.name+' removed.')
  }


}

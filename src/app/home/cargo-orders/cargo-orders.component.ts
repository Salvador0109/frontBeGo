import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { OrderComponent } from '../../../components/order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cargo-orders',
  standalone: true,
  imports: [CommonModule ,HeaderComponent, OrderComponent],
  templateUrl: './cargo-orders.component.html',
  styleUrl: './cargo-orders.component.scss'
})
export class CargoOrdersComponent{

  @Input() number_order!:string;
  @Input() type!:string;
  
  @Output() emitNumberOrder = new EventEmitter<string>();
  @Output() emitType = new EventEmitter<string>();

  
  public numberOrder(){
    this.emitNumberOrder.emit(this.number_order);
    this.emitType.emit(this.type);

  }
}



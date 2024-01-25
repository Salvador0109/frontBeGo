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
  @Input() destinationPickup!:string;
  @Input() destinationDropoff!:string;
  @Input() start_date!:string;
  @Input() end_date!:string;
  @Output() resumeClicked = new EventEmitter<void>();

  onResumeClicked() {
    this.resumeClicked.emit();
  }

}


import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { OrderComponent } from '../../../components/order/order.component';

@Component({
  selector: 'app-cargo-orders',
  standalone: true,
  imports: [HeaderComponent, OrderComponent],
  templateUrl: './cargo-orders.component.html',
  styleUrl: './cargo-orders.component.scss'
})
export class CargoOrdersComponent {
  title = "Cargo Orders";
}

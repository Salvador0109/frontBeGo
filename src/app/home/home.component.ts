import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { HeaderComponent } from '../../components/header/header.component';
import { CargoOrdersComponent } from './cargo-orders/cargo-orders.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CargoOrdersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

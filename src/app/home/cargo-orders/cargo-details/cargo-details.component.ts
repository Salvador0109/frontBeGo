import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { OrderDetailComponent } from '../../../../components/order-detail/order-detail.component';
import { TrackCardComponent } from '../../../../components/track-card/track-card.component';

@Component({
  selector: 'app-cargo-details',
  standalone: true,
  imports: [HeaderComponent, OrderDetailComponent, TrackCardComponent],
  templateUrl: './cargo-details.component.html',
  styleUrl: './cargo-details.component.scss'
})
export class CargoDetailsComponent {
  title = "Cargo details";
  openBnd!:boolean;
  open(){
    this.openBnd = !this.openBnd;
  }
}

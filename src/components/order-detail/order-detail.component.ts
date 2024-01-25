import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent {
  @Input() number_order!:string;
  @Input() number_reference!:string;
  @Input() destination_pickup!:string;
  @Input() destination_dropoff!:string;
  @Input() pickup_status!:string;
  @Input() dropoff_status!:string;
  @Input() pickup_status_class!:string;
  @Input() dropoff_status_class!:string;
}

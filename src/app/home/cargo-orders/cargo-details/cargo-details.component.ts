import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { OrderDetailComponent } from '../../../../components/order-detail/order-detail.component';
import { TrackCardComponent } from '../../../../components/track-card/track-card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cargo-details',
  standalone: true,
  providers:[DatePipe],
  imports: [HeaderComponent, OrderDetailComponent, TrackCardComponent],
  templateUrl: './cargo-details.component.html',
  styleUrl: './cargo-details.component.scss'
})
export class CargoDetailsComponent implements OnInit {
  title = "Cargo details";
  startDateformat:any;
  startDateformatHour:any;
  start:any;
  constructor(private datePipe : DatePipe ){}

  openBnd!:boolean;
  @Input() number_order!:string;
  @Input() numberReference!:string;
  @Input() destinationPickup!:string;
  @Input() destinationDropoff!:string;
  @Input() pickupStatus!:string;
  @Input() dropoffStatus!:string;
  @Input() pickupStatusClass!:string;
  @Input() dropoffStatusClass!:string;

  @Input() pickupStartDate!:string;
  @Input() pickupPhone!:string;
  @Input() pickupEmail!:string;

  open(){
    this.openBnd = !this.openBnd;
  }

  
ngOnInit() {
  if (!isNaN(Number(this.pickupStartDate))) {
    this.start = new Date(Number(this.pickupStartDate));
    this.startDateformat = this.datePipe.transform(this.start, 'yyyy-MM-dd', 'UTC');
    this.startDateformatHour = this.datePipe.transform(this.start, 'HH:mm', 'UTC');
  }
}
}

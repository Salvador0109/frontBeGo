import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  providers:[DatePipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  startDateformat:any;
  startDateformatHour:any;
  start:any;

  endDateformat:any;
  endDateformatHour:any;
  end:any;

  constructor(private datePipe : DatePipe ){}

  @Input() numberOrder!:string;
  @Input() type!:string;
  @Input() destinationPickup!:string;
  @Input() destinationDropoff!:string;
  @Input() start_date!:string;
  @Input() end_date!:string;
  @Output() resumeClicked = new EventEmitter<void>();

ngOnInit() {
  if (!isNaN(Number(this.start_date))) {
    this.start = new Date(Number(this.start_date));
    this.startDateformat = this.datePipe.transform(this.start, 'yyyy-MM-dd', 'UTC');
    this.startDateformatHour = this.datePipe.transform(this.start, 'HH:mm', 'UTC');
  }

  if (!isNaN(Number(this.end_date))) {
    this.end = new Date(Number(this.end_date));
    this.endDateformat = this.datePipe.transform(this.end, 'yyyy-MM-dd', 'UTC');
    this.endDateformatHour = this.datePipe.transform(this.end, 'HH:mm', 'UTC');
  }


}

onResumeClick(){
  this.resumeClicked.emit();
}


}

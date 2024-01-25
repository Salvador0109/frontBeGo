import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  @Input() numberOrder!:string;
  @Input() type!:string;

}

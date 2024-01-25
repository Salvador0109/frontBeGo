import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { HeaderComponent } from '../../components/header/header.component';
import { CargoOrdersComponent } from './cargo-orders/cargo-orders.component';
import { CargoDetailsComponent } from './cargo-orders/cargo-details/cargo-details.component';
import { ApiService } from '../service/api.service';

export interface data{
  orderNumber:string;
  type:string;
  destinationPickup:string;
  destinationDropoff:string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CargoOrdersComponent, CargoDetailsComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public orderNumber: string[] = [];
  public type       : string[] = [];
  public title = "Cargo Orders";
  public data: data[] = [];

  constructor(
    private api: ApiService
  ){}

  ngOnInit(): void {
    this.listDataUpcoming();
    this.listDataOrders();
  }

  public listDataUpcoming(){
    this.api.getDataUpcoming().subscribe({
      next:(result)=>{
        console.log("Result upcoming...",result);
        for(let i = 0; i<result.result.length; i++){
          // this.obData = {
          //   orderNumber: result.result.map((order: { order_number: any; }) => order.order_number),
          //   type: result.result.map((type: { type: any; }) => type.type)
          // }
          this.data = result.result.map((order: { order_number: any; type: any; destinatioPickup: any; destinationDropoff:any }) => {
            return {
              orderNumber: order.order_number,
              type: order.type,
              // destinatioPickup: order.
            };
          });

          // this.orderNumber= result.result.map((order: { order_number: any; }) => order.order_number);

        }

      }, error:(error)=>{
        console.log("Ocurrio un error...", error);
      }
    })
  }


  public listDataOrders(){
    this.api.getDataOrders().subscribe({
      next:(result) =>{
        console.log("Result orders..." ,result);
      }, error:(error)=>{
        console.log("Ocurrio un error... ", error);
      }
    })
  }
  
}

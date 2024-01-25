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
  start_date:string;
  end_date:string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CargoOrdersComponent, CargoDetailsComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // public orderNumber: string[] = [];
  // public type       : string[] = [];
  public title = "Cargo Orders";
  public data: data[] = [];
  public bndDetail!:boolean;
  public bndBack:boolean = true;
  constructor(
    private api: ApiService
  ){}

  ngOnInit(): void {
    this.listDataUpcoming();
  }
  public resumeClickedHome(){
    this.bndDetail = true;
    this.changetitle();
  }
  public onBack(){
    this.bndDetail = false;
    this.changetitle();

  }
  public changetitle(){
    if(this.bndDetail){
      this.title="Cargo Details"
    } else {
      this.title="Cargo Orders"
    }
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
          this.data = result.result.map((order: { order_number: any; type: any; destinations: any; start_date: any; end_date:any}) => {
            return {
              orderNumber: order.order_number,
              type: order.type,
              destinationPickup: order.destinations[0].address,
              destinationDropoff: order.destinations[1].address,
              start_date: order.start_date,
              end_date: order.end_date
            };
          });



        }
        console.log("this.data..", this.data);
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

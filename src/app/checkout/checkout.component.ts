import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventsService } from '../../../service/events.service';
import { map, switchMap } from 'rxjs';
import { PaymentComponent } from './payment/payment.component';
import { DeliveryComponent } from './delivery/delivery.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule, CommonModule, PaymentComponent, DeliveryComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  constructor(private eventService: EventsService, private activatedRoute: ActivatedRoute) { }

  event!: any
  initailQuantity = 1

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        switchMap((id) => this.eventService.getupComingEvents().pipe(
          map((events) => events.find((event) => event.id === Number(id)))
        ))
      )
      .subscribe((event) => {
        this.event = event; // Assign the filtered event to the local variable
        console.log('Filtered Event:', event);
      });
  }

  addToQuantity() {
    console.log('add')
   this.initailQuantity =  this.initailQuantity + 1
  }
  subToQuantity() {
    console.log('sub')

    this.initailQuantity =  this.initailQuantity - 1
  }



}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventsService } from '../../../service/events.service';
import { map, switchMap } from 'rxjs';
import { PaymentComponent } from './payment/payment.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderComponent } from './order/order.component';
import { Events } from '../../../models/events.interface';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule, CommonModule, PaymentComponent, DeliveryComponent, OrderComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  constructor(private eventService: EventsService, private activatedRoute: ActivatedRoute) { }

  event: Events | undefined
  initailQuantity = 1
  initialCost: number = 0
  serviceFee: number = 10
  orderProcessingFee: number = 10

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        switchMap((id) => this.eventService.getupComingEvents().pipe(
          map((events) => events.find((event) => event.id === Number(id)))
        ))
      )
      .subscribe((event) => {
        this.event = event
        this.initialCost = this.event ? this.event.cost : 0;      });
  }

  addToQuantity() {
    this.initailQuantity = this.initailQuantity + 1
  }
  subToQuantity() {
    this.initailQuantity = this.initailQuantity - 1
  }



}

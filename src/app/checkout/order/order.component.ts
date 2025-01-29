import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
@Input() cost: number = 0
@Input() quantity: number = 0
@Input() orderFee: number = 0;
@Input() processingFee: number = 0
totalAmount: number = 0;

ngOnInit(): void {
 
}

}

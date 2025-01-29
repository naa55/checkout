import { Component, OnInit } from '@angular/core';
import { Events } from '../../../models/events.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../../service/events.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  upComingEvents$!: Observable<Events[]>
  ngOnInit(): void {
    this.upComingEvents$ = this.eventService.getupComingEvents()
  }
}

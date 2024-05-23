// src/app/trip-details/trip-details.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  @Input() trip: Trip;

  constructor() { }

  ngOnInit(): void {
  }
}

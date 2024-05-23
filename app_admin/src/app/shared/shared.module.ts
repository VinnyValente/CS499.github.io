// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from '../trip-details/trip-details.component';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication';

@NgModule({
  declarations: [
    TripDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TripDetailsComponent
  ],
  providers: [
    TripDataService,
    AuthenticationService
  ]
})
export class SharedModule { }

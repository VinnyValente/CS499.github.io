// src/app/services/trip-data.service.ts
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Trip } from "../models/trip";
import { AuthResponse } from "../models/authresponse";
import { User } from "../models/user";
import { BROWSER_STORAGE } from "../storage";

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = "http://localhost:3000/api/";

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) {}

  getTrips(): Promise<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}trips`).toPromise();
  }

  getTrip(tripCode: string): Promise<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}trips/${tripCode}`).toPromise();
  }

  addTrip(formData: Trip): Promise<Trip> {
    return this.http.post<Trip>(`${this.apiBaseUrl}trips`, formData).toPromise();
  }

  updateTrip(formData: Trip): Promise<Trip> {
    return this.http.put<Trip>(`${this.apiBaseUrl}trips/${formData.code}`, formData).toPromise();
  }

  login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("login", user);
  }

  register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("register", user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}${urlPath}`, user).toPromise();
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error);
    return Promise.reject(error.message || error);
  }
}

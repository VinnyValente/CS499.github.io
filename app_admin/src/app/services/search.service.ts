import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root' // Specifies that this service should be provided in the root injector
})
export class SearchService {
  private apiUrl = 'http://localhost:3000/api/trips'; // URL to the API endpoint for fetching trips

  constructor(private http: HttpClient) {} // Injects the HttpClient

  // Method to search trips based on a query string
  searchTrips(query: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl).pipe(
      map(trips => trips.filter(trip => this.matchesQuery(trip, query))) // Filters the trips based on the query
    );
  }

  // Private method to check if a trip matches the search query
  private matchesQuery(trip: Trip, query: string): boolean {
    query = query.toLowerCase(); // Converts query to lowercase for case-insensitive comparison
    return (
      trip.name.toLowerCase().includes(query) || // Checks if trip name includes the query
      trip.description.toLowerCase().includes(query) || // Checks if trip description includes the query
      trip.resort.toLowerCase().includes(query) // Checks if trip resort includes the query
    );
  }
}

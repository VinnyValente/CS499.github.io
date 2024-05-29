import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-search', // Selector for the component
  templateUrl: './search.component.html', // HTML template associated with the component
  styleUrls: ['./search.component.css'] // Styles associated with the component
})
export class SearchComponent {
  query: string = ''; // Stores the search query input by the user
  results: Trip[] = []; // Stores the search results
  noResultsMessage: string = ''; // Stores the message to display when no results are found

  constructor(private searchService: SearchService) {} // Injects the SearchService

  // Method to handle the search action
  onSearch(): void {
    if (this.query.trim()) { // Checks if the query is not empty
      this.searchService.searchTrips(this.query).subscribe(
        (data: Trip[]) => { // Handles successful search results
          this.results = data; // Updates the search results
          this.noResultsMessage = this.results.length === 0 ? 'No results found' : ''; // Sets no results message if no results are found
        },
        (error) => { // Handles errors during search
          console.error('Error fetching search results', error); // Logs the error
          this.noResultsMessage = 'An error occurred while searching. Please try again later.'; // Sets error message
        }
      );
    } else {
      this.results = []; // Clears the results if the query is empty
      this.noResultsMessage = ''; // Clears the no results message
    }
  }
}

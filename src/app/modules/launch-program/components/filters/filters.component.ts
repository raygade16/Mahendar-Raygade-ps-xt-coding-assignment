import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  years: number[] = [];

  constructor(private router: Router) {
    this.initYearFilter();
  }

  // Create Years Filters
  initYearFilter(): void {
    let startYear = 2006;
    const currentYear = new Date().getFullYear();
    while (startYear <= currentYear) {
      this.years.push(startYear++);
    }
  }

  // Clear Filter on clicking on selected filter
  clearFilter(isFilterActive: boolean, queryParams: { [key: string]: string | boolean }) {
    if (isFilterActive) {
      this.router.navigate(['/'], {
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
    }
  }
}

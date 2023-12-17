import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-legal-issues',
  templateUrl: './legal-issues.component.html',
  styleUrls: ['./legal-issues.component.css']
})
export class LegalIssuesComponent {
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  ngOnInit(): void {
    this.setupPagination();
  }

  private setupPagination(): void {
    const rowsPerPage: number = 6;
    const rows: JQuery<HTMLElement> = $('#my-table tbody tr');
    const rowsCount: number = rows.length;
    const pageCount: number = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
    const numbers: JQuery<HTMLElement> = $('#numbers');

    // Generate the pagination.
    for (let i: number = 0; i < pageCount; i++) {
      numbers.append(`<li><a href="#">${i + 1}</a></li>`);
    }

    // Mark the first page link as active.
    $('#numbers li:first-child a').addClass('active');

    // Display the first set of rows.
    this.displayRows(1);

    // On pagination click.
    $('#numbers li a').click((e: JQuery.ClickEvent) => {
      const $this: JQuery<HTMLElement> = $(e.currentTarget);

      e.preventDefault();

      // Remove the active class from the links.
      $('#numbers li a').removeClass('active');

      // Add the active class to the current link.
      $this.addClass('active');

      // Show the rows corresponding to the clicked page ID.
      this.displayRows(parseInt($this.text(), 10));
    });
  }

  private displayRows(index: number): void {
    const start: number = (index - 1) * 6;
    const end: number = start + 6;

    // Hide all rows.
    $('#my-table tbody tr').hide();

    // Show the proper rows for this page.
    $('#my-table tbody tr').slice(start, end).show();
  }
}

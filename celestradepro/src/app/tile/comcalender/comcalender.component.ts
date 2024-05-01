import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-comcalender',
  templateUrl: './comcalender.component.html',
  styleUrls: ['./comcalender.component.scss'],
})
export class ComcalenderComponent implements OnInit {
  Calendar: any[];
  showTable: boolean = true; // Initially show the table

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.calendarService.getAllCalendar().subscribe((response: any) => {
      this.Calendar = response;
      console.log(this.Calendar);
    });
  }

   toggleView() {
    this.showTable = !this.showTable; // Toggle the value of showTable
  }
}

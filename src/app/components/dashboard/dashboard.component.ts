import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Chart, BarElement, LinearScale, BarController, CategoryScale,
  ChartData, Tooltip, Title, DoughnutController, ArcElement, Legend, ChartConfiguration, CoreChartOptions
} from 'chart.js';

import { DatesType } from 'src/app/shared/custom-calendar/custom-calendar.component';

Chart.register(BarElement, BarController, LinearScale, CategoryScale, Tooltip, Title,
  DoughnutController, ArcElement, Legend);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('chanelsChart') chanelsChart: ElementRef = {} as ElementRef;
  @ViewChild('statesChart') statesChart: ElementRef = {} as ElementRef;

  calendarValue: DatesType = {
    dateStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    dateEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateChanges() {
    console.log(this.calendarValue)
  }
}


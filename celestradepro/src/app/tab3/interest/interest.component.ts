import { Component, OnInit } from '@angular/core';
import { InterestService } from '../../services/interest.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent implements OnInit {
  
  interests: any[];
  chart: Chart;

  constructor(private interestService: InterestService) {}

  ngOnInit() {
    this.getAllInterests();
  }

  getAllInterests() {
    this.interestService.getAllInterests().subscribe(
      (data: any[]) => {
        this.interests = data;
        this.createChart();
      },
      error => {
        console.log(error);
      }
    );
  }

  createChart() {
    const labels: string[] = this.interests.map(interest => interest.Country);
    const currentInterestRates: number[] = this.interests.map(interest => interest.CurrentInterestRate);
    const lastChanges: number[] = this.interests.map(interest => interest.LastChange);
    const previousRates: number[] = this.interests.map(interest => interest.Previous);

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Current Interest Rate',
            backgroundColor: 'green',
            borderColor: 'green',
            data: currentInterestRates,
          },
          {
            label: 'Last Change',
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: lastChanges,
          },
          {
            label: 'Previous',
            backgroundColor: 'red',
            borderColor: 'red',
            data: previousRates,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                callback: value => value + '%',
              },
            },
          ],
        },
      },
    });
  }

  getColor(interestRate: number): string {
    if (interestRate > 0) {
      return 'green'; // Positive sentiment, set the color to green
    } else if (interestRate < 0) {
      return 'red'; // Negative sentiment, set the color to red
    } else {
      return 'gray'; // Neutral sentiment, set the color to gray
    }
  }
}

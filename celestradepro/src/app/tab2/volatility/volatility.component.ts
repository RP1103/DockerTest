import { Component, OnInit } from '@angular/core';
import { VolatilityService } from '../../services/volatility.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-volatility',
  templateUrl: 'volatility.component.html',
  styleUrls: ['volatility.component.scss']
})
export class VolatilityComponent implements OnInit {

  details: any[];

  constructor(private volatilityService: VolatilityService) { }

  ngOnInit() {
    this.volatilityService.getAllVolatility().subscribe(
      (data: any) => {
        this.details = data;
        this.renderChart();
      },
      error => {
        console.log(error);
      }
    );
  }

  renderChart() {
    const chartData = {
      labels: this.details.map(detail => detail.symbol),
      datasets: [
        {
          label: 'Price',
          data: this.details.map(detail => detail.price),
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Implied Volatility',
          data: this.details.map(detail => detail.implied_volatility),
          fill: false,
          borderColor: '#f44336'
        },
        {
          label: 'Open Interest',
          data: this.details.map(detail => detail.open_interest),
          fill: false,
          borderColor: '#565656'
        }
      ]
    };

    const chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    const chart = new Chart('canvas', {
      type: 'line',
      data: chartData,
      options: chartOptions
    });
  }
}

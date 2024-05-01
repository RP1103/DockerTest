import { Component, OnInit } from '@angular/core';
import { OpeninterestService } from '../services/openinterest.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-openintrest',
  templateUrl: './openintrest.page.html',
  styleUrls: ['./openintrest.page.scss'],
})
export class OpenintrestPage implements OnInit {

  openintrest: any[];
  chart: Chart;

  constructor(private openinterestService: OpeninterestService) { }

  ngOnInit() {
    this.getOpenintrest();
  }

  private getOpenintrest(): void {
    this.openinterestService.getOpenintrest().subscribe(data => {
      this.openintrest = Object.values(data);
      this.createChart();
    });
  }

  private createChart(): void {
    if (!this.openintrest) {
      return;
    }
  
    const callOpenInterest = this.openintrest.filter(item => item.type === 'call');
    const putOpenInterest = this.openintrest.filter(item => item.type === 'put');
  
    const callLabels = callOpenInterest.map(item => item.strike.toString());
    const callData = callOpenInterest.map(item => item.openInterest);
  
    const putLabels = putOpenInterest.map(item => item.strike.toString());
    const putData = putOpenInterest.map(item => item.openInterest);
  
    const canvas = <HTMLCanvasElement>document.getElementById('chart');
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: callLabels,
        datasets: [{
          label: 'Call Open Interest',
          data: callData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
        },
        {
          label: 'Put Open Interest',
          data: putData,
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: { beginAtZero: true }
          }]
        }
      }
    });
  }
}
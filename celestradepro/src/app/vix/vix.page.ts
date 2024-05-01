import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { VixService } from '../services/vix.service';

@Component({
  selector: 'app-vix',
  templateUrl: 'vix.page.html',
  styleUrls: ['vix.page.scss'],
})
export class VixPage implements OnInit {

  chart: any;
  vixs: any; 

  constructor(
    private http: HttpClient,
    private vixService: VixService
  ) {}

  ngOnInit() {
    this.fetchVixData();
  }

  fetchVixData() {
    this.vixService.getVixs().subscribe((vixs: any) => {
      this.vixs = vixs;
      console.log(this.vixs);
      const labels = this.vixs.map(data => data.Date);
      const dataValues = this.vixs.map(data => data.Close);
      const data = {
        labels,
        datasets: [
          {
            label: 'Vix',
            data: dataValues,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      };
      this.createChart(data);
    });
  }
  

  createChart(data) {
    this.chart = new Chart('myChart', {
      type: 'line',
      data,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  

}

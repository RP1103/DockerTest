import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { CommodityService } from '../services/commodity.service';

interface CommodityData {
  underlying: string;
  date: string;
  close: number;
}

@Component({
  selector: 'app-vp',
  templateUrl: './vp.page.html',
  styleUrls: ['./vp.page.scss']
})
export class VpPage implements OnInit {
  chart: any;
  selectedSymbols: string[] = ['Gold', 'Silver', 'Crude oil'];

  constructor(private commodityService: CommodityService) { }

  ngOnInit() {
    this.commodityService.getCommodities().subscribe((data: CommodityData[]) => {
      const symbolToColorMap = {
        'Gold': 'gold',
        'Silver': 'silver',
        'Crude oil': 'blue'
      };

      const filteredData = data.filter(d => this.selectedSymbols.includes(d.underlying));

      const datasets = this.selectedSymbols.map(symbol => {
        const symbolData = filteredData.filter(d => d.underlying === symbol);
        const prices = symbolData.map(d => d.close);
        return {
          label: symbol,
          data: prices,
          borderColor: symbolToColorMap[symbol],
          fill: false
        };
      });

      const dates = filteredData.map(d => d.date);

      this.chart = new Chart('commodity-chart', {
        type: 'line',
        data: {
          labels: dates,
          datasets: datasets
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Commodity Prices in 2022'
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Price ($)'
              }
            }]
          }
        }
      });
    });
  }

  selectAllSymbols() {
    this.selectedSymbols = ['Gold', 'Silver', 'Crude oil'];
    this.updateChart();
  }

  updateChart() {
    this.commodityService.getCommodities().subscribe((data: CommodityData[]) => {
      const symbolToColorMap = {
        'Gold': 'gold',
        'Silver': 'silver',
        'Crude oil': 'blue'
      };

      const filteredData = data.filter(d => this.selectedSymbols.includes(d.underlying));

      const datasets = this.selectedSymbols.map(symbol => {
        const symbolData = filteredData.filter(d => d.underlying === symbol);
        const prices = symbolData.map(d => d.close);
        return {
          label: symbol,
          data: prices,
          borderColor: symbolToColorMap[symbol],
          fill: false
        };
      });

      const dates = filteredData.map(d => d.date);

      this.chart.data.labels = dates;
      this.chart.data.datasets = datasets;
      this.chart.update();
    });
  }
}

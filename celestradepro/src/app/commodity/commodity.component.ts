import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { CommodityService } from '../services/commodity.service';

interface CommodityData {
  symbol: string;
  name: string;
  data: {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss'],
})
export class CommodityComponent implements OnInit {
  @ViewChild('commodityChart') commodityChart: ElementRef;

  chart: Chart;
  symbols: { name: string }[] = [
    { name: 'Gold' },
    { name: 'Silver' },
    { name: 'Crude Oil' },
    { name: 'Copper' },
  ];
  selectedSymbols: { name: string; checked: boolean }[] = [];

  constructor(private commodityService: CommodityService) {}

  ngOnInit() {
    this.commodityService.getCommodities().subscribe((data: CommodityData[]) => {
      const symbolToColorMap = {
        Gold: 'gold',
        Silver: 'silver',
        'Crude Oil': 'blue',
        Copper: 'orange',
      };

      this.selectedSymbols = this.symbols.map(symbol => ({ name: symbol.name, checked: false }));

      this.updateChart(symbolToColorMap, data);
    });
  }

  updateChart(symbolToColorMap: { [key: string]: string }, data: CommodityData[]) {
    const filteredData = data.filter((d) =>
      this.selectedSymbols.find((symbol) => symbol.name === d.name && symbol.checked)
    );

    const datasets = filteredData.map((commodity) => {
      const prices = commodity.data.map((d) => d.close);
      return {
        label: commodity.name,
        data: prices,
        borderColor: symbolToColorMap[commodity.name],
        fill: false,
      };
    });

    const dates = filteredData[0].data.map((d) => d.date);

    if (!this.chart) {
      this.chart = new Chart(this.commodityChart.nativeElement, {
        type: 'line',
        data: {
          labels: dates,
          datasets: datasets,
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Commodity Prices in 2022',
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Date',
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Price ($)',
                },
              },
            ],
          },
        },
      });
    } else {
      this.chart.data.labels = dates;
      this.chart.data.datasets = datasets;
      this.chart.update();
    }
  }
}

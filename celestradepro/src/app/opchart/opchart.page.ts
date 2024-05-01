import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OptionsService } from '../services/options.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-opchart',
  templateUrl: 'opchart.page.html',
  styleUrls: ['opchart.page.scss'],
})
export class OpchartPage implements OnInit {

  options: any[];
  selectedSymbols: string[] = [];
  chart: Chart;

  @ViewChild('chartCanvas') chartCanvas: ElementRef;

  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
    this.getOptionsData();
  }

  getOptionsData() {
    this.optionsService.getOptions().subscribe((options: any[]) => {
      this.options = options;

      const selectedOptions = this.options.filter(option => this.selectedSymbols.includes(option.symbol));
      if (selectedOptions.length > 0) {
        const chartData = {
          labels: [],
          datasets: []
        };

        for (const option of selectedOptions) {
          const calls = option.calls;
          const puts = option.puts;
          const strikePricesCalls = calls.map(call => call.strike);
          const optionPricesCalls = calls.map(call => call.lastPrice);
          const strikePricesPuts = puts.map(put => put.strike);
          const optionPricesPuts = puts.map(put => put.lastPrice);

          chartData.labels = strikePricesCalls;
          chartData.datasets.push({
            label: `${option.symbol} Calls`,
            data: optionPricesCalls,
            borderColor: this.getRandomColor(),
            backgroundColor: 'transparent',
            fill: false,
          });
          chartData.datasets.push({
            label: `${option.symbol} Puts`,
            data: optionPricesPuts,
            borderColor: this.getRandomColor(),
            backgroundColor: 'transparent',
            fill: false,
          });
        }

        if (this.chart) {
          this.chart.destroy();
        }

        this.chart = new Chart(this.chartCanvas.nativeElement, {
          type: 'line',
          data: chartData,
          options: {
            responsive: true,
            title: {
              display: true,
              text: `Option Prices for ${this.selectedSymbols.join(', ')}`
            },
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Strike Price'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Option Price'
                }
              }]
            }
          }
        });
      }
    });
  }

  onSymbolChange() {
    this.getOptionsData();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tile1',
  templateUrl: 'tile1.page.html',
  styleUrls: ['tile1.page.scss'],
})
export class Tile1Page implements OnInit {

  options: any = [];

  constructor(private optionsService: OptionsService) {}

  ngOnInit() {
    this.getOptionsData();
  }

  getOptionsData() {
    this.optionsService.getOptions().subscribe((options: any) => {
      this.options = options;
      console.log(this.options);
      this.createChart();
    });
  }

  createChart() {
    const datasets = [];
    const symbols = [];

    for (const option of this.options) {
      const calls = option.calls;
      const puts = option.puts;
      const strikePricesCalls = calls.map(call => call.strike);
      const optionPricesCalls = calls.map(call => call.lastPrice);
      const strikePricesPuts = puts.map(put => put.strike);
      const optionPricesPuts = puts.map(put => put.lastPrice);

      datasets.push({
        label: option.symbol + ' - Calls',
        data: this.getChartData(strikePricesCalls, optionPricesCalls),
        borderColor: this.getRandomColor(),
        backgroundColor: 'transparent',
        pointRadius: 4
      });

      datasets.push({
        label: option.symbol + ' - Puts',
        data: this.getChartData(strikePricesPuts, optionPricesPuts),
        borderColor: this.getRandomColor(),
        backgroundColor: 'transparent',
        pointRadius: 4
      });

      symbols.push(option.symbol);
    }

    const layout = {
      title: {
        text: 'Options Data for Multiple Symbols'
      },
      xaxis: {
        title: {
          text: 'Strike Price'
        }
      },
      yaxis: {
        title: {
          text: 'Option Price'
        }
      }
    };

    const chart = new Chart('chartCanvas', {
      type: 'line',
      data: {
        datasets
      },
      options: layout
    });
  }

  getChartData(xData, yData) {
    const chartData = [];
    for (let i = 0; i < xData.length; i++) {
      chartData.push({x: xData[i], y: yData[i]});
    }
    return chartData;
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

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ForexService } from '../services/forex.service';
import * as Plotly from 'plotly.js/dist/plotly.js';
import moment from 'moment';

@Component({
  selector: 'app-fchart',
  templateUrl: './fchart.page.html',
  styleUrls: ['./fchart.page.scss'],
})
export class FchartPage implements OnInit {
  @ViewChild('chart') chartElement: ElementRef;
  chart: any;
  validForexs: any[];
  selectedForexSymbols: string[] = [];

  constructor(private forexService: ForexService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.selectedForexSymbols.length > 0) {
      this.updateChart();
    }
  }
  
  ionViewDidEnter() {
    this.forexService.getAllForexs().subscribe((response: any[]) => {
      // Filter out forex pairs with no historical data
      this.validForexs = response.filter(forex => forex.values && forex.values.length > 0);
      if (this.validForexs.length > 0) {
        this.selectedForexSymbols = [this.validForexs[0].symbol];
        this.updateChart();
      } else {
        console.error('No valid forex pairs found.');
      }
    }, error => {
      console.error(error);
    });
  }

  updateChart() {
    const selectedForexs = this.validForexs.filter(forex => this.selectedForexSymbols.includes(forex.symbol));

    const chartData = selectedForexs.map(selectedForex => {
      const ohlcData = selectedForex.values;

      const dates = [];
      const opens = [];
      const highs = [];
      const lows = [];
      const closes = [];

      ohlcData.forEach((doc) => {
        dates.push(moment(doc.Date).format('YYYY-MM-DD'));
        opens.push(doc.Open);
        highs.push(doc.High);
        lows.push(doc.Low);
        closes.push(doc.Close);
      });

      return {
        type: 'candlestick',
        x: dates,
        open: opens,
        high: highs,
        low: lows,
        close: closes,
        yaxis: 'y2',
        name: selectedForex.symbol,
        increasing: { line: { color: '#00C805' } },
        decreasing: { line: { color: '#FF4545' } }
      };
    });

    const layout = {
      dragmode: 'zoom',
      margin: {
        r: 10,
        t: 25,
        b: 40,
        l: 60
      },
      showlegend: true,
      xaxis: {
        autorange: true,
        domain: [0, 1],
        range: [Date[0], Date[Date.length - 1]],
        rangeslider: { range: [Date[Date.length - 60], Date[Date.length - 1]] },
        type: 'date'
      },
      yaxis: {
        autorange: true,
        domain: [0, 0.2],
        showticklabels: false,
        type: 'linear'
      },
      yaxis2: {
        autorange: true,
        domain: [0.2, 1],
        type: 'linear'
      }
    }; 

    Plotly.newPlot(this.chartElement.nativeElement, chartData, layout);
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StockService } from '../services/stock.service';
import * as Plotly from 'plotly.js/dist/plotly.js';
import moment from 'moment';

interface StockData {
  Date: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
}

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
  @ViewChild('chart') chartElement: ElementRef;
  chart: any;
  showMovingAverage: boolean = false;
  fxname: string = 'AAPL';
  ohlcData: StockData[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.stockService.getAllStocks().subscribe((response: any) => {
      const forex = response.find((entry) => entry.symbol === this.fxname);
      if (forex) {
        this.ohlcData = forex.stock;
        console.log(this.ohlcData);
        this.createCandlestickChart();
      }
    });
  }

  createCandlestickChart() {
    const { dates, opens, highs, lows, closes, volumes } = this.processOHLCData(this.ohlcData);

    const period = 10;
    const movingAverage = this.calculateMovingAverage(closes, period);

    const rsiPeriod = 14;
    const rsiValues = this.calculateRSI(closes, rsiPeriod);

    const candlestickTrace = {
      type: 'candlestick',
      x: dates,
      open: opens,
      high: highs,
      low: lows,
      close: closes,
      yaxis: 'y2',
      name: this.fxname,
      increasing: { line: { color: '#00C805' } },
      decreasing: { line: { color: '#FF3319' } },
    };

    const volumeTrace = {
      type: 'bar',
      x: dates,
      y: volumes,
      yaxis: 'y',
      name: 'Volume',
      marker: { color: '#F97B22' },
    };

    const movingAverageTrace = this.showMovingAverage
      ? {
          type: 'scatter',
          mode: 'lines',
          x: dates.slice(period - 1),
          y: movingAverage,
          yaxis: 'y2',
          name: 'Moving Average',
          line: { color: '#FFD700' },
        }
      : null;

    const rsiTrace = {
      type: 'scatter',
      mode: 'lines',
      x: dates.slice(rsiPeriod),
      y: rsiValues,
      yaxis: 'y3',
      name: 'RSI',
      line: { color: '#3366FF' },
    };

    const data = [candlestickTrace, volumeTrace, movingAverageTrace, rsiTrace].filter(Boolean);

    const layout = {
      dragmode: 'zoom',
      xaxis: {
        rangeslider: {
          visible: false,
        },
      },
      yaxis: { domain: [0, 0.2], title: 'Volume' },
      yaxis2: { domain: [0.2, 0.8], title: this.fxname },
      yaxis3: { domain: [0.8, 1], title: 'RSI', overlaying: 'y', side: 'right' },
      // Add layout shapes for drawing tools (e.g., lines, rectangles)
      shapes: [
        // Example: Line
        {
          type: 'line',
          x0: '2022-01-01',
          x1: '2022-01-10',
          y0: 150,
          y1: 150,
          line: {
            color: 'black',
            width: 2,
            dash: 'dot',
          },
        },
        // Example: Rectangle
        {
          type: 'rect',
          x0: '2022-01-15',
          x1: '2022-01-25',
          y0: 120,
          y1: 170,
          fillcolor: 'rgba(128, 0, 128, 0.3)',
          line: {
            color: 'purple',
            width: 2,
          },
        },
      ],
    };

    const config = {
      responsive: true,
    };

    if (this.chart) {
      Plotly.purge(this.chartElement.nativeElement);
    }

    this.chart = Plotly.newPlot(this.chartElement.nativeElement, data, layout, config);
  }

  processOHLCData(ohlcData: StockData[]) {
    const dates = [];
    const opens = [];
    const highs = [];
    const lows = [];
    const closes = [];
    const volumes = [];

    ohlcData.forEach((doc) => {
      dates.push(moment(doc.Date).format('YYYY-MM-DD'));
      opens.push(doc.Open);
      highs.push(doc.High);
      lows.push(doc.Low);
      closes.push(doc.Close);
      volumes.push(doc.Volume);
    });

    return { dates, opens, highs, lows, closes, volumes };
  }

  calculateMovingAverage(data: number[], period: number): number[] {
    const movingAverage = [];
    for (let i = period - 1; i < data.length; i++) {
      const sum = data.slice(i - period + 1, i + 1).reduce((acc, val) => acc + val, 0);
      movingAverage.push(sum / period);
    }
    return movingAverage;
  }

  calculateRSI(data: number[], period: number): number[] {
    const rsi = [];
    let avgGain = 0;
    let avgLoss = 0;

    for (let i = 1; i < data.length; i++) {
      const priceDiff = data[i] - data[i - 1];
      if (priceDiff > 0) {
        avgGain = (avgGain * (period - 1) + priceDiff) / period;
        avgLoss = avgLoss * (period - 1) / period;
      } else {
        avgLoss = (avgLoss * (period - 1) - priceDiff) / period;
        avgGain = avgGain * (period - 1) / period;
      }

      if (i >= period - 1) {
        const relativeStrength = avgGain / avgLoss;
        const rsIndex = 100 - (100 / (1 + relativeStrength));
        rsi.push(rsIndex);
      }
    }

    return rsi;
  }

  toggleMovingAverage() {
    this.showMovingAverage = !this.showMovingAverage;
    this.createCandlestickChart();
  }
}

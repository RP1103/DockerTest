import { Component, ElementRef, ViewChild } from '@angular/core';
import { OpeninterestService } from '../services/openinterest.service';
import moment from 'moment';

declare var Plotly: any;

@Component({
  selector: 'app-vixcreate',
  templateUrl: 'vixcreate.page.html',
  styleUrls: ['vixcreate.page.scss'],
})
export class VixcreatePage {
  @ViewChild('chart') chartElement: ElementRef;

  chart: any;

  constructor(private openInterestService: OpeninterestService) {}

  ngOnInit() {
    this.getOpenIntrestData();
  }

  getOpenIntrestData() {
    this.openInterestService.getOpenintrest().subscribe((data: any[]) => {
      const ohlcData = data.map((d) => ({
        Date: moment(d.date).format('YYYY-MM-DD'),
        Open: d.open,
        High: d.high,
        Low: d.low,
        Close: d.close,
        Volume: d.volume,
      }));

      this.createLineChart(ohlcData, 'Open Interest');
    });
  }

  createLineChart(ohlcData: any[], fxname: string) {
    const dates = ohlcData.map((d) => d.Date);
    const closes = ohlcData.map((d) => d.Close);

    const data = [
      {
        type: 'scatter',
        mode: 'lines',
        x: dates,
        y: closes,
        name: fxname,
        line: { color: '#0099ff' },
      },
    ];

    const layout = {
      dragmode: 'zoom',
      xaxis: {
        rangeslider: {
          visible: false,
        },
      },
      yaxis: { title: fxname },
    };

    const config = {
      responsive: true,
    };

    if (this.chart) {
      Plotly.purge(this.chartElement.nativeElement);
    }

    this.chart = Plotly.newPlot(
      this.chartElement.nativeElement,
      data,
      layout,
      config
    );
  }
}
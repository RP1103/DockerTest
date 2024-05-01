
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-forexchart',
  templateUrl: './forexchart.component.html',
  styleUrls: ['./forexchart.component.scss'],
})
export class ForexchartComponent implements OnInit ,AfterViewInit {
  constructor() { }

  ngOnInit() {}
  ngAfterViewInit(){
    new TradingView.MediumWidget(
      {
      symbols: [
         [
           'EURUSD',
           'EURUSD|1D'
         ],
         [
          'USDJPY',
          'USDJPY|1D'
        ],
         [
           'GBPUSD',
           'GBPUSD|1D'
         ],
         [
           'USDCAD',
           'USDCAD|1D'
         ],


      ],
      chartOnly: false,
      width: 1100,
      height: 500,
      locale: 'en',
      colorTheme: 'light',
      autosize: false,
      showVolume: false,
      hideDateRanges: false,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
      fontSize: '10',
      noTimeScale: false,
      valuesTracking: '1',
      chartType: 'line',
      container_id: 'tradingview_7ab57'
    }
      );
  };
}

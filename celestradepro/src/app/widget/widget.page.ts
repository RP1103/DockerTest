/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const TradingView: any;


@Component({
  selector: 'app-widget',
  templateUrl: './widget.page.html',
  styleUrls: ['./widget.page.scss'],
})
export class WidgetPage implements OnInit, AfterViewInit   {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    new TradingView.MediumWidget(
      {
      symbols: [
        // [
        //   'Apple',
        //   'AAPL|1D'
        // ],
        // [
        //   'Google',
        //   'GOOGL|1D'
        // ],
        // [
        //   'Microsoft',
        //   'MSFT|1D'
        // ],
        [
          'Amazon',
          'AMZN|1D'
        ],
        // [
        //   'Tesla',
        //   'TSLA|1D'
        // ],
        // [
        //   'Nvidia ',
        //   'NVDA|1D'
        // ],
      ],
      chartOnly: false,
      width: 1000,
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

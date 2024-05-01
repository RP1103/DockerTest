import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-otp',
  templateUrl: 'otp.page.html',
  styleUrls: ['otp.page.scss']
})
export class OtpPage  {
 
  @ViewChild('tradingViewWidget') tradingViewWidget: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "in",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });
    this.tradingViewWidget.nativeElement.appendChild(script);
  }

}
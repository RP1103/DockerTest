import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements AfterViewInit {
  @ViewChild('tradingview') tradingview?: ElementRef;
  showWidget: boolean = true;
  scriptElement: HTMLScriptElement;

  constructor(private _renderer2: Renderer2, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.loadTradingViewWidget();
  }

  loadTradingViewWidget() {
    this.scriptElement = this._renderer2.createElement('script');
    this.scriptElement.type = 'text/javascript';
    this.scriptElement.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    this.scriptElement.text = `
    {
      "symbols": [
        {
          "description": "",
          "proName": "NASDAQ:AAPL"
        },
        {
          "description": "",
          "proName": "NASDAQ:MSFT"
        },
        {
          "description": "",
          "proName": "NASDAQ:AMZN"
        },
        {
          "description": "",
          "proName": "NASDAQ:GOOGL"
        },
        {
          "description": "",
          "proName": "NASDAQ:NVDA"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    }`;

    this.tradingview?.nativeElement.appendChild(this.scriptElement);
  }

  toggleWidget() {
    this.showWidget = !this.showWidget;
    if (this.showWidget) {
      this.tradingview?.nativeElement.appendChild(this.scriptElement);
    } else {
      this.tradingview?.nativeElement.removeChild(this.scriptElement);
    }
    console.log('Toggle widget method called');
  }
}

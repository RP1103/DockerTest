 /* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-ribbon1',
  templateUrl: './ribbon1.component.html',
  styleUrls: ['./ribbon1.component.scss'],
})
export class Ribbon1Component implements AfterViewInit {

  @ViewChild('tradingview') tradingview?: ElementRef;

  constructor(private _renderer2: Renderer2) { }


  ngAfterViewInit() {
    const script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.text = `
    {
      "symbols": [
        {
          "description": "GC=F",
          "proName": "ECONOMICS:INGRES"
        },
        {
          "description": "SI=F",
          "proName": "ECONOMICS:USCSHPI"
        },
        {
          "description": "CL=F",
          "proName": "FRED:SPDYNCBRTINUSA"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    }`;

    this._renderer2.appendChild(this.tradingview.nativeElement, script);
  }

}
import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-techanalysis',
  templateUrl: './techanalysis.component.html',
  styleUrls: ['./techanalysis.component.scss'],
})
export class TechanalysisComponent implements AfterViewInit {
  @ViewChild('tradingview', { static: true }) tradingview!: ElementRef;

  constructor(private renderer: Renderer2) { }

   ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.text = `
    {
     
        
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    }`;

    this.renderer.appendChild(this.tradingview.nativeElement, script);
  }
}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marketheat',
  templateUrl: './marketheat.component.html',
  styleUrls: ['./marketheat.component.scss'],
})
export class MarketheatComponent implements OnInit {
   goldPrice: number;
  goldVolume: number;
  silverPrice: number;
  silverVolume: number;
  crudeOilPrice: number;
  crudeOilVolume: number;

  constructor(private http: HttpClient,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.fetchMarketData();
    this.loadScripts();
  }

  fetchMarketData() {
    // Simulated API call, replace this with your actual API endpoint
    this.http.get<any>('https://api.example.com/market-data').subscribe(data => {
      this.goldPrice = data.gold.price;
      this.goldVolume = data.gold.volume;
      this.silverPrice = data.silver.price;
      this.silverVolume = data.silver.volume;
      this.crudeOilPrice = data.crudeOil.price;
      this.crudeOilVolume = data.crudeOil.volume;
    });
  }

  loadScripts() {
    // Create script element
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.ifcmarkets.com/js/chartsWidgetAM.js';

    // Append script element to the DOM
    this.renderer.appendChild(document.body, script);
  }

}

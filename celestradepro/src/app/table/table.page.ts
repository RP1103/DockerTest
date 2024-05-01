import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../services/options.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  options: any = [];

  constructor(private optionsService: OptionsService) {}

  ngOnInit() {
    this.getOptionsData();
  }

  getOptionsData() {
    this.optionsService.getOptions().subscribe((response: any) => {
      const fxname = 'AAPL';
      const options = response.find(entry => entry.symbol === fxname);
      if (options) {
        const ohlcData = options.calls;
        //const ohlcData = options.puts;
        console.log(ohlcData);

      }
    });
}
}

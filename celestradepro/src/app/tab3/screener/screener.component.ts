import { Component, OnInit } from '@angular/core';
import { ScreenerService } from '../../services/screener.service';

@Component({
  selector: 'app-screener',
  templateUrl: './screener.component.html',
  styleUrls: ['./screener.component.scss'],
})
export class ScreenerComponent implements OnInit {
  screener: any;
  constructor(private screenerService: ScreenerService) { }

  ngOnInit() {
    this.screenerService.getAllScreener().subscribe(
      (data: any) => {
        this.screener = data;
        console.log(this.screener);
      },

    );
  }

}



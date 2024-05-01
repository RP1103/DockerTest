import { Component, OnInit } from '@angular/core';
import { CrossrateService } from '../../services/crossrate.service';

@Component({
  selector: 'app-forexcross',
  templateUrl: './forexcross.component.html',
  styleUrls: ['./forexcross.component.scss'],
})
export class ForexcrossComponent implements OnInit {
  crossrates: any;

  constructor(private crossrateService: CrossrateService) {}

  ngOnInit() {
    this.crossrateService.getCrossrate().subscribe(
      (data: any) => {
        this.crossrates = data;
        console.log(this.crossrates);
      },
    );
  }


}

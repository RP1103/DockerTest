import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-ups',
  templateUrl: './ups.page.html',
  styleUrls: ['./ups.page.scss'],
})
export class UpsPage implements OnInit {
  stockForm: FormGroup;
  id: any;
 

  constructor() {}

  ngOnInit() {} 

}
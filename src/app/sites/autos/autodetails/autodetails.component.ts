import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstants, CARS } from '../../../global-constants';

@Component({
  selector: 'app-autodetails',
  templateUrl: './autodetails.component.html',
  styleUrls: ['./autodetails.component.css'],
})
export class AutodetailsComponent implements OnInit {
  constructor() {}

  @Input()
  auto: CARS;

  ngOnInit() {}
}

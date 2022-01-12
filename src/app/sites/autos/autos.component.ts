import { Component, OnInit } from '@angular/core';
import { GlobalConstants, CARS } from '../../global-constants';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
})
export class AutosComponent implements OnInit {
  autoListe: CARS[];

  constructor() {
    this.autoListe = GlobalConstants.CarList;
  }

  ngOnInit() {}
}

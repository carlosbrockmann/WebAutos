import { Component, OnInit } from '@angular/core';
import { GlobalConstants, CARS } from '../../global-constants';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
})

static automarken: string[];

export class AutosComponent implements OnInit {
  autoListe: CARS[];
  

  constructor() {
    this.autoListe = GlobalConstants.CarList;

    const marken = []; 

    if (this.autoListe) {
      
      // this.autoListe.forEach(function (obj, i) {
      //   if (obj.Marke && marken.indexOf(obj.Marke) < 0)
      //   marken.push(obj.Marke);
      // });
      //   this.autoListe.forEach(function (v) {
      //     if (!this.automarken.icludes(v.Marke)) this.automarken.push(v.Marke);
      //   });
    }
  }

  ngOnInit() {}
}

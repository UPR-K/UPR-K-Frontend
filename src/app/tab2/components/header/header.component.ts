import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavController, SegmentCustomEvent } from '@ionic/angular';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() 
  selectedsegment = new EventEmitter<string>();
  lateralbar = [
    { name: 'Noticias' },
    {
      name: 'Eventos',
    },
    { name: 'Investigaciones' },
  ];
  title = this.lateralbar[0].name;
  page: number = 0;

  constructor(private navcContr: NavController) {}

  ngOnInit() {}
  /**
   * sirve para cambiar de vista en el ionsegment
   *  ,el valor de el evento se guarda en la variable
   * selectedCategory
   * @param e evento
   */
  segmentChange(e: any) {
    this.title = e.detail.value;
    this.selectedsegment.emit(this.title);
    
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Notice } from '../../interfaces';

import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-notice-detail',
  templateUrl: './information-notice.component.html',
  styleUrls: ['./information-notice.component.scss'],
})
export class InformationNoticeComponent implements OnInit {
  private id: number
  public notice: Notice

  constructor(private activaterouter: ActivatedRoute,
    private newservise: NewsService,
    public popoverController: PopoverController,
    private cdr: ChangeDetectorRef) { }

  /**
   * al iniciar la pagina convierte el id que viene por la url en un entero,
   * llama al metodo de obtener la noticia por id
   * y se captura el texto para cuando se vaya a aumentar y disminuir la letra
   */
  ngOnInit() {
    this.id = parseInt(this.activaterouter.snapshot.paramMap.get("id"))

    this.notice = this.newservise.getNoticebyid(this.id);

    this.newservise.textcontent = document.querySelector('.div-text')
  }


}

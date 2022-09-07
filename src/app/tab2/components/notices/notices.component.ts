
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Notice } from '../../interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoticesComponent implements OnInit {
  page: number = 0;
  constructor(private newservice: NewsService) {}

  ngOnInit() {
    this.newservice.news = [];
    this.page = 1;
  }


  /**
   * añade un settimeout de medio segundo ,
   * aumenta la variable page para hacer una peticion hacia
   * la proxima pagina y lo aañade
   * al arreglo de noticias para su visualizacion
   * despues condiciona la desactivacion de infinitiscroll ,
   * si la ultima posicion de el arreglo de noticias esta vacia se desabilita
   *
   * @param event evento de infinitiscroll
   */
   loadData(event: any) {
    setTimeout(() => {
      event.target.complete();
      this.page++;
      this.newservice.getNews(this.page).subscribe((response: Notice[]) => {
        response.forEach((item) => {
          this.newservice.news.push(item);
        });
      });

      if (this.newservice.news[this.newservice.news.length - 1] == null) {
        event.target.disabled = true;
      }
    }, 500);
  }
}

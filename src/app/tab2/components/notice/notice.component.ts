import { Component, OnInit } from '@angular/core';
import { Notice } from '../../interfaces';



import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
  public response: Notice[] = []
  constructor(private newservice: NewsService) { }

  /**
   * inicia el componente cargando el arreglo de noticias
   * y lo guarda en response para mostrarlo en pantalla
   */
  ngOnInit() {

    if (this.newservice.news = []) {
      this.newservice.getNews(1).subscribe((response: Notice[]) => {
        response.forEach((item) => { this.newservice.news.push(item); })

        this.response = this.newservice.news
      }
      )
    } else {
      this.response = this.newservice.news
    }
  }

}

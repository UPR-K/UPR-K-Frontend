import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Notice } from './interfaces';

import { NewsService } from './services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  page: number = 0;

  selectedsegment: string = 'Noticias';

  constructor(private newservice: NewsService) {}

  ngOnInit() {
   
  }
  ChangeSegment(title) {
    this.selectedsegment=title
    console.log("title",title
    );
    
  }

 
  }

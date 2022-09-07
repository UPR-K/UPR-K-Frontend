import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { ShareModule } from '../share/share.module';

import { PopoverComponent } from './components/popover/popover.component';
import { NoticeComponent } from './components/notice/notice.component';
import { EventsComponent } from './components/events/events.component';
import { InvestigationsComponent } from './components/investigations/investigations.component';
import { InformationNoticeComponent } from './components/notice-detail/information-notice.component';
import { HeaderComponent } from './components/header/header.component';
import { NoticesComponent } from './components/notices/notices.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShareModule,

    Tab2PageRoutingModule,
  ],
  declarations: [
    Tab2Page,
    NoticeComponent,
    NoticeComponent,
    PopoverComponent,
    InformationNoticeComponent,
    EventsComponent,
    InvestigationsComponent,
    HeaderComponent,
    NoticesComponent
  ],
})
export class Tab2PageModule {}

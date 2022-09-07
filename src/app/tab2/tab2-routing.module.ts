import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from '../share/maintenance/maintenance.component';
import { EventsComponent } from './components/events/events.component';
import { HeaderComponent } from './components/header/header.component';

import { InvestigationsComponent } from './components/investigations/investigations.component';
import { InformationNoticeComponent } from './components/notice-detail/information-notice.component';
import { NoticeComponent } from './components/notice/notice.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  { path: '',component: Tab2Page, },
  { path: 'detail/:id', component: InformationNoticeComponent },
  { path: 'notices', component: NoticeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'investigations', component: InvestigationsComponent },

  { path: '**', redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}

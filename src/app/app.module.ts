import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

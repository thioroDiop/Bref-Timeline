import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import {RouterModule} from "@angular/router";
import { PlayComponent } from './play/play.component';
import { NewComponent } from './new/new.component';
import { ModifyComponent } from './modify/modify.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PlayComponent,
    NewComponent,
    ModifyComponent
  ],

    imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        {path: '', component: TimelineComponent},
        {path: 'timeline', component: TimelineComponent},
        {path: 'timeline-play/:id', component: PlayComponent},
        {path: 'timeline-new', component: NewComponent},
        {path: 'timeline/:id', component: ModifyComponent},
      ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }

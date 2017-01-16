import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { Storage } from '@ionic/storage';

import { AppComponent } from './app.component';
import { HomePage } from './home/home';
import { ContactPage } from './contact/contact';
import { AboutPage } from './about/about';

import { UpComponent } from './up/up.component';
import { UpVersesComponent } from './up/up-verses/up-verses.component';
import { UpPracticeComponent } from './up/up-practice/up-practice.component';
import { UpToolsComponent } from './up/up-tools/up-tools.component';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '05a53d08'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ContactPage,
    AboutPage,
    UpComponent,
    UpVersesComponent,
    UpPracticeComponent,
    UpToolsComponent
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage,
    ContactPage,
    AboutPage,
    UpComponent,
    UpVersesComponent,
    UpPracticeComponent,
    UpToolsComponent
  ],
  providers: [/*Storage*/
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

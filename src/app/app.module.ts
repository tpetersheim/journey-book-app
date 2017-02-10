import { CloudModule, CloudSettings } from '@ionic/cloud-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutComponent } from './shared/about/about.component';
import { ContactPage } from './contact/contact';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'
import { HeaderComponent } from './shared/header/header.component';
import { HomePage } from './home/home';
import { HttpModule } from '@angular/http';
import { PracticeComponent } from './shared/practice/practice.component';
import { UpAboutComponent } from './up/up-about/up-about.component';
import { UpComponent } from './up/up.component';
import { UpPracticeComponent } from './up/up-practice/up-practice.component';
import { UpVersesComponent } from './up/up-verses/up-verses.component';
import { VersesComponent } from './shared/verses/verses.component';

// import { Storage } from '@ionic/storage';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '05a53d08'
  }
};

@NgModule({
  imports: [
    IonicModule.forRoot(AppComponent),
    CloudModule.forRoot(cloudSettings),
    CoreModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomePage,
    ContactPage,
    UpComponent,
    UpVersesComponent,
    UpPracticeComponent,
    UpAboutComponent,
    HeaderComponent,
    VersesComponent,
    AboutComponent,
    PracticeComponent
  ],
  entryComponents: [
    AppComponent,
    HomePage,
    ContactPage,
    UpComponent,
    UpVersesComponent,
    UpPracticeComponent,
    UpAboutComponent
  ],
  providers: [
    /*Storage,*/
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }

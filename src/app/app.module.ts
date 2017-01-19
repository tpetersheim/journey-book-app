import { CloudModule, CloudSettings } from '@ionic/cloud-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutPage } from './about/about';
import { AppComponent } from './app.component';
import { ContactPage } from './contact/contact';
import { CoreModule } from './core/core.module'
import { HomePage } from './home/home';
import { HttpModule } from '@angular/http';
import { UpComponent } from './up/up.component';
import { UpPracticeComponent } from './up/up-practice/up-practice.component';
import { UpToolsComponent } from './up/up-tools/up-tools.component';
import { UpVersesComponent } from './up/up-verses/up-verses.component';

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
    AboutPage,
    UpComponent,
    UpVersesComponent,
    UpPracticeComponent,
    UpToolsComponent
  ],
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
  providers: [
    /*Storage,*/
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }

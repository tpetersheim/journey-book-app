import { CloudModule, CloudSettings } from '@ionic/cloud-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutComponent } from './shared/about/about.component';
import { AppComponent } from './app.component';
import { ContactPage } from './contact/contact';
import { CoreModule } from './core/core.module'
import { ExternalLinksDirective } from './shared/external-links.directive';
import { HeaderComponent } from './shared/header/header.component';
import { HomePage } from './home/home';
import { HttpModule } from '@angular/http';
import { InAboutComponent } from './in/in-about/in-about.component';
import { InComponent } from './in/in.component';
import { InPracticeComponent } from './in/in-practice/in-practice.component';
import { InVersesComponent } from './in/in-verses/in-verses.component';
import { OutAboutComponent } from './out/out-about/out-about.component';
import { OutComponent } from './out/out.component';
import { OutPracticeComponent } from './out/out-practice/out-practice.component';
import { OutVersesComponent } from './out/out-verses/out-verses.component';
import { PracticeComponent } from './shared/practice/practice.component';
import { SettingsComponent } from './settings/settings.component';
import { Storage } from '@ionic/storage';
import { UpAboutComponent } from './up/up-about/up-about.component';
import { UpComponent } from './up/up.component';
import { UpPracticeComponent } from './up/up-practice/up-practice.component';
import { UpVersesComponent } from './up/up-verses/up-verses.component';
import { VersesComponent } from './shared/verses/verses.component';

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
    ExternalLinksDirective,
    AppComponent,
    HomePage,
    ContactPage,
    UpComponent,
    UpVersesComponent,
    UpPracticeComponent,
    UpAboutComponent,
    InComponent,
    InVersesComponent,
    InPracticeComponent,
    InAboutComponent,
    OutComponent,
    OutVersesComponent,
    OutPracticeComponent,
    OutAboutComponent,
    HeaderComponent,
    VersesComponent,
    AboutComponent,
    PracticeComponent,
    SettingsComponent
  ],
  entryComponents: [
    AppComponent,
    HomePage,
    ContactPage,
    UpComponent,
    UpVersesComponent,
    UpPracticeComponent,
    UpAboutComponent,
    InComponent,
    InVersesComponent,
    InPracticeComponent,
    InAboutComponent,
    OutComponent,
    OutVersesComponent,
    OutPracticeComponent,
    OutAboutComponent,
    SettingsComponent
  ],
  providers: [
    Storage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }

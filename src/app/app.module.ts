import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { PracticeComponent } from './components/practice/practice.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ExternalLinksDirective } from './components/shared/external-links.directive';
import { VersesComponent } from './components/verses/verses.component';
import { ContactPage } from './contact/contact.page';
import { HomePage } from './home/home.page';
import { InAboutComponent } from './in/in-about/in-about.component';
import { InPracticeComponent } from './in/in-practice/in-practice.component';
import { InVersesComponent } from './in/in-verses/in-verses.component';
import { InComponent } from './in/in.component';
import { OutAboutComponent } from './out/out-about/out-about.component';
import { OutPracticeComponent } from './out/out-practice/out-practice.component';
import { OutVersesComponent } from './out/out-verses/out-verses.component';
import { OutComponent } from './out/out.component';
import { DataService } from './services/data/data.service';
import { UpAboutComponent } from './up/up-about/up-about.component';
import { UpPracticeComponent } from './up/up-practice/up-practice.component';
import { UpVersesComponent } from './up/up-verses/up-verses.component';
import { UpComponent } from './up/up.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        ContactPage,
        ExternalLinksDirective,
        HomePage,
        HeaderComponent,
        InAboutComponent,
        InComponent,
        InPracticeComponent,
        InVersesComponent,
        MenuItemComponent,
        OutAboutComponent,
        OutComponent,
        OutPracticeComponent,
        OutVersesComponent,
        PracticeComponent,
        VersesComponent,
        UpAboutComponent,
        UpComponent,
        UpPracticeComponent,
        UpVersesComponent,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule
    ],
    entryComponents: [
        InAboutComponent,
        InPracticeComponent,
        InVersesComponent,
        OutAboutComponent,
        OutPracticeComponent,
        OutVersesComponent,
        UpAboutComponent,
        UpPracticeComponent,
        UpVersesComponent,
    ],
    providers: [
        DataService,
        StatusBar,
        SplashScreen,
        InAppBrowser,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

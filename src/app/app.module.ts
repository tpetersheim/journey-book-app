import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { UpComponent } from './up/up.component';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { ContactPage } from './contact/contact.page';
import { UpVersesComponent } from './up/up-verses/up-verses.component';
import { UpPracticeComponent } from './up/up-practice/up-practice.component';
import { UpAboutComponent } from './up/up-about/up-about.component';
import { InVersesComponent } from './in/in-verses/in-verses.component';
import { InPracticeComponent } from './in/in-practice/in-practice.component';
import { InAboutComponent } from './in/in-about/in-about.component';
import { OutVersesComponent } from './out/out-verses/out-verses.component';
import { OutPracticeComponent } from './out/out-practice/out-practice.component';
import { OutAboutComponent } from './out/out-about/out-about.component';
import { HomePage } from './home/home.page';
import { PracticeComponent } from './components/practice/practice.component';
import { VersesComponent } from './components/verses/verses.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactPage,
        HomePage,
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
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './core/settings.service';
import { UpComponent } from './up/up.component';

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, iconCss?: string, ionIcon?: string }>;
  fontSizeClass: string;

  constructor(private platform: Platform, private settings: SettingsService) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, ionIcon: 'home' },
      { title: 'Up', component: UpComponent, iconCss: 'letter-icon up' },
      { title: 'In', component: InComponent, iconCss: 'letter-icon in' },
      { title: 'Out', component: OutComponent, iconCss: 'letter-icon out' },
      { title: 'Contact', component: ContactPage, ionIcon: 'call' },
      // { title: 'Settings', component: SettingsComponent, ionIcon: 'settings' }
    ];

    this.subscribeToFontIndex();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  };

  private subscribeToFontIndex() {
    this.settings.fontIndex.subscribe(fontIndex => {
      this.fontSizeClass = `font-size-${fontIndex}`;
    });
  }
}

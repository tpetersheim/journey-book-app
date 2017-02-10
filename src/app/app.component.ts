import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { UpComponent } from './up/up.component';

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, iconCss?: string, ionIcon?: string }>;

  constructor(private platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, ionIcon: 'home' },
      { title: 'Up', component: UpComponent, iconCss: 'letter-icon up' },
      { title: 'In', component: {}, iconCss: 'letter-icon in' },
      { title: 'Out', component: {}, iconCss: 'letter-icon out' },
      { title: 'Contact', component: ContactPage, ionIcon: 'call' }
    ];
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
}

import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    pages = [
        { title: 'Home', url: '/', ionIcon: 'home' },
        { title: 'Up', url: '/up', iconCss: 'letter-icon up' },
        { title: 'In', url: '/in', iconCss: 'letter-icon in' },
        { title: 'Out', url: '/out', iconCss: 'letter-icon out' },
        // { title: 'Login', url: '/login', icon: 'log-in' },
        { title: 'Contact', url: '/contact', icon: 'person' }
        // { title: 'About', url: '/tabs/about', icon: 'information-circle' }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                this.pages.map(p => {
                    return (p['active'] = event.url === p.url);
                });
            }
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}

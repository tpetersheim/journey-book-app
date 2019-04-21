import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { UpAboutComponent } from './up/up-about/up-about.component';
import { UpPracticeComponent } from './up/up-practice/up-practice.component';
import { UpVersesComponent } from './up/up-verses/up-verses.component';
import { UpComponent } from './up/up.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'up', component: UpComponent, children: [
        { path: '', redirectTo: 'about', pathMatch: 'full' },
        { path: 'about', component: UpAboutComponent },
        { path: 'practice', component: UpPracticeComponent },
        { path: 'verses', component: UpVersesComponent },
    ]},
    { path: 'in', component: InComponent, children: [
        { path: '', redirectTo: 'about', pathMatch: 'full' },
        { path: 'about', component: InAboutComponent },
        { path: 'practice', component: InPracticeComponent },
        { path: 'verses', component: InVersesComponent },
    ]},
    { path: 'out', component: OutComponent, children: [
        { path: '', redirectTo: 'about', pathMatch: 'full' },
        { path: 'about', component: OutAboutComponent },
        { path: 'practice', component: OutPracticeComponent },
        { path: 'verses', component: OutVersesComponent },
    ]},
    { path: 'contact', component: ContactPage }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

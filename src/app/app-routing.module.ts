import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { UpComponent } from './up/up.component';
import { InComponent } from './in/in.component';
import { OutComponent } from './out/out.component';
import { ContactPage } from './contact/contact.page';

const routes: Routes = [
    { path: '', redirectTo: '/home' },
    { path: 'home', component: HomePage },
    { path: 'up', component: UpComponent },
    { path: 'in', component: InComponent },
    { path: 'out', component: OutComponent },
    { path: 'contact', component: ContactPage }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardComponent } from './../dashboard/_dashboard.component'
import { HeroesComponent } from './../heroes/_heroes.component'
import { HeroDetailComponent } from './../hero-detail/_hero-detail.component'

const routes: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'detail/:id',
    component: HeroDetailComponent
}, {
    path: 'heroes',
    component: HeroesComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, HeroesComponent, HeroDetailComponent]
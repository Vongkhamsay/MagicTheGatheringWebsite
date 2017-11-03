import { CardDetailModule } from './route/card-detail/card-detail.module';
import { HomeModule } from './route/home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { HomeComponent } from './route/home/home.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        HomeModule,
        CardDetailModule,

        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
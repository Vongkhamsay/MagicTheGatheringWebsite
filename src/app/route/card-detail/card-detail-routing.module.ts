import { CardDetailComponent } from './card-details/card-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';


const homeRoutes: Routes = [
    {
        path: 'details',
        component: CardDetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class CardDetailRoutingModule { }
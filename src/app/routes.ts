import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { TablesComponent } from './tables/tables.component'
import { AppComponent } from './app.component'

export const ROUTES: Routes = [
    { path: "", pathMatch: "full", redirectTo: 'home' },
    { path: "home", pathMatch: "full", component: HomeComponent },
    { path: "tablas", pathMatch: "full", component: TablesComponent  },
    { path: "test", pathMatch: "full", component: AppComponent },
]
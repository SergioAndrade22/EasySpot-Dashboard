import { Routes } from '@angular/router'
import { TablesComponent } from './tables/tables.component'

export const ROUTES: Routes = [
    { path: "", redirectTo: 'tablas' },
    { path: "tablas", pathMatch: "full", component: TablesComponent  },
    { path: "**", component: TablesComponent },
]
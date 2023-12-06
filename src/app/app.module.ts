import { NgModule, importProvidersFrom } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { environment } from 'src/environments/environment'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { GpsPositionsService } from './services/position/gps-positions.service'
import { LayoutComponent } from './layout/layout.component'
import { FooterComponent } from './layout/footer/footer.component'
import { HeaderComponent } from './layout/header/header.component'
import { HomeComponent } from './home/home.component'
import { TablesComponent } from './tables/tables.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { provideAnimations } from '@angular/platform-browser/animations'
import { MatSortModule } from '@angular/material/sort'
import { GeneralMorphService } from './services/generalMorph/general-morph.service'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    GpsPositionsService,
    GeneralMorphService,
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

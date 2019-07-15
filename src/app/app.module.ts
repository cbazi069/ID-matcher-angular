import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImportsComponent } from './imports/imports.component';
import { CardImportComponent } from './card-import/card-import.component';
import { CardComponent } from './card/card.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { ContenantImageComponent } from './contenant-image/contenant-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ImportsComponent,
    CardImportComponent,
    CardComponent,
    ImageContainerComponent,
    ButtonsContainerComponent,
    ContenantImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

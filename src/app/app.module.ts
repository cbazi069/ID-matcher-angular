import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImportsComponent } from './imports/imports.component';
import { CardImportComponent } from './card-import/card-import.component';
import { CardComponent } from './card/card.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { ContenantImageComponent } from './contenant-image/contenant-image.component';
import { Folder1ImageContenantComponent } from './folder1-image-contenant/folder1-image-contenant.component';
import { Folder2ImageContenantComponent } from './folder2-image-contenant/folder2-image-contenant.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ImportsComponent,
    CardImportComponent,
    CardComponent,
    ButtonsContainerComponent,
    ContenantImageComponent,
    Folder1ImageContenantComponent,
    Folder2ImageContenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

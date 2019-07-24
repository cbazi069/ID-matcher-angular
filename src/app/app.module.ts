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
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { MousewheelDirective } from './mousewheel.directive';
import { AlreadySeenCardComponent } from './already-seen-card/already-seen-card.component';
import { DownloadComponent } from './download/download.component';

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
    ImageDisplayComponent,
    MousewheelDirective,
    AlreadySeenCardComponent,
    DownloadComponent,
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

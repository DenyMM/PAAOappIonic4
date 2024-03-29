import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageViewerComponent } from './pages/image-viewer/image-viewer.component';
import { PopoverLauncherComponent } from './pages/popover-launcher/popover-launcher.component';
import { NotificacionComponent } from './notificaciones/notificacion/notificacion.component';
import { VideoViewerComponent } from './pages/video-viewer/video-viewer.component';

@NgModule({
  declarations: [AppComponent, ImageViewerComponent, PopoverLauncherComponent, NotificacionComponent, VideoViewerComponent],
  entryComponents: [ImageViewerComponent, PopoverLauncherComponent, NotificacionComponent, VideoViewerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

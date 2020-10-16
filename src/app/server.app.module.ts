import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({
      appId: "app-id"
    }),
    ServerModule,
    AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ServerAppModule {}

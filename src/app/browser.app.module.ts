import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({
      appId: "app-id"
    }),
    AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class BrowserAppModule {}

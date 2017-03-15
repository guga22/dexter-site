import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent , SobreComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { L10nIntlModule, L10nLoader, L10nRoutingModule, L10nTranslationModule } from 'angular-l10n';
import { l10nConfig } from '../language/l10-config';



// initialize the I10Loader
export function initL10n(l10nLoader:L10nLoader):() => Promise<void>{
 return () => l10nLoader.init();
}
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    L10nRoutingModule.forRoot(),
    L10nTranslationModule.forRoot(l10nConfig)
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initL10n,
    deps: [L10nLoader],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Inject, OnInit } from '@angular/core';
import { L10nTranslationService } from 'angular-l10n';
import { L10N_LOCALE, L10nLocale, L10nConfig, L10N_CONFIG } from 'angular-l10n';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent implements OnInit {

  constructor(private translation: L10nTranslationService,
    @Inject(L10N_CONFIG) private l10nConfig: L10nConfig,
    @Inject(L10N_LOCALE) public locale: L10nLocale) { }
  isMenuCollapsed = true;
  schema = this.l10nConfig.schema;
  language = 'En-Us';
  ngOnInit(): void {
  }
  setLocale(locale: L10nLocale): void {
    console.log(locale)
    this.translation.setLocale(locale);
    this.language = locale.language;
  }

}

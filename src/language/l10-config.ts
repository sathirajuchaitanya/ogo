import { L10nConfig, L10nLoader } from 'angular-l10n';
import {language} from '../assets/l18n/language';



export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [{ name: 'app', asset: language }],
  cache: true,
  keySeparator: '.',
  defaultLocale: {
    language: 'en-US',
    currency: 'USD',
    timeZone: 'America/Los_Angeles'
  },
  schema: [
    {
      locale: {
        language: 'en-US',
        currency: 'USD',
        timeZone: 'America/Los_Angeles'
      },
      dir: 'ltr',
      text: 'United States'
    },
    {
      locale: { language: 'it-IT', currency: 'EUR', timeZone: 'Europe/Rome' },
      dir: 'ltr',
      text: 'Italia'
    }
  ]
};

export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}
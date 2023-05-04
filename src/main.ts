import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  provideFluentDesignSystem,
  fluentCard,
  fluentButton,
  fluentTextField,
  fluentSelect,
  fluentOption,
  fluentNumberField,
} from '@fluentui/web-components';

import { AppModule } from './app/app.module';

provideFluentDesignSystem().register(
  fluentCard(),
  fluentButton(),
  fluentTextField(),
  fluentSelect(),
  fluentOption(),
  fluentNumberField()
);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

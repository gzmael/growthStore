import { container } from 'tsyringe';

import { DayJSProvider } from './DateProvider/implementations/DayJSProvider';
import { IDateProvider } from './DateProvider/models/IDateProvider';
import { BCryptHashProvider } from './HashProvider/implementations/BCryptHashProvider';
import { IHashProvider } from './HashProvider/models/IHashProvider';

const providers = {
  hash: BCryptHashProvider,
  date: DayJSProvider,
};

container.registerSingleton<IHashProvider>('HashProvider', providers.hash);
container.registerSingleton<IDateProvider>('DateProvider', providers.date);

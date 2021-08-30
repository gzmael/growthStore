import { container } from 'tsyringe';

import { DayJSProvider } from './DateProvider/implementations/DayJSProvider';
import { IDateProvider } from './DateProvider/models/IDateProvider';
import { BCryptHashProvider } from './HashProvider/implementations/BCryptHashProvider';
import { IHashProvider } from './HashProvider/models/IHashProvider';
import { JwtTokenProvider } from './TokenProvider/implementations/JwtTokenProvider';
import { ITokenProvider } from './TokenProvider/models/ITokenProvider';

const providers = {
  token: JwtTokenProvider,
  hash: BCryptHashProvider,
  date: DayJSProvider,
};

container.registerSingleton<ITokenProvider>('TokenProvider', providers.token);
container.registerSingleton<IHashProvider>('HashProvider', providers.hash);
container.registerSingleton<IDateProvider>('DateProvider', providers.date);

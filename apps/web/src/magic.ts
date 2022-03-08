import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';

export const magic = new Magic(import.meta.env.VITE_APP_MAGIC_PUBLISHABLE_KEY, {
  extensions: [new OAuthExtension()],
});

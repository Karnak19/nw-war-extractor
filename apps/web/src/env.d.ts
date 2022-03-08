/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_ENDPOINT: string;
  readonly VITE_APP_MAGIC_PUBLISHABLE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CRYPTBIRD_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

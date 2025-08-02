## Inicialización del proyecto y dependencias

```bash
npm init -y
```

```bash
npm i express
```

```bash
npm i typescript@5.8.3 -D
```

```bash
npm i dotenv nodemon ts-node -D
```

```bash
npm install @types/express @types/dotenv -D
```

```bash
npx tsc --init
```

## Configuración de TypeScript (tsconfig.json)

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "esModuleInterop": true,
    "moduleDetection": "force",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "rootDir": "./src",
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"],
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  }
}
```

## Instalación y configuración de ESLint

```bash
npm install eslint @eslint/js typescript-eslint globals -D
```

## Tipo de módulo y scripts

```
"type": "module",
```

```
"scripts": {
    "lint": "eslint ./src",
    "lint:fix": "eslint ./src --ext .ts --fix",
    "type:check": "tsc --noEmit",
    "type:check:watch": "tsc --noEmit --watch",
    "start": "node dist/index.js",
    "start:dev": "node --loader ts-node/esm --no-warnings src/index.ts",
    "dev": "nodemon --watch src --ext ts --exec \"node --loader ts-node/esm --no-warnings src/index.ts\"",
    "build": "tsc",
    "clean": "rmdir /s /q dist
}
```

## Archivo de configuración ESLint (eslint.config.mjs)

```
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/", "node_modules/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-empty-interface": "warn",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      semi: ["error", "always"],
      quotes: ["warn", "double"],
      indent: ["warn", 2],
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
]);
```

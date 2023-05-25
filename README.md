# Resource

https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e#d69f

# pnpm-monorepo-test

react apps - mono repo test with pnpm

## Example of package install

pnpm add --filter shared-ui typescript -D

## Add names to packages if not exist

"name": "my-react-app"

## Add workspace

pnpm-workspace.yaml:

```
packages:
  # executable/launchable applications
  - 'apps/*'
  # all packages in subdirs of packages/ and components/
  - 'packages/*'
```

## Add dependency

pnpm add shared-ui --filter my-react-app --workspace

## Add ts config to shared

{
"compilerOptions": {
"jsx": "react-jsx",
"allowJs": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"module": "commonjs",
"target": "es5",
"lib": ["es2015", "dom"],
"outDir": "./dist"
},
"include": ["."],
"exclude": ["dist", "node_modules", "**/*.spec.ts"]
}

## Package to build on windows

pnpm add --filter shared-ui rimraf -D

change:
"scripts": {
"build": "rimraf dist && tsc"
}

## Build lib

pnpm --filter shared-ui build

## How to run

pnpm --filter my-react-app start

## Add prettier

pnpm i prettier -D -w

- .prettierrc

## Add eslint

pnpm add -w -D eslint

- .eslintrc.json
- .eslintrc-base.json

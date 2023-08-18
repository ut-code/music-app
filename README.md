## Music App

https://ut-code.github.io/music-app/

## Setup

一旦node_modulesを削除してから、以下のコマンドを実行してください。

frontendでは、

```bash
$ npm install
```

を実行してください

backendでは、

```bash
$ cd backend
$ npm install
$ npm run setup:env
```

.env ファイルの VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, DATABASE_URL を変更してください。

## Run

frontendでは、

```bash
$ npm run dev
```

を実行すると、`localhost:5173`` でアプリが起動します。
backendに関しては、

```bash
$ cd backend
$ npm run dev
```

を実行すると、`localhost:5050`でサーバーが起動します。

# tab
tab ui jquery vs vue

よくあるタブ UI をjquery　から　vue.jsに置き換えてみよう

## usage

```bash

// https
$ git clone https://github.com/zap-mueda/tab.git

// ssh
$ git clone git@github.com:zap-mueda/tab.git

$ npm i
```

## デモ

元となるjqueryで作られたタブとそれを置き換えたvue.jsで作られたタブの完成を`demo/public`ディレクトリに設置してます。

### ファイル説明

- index.jquery.html

jqueryで作られたタブ

- index.vue.html

vueで作られたタブ

- index.jquery-loop.html

jqueryで作られたタブ -タブのデータが動的だったらバージョン-


- index.vue-loop.html

vueで作られたタブ -タブのデータが動的だったらバージョン-

- index.vue-jsonServer.html

jsonServerを使ってタブのデータを取ってきたパターン *現時点だと、モジュールが足りないって言われて動きません。

### デモの確認方法

```bash
$ npm run start:demo
```

このコマンドにより、webpackのビルドとbrowser-syncによるローカルサーバーが立ち上がります。

デフォルトのhtmlは、`index.jquery.html`

次のURLで他のデモページも見れます。

- index.jquery.html: http://localhost:4040/
- index.vue.html: http://localhost:4040/index.vue.html
- index.jquery-loop.html: http://localhost:4040/index.jquery-loop.html
- index.vue-loop.html: http://localhost:4040/index.vue-loop.html


## demo/assets

`demo/assets`ディレクトリには、ビルド前のjsファイルとscssファイルがあります。

jqueryとvueで書き方がどう変わっているか確認できます。

- `demo/assets/jquery/jquery-main.js`
index.jquery.htmlで読み込んでいるjsです。

- `demo/assets/vue/vue-main.js`
index.vue.htmlで読み込んでいるjsです。

- `demo/assets/jquery/jquery-main-loop.js`
index.jquery-loop.htmlで読み込んでいるjsです。

- `demo/assets/vue/vue-main-loop.js`
index.vue-loop.htmlで読み込んでいるjsです。

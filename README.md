# Mp4ToM3U8Converter

## 事前準備
以下の事前準備が必要。

- [【Windows/Mac/Linux（Ubuntu）】Node.jsインストール方法](https://qiita.com/ryome/items/eec08b28aff294e8c3d6)

## フォルダ構成

```
.
├─index.js
├─【任意】.mp4
├─package-lock.json
├─package.json
└─node_modules
    └─...省略
```

## 使い方

1. `MP4` ファイルを配置する
2. `npm install` コマンドを実行する
3. `node index.js 【任意】.mp4` コマンドを実行する
4. 以下のように `output.m3u8` と `output0.ts ...etc` が作成されていれば成功

```
.
├─index.js
├─input.mp4
├─output.m3u8
├─output0.ts
├─output1.ts
├─output2.ts
├─output3.ts
├─output4.ts
├─output5.ts
├─package-lock.json
├─package.json
└─node_modules
    └─...省略
```

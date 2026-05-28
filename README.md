# dice-api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](./package.json)
[![Nuxt](https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)

サイコロの出目をランダムに返すシンプルなWeb APIです。
Nuxt 3 と Nitro サーバールートで実装されており、`GET /v1/dice` を叩くと 1〜6 の乱数を JSON で返します。

本番環境では <https://dice-api.genzouw.com/v1/dice> として公開しており、誰でも無料で利用できます。

## 目次

- [特徴](#特徴)
- [デモ](#デモ)
- [APIリファレンス](#apiリファレンス)
- [必要要件](#必要要件)
- [セットアップ](#セットアップ)
- [使い方](#使い方)
- [開発](#開発)
- [テスト](#テスト)
- [Docker での実行](#docker-での実行)
- [プロジェクト構成](#プロジェクト構成)
- [コントリビュート](#コントリビュート)
- [ライセンス](#ライセンス)
- [作者](#作者)

## 特徴

- 1〜6 の整数を乱数で返すサイコロAPI（暗号論的乱数 `node:crypto` の `randomInt` を使用）
- JSON 形式のシンプルなレスポンス（`{ "dice": <1-6> }`）
- CORS 全許可（`Access-Control-Allow-Origin: *`）でフロントエンドから直接呼び出し可能
- Nuxt 3 + Nitro サーバールートによる、フロントエンド（紹介ページ）と API の同梱配信
- Docker / docker-compose による即時デプロイに対応
- 認証不要・課金不要で無料利用可能

## デモ

紹介ページおよび本番エンドポイントは以下です。

- ランディングページ: <https://dice-api.genzouw.com/>
- API エンドポイント: <https://dice-api.genzouw.com/v1/dice>

## APIリファレンス

### `GET /v1/dice`

サイコロを1回振った結果を返します。

#### リクエスト

```bash
curl --request GET --url https://dice-api.genzouw.com/v1/dice
```

#### レスポンス

- ステータス: `200 OK`
- Content-Type: `application/json`
- `Access-Control-Allow-Origin: *`

```json
{ "dice": 5 }
```

| フィールド | 型     | 説明                        |
| ---------- | ------ | --------------------------- |
| `dice`     | number | 1 以上 6 以下の整数（乱数） |

## 必要要件

- [Node.js](https://nodejs.org/) `>=20`
- [npm](https://www.npmjs.com/)（または同等のパッケージマネージャ）
- 任意: [Docker](https://www.docker.com/) / [Docker Compose](https://docs.docker.com/compose/)

## セットアップ

```bash
# リポジトリの取得
git clone https://github.com/genzouw/dice-api.git
cd dice-api

# 依存パッケージのインストール
npm install
```

## 使い方

### 開発サーバーの起動

ホットリロード付きでローカルサーバーを起動します（デフォルト: <http://localhost:3000>）。

```bash
npm run dev
```

起動後、別のターミナルから API を叩いて動作確認ができます。

```bash
curl http://localhost:3000/v1/dice
# => {"dice":3}
```

### 本番ビルドと起動

```bash
# 本番向けビルド
npm run build

# ビルド結果のプレビュー起動
npm run preview
```

ビルド成果物は `.output/` 配下に生成され、`node .output/server/index.mjs` で起動できます。

## 開発

| コマンド           | 説明                                       |
| ------------------ | ------------------------------------------ |
| `npm run dev`      | 開発サーバーを起動（HMR有効）              |
| `npm run build`    | 本番用ビルドを生成                         |
| `npm run preview`  | ビルド成果物をローカルでプレビュー         |
| `npm run generate` | 静的サイトとして生成（※APIは動作しません） |
| `npm run lint`     | ESLint でコードチェック                    |
| `npm run test`     | Vitest によるテスト実行                    |

### 環境変数

| 変数名                | 説明                               | 既定値                      |
| --------------------- | ---------------------------------- | --------------------------- |
| `NUXT_PUBLIC_GTAG_ID` | Google Analytics の計測ID          | `G-XXXXXXXXXX`              |
| `PORT`                | Nitro サーバーが待受するポート番号 | `3000`（Dockerでは `8080`） |

## テスト

[Vitest](https://vitest.dev/) と [`@nuxt/test-utils`](https://nuxt.com/docs/getting-started/testing) を使用しています。

```bash
npm run test
```

テストファイルは `test/` 配下に配置してください。

## Docker での実行

### Dockerfile を使う

```bash
# イメージのビルド
docker build -t dice-api .

# コンテナ起動（コンテナ内 8080 をホスト 8080 にマッピング）
docker run --rm -p 8080:8080 dice-api

# 動作確認
curl http://localhost:8080/v1/dice
```

### docker-compose を使う

```bash
docker compose up -d --build

# 動作確認（ホスト側ポートは 10104）
curl http://localhost:10104/v1/dice
```

## プロジェクト構成

```
dice-api/
├── server/
│   └── routes/
│       └── v1/
│           └── dice.get.ts   # GET /v1/dice エンドポイント
├── pages/
│   └── index.vue             # ランディングページ
├── components/               # 共有Vueコンポーネント
├── layouts/                  # Nuxt レイアウト
├── middleware/               # ルートミドルウェア
├── plugins/                  # Nuxt プラグイン
├── public/                   # 静的アセット
├── test/                     # Vitest によるテストコード
├── nuxt.config.ts            # Nuxt 設定
├── Dockerfile                # 本番コンテナビルド定義
└── docker-compose.yml        # docker-compose 設定
```

## コントリビュート

バグ報告・改善提案は [Issues](https://github.com/genzouw/dice-api/issues) からお気軽にどうぞ。
プルリクエストを送る際は以下にご協力ください。

- [行動規範](./CODE_OF_CONDUCT.md) に同意のうえご参加ください
- [`PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md) のチェック項目に従って記載してください
- 送信前にローカルで `npm run lint` および `npm run test` がパスすることを確認してください

## ライセンス

[MIT License](./LICENSE) のもとで配布しています。

## 作者

- [genzouw](https://github.com/genzouw) (<genzouw@gmail.com>)

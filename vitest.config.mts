import { defineVitestConfig } from '@nuxt/test-utils/config';

// h3 v2 (Nitro v3) を含む Nuxt へ移行したあと `npm test` が
// `Could not resolve "h3-next/generic" imported by "@nuxt/test-utils"` で
// 起動しなくなった場合は、h3-next が未インストールであることが原因。
// @nuxt/test-utils は h3-next (= h3@2 のエイリアス) を optional な
// peerDependency として宣言しており、h3 v2 構成でのみ動的 import するため、
// 自動ではインストールされない。
//
// そのときは `npm ls h3` で root に解決されている h3 のバージョンを確認し、
// それと完全に同一のバージョンを alias で追加する。
//   npm i -D --save-exact 'h3-next@npm:h3@<root の h3 と同一バージョン>'
// `^2` のような範囲指定は使わないこと。npm の h3 には 2016 年公開の
// DEPRECATED な 2.0.0 が存在し、`^2` はそれを掴んで失敗する。また root の h3 と
// バージョンがずれると h3 v2 の実体が二重になり、原因の分かりにくい不整合を招く。
//
// 現行構成 (h3 v1) では不要。経緯は Issue #93 を参照。
export default defineVitestConfig({
  test: {
    environment: 'nuxt',
  },
});

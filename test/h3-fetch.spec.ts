import { describe, it, expect } from 'vitest';
import { registerEndpoint } from '@nuxt/test-utils/runtime';

// h3 のバージョン差による $fetch 経路の破綻を検知する回帰テスト。
//
// @nuxt/test-utils はテスト環境のセットアップ時に、解決した h3 のバージョンに応じて
// v1 / v2 いずれかの fetch 実装を組み立てる (dist/runtime/shared/environment.mjs)。
// v2 と判定された場合は h3-next (= h3@2 のエイリアス) を動的 import するが、
// h3-next は optional な peerDependency のため自動ではインストールされない。
//
// h3-next が解決できないケースは全テストが起動時に落ちるため検知できる。
// 一方、h3 のバージョン誤検出により v1 経路のまま v2 世代の Nitro を叩く場合は
// 「登録したはずのエンドポイントが取れない」という静かな不整合になる。
// このテストはその静かな破綻を検知するための最小の当たり判定である。
// 経緯は Issue #93 を参照。
registerEndpoint('/v1/dice', () => ({ dice: 6 }));

describe('$fetch によるエンドポイント解決', () => {
  it('registerEndpoint で登録したエンドポイントを $fetch で取得できる', async () => {
    const res = await $fetch<{ dice: number }>('/v1/dice');
    expect(res).toEqual({ dice: 6 });
  });
});

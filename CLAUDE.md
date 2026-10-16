# shiroari-expert（shiroari-expert-navi.com）

- ソース: このリポ（webmaster0818/shiroari-expert, main）。Next.js static export → `out/`
- デプロイ（方式B）: `npm run build` → `rsync -a --delete --exclude .git out/ ~/projects/shiroari-expert-deploy/` → deploy リポで commit → `git push origin HEAD:main`（CF Pages 連携・反映は約3分）
- 公開前チェック: `python3 ~/.openclaw/workspace/site-precheck.py --origin https://shiroari-expert-navi.com out` が全項目OK
- アフィリエイト: felmat（シロアリ110番・`lib/providers.ts` の affiliateUrl/affiliateBanner）。文言修正でも触らない。トラッキングURLは開かない
- 文章の基準: `~/.openclaw/workspace/writing-standards.md` §8（ビジネス文書基準）

## ログ

### 2026-10-16 全文言のビジネス文書化（MediaXAI 指示・writing-standards §8）
- 30ファイル（TOP・ヘッダー/フッター・業者データ・比較表/ランキング・エリア47・記事14・口コミ・about/editorial・補助金データ）を です・ます調／「〜をおすすめします」「〜にてご確認ください」に統一。口調の砕けた4記事（点検時期・保証・相見積もり・種類と分布）は全面的に書き換え。
- 用語: 「〜な人」→「〜な方」、確認日は「2026年10月14日」形式に統一（`sourceConfirmed` は日付のみ。RankingTable が「時点で公式サイトにて確認した情報です」を付ける）。`subsidies.ts` の体言止め（「〜あり。要確認。」）を文章に。
- 表示の不具合も修正: エリアページで ie="check" の県（千葉・東京・福井・京都・兵庫）に「イエシロアリの分布域ではないため」と出ていた／FAQ の「イエシロアリについては協会は」の重複／口コミページの「よくある質問」見出し二重・電話番号の括弧の入れ子。
- 口コミの引用文（ReviewCard）と検索語の「やばい」は原文のため変更していない。
- src 897c2e3 ／ deploy 005f557。felmat のコードは out/ と本番で一致（3ページ）を確認。
- 未対応（事実確認が必要）: 「公益社団法人（日本しろあり対策協会）加盟の業者を中心に掲載」（アサンテの正会員記載は 10/16 に削除済み・他社の加盟も未確認）、gyousha-erabikata の「アサンテ・ハウスプロテクトは100%自社施工を公式に明記」、ハウスプロテクトの「業界最長クラスの保証期間」、プライバシーポリシーの ASP 名（A8・もしも等と記載・実際は felmat）、hane-ari の「イエシロアリは関東以西」と areas の「神奈川県以西」の表現差、kasai-hoken の雑損控除「対象となり得ます」と補助金記事（国税庁: 駆除費用は対象）の差、yobou の「新築時は瑕疵担保保険で防蟻処理も施工されている」。

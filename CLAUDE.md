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

### 2026-10-17 know記事3本追加（okina「記事拡張つづけて」）
- `shiroari-houmon-hanbai`（法律）: 国民生活センター（点検商法の相談件数 2023〜2025年度・2018/3/1報告書の事例と白蟻駆除サービス平均契約購入額518,030円＝2007〜2017年度PIO-NET）、国センのクーリング・オフ解説、消費者庁 特商法ガイド「訪問販売」、協会Q&A（調湿材・換気扇・防カビは防除効果と無関係）。
- `shiroari-baria-beito`（比較）: 協会「防除施工標準仕様書 令和7年10月版」＋「シロアリ防除について」＋Q&A。価格は書かない（協会の「一般的にベイトのほうが費用がかかる」のみ）。「バリア工法」は仕様書上の土壌処理・木材処理と注記。
- `shiroari-chikunensu-meyasu`（予防）: 仕様書「5年を目途に再処理」・記録保存5年、建築基準法施行令49条2項（e-Gov）、協会Q&A、蟻害・腐朽検査制度。
- 内部リンク: yukashita-tenken/gyousha-erabikata→houmon、kuchu-hiyou/yobou→baria、tenken-jiki/chuuko→chikunensu。sitemap.xml は手で3行追加（generate-sitemap.mjs は全URLの lastmod を当日にするため使っていない）。画像なし（既存know記事も画像なし）。
- 確認できず書かなかったこと: 工法別の価格・期間、ベイト工法が向く住宅（協会は一律に示していない）、住まいるダイヤルの電話番号（現行公式ページで番号を確認できず名称とリンクのみ）、シロアリ駆除に限った最新の相談件数（国センの公表は点検商法全体）。
- 既存記事との食い違い（未修正・要判断）: yobou の比較表「ベイト初期費用15〜25万円＜バリア21〜30万円」は協会Q&A「一般的にベイトのほうが費用がかかる」と逆。yukashita-tenken の「クーリングオフは内容証明郵便が確実」は国セン（はがき可・特定記録/簡易書留）・消費者庁（特定記録・書留・内容証明等）より狭い。yobou「ベイトはベタ基礎・狭小床下にも対応可」は出典未確認。
- precheck 全項目OK・heading-lint 0件。src ac6cb75 ／ deploy ab0f303。本番3URL 200・title一致を確認（反映まで約7分）。

### 2026-10-20 公式と食い違う3か所の修正（10/19 宣言どおり・okina 回答なし）
- yobou 比較表: 「初期費用 バリア21〜30万円／ベイト15〜25万円」→ 協会Q&A 2682「一般的にベイト工法のほうが費用がかかります」（出典リンク付き）。「適合住宅：ベタ基礎・狭小床下にも対応可」行は根拠なしで削除。
- yukashita-tenken: 「書面（内容証明郵便が確実）」→ 国セン「クーリング・オフ」どおり「書面（はがき可）または電磁的記録・はがきは両面コピー・特定記録郵便や簡易書留・記録保管」（出典リンク付き）。
- 同じ記述: kuchu-hiyou の5年TCO表「ベイト 初回費用15〜25万円」→「業者・建物により異なる」＋協会Q&A の一文。
- 未対応: yobou の20年シミュレーション「年間ベイト契約 60〜100万円 ＜ 5年ごとのバリア 84〜120万円」と kuchu-hiyou の5年TCO額は出典なしのまま（協会の「ベイトのほうが費用がかかる」と方向が合わない箇所あり）。
- src f2e9ffd ／ deploy 1f6ad7c。precheck 全項目OK。本番3URL 新文言あり・旧文言0件。Indexing API 3URL OK（google ライブラリが全 python から消えていたため /tmp の venv で実行）。

### 2026-10-22 火災保険記事（0クリック5語「火災保険 シロアリ駆除」等・32〜40位）
- 冒頭に結論ボックス（火災保険は原則対象外／雑損控除＝修繕費・駆除費は対象・予防費は対象外／「保険で無料」勧誘は国センが注意喚起）。FAQ 5→8（台風・大雨後のシロアリ＝保険会社の公式説明は確認できず／「保険で無料」と言われたら＝国セン 2018/9/6・2021/9/2／予防費用は雑損控除の対象外）。description を差し替え（91字）。title は変えていない。
- 公式と食い違っていた箇所: 雑損控除「対象となり得ます」「虫害は災害扱いの可能性」→ 国税庁 質疑応答事例「シロアリの駆除費用」（施行令9条・修繕費と駆除費は対象）と No.1110 の要件・計算式どおり。出典のない「事故通知期限（通常30〜60日以内）」「約款で…と明記されています」（FAQ1）を削除。10/18 地震保険・10/19 水濡れ（SOMPOダイレクト出典）はそのまま。
- 確認できず書かなかった: 台風・水災後に見つかったシロアリ被害の扱い（保険会社の公式説明なし）、保険金請求の時効（e-Gov 保険法95条がメンテ中で未確認）、保険会社の約款原文の「虫食い」条項。SOMPOダイレクトの解説は 10/22 は 503 で再確認できず（新たな記述には使っていない）。
- 未修正（報告のみ）: 本文「火災保険でシロアリ被害が対象外の理由」の「約款には…と明記されているのが一般的」（約款原文未確認）、kuchu-hiyou FAQ の雑損控除「対象となり得ます」（国税庁は「対象」）。
- src e95a1fe ／ deploy ffcc041。precheck 全項目OK（71p）・heading-lint 0件。差分は対象ページ・TOP（記事カードの description）・sitemap のみ。本番73ページ deploy と一致、反映約10分。計測リンク 10→10。Indexing API OK。

### 2026-10-24 20年シミュレーション・5年TCO額の削除（10/23 既定案A・okina 回答なし）
- yobou: 20年シミュレーション表と注記、それを前提にした「定期予防のほうが長期的に安い」3か所（冒頭・まとめ・FAQ）を削除。
- kuchu-hiyou: 5年TCO表・ベイト「5年総額30万円前後」・FAQ「5年TCOで拮抗」を削除。h2「工法による費用の違い」に既存の協会Q&A 2682 引用のみ残す。新しい数字は入れていない。
- 協会サイトは 10/24 も公開停止中（新しい協会の引用は追加せず）。
- 未変更: title・description・ナビ・TOP・about・site.ts・エリア47ページの「5年TCO」「5年間の総額で比較した結果は」表記（okina 判断待ち）。
- src 9c36524 ／ deploy 1a1a893。precheck 全項目OK・可視差分2ページのみ・計測リンク 10→10・本番旧記載0件・Indexing OK。

### 2026-10-25 47都道府県の補助金説明を削除（10/24 既定案・okina 回答なし）
- `app/lib/subsidies.ts` の note 47件はいずれも出典URLなし → 全件「各自治体にてご確認ください。」に統一（千葉県「シロアリ防除工事が対象となる事例」＝我孫子市の手引きと不一致、も削除）。新しい記述は足していない。
- 可視差分は area 47ページ＋補助金記事の地域別一覧のみ。計測リンク 10→10。precheck 全項目OK。協会サイトは 10/25 も公開停止中。
- 未変更: TOP FAQ（app/page.tsx）の「リフォーム補助制度の一部としてシロアリ防除工事が対象になるケースがあります」（出典なし・同趣旨）。
- src 8239c34 ／ deploy a7f328c。本番旧文言0・72ページ deploy と一致・Indexing 48本 OK。

### 2026-10-26 約款の一文削除・雑損控除FAQ（10/25 既定案宣言・okina 回答なし）
- kasai-hoken 本文: 「約款には…と明記されているのが一般的です」を削除（約款原文未確認）。
- kuchu-hiyou FAQ: 雑損控除「対象となり得ます」→ 国税庁 質疑応答事例「シロアリの駆除費用」どおり修繕費・駆除費は対象／予防費は対象外＋出典URL（10/26 原文確認）。
- 未変更: kasai-hoken FAQ1「除外されているのが一般的」・前提ボックス「一般的な約款の傾向」・本文「損害保険業界の標準的な扱い」（同趣旨・出典なし）。
- src 3eb2b3c ／ deploy b2d7f2f。precheck 全項目OK・可視差分2ページ・計測リンク 10→10・本番旧文言0・Indexing OK。

### 2026-10-27 中古住宅記事（0クリック語「中古住宅 シロアリ」67位）
- title・description・冒頭の結論ボックス・FAQ1 を差し替え。FAQ「瑕疵保険でシロアリ被害は補償されますか？」を追加（5→6）。根拠は既存住宅状況調査方法基準（告示82号 5条2項「著しい蟻害」の目視調査）・国交省（建物状況調査の限界／瑕疵保険の保険期間1・2・5年）・ハウスプラス住宅保証パンフ 2026/7/23版（引渡前検査に合格が必要・「虫食い」は免責事由）・国税庁 No.1211-3。
- 公式と違っていた記載: 住宅ローン控除「築20年超でも」（築年数要件は令和3年居住分まで）、瑕疵保険「5年程度保証」。出典なしの「防蟻処理の施工歴が加入条件」「保険付き物件としての価値」は削除。
- 未変更: 同ページの費用表・FAQ「費用相場」（出典なし）、TOP の FAQ とカード説明の「瑕疵保険の防蟻処理要件」2か所。
- src acf7bdc ／ deploy 4340052。precheck 全項目OK・可視差分は対象ページと TOP カードのみ・計測リンク 10→10・Indexing OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-10-27/

### 2026-10-27 16時 畳の下の初期症状・エリア一覧の沖縄（0クリック語）
- higai-shoujou: 冒頭に「畳の下の初期症状」結論ボックス・FAQ「畳の下を自分で確かめる方法」追加・畳FAQに出典（東京都保健医療局「シロアリ」2026-09-10更新・10/27確認）。title・description 不変。
- /area/: 冒頭に沖縄県の対象種・羽アリ時期と /area/okinawa/（未インデックス）への導線（協会Q&A・既存の記載と同じ）。
- 未対応: 本文の蟻道「幅5〜10mm」・jibun-de「3〜6ヶ月の忌避効果」などは出典なしのまま。
- src 8c669f3 ／ deploy ad37815。precheck 全項目OK・可視差分2ページ・計測リンク 10→10・本番確認・Indexing OK。

### 2026-10-28 「5年TCO」表記の言い換え（10/27 宣言・okina 回答なし）
- 試算は 10/24 に削除済みなのに残っていた表記を「費用比較」「費用の比べ方」「駆除費用の相場と比べ方」に。出どころ: articles.ts（kuchu-hiyou の shortTitle・title・description）・site.ts・layout.tsx（ナビ・フッター）・ArticleLayout.tsx・page.tsx（TOP FAQ 最後の一文・紹介文・ボタン）・about・area/[slug]（「5年間の総額で比較した結果は」）。slug 不変。
- html 件数: 5年TCO 1,094→0・TCO 1,106→0・「5年間の総」102→0・felmat 10→10。
- 「1坪7,000〜10,000円が中央値」等の okina 判断待ちは未変更。
- src 942b31f ／ deploy 81aa1db。precheck 全項目OK・可視差分74ページ全て置換由来・本番 TCO 0・Indexing 10本 OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-10-28/

### 2026-10-28 11時 okina「全部実行」A案（費用・補助金・約款・瑕疵保険）
- 32 kuchu-hiyou: 「1坪7,000〜10,000円が中央値（30坪21〜30万円）」本文・FAQ、「年間モニタリング契約（年間2〜4万円程度）」の金額を削除。同じ値の TOP FAQ（費用）・kuchu-hiyou description（articles.ts）からも削除。未変更（報告のみ）: kuchu-hiyou 本文「業界全体での費用は21万円〜30万円が中心的な価格帯」・FAQ「30坪で20万円前後が中央値」、yobou FAQ「21〜30万円程度」、yukashita-tenken「5万〜10万円程度が中央値」、chuuko-juutaku-inspection 費用4か所。
- 36 TOP FAQ（補助金）: 「リフォーム補助制度の一部としてシロアリ防除工事が対象になるケース」を削除。
- 43 kasai-hoken: FAQ1「除外されているのが一般的」・前提ボックス「一般的な約款の傾向」・本文「約款上「対象外損害」…業界の標準的な扱い」の段落を削除。
- 48 TOP FAQ（中古住宅）・記事カード: 「瑕疵保険で防蟻処理が求められる／防蟻処理要件」→ ハウスプラス住宅保証パンフ（2026/7/23版・10/28 再確認）どおり「引渡し前の検査（現場検査）合格が加入条件・虫食いは免責事由」。
- src 2c4fb8c ／ deploy 6040584。precheck 全項目OK（71p）・可視差分3ページ（TOP・kuchu-hiyou・kasai-hoken）・felmat 10→10。記録 ~/.openclaw/workspace/growth/okina/shiroari-allA-2026-10-28/

### 2026-10-29 羽アリ見分け方（0クリック語「シロアリ 羽アリ 白くない」37.7位）
- title・description・冒頭の結論ボックス・FAQ「シロアリの羽アリは白くないのですか？」追加（5→6）。根拠は川崎市「シロアリ」PDF・秋田市「衛生害虫（シロアリ）」・中野区「シロアリについて」（10/29 確認）。協会サイトは 10/29 も公開停止中。
- 未変更（出典なし）: 同ページの体長表・イエシロアリ「黄褐色〜橙色」等。
- src 86eac73 ／ deploy ab96159。precheck 全項目OK・可視差分2ページ（対象・TOP カード）・felmat 10→10・本番確認。Indexing 429。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-10-29/

### 2026-10-30 自分で駆除（0クリック語「シロアリ駆除 自分で」系 8語11表示・0クリック）
- title・description・冒頭の結論ボックス・FAQ「シロアリ駆除は自分でできますか？」追加（5→6）。根拠は秋田市「衛生害虫（シロアリ）」・東京都保健医療局「シロアリ」・川崎市「シロアリ」PDF・中野区「シロアリについて」（10/30 確認）。協会サイトは 10/30 も公開停止中。
- 未変更（出典なし）: 同ページの「3〜6ヶ月」2か所・「5年程度」・「数ヶ月程度」・「4〜6月」。
- src 778a560 ／ deploy ac950dd。precheck 全項目OK・可視差分2ページ（対象・TOP カード）・felmat 10→10・本番確認・Indexing OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-10-30/

### 2026-10-31 業者の選び方（0クリック語「シロアリ駆除 業者 選び方」3表示39位）
- 10/17〜10/30 修正済みでない表示ありページは gyousha-erabikata のみ。title・description・冒頭の結論ボックス・FAQ1 差し替え・FAQ「突然訪問してきた業者に床下の点検を勧められたら」追加（5→6）。根拠は中野区「シロアリについて」（2026-06-22更新）・国民生活センター 点検商法（2018/3/1）・同「クーリング・オフ」・消費者庁 188（10/31 確認）。協会サイトは 10/31 も公開停止中。
- 未変更（出典なし）: 本文「業界標準は5年保証」「100%自社施工を公式に明記」「2026年5月時点で確認」・FAQ「多くの業者が無料を明記」・「協会の施工基準に沿って施工する義務」。
- src edf771e ／ deploy d630989。precheck 全項目OK・可視差分2ページ（対象・TOP カード）・felmat 10→10・本番確認（09:28 反映）・Indexing OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-10-31/

### 2026-11-02 中古住宅記事の出典なし費用を削除（11/1 宣言・okina 回答なし）
- chuuko-juutaku-inspection: 費用表4セル・FAQ 2値・まとめ「数万円」を削除し「各社にお見積りをご確認ください」等に。h2「費用の目安」→「費用の確認のしかた」。sitemap lastmod 11-02。
- 未変更（同じ値・件数のみ）: yobou FAQ「21〜30万円」・yukashita-tenken「5万〜10万円が中央値」・kuchu-hiyou「21万円〜30万円が中心的な価格帯」。
- src 8933f68 ／ deploy 0b98bf8。precheck 全項目OK・可視差分1ページ・felmat 10→10・本番旧値0・Indexing OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-02/

### 2026-11-03 TOP の「4.7点」に出典（trust-audit C6）
- TOP ランキングのハウスプロテクト「全社クチコミ5,492件の平均4.7点」→ 同社公式TOP（11/3 確認）どおり「5702件の平均点 4.7（2024年6月時点・同社調べ）」＋当サイトの評価ではない旨＋出典URL。app/page.tsx で TOP だけ差し替え（providers.ts 不変）。
- 未変更: gyousha-erabikata の同じ記載（5,492件・出典なし・okina 判断待ち）。
- src 83640f7 ／ deploy 6c2ee38。precheck 全項目OK・可視差分1ページ・felmat 10→10・本番旧値0・Indexing OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-03/

### 2026-11-04 業者の選び方の出典なし6種類を削除（11/3 宣言・okina 回答なし）
- gyousha-erabikata: 「業界標準は5年保証」「100%自社施工を公式に明記」「2026年5月時点で確認」・FAQ「多くの業者が無料を明記」「協会の施工基準に沿って施工する義務」「シェアNo.1」（本文とカード）を削除。カードの tagline は page.tsx で本ページだけ差し替え（providers.ts 不変）。updatedAt・sitemap lastmod 11-04。
- 未変更: ★5,492件（okina 判断待ち）。同じ記述の他ページ＝kuchu-hiyou「5年保証は業界標準」1・yukashita-tenken「多くの業者が無料」2・TOP カード「シェアNo.1」1。
- src 4397fd5 ／ deploy 0d306b2。precheck 全項目OK・可視差分1ページ・felmat 10→10・Indexing OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-04/

### 2026-11-05 sitemap lastmod 3記事を実際の変更日に（11/4 宣言・okina 回答なし）
- aimitsumori・hosho-naiyou 09-17→10-16／tenken-jiki 09-17→10-17（git log で確認）。title・本文は不変。
- 未変更: 3記事のページ内の更新日（updatedAt・dateModified は 2026-09-17 のまま）。★5,492件（okina 判断待ち）。
- src 9ae584b ／ deploy d6a389d。precheck 全項目OK・可視差分0ページ・felmat 10→10・Indexing 2本。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-05/

### 2026-11-06 出典なし費用3か所（11/5 宣言・okina 回答なし）
- yobou FAQ「21〜30万円」・kuchu-hiyou「21万円〜30万円が中心的な価格帯」を削除し見積もりでの確認案内に。yukashita-tenken「5万〜10万円が中央値」→ JSHI FAQ（基準なし）・国交省 建物状況調査活用の手引き 令和6年4月（「6万円程度～」が目安・11/6 確認）。3ページの updatedAt・sitemap lastmod 11-06。title・description 不変。協会サイトは 11/6 も公開停止中。
- 未変更: kuchu-hiyou FAQ「30坪で20万円前後が中央値」・yobou「電気代月100〜500円」（出典なし）。★5,492件・TOP「シェアNo.1」・ページ内更新日3記事（okina 判断待ち）。
- src c14b1f2 ／ deploy 8a4b150。precheck 全項目OK・可視差分3ページ・felmat 10→10・本番旧値0・Indexing 3本 OK。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-06/

### 2026-11-07 業者の選び方の★を公式出典に（11/6 宣言・okina 回答なし）
- gyousha-erabikata: ハウスプロテクト「全社クチコミ5,492件の平均4.7点」→ TOP と同じ「5702件の平均点 4.7（2024年6月時点・同社調べ）」＋当サイトの評価ではない旨＋出典URL（公式 11/7 確認・11/3 から不変のため TOP は変更なし）。page.tsx で差し替え。providers.ts の 5,492 は表示されない残り値。updatedAt・sitemap lastmod 11-07。
- src 4a4cb2d ／ deploy adb824d。precheck 全項目OK・可視差分1ページ・felmat 10→10・本番旧値0・71ページ deploy と一致。Indexing 枠切れで未送信。協会サイトは 11/7 も公開停止中。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-07/

### 2026-11-08 TOP「シェアNo.1」削除・3記事のページ内更新日（11/7 宣言・okina 回答なし）
- providers.ts アサンテ tagline「東証プライム上場・シロアリ対策シェアNo.1を掲げる大手（公式記載）」→「東証プライム上場の大手（公式記載）」（gyousha-erabikata の page.tsx 差し替えと同じ文言）。表示は TOP のみ（他ページで tagline を出すのは gyousha-erabikata＝上書き済み、reviews/shiroari-110＝110番の tagline）。sitemap / lastmod 11-08。
- aimitsumori・hosho-naiyou updatedAt 09-17 → 10-16（897c2e3）、tenken-jiki 09-17 → 10-17（ac6cb75）。sitemap lastmod（11/5 修正済み）と一致。
- src 32fd782 ／ deploy b3a5a50。precheck 全項目OK・可視差分4ページ・felmat 8→8。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-08/

### 2026-11-09 kuchu-hiyou FAQ 中央値削除・中古住宅記事に国交省の調査費用目安（11/8 宣言・okina 回答なし）
- kuchu-hiyou FAQ「初回工事費はバリア工法のほうが安く、30坪で20万円前後が中央値です。」→「初回工事費はバリア工法のほうが安い傾向です。」（他の数字は不変）。
- chuuko-juutaku-inspection: 国交省「建物状況調査（インスペクション）活用の手引き」令和6年4月（content/001735147.pdf・11/9 確認・原文「調査費用は、物件の規模の加えて、調査実施者によっても異なりますが、６万円程度～が目安となります。」）を表のホームインスペクション行・表下の注記・FAQ に出典つきで追加。シロアリ床下点検（単独）・瑕疵保険の行は確認の案内のまま（国交省の値は建物状況調査のもの）。両記事 updatedAt・sitemap lastmod 11-09。
- src 42925c2 ／ deploy 3114cb0。precheck 全項目OK・可視差分2ページ・felmat 10→10・本番71ページ deploy と一致。Indexing 429 で未送信。協会サイトは 11/9 も公開停止中。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-09/

### 2026-11-10 出典なしの一般化3か所（11/4 と同じ型）
- kuchu-hiyou「5年保証は業界標準ですが、」→「保証期間や、保証期間中の再発時の無償対応範囲は業者ごとに異なります。」／yukashita-tenken 冒頭・まとめ「多くの業者が無料」2か所 →「点検が無料かどうかは業者により異なるため確認を」。一次情報（公的・業界団体）で裏付けなし（11/10 確認・協会は公開停止中）。両記事 updatedAt・sitemap lastmod 11-10。title・description 不変。
- src 5c93918 ／ deploy 5834ed9。precheck 全項目OK・可視差分2ページ・felmat 10→10・本番73ページ deploy と一致。Indexing 枠切れで未送信。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-10/

### 2026-11-11 yukashita-tenken 大手3社の無料点検（出典確認）
- 3社の公式を 11/11 に開いて原文確認: シロアリ110番 /shiroari/「無料で事前調査」（対応エリア・加盟店・現場状況等の注記あり）／アサンテ /termite/「床下診断・お見積りは無料です。施工は有料」／ハウスプロテクト トップ「無料で調査・お見積もりを実施」（害獣駆除中心の案内）。FAQ・本文・箇条を3社限定＋原文引用＋公式リンク＋確認日に。「業界主要各社は」の一般化は外し、その他は業者により異なるため確認を。
- 協会サイト（hakutaikyo.or.jp）は 11/11 に再開を確認。使用中の協会URL 24本すべて 200。協会リンク55ページ・shurui-bunpu の協会値の再確認は未実施。
- src 7f7d133 ／ deploy a2640709。precheck 全項目OK・可視差分1ページ・felmat 10→10・本番72ページ deploy と一致。Indexing 枠切れ。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-11/

### 2026-11-12 協会リンク55ページ・協会値の再照合（協会サイト再開後）
- 協会URL 24本を 11/12 に取得し原文と照合: shurui-bunpu・area 48p・areas.ts の分布/群飛、baria-beito・chikunensu-meyasu の仕様書（令和7年10月版のまま）/シロアリ防除について/蟻害・腐朽検査制度、Q&A 19本の引用 → 食い違い0・リンク切れ0。
- 既存の協会の確認日表示だけ 9/17・10/17・10/20 → 2026年11月12日（55p）。協会以外の出典の日付・updatedAt・lastmod は不変。
- src cd71e69 ／ deploy 45648714。precheck 全項目OK・可視差分55ページ（確認日のみ）・felmat 10→10・本番73本 deploy と一致。Indexing は確認日のみのため未送信。記録 ~/.openclaw/workspace/growth/okina/shiroari-fix-2026-11-12/

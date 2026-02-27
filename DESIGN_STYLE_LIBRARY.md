# Design Style Library

リファレンスサイトから抽出したデザインスタイルの定義集。
各スタイルのトーン、コンポーネント、CSS変数、再現ルールを記録する。

## Index

| # | Name | URL | Mood | Tags |
|---|------|-----|------|------|
| 01 | Locomotive Bold | scroll.locomotive.ca | 大胆で自信に満ちたテクニカル・クリエイティブ | bold, blue-dominant, two-tone |
| 02 | Topology Precision | topology.vc | 静かな威厳と技術的信頼感が共存するダークVC | dark-theme, minimal, uppercase-nav |
| 03 | Antonsson Noir | andreasantonsson.dev | 漆黒の中に浮かぶミニマルなクラフト感 | pure-black, portfolio, serif-display |
| 04 | Gander Warmth | takeagander.com | 温もりのあるクリーム地にインクのような手触り感 | warm-cream, editorial, custom-serif |
| 05 | Planetono Carnival | planetono.space | 赤とイエローが弾けるポップ＆コスミック遊園地 | bold-red, playful, space-theme |
| 06 | Sileent Monochrome | sileent.com | 静寂のなかに潜む洗練された白黒コントラスト | monochrome, ai-studio, pill-buttons |
| 07 | Good Fella Craft | good-fella.com | 職人気質のダークトーンにオレンジが差すクラフト系スタジオ | dark-craft, orange-accent, nav-reference |
| 08 | Foundrline Signal | foundrline.com | スタートアップの緊張感とクリアなシグナルを発するCTA設計 | cta-reference, startup, mono-font |

---

## Style-01: Locomotive Bold

**URL:** https://scroll.locomotive.ca/
**Mood:** 大胆で自信に満ちたテクニカル・クリエイティブ

### トーン（全体の印象）
- **color_palette:** ロイヤルブルー(#202DED) × ピュアブラック × ホワイト。アクセントにコーラル(#FF6B5B)
- **typography:** 大胆なカスタムセリフ見出し + ニュートラルなゴシック本文。コントラスト強め
- **spacing:** ゆとりのある余白。セクション間は大きく取る
- **imagery:** プロダクトのスクリーンショットとコード表現
- **overall_impression:** テック企業の自信とクリエイティブの遊び心が同居

### コンポーネント
- **header:** 固定ナビ、ロゴ左+リンク右、スクロールで背景色変化
- **hero:** フルスクリーン、大きなタイポグラフィ中央配置、スクロールインジケーター
- **buttons:** ゴーストボタン（ボーダーのみ）、ホバーでフィル
- **sections:** 交互のブルー/ホワイト背景、スクロールトリガーアニメーション
- **footer:** ダーク背景、グリッドレイアウト

### CSS変数（再現用）
```css
--color-primary: #202DED;
--color-secondary: #000000;
--color-accent: #FF6B5B;
--color-bg: #FFFFFF;
--color-text: #000000;
--font-display: 'Playfair Display', serif;
--font-body: 'Satoshi', sans-serif;
--spacing-section: 120px;
--radius-button: 0px;
--transition-default: 0.4s cubic-bezier(0.22, 1, 0.36, 1);
```

### 再現のためのデザインルール
- ブルーは背景として大面積で使い、白テキストを乗せる
- 見出しはセリフ体で大きく、本文はゴシックで控えめに
- ボタンはボーダーのみのゴーストスタイルが基本
- スクロールアニメーションを多用し、動きで視線を誘導する
- セクション間の余白は120px以上

### 備考
- PP Locomotive New → Google Fonts代替: Playfair Display
- Helvetica Now Display → Google Fonts代替: Satoshi (fontsource) または DM Sans

---

## Style-02: Topology Precision

**URL:** https://www.topology.vc/
**Mood:** 静かな威厳と技術的信頼感が共存するダークVC

### トーン（全体の印象）
- **color_palette:** ダークグレー(#151515)を基調に、ライトグレー(#E4E2D8)のテキスト。ブルーグレー(#A7B4BA)のアクセント
- **typography:** LazareGrotesk見出し + Space Monoコード感。uppercaseナビ、極小フォントサイズ(10.5px)
- **spacing:** 大胆な余白。スクロールアニメーションで空間を演出
- **imagery:** 抽象的なテクスチャと幾何学的パターン
- **overall_impression:** VC/テックファームの信頼と先端性。声を荒げず、静かに実力を示す

### コンポーネント
- **header:** 固定ナビ、左ロゴ+右リンク、uppercase・極小サイズ・letter-spacing広め(1.05px)
- **hero:** フルハイトビューポート、アニメーションテキスト
- **buttons:** ゴーストボタン、border-radius: 375px（完全ピル型）、1px solid rgba(255,255,255,0.3)
- **cards/list:** ボーダー区切りのリスト、ホバーでサブテキスト表示
- **sections:** フルスクリーンアンカーセクション、スクロールスナップ
- **footer:** ミニマル、テキストリンクのみ

### CSS変数（再現用）
```css
--color-primary: #151515;
--color-secondary: #E4E2D8;
--color-accent: #A7B4BA;
--color-mid-gray: #9B9B9B;
--color-dark-gray: #151515;
--color-border: rgba(224, 232, 236, 0.3);
--font-display: 'Space Grotesk', sans-serif;
--font-mono: 'Space Mono', monospace;
--spacing-section: 96px;
--radius-pill: 375px;
--transition-default: 0.3s ease;
```

### 再現のためのデザインルール
- 背景は#151515の深いダークグレー（ピュアブラックではない）
- テキストは#E4E2D8の温かみのあるライトグレー
- ナビはuppercase、10-11pxの極小サイズ、letter-spacing: 1px以上
- ボタンは完全ピル型（border-radius: 375px）のゴースト
- ボーダーにはrgba(255,255,255,0.3)の半透明白
- モノスペースフォント（Space Mono）をアクセントに使用

### 備考
- LazareGrotesk → Space Grotesk が最も近い代替
- Space Mono はそのまま Google Fonts で使用可能
- Magnetikフォントも使用（装飾的なディスプレイ）

---

## Style-03: Antonsson Noir

**URL:** https://www.andreasantonsson.dev/
**Mood:** 漆黒の中に浮かぶミニマルなクラフト感

### トーン（全体の印象）
- **color_palette:** ピュアブラック(#000000) × ピュアホワイト(#FFFFFF)。2色のみの極限ミニマル
- **typography:** Dahlia（セリフ）見出し + Inter本文。コントラスト型ペアリング
- **spacing:** フルスクリーンセクション、各作品に1画面を割り当て
- **imagery:** プロジェクトのスクリーンショット/映像を大きく表示
- **overall_impression:** 作品が主役。フレームワークは徹底的に消える

### コンポーネント
- **header:** 固定ナビ、テキストのみ（12.6px）、左にロゴテキスト+右にIndex/About
- **hero:** フルビューポート、中央に大きなプロジェクト映像
- **buttons:** テキストリンクのみ、ボーダーなし。ホバーで下線 or 色変化
- **cards/list:** フルスクリーンセクション型。各セクションが1プロジェクト
- **sections:** w-full h-screen、flex center配置、select-none
- **footer:** 最小限、メールコピーボタン + アベイラビリティ表示

### CSS変数（再現用）
```css
--color-primary: #000000;
--color-text: #FFFFFF;
--color-bg: #000000;
--font-display: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;
--size-base: 10;
--grid-col-width: calc(8.33333vw - 3.2rem*2/12);
--spacing-section: 100vh;
```

### 再現のためのデザインルール
- 背景はピュアブラック、テキストはピュアホワイト。中間色なし
- 見出しはセリフ体で大きく、キャンバスの主役に
- 各プロジェクトにフルスクリーン1枚を割り当てる
- UIコンポーネントは最小限。ボタンは目立たせない
- select-noneでテキスト選択を防止（ギャラリー感）
- スクロールで作品間を移動するフルページスナップ

### 備考
- Dahlia → Playfair Display が雰囲気的に近い
- 極限のミニマリズム。装飾0。
- Tailwind CSSを使用（クラス名から判別）

---

## Style-04: Gander Warmth

**URL:** https://takeagander.com/
**Mood:** 温もりのあるクリーム地にインクのような手触り感

### トーン（全体の印象）
- **color_palette:** クリーム(#FFF4ED)基調、ブラック(#171717)テキスト、ピーチ(#FFC29B)アクセント。ブルー(#87A3EC)とイエロー(#FFC34F)のサブカラー
- **typography:** Denim INKカスタムフォント。clampでレスポンシブサイズ（170px〜270px見出し）
- **spacing:** セクション間200px、エッジパディング24px。CSS変数で体系化
- **imagery:** 大きなプロジェクト写真、600px高のプロジェクト画像
- **overall_impression:** 紙とインクの質感。デジタルなのに手で触れそうな温もり

### コンポーネント
- **header:** ダークバー内に白テキスト、ミニマルなナビリンク
- **hero:** 超大型タイポ（clamp 170px-270px）、line-height 0.75の密なレイアウト
- **buttons:** テキストリンク中心。ボーダーは1.5px solid #000の直線
- **cards/list:** ダッシュボーダー(1.69px dashed)のテスティモニアル枠
- **sections:** 200pxの大きなセクションスペーシング
- **footer:** フルワイド、ダーク背景

### CSS変数（再現用）
```css
--cr-cream: #FFF4ED;
--cr-black: #171717;
--cr-orange: #FFC29B;
--cr-yellow: #FFC34F;
--cr-blue: #87A3EC;
--font-display: 'Crimson Pro', serif;
--font-body: 'Source Serif 4', serif;
--s-section: 200px;
--s-contain: 24px;
--border-black: 1.5px solid #000;
--testimonial-border: 1.69px dashed var(--cr-black);
--transition-short: 0.3s;
--transition-medium: 0.5s;
--transition-long: 1s;
--e-inOut-quart: cubic-bezier(0.76, 0, 0.24, 1);
```

### 再現のためのデザインルール
- 背景は#FFF4EDのクリーム色（ピュアホワイトではない）
- フォントサイズはclamp()で大胆にスケール
- ボーダーはsolidとdashedを使い分ける（テスティモニアル=dashed）
- イージングはcubic-bezier系のカスタムを多用
- カラーはCSS変数 --cr-* で体系的に管理
- セクションスペーシングは200px固定で統一感を出す
- line-heightは0.75〜1.15の密な設定

### 備考
- Denim INK → Crimson Pro / Source Serif 4 が代替候補
- 非常に精緻なCSS変数体系（カラー、タイポ、スペーシング、イージング全て変数化）

---

## Style-05: Planetono Carnival

**URL:** https://www.planetono.space/
**Mood:** 赤とイエローが弾けるポップ＆コスミック遊園地

### トーン（全体の印象）
- **color_palette:** ビビッドレッド(#EB3322)が全面、クリーム(#F7F2E5)テキスト、イエロー(#FFC737)アクセント。パープル(#7721C7)とグリーン(#8DF947)のサブカラー
- **typography:** Futura Passata（幾何学的フューチャリスティック）+ Poppins本文。大胆なウェイト差
- **spacing:** コンテナ34pxパディング、セクション間は控えめ
- **imagery:** イラスト・3Dレンダリング中心。宇宙テーマ
- **overall_impression:** 遊び心全開。フード×宇宙のコンセプトデザイン

### コンポーネント
- **header:** 固定ナビ、大きめリンク(21px/bold)。開くと40pxフルスクリーンメニュー
- **hero:** Swiperスライダー、フェードトランジション、大きなCTAボタン
- **buttons:** border-radius: 12px、太字、パディング広め。「StArt」のような遊びの入ったラベル
- **cards/list:** スワイプ可能なカルーセル
- **sections:** 背景色切替でセクションを分離
- **footer:** カラフル、ソーシャルリンク

### CSS変数（再現用）
```css
--color-light: #F7F2E5;
--color-red: #EB3322;
--color-blue: #7721C7;
--color-yellow: #FFC737;
--color-green: #8DF947;
--color-primary: var(--color-yellow);
--font-display: 'Unbounded', cursive;
--font-body: 'Poppins', sans-serif;
--radius-button: 12px;
```

### 再現のためのデザインルール
- メインカラーの赤は背景全面に使う勇気を持つ
- テキストカラーはクリーム（ピュアホワイトだと目が痛い）
- ボタンラベルに遊び心（大文字小文字ミックスなど）
- Swiperでフェード型スライダー
- カラーは5色以上使うが、各セクションでは2-3色に絞る
- イラスト・3Dを活用し、写真は使わない

### 備考
- Futura Passata → Unbounded が幾何学的な雰囲気で近い
- Poppins はそのまま Google Fonts で使用可能
- Tubikスタジオのコンセプトデザイン

---

## Style-06: Sileent Monochrome

**URL:** https://www.sileent.com/
**Mood:** 静寂のなかに潜む洗練された白黒コントラスト

### トーン（全体の印象）
- **color_palette:** ホワイト(#FFFFFF)背景 + ブラック(#1A1A1A)テキスト。スレートグレー(#64748B)のサブテキスト
- **typography:** PP Neue Montreal（ネオグロテスク）一本。ウェイト差で階層を作る
- **spacing:** コンテナ1rem、グリッドギャップ1.125rem。コンパクトめ
- **imagery:** AI生成コンテンツのプレビュー
- **overall_impression:** AI SaaSの典型的クリーンUI。余計な装飾を排除

### コンポーネント
- **header:** クッキーバナーがファーストビュー。閉じるボタン + ピル型CTA
- **hero:** テキスト中心、背景ダーク
- **buttons:** border-radius: 64px（完全ピル）、padding 8px 32px、font-size 10px、font-weight 700。ダーク背景に白テキスト
- **cards/list:** シンプルなカード、ボーダー区切り
- **sections:** 白/黒の交互背景
- **footer:** ミニマル

### CSS変数（再現用）
```css
--color-primary: #1A1A1A;
--color-bg: #FFFFFF;
--color-text: #000000;
--color-muted: #64748B;
--font-body: 'DM Sans', sans-serif;
--container-padding: 1rem;
--container-grid-gap: 1.125rem;
--radius-pill: 64px;
--button-padding: 8px 32px;
--button-font-size: 10px;
```

### 再現のためのデザインルール
- フォントは1ファミリーのみ。ウェイト300/400/700で階層化
- ボタンはピル型（border-radius: 64px）で統一
- ボタンのフォントサイズは極小（10px）、uppercase不要
- 色は白/黒/スレートグレーの3色のみ
- パディング・ギャップはCSS変数で管理
- イージングは非常に精緻なlinear()関数を使用（GSAPスタイル）

### 備考
- PP Neue Montreal → DM Sans が最も近い代替
- アクセス時に500エラーが発生することあり（Nuxt製）
- イージング関数が非常に詳細（GSAP互換のlinear()定義あり）

---

## Style-07: Good Fella Craft ★ ナビゲーション参考

**URL:** https://good-fella.com/
**Mood:** 職人気質のダークトーンにオレンジが差すクラフト系スタジオ

### トーン（全体の印象）
- **color_palette:** ダークチャコール(#141314)メイン + ライトグレー(#EEEEEE)テキスト。ビビッドオレンジ(#FD551D)アクセント。中間グレー(#818081, #696869)
- **typography:** Aktiv Grotesk（ゴシック）+ Geist Mono（コード）。タイトトラッキング(-3px)の大見出し
- **spacing:** 大胆な余白。pt-128 pb-128（128px上下パディング）
- **imagery:** プロジェクトスクリーンショット、動画
- **overall_impression:** 「作りの良さ」を感じさせる。クラフトマンシップ。

### コンポーネント

#### ★ header/nav（重点分析）
- **構造:** 固定ヘッダー（position: fixed）、高さ104px
- **通常状態:** ロゴ(左) + "Let's work together"CTA(右, uppercase, 14px, font-weight 500) + ハンバーガーメニュー
- **メニュー展開時:** フルスクリーンオーバーレイ
  - リンクは超大型テキスト（60px, font-weight 500, letter-spacing -3px）
  - Home / Work / Pricing / About / Contact の5項目
  - メール表示（contact@good-fella.com, 16px, regular）
  - 背景はサイトカラーと同じダーク
- **ナビアニメーション:** Menu ↔ Close テキスト切替、スムーズフェード
- **グリッド:** 12カラム、1remガター、1remマージン、max-width 1920px

#### hero
- フルスクリーン、min-h-svh
- 大きなタイポグラフィ + プロジェクト映像
- overflow: hidden で枠外を隠す

#### buttons
- テキストリンク基本、ボーダーなし
- ホバーでカラー変化（オレンジ #FD551D）

#### sections
- 背景色切替（ダーク ↔ ライト）でセクション分離
- "section-label" スパンでセクション名を小さく表示
- 上下128pxの大きなパディング

#### footer
- ダーク背景、リンクとソーシャル

### CSS変数（再現用）
```css
--color-bg-dark: #141314;
--color-bg-light: #EEEEEE;
--color-text: #EEEEEE;
--color-accent: #FD551D;
--color-mid: #818081;
--color-dim: #696869;
--font-display: 'Space Grotesk', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
--site-grid-columns: 12;
--site-grid-gutter: 1rem;
--site-grid-margin: 1rem;
--site-max-width: 1920px;
--site-header-height: 104px;
--hero-padding-top: 256px;
--hero-padding-bottom: 164px;
--tracking-tight: -3px;
```

### 再現のためのデザインルール
- ナビは固定。通常時はミニマル、展開時は60px大型テキスト
- ヘッダーCTAは "Let's work together" 型のuppercase小テキスト
- アクセントカラー（オレンジ）はホバーとリンクにのみ使用
- 見出しはletter-spacing: -3px のタイトトラッキング
- セクション切替は背景色のダーク/ライト反転で表現
- グリッドシステムは12カラム、max-width 1920px
- セクションラベルは小さなspan要素で控えめに表示

### 備考
- Aktiv Grotesk → Space Grotesk が最も近い代替
- Geist Mono → JetBrains Mono が代替
- letter-spacing: -3px は見出しのみ。本文には使わない

---

## Style-08: Foundrline Signal ★ CTA参考

**URL:** https://www.foundrline.com/
**Mood:** スタートアップの緊張感とクリアなシグナルを発するCTA設計

### トーン（全体の印象）
- **color_palette:** ウォームグレー(#EFEEEC)ボディ + ダーク(#030406)ヒーロー。オレンジ(#FF6600)とレッド(#FF462E, #DF4E49)のアクセント
- **typography:** Saans Medium（見出し）+ Chivo Mono（ラベル・ナビ）+ Helvetica Neue（本文）。モノスペースの信頼感
- **spacing:** パディング20px 24pxのボタン。セクション間は大きめ
- **imagery:** テキスト中心。数値・メトリクスの強調
- **overall_impression:** スプリントベースのプロダクト開発。速さと規律

### コンポーネント

#### header
- シンプルなテキストナビ

#### hero
- ダーク背景(#030406)のヒーロー
- 白テキストの大見出し
- オレンジアクセントの強調テキスト

#### ★ buttons/CTA（重点分析）
- **メインCTA:**
  - background: #281F22（ダークブラウン）
  - color: テキスト（白 or 黒）
  - border-radius: 5px（微角丸、ピルではない）
  - padding: 20px 24px（大きめ、クリックしやすい）
  - font-size: 12px（小さい = 上品）
  - border: none
- **Submit ボタン:** メインCTAと同一スタイル
- **テキストリンク:** オレンジ(#FF6600)カラーのテキストリンク
- **CTAの配置:** フォームの直下、左寄せ
- **CTAの特徴:** ボタンサイズは控えめだがパディングが大きく、存在感がある

#### cards/list
- メトリクスカード（数値の強調表示）
- ボーダー区切りのリスト

#### sections
- ウォームグレー背景とダーク背景の交互
- セクション区切りにボーダーライン

#### footer
- ダーク背景、フォーム配置

### CSS変数（再現用）
```css
--color-bg-body: #EFEEEC;
--color-bg-hero: #030406;
--color-bg-button: #281F22;
--color-accent: #FF6600;
--color-accent-red: #FF462E;
--color-text-white: #FFFFFF;
--color-text-muted: rgba(255, 255, 255, 0.6);
--font-display: 'General Sans', sans-serif;
--font-mono: 'Chivo Mono', monospace;
--font-body: 'Helvetica Neue', sans-serif;
--radius-button: 5px;
--button-padding: 20px 24px;
--button-font-size: 12px;
```

### 再現のためのデザインルール
- CTAボタンは角丸5px（ピル型にしない）
- ボタンパディングは20px 24pxで大きめに取り、クリック領域を確保
- ボタンのフォントサイズは12pxと小さく、上品さを出す
- アクセントカラー（オレンジ）はCTAテキストリンクと強調テキストに使用
- モノスペースフォントをナビとラベルに使い、技術的信頼感を出す
- ボディ背景はウォームグレー(#EFEEEC)で温もりを持たせる
- ヒーローはダーク(#030406)で締める。ピュアブラックではない
- 数値・メトリクスは大きく目立たせる

### 備考
- Saans TRIAL → General Sans が代替（現在はトライアルフォント使用）
- Chivo Mono はそのまま Google Fonts で使用可能
- Helvetica Neue → system-ui, -apple-system が代替

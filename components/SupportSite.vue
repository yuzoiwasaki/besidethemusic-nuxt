<template>
  <section id="support-site" class="section has-background-white">
    <div class="container is-small has-text-centered">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h3 class="title is-spaced body-title">
            ライブハウス支援サイト一覧
          </h3>
        </div>
      </div>
      <div class="columns is-spaced sites">
        <div class="column is-6 centered savelivehouse-logo">
          <a href="https://savelivehouse.com" target="_blank">
            <figure class="image">
              <img src="https://savelivehouse.com/assets/img/ogp.png">
            </figure>
          </a>
        </div>
        <div class="column is-6 savelivehouse-body">
          <p class="title is-5 is-spaced">
            MUSIC UNITES AGAINST COVID-19
          </p>
          <p class="subtitle is-6">
            MUSIC UNITES AGAINST COVID-19 フォルダのアクセス権をダウンロード購入することで、自分が応援したいライブハウスを支援することができます<br>
            5種類の価格の中から自分が支援したい金額を選んで購入できます<br>
            どこのストアでどの金額で購入しても商品内容は同じです<br>
            <br>
            フォルダの中には「プロジェクトに賛同した約70組のミュージシャンが提供する楽曲データ」が置いてあります<br>
            これらは皆さまの支援へのお礼です<br>
            期間内(2020年6月末日まで)であれば好きな時に聴いて楽しむことができます<br>
            <br>
            <a href="https://savelivehouse.com" target="_blank">https://savelivehouse.com</a>
          </p>
        </div>
      </div>
      <div class="columns is-spaced sites">
        <div class="column is-6 centered savethelivehouse-logo">
          <a href="https://savethelivehouse.com" target="_blank">
            <figure class="image container">
              <img src="https://savethelivehouse.com/img/logo/logo_2.png">
            </figure>
          </a>
        </div>
        <div class="column is-6 savethelivehouse-body">
          <p class="title is-5 is-spaced">
            SAVE THE LIVEHOUSE
          </p>
          <p class="subtitle is-6">
            "SAVE THE LIVEHOUSE"とは？<br>
            全国のライブハウスにドリンク代金を事前に支払うことでライブハウスを応援することができるサービスです。<br>
            <br>
            新型コロナウィルスの影響により営業自粛を余儀なくされ全国的に経済的な打撃を受けているライブハウス。この状態が続けば多くのライブハウスが閉店せざるを得ない状況です。<br>
            <br>
            また以前と同じようにライブハウスで音楽を楽しめるように。ライブハウスが今を乗り越えられるように。ひとりひとりが直接応援できるプラットフォームを立ち上げました。<br>
            <br>
            （支払われた代金はすぐにライブハウスの元に届きます！）<br>
            <br>
            <a href="https://savethelivehouse.com" target="_blank">https://savethelivehouse.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#support-site {
  padding-top: 9rem;
}

.sites {
  margin-bottom: 5rem !important;
}

.savethelivehouse-logo {
  order: 2;
}

.savethelivehouse-body {
  order: 1;
}

.image.container {
  height: 256px;
  width: 256px;
}

@media screen and (max-width: 768px) {
  #support-site {
    padding-top: 6rem;
  }

  .savethelivehouse-logo {
    margin-bottom: 30px;
  }

  .image.container {
    height: 128px;
    width: 128px;
  }
}
</style>

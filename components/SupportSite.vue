<template>
  <section id="support-site" class="section has-background-white">
    <div class="container is-small has-text-centered">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h2 class="title is-spaced body-title">
            ライブハウス支援サイト一覧
          </h2>
        </div>
      </div>
      <div class="columns is-spaced sites">
        <div class="column is-6 centered savethelivehouse-logo">
          <a href="https://savethelivehouse.com" target="_blank">
            <figure class="image container">
              <img src="/images/savethelivehouse.png">
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
      <div class="columns is-spaced sites">
        <div class="column is-6 centered saveourspace-logo">
          <a href="http://save-our-space.org" target="_blank">
            <figure class="image">
              <img src="/images/saveourspace.jpeg">
            </figure>
          </a>
        </div>
        <div class="column is-6 saveourspace-body">
          <p class="title is-5 is-spaced">
            SaveOurSpace
          </p>
          <p class="subtitle is-6">
            新型コロナウイルス感染拡大防止に努めるあらゆる人の仕事と生活を守る継続的な支援を求める署名【受付中！】<br>
            <br>
            #SaveOurLife<br>
            <br>
            私たちの命と仕事を守ろう<br>
            <br>
            感染症拡大防止のなかで職を守り、継続的な助成を国に求める署名活動<br>
            <br>
            <a href="http://save-our-space.org" target="_blank">http://save-our-space.org</a>
          </p>
        </div>
      </div>
      <div class="columns is-spaced sites">
        <div class="column is-6 centered liveforcelivehouse-logo">
          <a href="http://liveforcelivehouse.com" target="_blank">
            <figure class="image">
              <img src="/images/liveforcelivehouse.png">
            </figure>
          </a>
        </div>
        <div class="column is-6 liveforcelivehouse-body">
          <p class="title is-5 is-spaced">
            LIVE FORCE, LIFE HOUSE.
          </p>
          <p class="subtitle is-6">
            全国でのイベントの自粛や中止をうけ、それぞれのローカルのシーンと結びついて最も身近に音楽を楽しむ場所であり、音楽が生まれる場所でもあるライブハウスが経済的なダメージを受け続けており、しかも長期化の様相を呈しています。<br>
            <br>
            このプラットフォームでは、ROCK/POP系のBANDが主に出演している、全国の独立系のライブハウスを対象に、まずは緊急支援、そして今後を見据えた継続的な支援を目的としています。<br>
            <br>
            是非、みなさんのプロジェクトへの賛同とご協力をよろしくお願いいたします。<br>
            <br>
            <a href="http://liveforcelivehouse.com" target="_blank">http://liveforcelivehouse.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/mixins';

#support-site {
  padding-top: 9rem;

  @include sp {
    padding-top: 6rem;
  }
}

.sites {
  margin-bottom: 5rem !important;
}

.savethelivehouse-logo {
  @include sp {
    margin-bottom: 30px;
  }
}

.saveourspace-logo {
  order: 2;
}

.saveourspace-body {
  order: 1;
}

.image.container {
  height: 256px;
  width: 256px;

  @include sp {
    height: 128px;
    width: 128px;
  }
}
</style>

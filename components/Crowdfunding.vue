<template>
  <section id="crowdfunding" class="section has-background-white">
    <div class="container is-small has-text-centered">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h4 class="title is-spaced body-title">
            現在クラウドファンディング実施中の東京のライブハウス一覧
          </h4>
        </div>
      </div>
      <div class="columns is-multiline">
        <ProjectCard
          v-for="project in projects"
          :title="project.title"
          :caption="project.caption"
          :project-id="project.id"
        />

        <!-- MOTION GALLERY -->
        <div class="column is-3 has-padding-30">
          <p class="title is-5 is-spaced">
            新型コロナウイルスに負けない。ライブハウスＣＲＡＺＹＪＡＭから音楽で笑顔をつなぐプロジェクト。
          </p>
          <p class="subtitle is-6">
            17年目を迎える東京立川の小さなライブハウスＣＲＡＺＹＪＡＭは、新型コロナウイルスの影響で閉店の危機。次世代の為にも、スタッフの為にも、音楽で笑顔をつなぎたいのです。ご支援を何卒よろしくお願いします
          </p>
          <iframe frameborder="0" height="365" scrolling="no" src="https://motion-gallery.net/projects/crazyjam/widget" width="245"></iframe>
        </div>
        <div class="column is-3 has-padding-30">
          <p class="title is-5 is-spaced">
            最高の遊び場(ライブハウス)を守りたい。命懸けで作り上げた自分達の居場所【club SCIENCE】を終わらせたくない！
          </p>
          <p class="subtitle is-6">
            新型コロナウィルスの影響により3月上旬からの相次ぐイベントキャンセルに続き、政府からの自粛要請を受け、新宿club SCIENCEは今、最大の危機に直面しています。皆様と遊べるこの場所を守る為にお力を貸して頂きたいです。
          </p>
          <iframe frameborder="0" height="365" scrolling="no" src="https://motion-gallery.net/projects/club_science/widget" width="245"></iframe>
        </div>
        <div class="column is-3 has-padding-30">
          <p class="title is-5 is-spaced">
            SAVE THE 下北沢ガレージ
          </p>
          <p class="subtitle is-6">
            日本のバンドシーンを支えて26年、下北沢GARAGEが限界です。来たる未来を見据えた、ライブハウスでの感動体験との再会と、Webを活かした新しくたのしい音楽の発信基地にする為に、どうかみなさまの力を貸してください
          </p>
          <iframe frameborder="0" height="365" scrolling="no" src="https://motion-gallery.net/projects/garage/widget" width="245"></iframe>
        </div>
        <div class="column is-3 has-padding-30">
          <p class="title is-5 is-spaced">
            吉祥寺クレッシェンド救済コンピレーションアルバム製作プロジェクト〜Uniting Everyone's Hearts〜
          </p>
          <p class="subtitle is-6">
            新型コロナウィルスの影響により危機に瀕している老舗ライヴハウス「吉祥寺クレッシェンド」。
            終息時の自分たちの帰る場所を守るべく出演アーティストたちがクレッシェンド救済コンピレーションアルバム作成・利益を寄付します。
          </p>
          <iframe frameborder="0" height="365" scrolling="no" src="https://motion-gallery.net/projects/rescue_crescendo/widget" width="245"></iframe>
        </div>
        <div class="column is-3 has-padding-30">
          <p class="title is-5 is-spaced">
            伝説的ライブ・スペース原宿クロコダイル ＜絶滅危惧種を救え！＞SAVE CROCODILE PROJECT
          </p>
          <p class="subtitle is-6">
            今回の異常事態になすすべなくほとんど閉店状態になってしまいました。
            幾多のロッカーたちと共に遊んできた大切なこの場を絶対なくすわけにはいきません。
            この鰐に力を貸してください！　原宿クロコダイル　西 哲也　
          </p>
          <iframe frameborder="0" height="365" scrolling="no" src="https://motion-gallery.net/projects/Crocodile/widget" width="245"></iframe>
        </div>
        <div class="column is-3 has-padding-30">
          <p class="title is-5 is-spaced">
            【SAVE THE SHINJUKU FATE】新宿FATE存続の為の支援プロジェクト
          </p>
          <p class="subtitle is-6">
            新型コロナウイルスの影響によるイベントキャンセルでの売上減少、非常事態宣言を受けての4月からの営業自粛。今、新宿FATEは最大の危機を迎えています。また皆様と笑顔で会う為、FATEを守る為に、ご支援お願い致します。
          </p>
          <iframe frameborder="0" height="365" scrolling="no" src="https://motion-gallery.net/projects/shinjukufate/widget" width="245"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/assets/data/project.json'

export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: projects
    }
  }
}
</script>

<style>
@media screen and (max-width: 768px) {
  #crowdfunding {
    padding-top: 0;
  }
}
</style>

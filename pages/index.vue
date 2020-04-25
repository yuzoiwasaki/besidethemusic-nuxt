<template>
  <div id="main">
    <section class="hero-container">
      <div class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container is-small has-text-centered">
            <h1 class="title is-1 is-spaced">
              Beside the Music
            </h1>
            <h2 class="subtitle">
              みんなで音楽を支援しよう！いつも音楽のそばに
            </h2>
        </div>
        </div>
      </div>
    </section>

    <section class="section has-background-light">
      <div class="container is-small has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <p>
              現在コロナウイルスの影響で営業することができず、苦しんでいるライブハウスがたくさんあります。中にはすでに店を閉めざるを得ない選択をしたところもあります。<br><br>
              私自身がそうであったように、音楽などの文化は苦しい時にこそ必要とされるものだと思います。大切な音楽の灯を消さないために、少しでも支援していただけたら嬉しいです。<br><br>
              誰かにとっての大切な場所がこれからもずっと存続できますように。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-white is-medium">
      <div class="container is-small has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h3 class="title is-spaced body-title">
              現在クラウドファンディング実施中の東京のライブハウス一覧
            </h3>
          </div>
        </div>
        <div class="columns is-multiline">
          <ProjectCard
            title="思い出野郎Aチーム presents ソウルピクニック・ファンディング"
            caption="誰もが集まれる場所を守るために。思い出野郎Aチームが主催する支援プロジェクト「ソウルピクニック・ファンディング」"
            project-id="261880"
          />
          <ProjectCard
            title="UNDERBAR UNDERDEERLOUNGE支援プロジェクト"
            caption="コロナウィルス拡散防止のため４月より営業自粛を開始。現状再開時期の目処はついておらず、そんな中大変心苦しい決断ではありましたがコロナウィルスの脅威がなくなった時に、新たなスタートを切れるよう皆様からの支援を募ることを決めました。"
            project-id="255922"
          />
          <ProjectCard
            title="【 SAVE THE Organ bar 】Organ bar 営業活動支援"
            caption="新型コロナウイルス感染拡大防止の為、4/1より営業を自粛しておりますが、お客様や関係者の皆様には１日も早く終息に向かい、平穏無事な日常が戻ることを祈っております。そこで大変心苦しいお願いではありますが、休業に伴う緊急支援をお願いさせて頂きます。"
            project-id="258853"
          />
          <ProjectCard
            title="東京都八王子市のライブハウス、八王子papaBeatを継続させたい。"
            caption="新型コロナの影響により、存続の危機を迎えています。私たちにとって大切なこの場所を、なんとか存続させたい。一方で、自粛要請にも「応じたい」とも考えています。ライブハウスがクラスター感染の発生源になることは、決して望んではいません。「自粛」と「存続」の両立のため、ご支援を募ることとしました。"
            project-id="252263"
          />
          <ProjectCard
            title="代々木ライブハウス救済プロジェクト"
            caption="代々木で運営している経営母体の違うライブハウスを支援するプロジェクト対象となる会場は下記となります。 1.LIVE labo YOYOGI 2.Zher the ZOO YOYOGI 3.アルティカセブン 4.ライブハウス代々木Barbara"
            project-id="256767"
          />
          <ProjectCard
            title="SAVE OUR SHOW! 珈琲美学～緊急支援！またこの場所でライブをやろう！"
            caption="目黒区学芸大学駅近くにあるライブハウス「珈琲美学」。42年間ご夫婦で営業しているこの店は日頃から若いミュージシャンからプロのミュージシャンのライブをサポート。いつも全力で音楽を愛する人々の憩いの場、表現の場としてお店を営業。高齢のママとマスターを休業の間支援したいと思いこの企画を立ち上げました。"
            project-id="251951"
          />
          <ProjectCard
            title="【ライブハウス救済プロジェクト】SAVE THE S.U.B TOKYO"
            caption="東京都中野坂上にあるライブハウスS.U.B TOKYOです。これまで様々なアイドル様アーティスト様にご利用頂いております。現在S.U.BTOKYOはコロナウイルス感染拡大防止のための政府からの自粛要請を受けまして、営業を自粛している状態です。"
            project-id="260211"
          />
          <ProjectCard
            title="西荻窪w.jaz コロナを乗り越える！支援プロジェクト"
            caption="西荻窪w.jaz 通称だぶじゃず。コロナウィルスが猛威を振るう中、3月末から営業自粛しています。先が見えないこの状況ですが、必ず再起したいという思いで、大変心苦しいですが支援をお願いした次第です。"
            project-id="258861"
          />
          <ProjectCard
            title="大久保bumpcity -バンプシティ- コロナに負けない！応援プロジェクト！"
            caption="大久保にあるライブバー、Bumpcity。バンプの名称でおなじみのあのバンプシティを救済するための応援プロジェクトです。13年目を迎えたバンプの火をまだまだ消したくない！皆さんの応援をお願いします。"
            project-id="252906"
          />
          <ProjectCard
            title="Live Bar BACK BEATを、コロナ被害から助けよう！"
            caption="新型コロナウィルスの感染防止のため、営業自粛してます。その間にも、家賃やレンタルリース代等、いろいろお金はかかります。今後の営業存続のためにも、ご協力をよろしくお願い申し上げます。"
            project-id="261373"
          />
          <ProjectCard
            title="LivePerformanceBar un.10応援プロジェクト"
            caption="コロナウィルスの影響により、今週から営業を自粛いたします四ツ谷荒木町に店を構えるLivePerformanceBar un.10の応援事業です。変わらず音楽を自由に楽しめる場所を失くさないために、どうぞよろしくお願いいたします。"
            project-id="259532"
          />
          <ProjectCard
            title="三軒茶屋グレープフルーツムーン　緊急支援クラウドファンディング"
            caption="20年続いているGrapeFruitMoonの灯を消さない為に。これからも変らず皆様と笑顔溢れる空間を一緒に過ごせるように。今回のクラウドファンディングを立ち上げました。"
            project-id="105794"
          />
          <ProjectCard
            title="”STAY STRONG” 【新宿 DREAM STORE】支援プロジェクト"
            caption="私たちが大好きな【新宿 DREAM STORE】は新型コロナウィルス感染拡大防止のため営業することが出来ず、危機的な経営状況となっています。多くのライブハウスが店を潰さないように配信ライブなどの新しい体制を模索していますが、少しの期間、皆様の支援を必要としています。"
            project-id="261846"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);

#main {
  font-family: "Noto Sans JP", "游ゴシック Medium", "游ゴシック体", "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.hero.is-primary {
  background-color: #0a0a0a;
  color: #fff;
}

.body-title {
  margin-bottom: 5rem;
}
</style>

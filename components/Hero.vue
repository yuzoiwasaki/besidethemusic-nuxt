<template>
  <section id="hero" class="hero-container">
    <nav class="navbar has-background-black">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            Beside the Music
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="https://news.livedoor.com/article/detail/18402362" target="_blank">
              お知らせ
            </a>
            <a class="navbar-item" href="https://twitter.com/besidethemusic" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div id="mainVisual-pc" class="is-hidden-mobile"></div>
    <div id="mainVisual-sp" class="is-hidden-tablet"><img src="/images/main2_sp.jpg" width="100%"></div>
  </section>
</template>

<style scoped>
#mainVisual-pc{
  background: url("/images/main2_pc.jpg") center 0 no-repeat;
  background-size: cover;
  background-color:#000000;
  color:#FFFFFF;
  min-height: 700px;
  background-position: bottom;
}
#mainVisual-sp{
  background-color:#000000;
}

.navbar a {
  color: #fff;
}

.navbar a:hover, a:visited {
  background-color: #000;
}
</style>
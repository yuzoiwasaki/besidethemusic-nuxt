<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item is-hidden-mobile" href="/">
          <h1>Beside the Music</h1>
        </a>
        <a class="navbar-item is-hidden-tablet" href="/">
          Top
        </a>
        <a class="navbar-item is-hidden-tablet" href="/news">
          News
        </a>
        <a class="navbar-item is-hidden-tablet" href="https://twitter.com/besidethemusic" target="_blank">
          Twitter
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/news">
            News
          </a>
          <a class="navbar-item" href="https://twitter.com/besidethemusic" target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/variables';

.navbar {
  background-color: transparent;
}

.navbar a {
  color: $color-white;
}

.navbar a:hover, a:visited {
  background-color: $color-black;
}

@media screen and (max-width: 768px) {
  .navbar-brand {
    justify-content: center;
  }
}
</style>

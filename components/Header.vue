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
@import '~/assets/styles/mixins';

.navbar {
  background-color: transparent;

  a {
    color: $color-white;

    &:hover,
    &:visited {
      background-color: $color-black;
    }
  }
}

.navbar-brand {
  @include sp {
    justify-content: center;
  }
}
</style>

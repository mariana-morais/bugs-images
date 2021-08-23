<template>
  <header>
    <nav class="menu">
      <ul>
        <li>
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link to="/bugs" class="nav-link">Bugs</router-link>
        </li>
        <li>
          <router-link to="/materials" class="nav-link">Materials</router-link>
        </li>
        <li>
          <a href="https://github.com/distromari" target="_blank" class="nav-link">Dev -></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header'
};
</script>

<style lang="scss">
@import './assets/scss/header.scss'
</style>

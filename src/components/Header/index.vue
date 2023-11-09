<template>
  <header>
    <nav class="menu">
      <ul>
        <li>
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link to="/bugs" class="nav-link">Images</router-link>
        </li>
        <li>
          <router-link to="/materials" class="nav-link">Materials</router-link>
        </li>
        <li>
          <a
            href="https://github.com/marihemori"
            target="_blank"
            class="nav-link"
            >Dev -></a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>

<style lang="scss">
header {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 4rem;
  .menu {
    margin-bottom: 3rem;
    background: #e4d7be;
    width: 50%;
    padding: 0 2rem;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: block;
        padding: 10px;
        margin-right: 10px;
        color: #222;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;
        color: #1f1f1f;
        .nav-link {
          text-decoration: none;
          color: #1f1f1f;
          &:hover {
            text-decoration: underline;
            color: #e4d7be;
          }
          &:active {
            color: #1a6d55;
          }
        }
      }
    }
  }
}
</style>

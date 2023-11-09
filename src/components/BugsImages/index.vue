<template>
  <section class="grid-section" id="bugs">
    <ul class="grid-section-2">
      <li v-for="bugs in getBugsImages" :key="bugs.id">
        <img :src="bugs.image" alt="Insect" />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getBugsImages"]),
  },
};
</script>

<style lang="scss" scoped>
.grid-section {
  width: 100%;
  margin-bottom: 5rem;
}

.grid-section-2 {
  grid-column: 2 / 4;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.grid-section-2 li {
  padding: 10px;
  cursor: pointer;
  list-style: none;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.grid-section-2 li img:hover {
  color: #424242;
  -webkit-transition: all 0.4s ease-in;
  -moz-transition: all 0.4s ease-in;
  -ms-transition: all 0.4s ease-in;
  -o-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
  transform: scale(2);
  -ms-transform: scale(2); /* IE 9 */
  -webkit-transform: scale(2); /* Safari and Chrome */
  @media only screen and (max-width: 900px) {
    transform: scale(1);
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1); /* Safari and Chrome */
  }
}
</style>

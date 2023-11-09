<template>
  <h1 class="title">Bugs <br />Images</h1>
  <BugsList />
</template>

<script>
import BugsList from "../components/BugsList";

export default {
  name: "HomeView",
  components: {
    BugsList,
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 6rem;
}
</style>

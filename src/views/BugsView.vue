<template>
  <h1>Images</h1>
  <BugsImages />
</template>

<script>
import BugsImages from "../components/BugsImages";

export default {
  name: "BugsView",
  components: {
    BugsImages,
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 6rem;
}
</style>

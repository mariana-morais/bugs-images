<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Faq />
</template>

<style lang="scss"></style>

<script>
import Header from "@/components/Header";
import Faq from "@/components/Faq";

export default {
  name: "home",
  components: {
    Header,
    Faq,
  },
};
</script>

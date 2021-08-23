<template>
  <div>
    <Header />
    <Materials />
    <Faq />
  </div>
</template>

<script>
import Header from '../components/Header';
import Materials from '../components/Materials';
import Faq from '../components/Faq';

export default {
  name: 'home',
  components: {
    Header,
    Materials,
    Faq
  }
}
</script>
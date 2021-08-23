<template>
  <div>
    <Header />
    <BugsImages />
    <Faq />
  </div>
</template>

<script>
import Header from '../components/Header';
import BugsImages from '../components/BugsImages';
import Faq from '../components/Faq';

export default {
  name: 'home',
  components: {
    Header,
    BugsImages,
    Faq
  }
}
</script>
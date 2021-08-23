<template>
  <div>
    <Header />
    <BugsDescription />
    <Faq />
  </div>
</template>

<script>
import Header from '../components/Header';
import BugsDescription from '../components/BugsDescription';
import Faq from '../components/Faq';

export default {
  name: 'home',
  components: {
    Header,
    BugsDescription,
    Faq
  }
}
</script>
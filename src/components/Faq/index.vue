<template>
  <section class="grid-section faq" id="faq">
    <h1 class="second-title">FAQ</h1>
    <dl class="faq-list">
      <dt>Who are the most famous naturalists?</dt>
      <dd>
        <ul>
          <li>Charles Darwin</li>
          <li>Jean-Baptiste Lamarck</li>
          <li>Georges Cuvier</li>
          <li>Florence Bailey</li>
          <li>Maria Sibylla Merian</li>
          <li>James Duncan</li>
        </ul>
      </dd>
      <dt>who was James Duncan?</dt>
      <dd>
        James Duncan (1804–1861) was a Scottish naturalist. After his education
        in Edinburgh, he followed the family tradition to work in the Scottish
        church. He however retired and worked with publishing firms, and among
        other works helping produce an index of Encyclopaedia Britannica.
      </dd>
    </dl>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  max-width: 1250px;
  margin: 6rem auto;
  padding-bottom: 3rem;
  padding: 0 2rem;
  padding-bottom: 3rem;
  h1 {
    font-size: 2rem;
  }
  .faq-list {
    grid-column: 2 / 4;
    ul {
      margin-left: 30px;
      margin-top: 20px;
      li {
        margin-bottom: 15px;
      }
    }
    dt {
      font-weight: bold;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      color: #bbaf97;
      &::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 10px;
        margin-right: 10px;
        background: #e4d7be;
      }
    }
    dd {
      margin-bottom: 0.5rem;
      margin-left: 30px;
      font-size: 1.2rem;
    }
  }
}
</style>

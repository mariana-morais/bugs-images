<template>
  <section class="grid-section bugs" id="bugs">
    <h1 class="">Materials</h1>
    <h6 class="subtitle">"The slower you go the bigger your world gets."</h6>
    <div class="material-section">
      <a
        href="https://www.biodiversitylibrary.org/item/96143#page/1/mode/1up"
        target="_blank"
      >
        <h3>Foreign butterflies</h3>
      </a>
      <a
        href="https://www.biodiversitylibrary.org/page/21511903#page/1/mode/1up"
        target="_blank"
      >
        <h3>Zoological Lecture, delivered at the Royal Institution</h3>
      </a>
      <a
        href="https://www.biodiversitylibrary.org/item/90009#page/1/mode/1up"
        target="_blank"
      >
        <h3>Naturliche Abbildungen der merkwurdilten - Insecten</h3>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
}
.material-section {
  grid-column: 2 / 4;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 300px;
  grid-gap: 20px;
  a {
    color: #e0e0e0;
    &:hover {
      color: #bbaf97;
    }
  }
}
</style>

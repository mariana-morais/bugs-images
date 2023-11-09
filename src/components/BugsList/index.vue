<template>
  <section>
    <div class="content">
      <div class="bugs-list">
        <ul>
          <li v-for="bugs in getBugs" :key="bugs.id">
            <img :src="bugs.image" />
          </li>
        </ul>
      </div>
      <div class="bugs-description">
        <div class="description" v-for="bugs in getBugs" :key="bugs.id">
          <h2># {{ bugs.name }}</h2>
          <p>{{ bugs.description }}</p>
          <p>{{ bugs.moreDescription }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getBugs"]),
  },
};
</script>

<style lang="scss" scoped>
section {
  .content {
    display: flex;
    flex-direction: row;
    margin-bottom: 6rem;

    .bugs-list {
      overflow-y: scroll;
      cursor: pointer;
      height: 575px;
      ul {
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          img {
            width: 250rem;
          }
        }
      }
    }

    .bugs-description {
      height: 575px;
      overflow-y: scroll;
      border: 1px solid #bbaf97;
      padding: 2rem;
    }
  }
}

.bugs-list::-webkit-scrollbar {
  width: 20px;
  cursor: pointer;
}

.bugs-list::-webkit-scrollbar-thumb {
  background: #e4d7be;
  border-left: 10px solid #1f1f1f;
  border-left: 10px solid #1f1f1f;
  cursor: pointer;
}

.bugs-list::-webkit-scrollbar-track {
  background: #1f1f1f;
  cursor: pointer;
}

.bugs-description::-webkit-scrollbar {
  width: 14px;
  cursor: pointer;
}

.bugs-description::-webkit-scrollbar-thumb {
  background: #e4d7be;
  border-left: 4px solid #1f1f1f;
  border-left: 4px solid #1f1f1f;
}
</style>

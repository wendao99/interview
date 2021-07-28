<template>
  <div class="home">
    <span @click="htmlClick">HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>Vue</span>
  </div>
</template>


<script>
import TtHtml from "./TtHtml.vue"
export default {
  name: 'Home',
  data() {
    return {
      arrayList: [],
    }
  },
  components: {
    TtHtml,
  },
  methods: {
    htmlClick() {
      this.$router.push('/html')
    }
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 30px;
  span {
    padding: 20px;
    border: solid 1px #ccc;
    background-color: rgba($color: #a0e2eb, $alpha: 0.3);
  }
}
</style>
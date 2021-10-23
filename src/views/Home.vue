<template>
  <div class="home">
    <span @click="htmlClick">HTML</span>
    <span @click="cssClick">CSS</span>
    <span @click="jsClick">JavaScript</span>
    <span @click="jsFunClick">JSFunction</span>
    <span @click="random">Random</span>
    <span><a href="https://github.com/CavsZhouyou/Front-End-Interview-Notebook" >github </a></span>
    
  </div>
</template>


<script>
import TtHtml from "./TtHtml.vue"
import TtCss from "./TtCss.vue"
export default {
  name: 'Home',
  data() {
    return {
      arrayList: [],
      github: 'https://github.com/CavsZhouyou/Front-End-Interview-Notebook'
    }
  },
  components: {
    TtHtml,
    TtCss,
  },
  methods: {
    htmlClick() {
      this.$router.push('/html')
    },
    cssClick() {
      this.$router.push('/css')
    },
    jsClick() {
      this.$router.push('/javascript')
    },
    jsFunClick() {
      this.$router.push('/jsfunction')
    },
    random() {
      this.$router.push('/random')
    },
    gitbubClick() {

    }
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  font-size: 30px;
  span {
    padding: 20px;
    border: solid 1px #ccc;
    background-color: rgba($color: #a0e2eb, $alpha: 0.3);
  }
}
</style>
<template>
  <div class="home">
    <tt-html>html</tt-html>
  </div>
</template>


<script>
import {getArray} from '@/netword/home.js'
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
  created() {
    getArray().then((res) => {
      this.arrayList = res
    })
  },
}
</script>

<style lang="scss">
</style>
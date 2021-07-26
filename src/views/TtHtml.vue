<!--  -->
<template>
  <div>
    <test :data="htmlList"></test> 
  </div>
</template>

<script>
import {getHtml } from "@/netword/home"
import Test from "@/components/Test"
export default {
  name: 'Tthtml',
  data() {
    return {
      htmlList: []
    }
  },
  components: {
    Test
  },
  created() {
    getHtml().then((res) => {
      this.htmlList = res
      console.log(res);
    })
  },
}

</script>
<style lang='scss' scoped>
</style>
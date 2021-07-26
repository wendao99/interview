<!--  -->
<template>
  <div>
    <div v-for="(item,index) in data" class="list">
      <p class="title">{{item.title}}</p>
      <form action="">
        <textarea class="textarea"  v-model="submitdata[index]"></textarea>
      </form>
      <div>
        <button class="btn2" @click="answer(index)">查看答案</button>
      </div>
      <p class="answer" v-show="isIndex[index].is" ><pre><code>{{item.answer}}</code></pre></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    data: {
      type: Array,
      defualut() {
        return [];
      },
    },
  },
  data() {
    return {
      submitdata: [],
      currentIndex: 0.1,
      isIndex: [],
    };
  },
  watch: {
    data() {
      for (let i in this.data) {
        this.isIndex.push({ is: false });
      }
    },
  },

  mounted() {
    for (let i in this.data) {
      this.isIndex.push({ is: false });
    }
  },
  methods: {
    submit(index) {
      console.log(index);
      console.log(this.submitdata[index]);
      // console.log(this.$refs.userphone(index).value);
    },
    answer(index) {
      console.log(index);
      if (this.isIndex[index].is) {
        this.isIndex[index].is = false;
      } else {
        this.isIndex[index].is = true;
      }
      console.log(this.isIndex[index]);
    },
  },
};
</script>
<style lang='scss' scoped>
.list {
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  word-break:break-all input {
    width: 100px;
    height: 20px;
    border: 1px solid #ccc;
  }
  .title {
    width: 100%;
    font-size: 20px;
    margin-top: 20px;
  }
  .textarea {
    width: 490px;
    height: 100px;
    margin: 10px 0;
    border: #ccc solid 1px;
  }
  .submit {
    margin-right: 10px;
  }
  .answer {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    word-wrap: break-word;
    border-radius: 10px;
    background-color: rgba(237, 238, 189, 0.5);
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
}
</style>
<!--  -->
<template>
  <div class="box">
    <div class="random">
      <button class="btn" @click="open">随机</button>
      <p v-if="isp" class="wenzi">{{ random }}</p>
      <record />
    </div>
  </div>
</template>

<script>
import Recorder from 'js-audio-recorder';
import Record from './recroder'
export default {
  data() {
    return {
      interview: [
        {
          topic: `行内元素有哪些? 块级元素有哪些？空（void）元素有哪些？`,
        },
        {
          topic: `页面导入样式时，使用link和@import有什么区别？`,
        },
        {
          topic: `title与h1的区别、b与strong的区别、i与em的区别？`,
        },
        {
          topic: `img标签的title和alt有什么区别？`,
        },
        {
          topic: `png、jpg、git 这些图片格式解释一下，分别什么时候用？ `,
        },
        {
          topic: `叮叮`,
        },
      ],
      isp: false,
      random: "",
    };
  },
  components: {
    Record
  },
  created() {
    this.recorder = new Recorder();
  },
  methods: {
    open() {
      this.isp = true;
      this.random =
        this.interview[this.getRndInteger(0, this.interview.length)].topic;
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
};
</script>
<style lang='scss' scoped>
.box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: antiquewhite;
  .random {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
      width: 100px;
      height: 50px;
      font-size: 25px;
      text-align: center;
      background: aquamarine;
      border-radius: 10px;
    }
    .wenzi {
      font-size: 25px;
      margin-top: 20px;
    }
    .record-btn1 {
      width: 80px;
      height: 40px;
      font-size: 15px;
      text-align: center;
      background: rgb(127, 255, 138);
      border-radius: 5px;
      margin-top: 20px;
    }
    .record-btn2 {
      width: 80px;
      height: 40px;
      font-size: 15px;
      text-align: center;
      background: rgb(247, 88, 82);
      border-radius: 5px;
      margin-top: 20px;
    }
    .audio-player {
      margin-top: 10px;
    }
  }
}
</style>
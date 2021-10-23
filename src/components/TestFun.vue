<!--  -->
<template>
  <div class="test">
    <div class="time">
      <button @click="click">点击</button>
      <button @click="click120">计时120分钟</button>
      <button @click="click90">计时90分钟</button>
      <button @click="click60">计时60分钟</button>
      <button @click="reverseClick">反转</button>
      <button @click="shuffleClick">洗牌</button>
      <span>{{time | time()}}</span>
    </div>
    <div class="jishi" v-show="isShow"><span>{{time | time()}}</span></div>
    <div v-for="(item,index) in data" class="list" v-show="!isReverse">
      <p class="title">{{item.title}}</p>
      <form action="">
        <textarea class="textarea"  v-model="submitdata[index]"></textarea>
      </form>
      <div>
        <button class="btn2" @click="answer(index)">查看答案</button>
        <button class="btn2" @click="usage(index)">查看代码</button>
      </div>
      <p class="answer" v-show="isIndex.lenght !== 0 && isIndex[index].is " ><pre><code>{{item.answer}}</code></pre></p>
      <p class="answer" v-show="isIndex.lenght !== 0 && isIndex[index].is " ><pre><code>{{item.usage}}</code></pre></p>
    </div>
    <div v-for="(item,index) in data" class="list" v-show="isReverse">
      <p class="title">{{item.answer}}</p>
      <form action="">
        <textarea class="textarea"  v-model="submitdata[index]"></textarea>
      </form>
      <div>
        <button class="btn2" @click="answer(index)">查看答案</button>
        <button class="btn2" @click="usage(index)">查看代码</button>
      </div>
      <p class="answer" v-show="isIndex.lenght !== 0 && isIndex[index].is " ><pre><code>{{item.title}}</code></pre></p>
      <p class="answer" v-show="isIndex.lenght !== 0 && isIndex[index].is " ><pre><code>{{item.usage}}</code></pre></p>
    </div>
  </div>
</template>

<script>
import { formatDate } from "./utils.js";
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
      time: 0,
      isShow: false,
      isReverse: false,
    };
  },
  created() {
    for (let i in this.data) {
      this.isIndex.push({ is: false });
    }
  },
  watch: {
    time() {
      this.time <= 600000 ? (this.isShow = true) : (this.isShow = false);
    },
  },
  methods: {
    click() {
      
    },

    reverseClick() {
      this.isReverse = !this.isReverse;
    },
    shuffle([...arr]) {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
      }
      return arr;
    },
    shuffleClick() {
      this.data = this.shuffle(this.data);
    },
    submit(index) {
      console.log(index);
      console.log(this.submitdata[index]);
      // console.log(this.$refs.userphone(index).value);
    },
    answer(index) {
      if (this.isIndex[index].is) {
        this.isIndex[index].is = false;
      } else {
        this.isIndex[index].is = true;
      }
    },
    usage(index) {
      if (this.isIndex[index].is) {
        this.isIndex[index].is = false;
      } else {
        this.isIndex[index].is = true;
      }
    },
    click120() {
      const time120 = 7200000;
      this.time = time120;
      if (this.time > 0) {
        setInterval(() => {
          this.time -= 1000;
        }, 1000);
      }
      this.isShow = false;
    },
    click90() {
      const time90 = 90 * 60 * 1000;
      this.time = time90;
      if (this.time > 0) {
        setInterval(() => {
          this.time -= 1000;
        }, 1000);
      }
      this.isShow = false;
    },
    click60() {
      const time60 = 60 * 60 * 1000;
      this.time = time60;
      if (this.time > 0) {
        setInterval(() => {
          this.time -= 1000;
        }, 1000);
      }
      this.isShow = false;
    },
  },
  filters: {
    time(value) {
      let s = value / 1000;
      let m = s / 60;
      let h = m / 60;
      let time =
        Math.floor(h % 60) +
        ":" +
        Math.floor(m % 60) +
        ":" +
        Math.floor(s % 60);
      return time;
    },
  },
};
</script>
<style lang='scss' scoped>
.test {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .time {
    margin-top: 1.25rem;
    button {
      margin-right: 5px;
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    word-break:break-all input {
      height: 20px;
      border: 1px solid #ccc;
    }
    .title {
      width: 100%;
      font-size: 20px;
      margin-top: 20px;
      word-wrap: break-word;
    }
    .textarea {
      width: 90%;
      height: 100px;
      margin: 10px 2px;
      border: #ccc solid 1px;
    }
    .btn2 {
      margin-left: 2px;
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
  .jishi {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 12.5rem;
    height: 3.125rem;
    text-align: center;
    line-height: 3.125rem;
    font-size: 1.5625rem;
    background-color: rgba(167, 167, 167, 0.3);
    border-radius: 0.625rem;
  }
}
</style>

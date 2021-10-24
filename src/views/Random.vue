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
      //#region
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
          topic: `介绍一下CSS的盒子模型`,
        },
        {
          topic: `line-height和height区别`,
        },
        {
          topic: `CSS选择符有哪些？哪些属性可以继承？`,
        },
        {
          topic: `普通选择器 id class 名称`,
        },
        {
          topic: `组合选择器 后代选择器 子选择器 相邻兄弟选择器 通用兄弟选择器`,
        },
        {
          topic: `伪类选择器 link visited hover active`,
        },
        {
          topic: `伪元素选择器`,
        },
        {
          topic: `属性选择器`,
        },
        {
          topic: `CSS优先级算法如何计算？`,
        },
        {
          topic: `用CSS画一个三角形`,
        },
        {
          topic: `一个盒子不给宽度和高度如何水平垂直居中`,
        },
        {
          topic: `display有哪些值？说明他们的作用`,
        },
        {
          topic: `对BFC规范（块级格式化上下文： block formatting context）的理解？`,
        },
        {
          topic: `清除浮动有哪些方式？`,
        },
        {
          topic: `在网页中的应用使用奇数还是偶数的字体？为什么呢？`,
        },
        {
          topic: `position有哪些值？分别是根据什么定位的？`,
        },
        {
          topic: `写一个左中右布局占满屏幕，其中左、右两块固定200，中间自适应宽，要求先加载中间块，请写出结构及样式`,
        },
        {
          topic: `什么是CSS reset？`,
        },
        {
          topic: `CSS sprite 是什么，有什么优缺点？`,
        },
        {
          topic: `display： none；与visibility： hidden；的区别`,
        },
        {
          topic: `opacity 和 rgba区别`,
        },
        {
          topic: `延时加载JS有哪些方式？`,
        },
        {
          topic: `JS数据类型有哪些？`,
        },
        {
          topic: `null和undefined的区别`,
        },
        {
          topic: `JS 数据类型考题`,
        },
        {
          topic: `== 和===有什么区别`,
        },
        {
          topic: `JS微任务和宏任务`,
        },
        {
          topic: `JS作用域考题`,
        },
        {
          topic: `JS对象考题`,
        },
        {
          topic: `JS 作用域+this指向+ 原型 考题`,
        },
        {
          topic: `JS判断变量是不是数组，你能写出哪些方法?`,
        },
        {
          topic: `slice是干嘛的、splice是否会改变原数组`,
        },
        {
          topic: `JS数组去重`,
        },
        {
          topic: `找出多维数组最大值`,
        },
        {
          topic: `给字符串新增方法实现功能`,
        },
        {
          topic: `找出字符串出现最多次数的字符以及次数`,
        },
        {
          topic: `new操作符具体做了什么`,
        },
        {
          topic: `闭包`,
        },
        {
          topic: `原型链`,
        },
        {
          topic: `JS继承有哪些方式`,
        },
        {
          topic: `说一一下call、apply、bing的区别`,
        },
        {
          topic: `sort背后原理是什么?`,
        },
        {
          topic: `深拷贝和浅拷贝`,
        },
        {
          topic: `local storage 、 session storage 、 cookie 的区别`,
        },
        {
          topic: `什么是语义化标签`,
        },
        {
          topic: `::before 和 :after 中双冒号和单冒号有什么区别？ 解释一下这两个伪元素的作用`,
        },
        {
          topic: `如何关闭IOS键盘首字母自动大写`,
        },
        {
          topic: `怎么让chrome支持小于12px 的文字`,
        },
        {
          topic: `rem和em区别`,
        },
        {
          topic: `ios系统中元素被触摸时产生的半透明灰色遮罩怎么去掉`,
        },
        {
          topic: `webkit表单输入框placeholder的颜色值能改变吗`,
        },
        {
          topic: `禁止ios 长时间不触发系统的菜单，禁止ios&Android长按时下载图片`,
        },
        {
          topic: `禁止ios和Android用户选中文字`,
        },
        {
          topic: `自适应`,
        },
        {
          topic: `响应式`,
        },
        {
          topic: `var、 let、const区别`,
        },
        {
          topic: `作用域考题`,
        },
        {
          topic: `将下列对象进行合并`,
        },
        {
          topic: `箭头函数和普通函数有什么区别`,
        },
        {
          topic: `promise有几种状态`,
        },
        {
          topic: `find和filter的区别`,
        },
        {
          topic: `some和every的区别`,
        },
        {
          topic: `webpack插件`,
        },
        {
          topic: `git常用命令`,
        },
        {
          topic: `解决冲突`,
        },
        {
          topic: `GitFlow`,
        },
        {
          topic: `vue2.x 生命周期有哪些？`,
        },
        {
          topic: `第一次进入组件或者页面，会执行哪些生命周期？`,
        },
        {
          topic: `谈谈你对keep-alive的了解`,
        },
        {
          topic: `v-if和v-show区别`,
        },
        {
          topic: `v-if和v-for优先级`,
        },
        {
          topic: `ref是什么`,
        },
        {
          topic: `nextTick是什么`,
        },
        {
          topic: `路由导航守卫有哪些`,
        },
        {
          topic: `vue中如何做样式穿透`,
        },
        {
          topic: `scoped原理`,
        },
        {
          topic: `vuex是单向数据流还是双向数据流`,
        },
        {
          topic: `讲一下MVVM`,
        },
        {
          topic: `双向绑定原理`,
        },
        {
          topic: `什么是虚拟DOM`,
        },
        {
          topic: `diff算法`,
        },
        {
          topic: `vue组件传值`,
        },
        {
          topic: `介绍一下SPA以及SPA有什么缺点`,
        },
        {
          topic: `vue双向绑定和单向绑定`,
        },
        {
          topic: `props和data优先级谁高？`,
        },
        {
          topic: `computed、methods、watch有什么区别`,
        },
        {
          topic: `vuex`,
        },
        {
          topic: `加载优化`,
        },
        {
          topic: `图片优化`,
        },
        {
          topic: `渲染优化`,
        },
        {
          topic: `首屏优化`,
        },
        {
          topic: `vue优化`,
        },
        {
          topic: `页面样式兼容`,
        },
        {
          topic: `框架兼容`,
        },
        {
          topic: `跨域问题`,
        },
        {
          topic: `http和https`,
        },
        {
          topic: `XSS攻击`,
        },
        {
          topic: `SQL注入`,
        },
        {
          topic: `接口安全`,
        },
      ],
      //#endregion
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
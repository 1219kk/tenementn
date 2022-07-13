<template>
  <div class="home-search">
    <div class="search-input">
      <div class="left">
        <span class="name">北京</span>
        <i class="iconfont icon-xiala" @click="openArrow"></i>
      </div>
      <div class="form">
        <i class="iconfont icon-chazhao"></i>
        <span class="text">请输入小区或地址</span>
      </div>
    </div>
    <i class="iconfont icon-ditu dt"></i>
    <my-arrow ref="myArrow"></my-arrow>
  </div>
</template>

<script>
import MyArrow from './MyArrow.vue'
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    openArrow () {
      this.$refs.myArrow.show = true
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { MyArrow }
}
</script>

<style scoped lang='less'>
.home-search {
  width: 600px;
  padding: 0 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  margin: 20px;
  height: 68px;
  .search-input {
    flex: 1 1;
    margin: 0 10px;
    padding: 5px 5px 5px 8px;
    border-radius: 3px;
    background-color: #fff;
    display: flex;
    .left {
      display: flex;
      height: 63px;
      align-items: center;
      .name {
        font-size: 14px;
        line-height: 1.15;
        display: flex;
      }
      .iconfont {
        margin-left: 2px;
        font-size: 12px;
        color: #7f7f80;
      }
    }
    .form {
      display: flex;
      border-left: 1px solid #e5e5e5;
      line-height: 16px;
      height: 63px;
      align-items: center;
      margin-left: 10px;

      .text {
        padding-left: 4px;
        font-size: 13px;
        color: #9c9fa1;
      }
      .iconfont {
        vertical-align: middle;
        padding: 0 2px 0 12px;
        color: #9c9fa1;
        font-size: 30px;
      }
    }
  }
  .dt {
    font-size: 40px;
    color: #fff;
  }
}
</style>

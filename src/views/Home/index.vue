<template>
  <div>
    <div class="header">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <!-- swpierData使用的是data中的数据 -->
        <van-swipe-item v-for="item in swpierData1111" :key="item.id"
          ><img :src="`http://liufusong.top:8080${item.imgSrc}`"
        /></van-swipe-item>
      </van-swipe>
      <MySearch class="my-search"></MySearch>
    </div>

    <div class="tubiao">
      <div class="tu-one">
        <a href="#/find">
          <img src="@/assets/11.png" alt="" class="tu-img" />
          <h2>整租</h2>
        </a>
      </div>
      <div class="tu-one">
        <img src="@/assets/22.png" alt="" class="tu-img" />
        <h2>合租</h2>
      </div>
      <div class="tu-one">
        <img src="@/assets/33.png" alt="" class="tu-img" />
        <h2>地图找房</h2>
      </div>
      <div class="tu-one">
        <img src="@/assets/44.png" alt="" class="tu-img" @click="showAdd" />
        <h2>去出租</h2>
      </div>
    </div>
    <div class="xiaozu">
      <h3>
        租房小组 <span class="more"><a href="#">更多</a></span>
      </h3>
      <div class="img-four">
        <div class="img-top" v-for="item in groupsData" :key="item.id">
          <div class="one">
            <img
              :src="`http://liufusong.top:8080${item.imgSrc}`"
              alt=""
              class="one-img"
            />
            <div class="one-titel">
              <p>{{ item.title }}</p>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MySearch from '@/components/MySearch.vue'
import { getMyswiper, getGroups } from '@/api/home'
export default {
  created () {
    // 调用的是methods中的initSwiperData方法
    this.initSwiperData()
    this.initGroupsData()
  },
  data () {
    return {
      // 页面中和要使用的数据
      swpierData1111: [],
      groupsData: []
    }
  },
  methods: {
    async initSwiperData () {
      try {
        // getMyswiper调用的是api接口
        const res = await getMyswiper()
        // 从api接口返回的数据中取出需要的数据赋值给data中的属性
        this.swpierData1111 = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async initGroupsData () {
      try {
        const res = await getGroups()
        this.groupsData = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    showAdd () {
      this.$router.push('/add')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { MySearch }
}
</script>

<style scoped lang='less'>
.header {
  position: relative;
  width: 100%;
  height: 424px;
  .my-search {
    position: absolute;
    top: 25px;
    width: 90%;
    position: absolute;
  }
}
.my-swipe .van-swipe-item {
  // position: absolute;
  // z-index: 1;
  width: 100%;
  height: 424px;

  // left: 0;
  // top: 0;
  // background-color: red;
  img {
    width: 100%;
  }
}
.tubiao {
  align-items: center;
  text-align: left;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 242px;
  .tu-one {
    width: 190px;
    text-align: center;
    padding: 10px 0;
    .tu-img {
      width: 120px;
      height: 120px;
    }
    h2 {
      font-size: 14px;
      font-weight: 400;
    }
  }
}

.xiaozu {
  height: 374px;
  background-color: #f6f5f6;
  h3 {
    font-size: 27px;
    margin-left: 30px;
  }
  .fenli van-grid {
    height: 375px;
  }
  .more {
    margin-left: 500px;
    a {
      color: #787d82;
    }
  }
}
/deep/.van-grid-item__icon {
  font-size: 110px;
}
.img-four {
  width: 750px;
  height: 260px;
  // background-color: #fff;
  .img-top {
    width: 50%;
  }
  .one {
    display: flex;
    margin: 15px 15px;
    border-radius: 10px;
    background-color: #ffffff;
    // border: 1px solid red;
    .one-img {
      margin: 10px;
      width: 110px;
      height: 100px;
    }
    .one-titel {
      width: 170px;
      height: 32px;
      font-size: 13px;
      margin: 0 20px;
    }
  }
}
.img-top {
  float: left;
}
.img-bottom {
  float: right;
}
</style>

<template>
  <div style="position: relative; padding-bottom: 50px">
    <van-nav-bar
      :placeholder="true"
      :title="houseData.community"
      left-arrow
      @click-left="$router.back()"
    ></van-nav-bar>
    <!-- 轮播图 -->
    <div class="housedetail">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in houseData.houseImg" :key="item"
          ><img :src="`http://liufusong.top:8080${item}`" alt="" class="imgh"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 介绍 -->
    <div class="houseinfo">
      <h3 class="houseTitle">{{ houseData.description }}</h3>
      <div class="housetags">
        <div class="tagsInfo">
          <span class="Mytags" v-for="item in houseData.tags" :key="item">
            {{ item }}</span
          >
        </div>
      </div>
      <div class="houseprice">
        <div class="one">
          <div class="onesprice">
            <span class="onesprice1">{{ houseData.price }}/月</span>
            <div>租金</div>
          </div>
        </div>
        <div class="two">
          <div class="twosprice">
            <span class="twosprice1">{{ houseData.roomType }}</span>
            <div>租金</div>
          </div>
        </div>
        <div class="three">
          <div class="threesprice">
            <span class="threesprice1">{{ houseData.size }}平米</span>
            <div>租金</div>
          </div>
        </div>
      </div>
      <div class="houseinfoo">
        <div class="houseitem">
          <div>
            <span class="itemone">装修:<span class="heise">精装</span></span>
            <span class="itemone"
              >楼层:<span class="heise">{{ houseData.floor }}</span></span
            >
          </div>
          <div>
            <span class="itemtwo"
              >朝向：
              <span
                class="heise1"
                v-for="item in houseData.oriented"
                :key="item"
                >{{ item }}</span
              ></span
            >
            <span class="itemtwo"
              >类型： <span class="heise1">普通住宅</span></span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="housedt">
      <div class="dtinfo">小区：<span>XXXX</span></div>
      <div class="map">
        <img src="@/assets/wallhaven-y8622k.jpg" alt="" class="map1" />
      </div>
    </div>
    <!-- 关于有什么 -->
    <div class="houseabout">
      <div class="about">房屋配套</div>
      <ul class="houseul">
        <li v-for="item in houseData.supporting" :key="item">
          <p><i class="iconfont icon-xingxing"></i></p>
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- 房源情况 -->
    <div class="houseset">
      <div class="settitel">房源情况</div>
      <div class="setall">
        <div class="setinfo">
          <div class="setimg">
            <img src="@/assets/avatar.png" alt="" class="setimg1" />
            <div class="setuser">
              <div class="wang">王女士</div>
              <div class="settu">
                <i class="iconfont icon-xingxing"></i>
                已认证房主
              </div>
            </div>
            <span class="setbtn">发消息</span>
          </div>
          <div class="setessage">
            1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
            2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
            3.人车分流，环境优美。
            4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
          </div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="housecommend"></div>
    <!-- 按钮 -->
    <div class="housebottom">
      <div class="itembtn">
        <i class="iconfont icon-xingxing"></i>
        <span class="shoucang">收藏</span>
      </div>
      <div class="itembtn1">在线资讯</div>
      <div class="itembtn2"></div>
    </div>
  </div>
</template>

<script>
import { getHouseById } from '@/api/house'
export default {
  async created () {
    const houseCode = this.$route.params.houseCode
    try {
      const res = await getHouseById(houseCode)
      console.log(res)
      this.houseData = res.data.body
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      houseData: {
        community: '',
        description: '',
        price: '',
        roomType: '',
        size: '',
        oriented: [],
        floor: '',
        supporting: [],
        houseImg: []
      }
    }
  },
  methods: {

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 510px;
  text-align: center;
  // background-color: #39a9ed;
  .imgh {
    width: 750px;
    height: 510px;
  }
}
.housedetail {
  height: 510px;
}
.houseinfo {
  width: 750px;
  padding: 30px;
  .houseTitle {
    font-weight: 400;
    font-size: 32px;
    color: #333;
    height: 38px;
  }
  .Mytags {
    color: #39becd;
    background: #e1f5f8;
    font-size: 24px;
    height: 40px;
  }
  .houseprice {
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    margin: 30px 0;
    padding: 30px 0;
    display: flex;
    text-align: center;
    align-items: center;
    .one,
    .two,
    .three {
      width: 220px;
      height: 104px;
      display: flex;
      .onesprice,
      .twosprice,
      .threesprice {
        width: 252px;
        height: 104px;
        .onesprice1,
        .twosprice1,
        .threesprice1 {
          color: #fa5741;
          font-size: 36px;
          font-weight: bolder;
          height: 40px;
        }
        div {
          height: 52px;
          color: #999;
          font-size: 28px;
        }
      }
    }
  }
  .houseitem {
    font-size: 26px;
    display: flex;
    align-items: center;
    div {
      height: 102px;
      width: 340px;
    }
    .itemone,
    .itemtwo {
      display: flex;
      color: #999;
      padding-right: 5px;
      line-height: 26px;
      padding: 10px;
      .heise {
        color: #333;
      }
      .heise1 {
        color: #333;
      }
    }
  }
}
.housedt {
  margin-top: 10px;
  background: #fff;
  height: 400px;
  .dtinfo {
    height: 88px;
    font-size: 40px;
  }
  .map {
    height: 290px;
    .map1 {
      height: 290px;
      width: 750px;
    }
  }
}
.houseabout {
  margin-bottom: 10px;
  padding: 0 10px;
  height: 260px;
  .about {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
  }
  .houseul {
    display: flex;
    // justify-content: center;
    align-items: center;
  }
}
.houseset {
  margin: 10px 0;
  padding: 0 10px;
  line-height: 150%;
  height: 532px;
  .setall {
    height: 408px;
  }
  .setinfo {
    position: relative;
  }
  .wang {
    height: 42px;
    font-size: 20px;
  }
  .setimg {
    margin: 10px;
    display: flex;
    .setimg1 {
      width: 104px;
      height: 104px;
    }
  }
  .settu {
    font-size: 24px;
    color: #fa5741;
  }
  .setuser {
    width: 180px;
    height: 124px;
    margin-left: 20px;
  }
  /deep/ .setbtn {
    align-items: center;
    font-size: 28px;
    position: absolute;
    right: 15px;
    top: 20px;
    color: #33be85;
    border: 1px solid #33be85;
    border-radius: 5px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 3px 15px;
  }
  .settitel {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 15px 0;
    border-bottom: 1px solid #cecece;
  }
  .setessage {
    line-height: 1.6;
    padding: 10px 0;
    color: #333;
    height: 264px;
    font-size: 28px;
  }
}
.housecommend {
  height: 836px;
  margin: 10px 0 0;
  padding: 0 15px;
  background: #fff;
}
.housebottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  height: 100px;
  line-height: 50px;
  border-top: 1px solid #cecece;
  font-size: 17px;
  color: #999;
  background-color: #fff;
  .itembtn {
    border-right: 1px solid #e8e8e9;
    .shoucang {
      margin-left: 6px;
    }
  }
  .itembtn1 {
    box-sizing: border-box;
    flex: 1 1;
    position: fixed;
    margin-left: 8px;
    min-width: 10px;
  }
}
</style>

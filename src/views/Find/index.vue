<template>
  <div>
    <!-- 标题 -->
    <van-search background="#4fc08d" show-action placeholder="请输入小区或地址">
      <template #left><van-icon name="arrow-left" color="#ffffff" /> </template>
      <template #label>
        <span>
          北京
          <i class="iconfont icon-xiala xiala" @click="showArrow"></i>
        </span>
      </template>
      <template #action>
        <i class="iconfont icon-ditu dt"></i>
      </template>
    </van-search>
    <!-- 吸附 -->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="show = true" ref="showRef">
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup
      class="MyPopup"
      v-model="show"
      position="right"
      :style="{ width: '80%', height: '100%' }"
      @close="$refs.showRef.toggle()"
      ><FindPopup></FindPopup
    ></van-popup>

    <template>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="All"
            v-for="(item, index) in MyHouse"
            :key="index"
            @click="isAddShow(item.houseCode)"
          >
            <div class="all">
              <div class="all-img">
                <img
                  :src="`http://liufusong.top:8080${item.houseImg}`"
                  alt=""
                  class="himg"
                />
              </div>
              <div class="all-item">
                <h3 class="allh3">{{ item.title }}</h3>
                <div class="alldesc">{{ item.desc }}</div>
                <div>
                  <span
                    class="alldt"
                    v-for="(item1, index) in item.tags"
                    :key="index"
                    >{{ item1 }}</span
                  >
                </div>
                <div class="allred">
                  <span class="allprice">{{ item.price }}元/月</span>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </template>
    <my-arrow ref="showarrow"></my-arrow>
    <!-- <van-popup
      v-model="isAddShow"
      :style="{ height: '100%', width: '100%' }"
    >
    </van-popup> -->
  </div>
</template>

<script>
import MyArrow from '@/components/MyArrow.vue'
import { getHouse, getCondition } from '@/api/house'
import FindPopup from './components/FindPopup.vue'

export default {
  created () {
    this.getCondition1()
  },
  data () {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      show: false,
      list: [],
      MyHouse: [],
      // isAddShow: false
      searcHForm: {
        start: 1,
        end: 20
      },
      columns: [
      ],
      columns1: [
      ],
      columns2: [
      ]

    }
  },
  methods: {
    async getCondition1 () {
      const res1 = await getCondition('AREA|88cff55c-aaa4-e2e0')
      console.log(res1)
      res1.data.body.area.children[0].children = [{ label: '' }]
      res1.data.body.subway.children[0].children = [{ label: '' }]
      this.columns = [res1.data.body.area, res1.data.body.subway]
      this.columns1 = res1.data.body.rentType
      this.columns2 = res1.data.body.price
    },
    onLoad () {
      this.MygetHouse()
      this.searcHForm.start += 20
      this.searcHForm.end += 20
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      this.searcHForm.start = 1
      this.searcHForm.end = 20

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    showArrow () {
      this.$refs.showarrow.show = true
    },
    async MygetHouse () {
      try {
        const res = await getHouse(this.searcHForm)
        console.log(res)
        this.MyHouse = res.data.body.list
      } catch (err) {
        console.log(err)
      }
    },
    isAddShow (houseCode) {
      this.$router.push({ path: `detail/${houseCode}` })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { MyArrow, FindPopup }
}
</script>

<style scoped lang='less'>
.dt {
  font-size: 40px;
  color: #fff;
}
.xiala {
  border-right: 1px solid #e5e5e5;
}
/deep/.van-dropdown-menu__bar--opened {
  z-index: 1;
}
.All {
  width: auto;
  // max-width: 345px;
  overflow: hidden;
  position: relative;
  margin: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  .all {
    width: 750px;
    height: 240px;
    left: 0px;
    top: 0px;
    box-sizing: border-box;
    justify-content: space-around;
    padding-top: 18px;
    display: flex;

    // border-bottom: 1px solid #e5e5e5;
    .all-img {
      float: left;

      .himg {
        width: 212px;
        height: 160px;
      }
    }
    .all-item {
      overflow: hidden;
      line-height: 22px;
      padding-left: 44px;
      width: 480px;
      height: 180px;
      .allh3 {
        font-size: 30px;
        color: #394043;
      }
      .alldesc {
        font-size: 12px;
        color: #afb2b3;
      }
      .alldt {
        color: #39becd;
        background: #e1f5f8;
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
      }
      .allred {
        color: #fa5741;
        .allprice {
          font-size: 16px;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>

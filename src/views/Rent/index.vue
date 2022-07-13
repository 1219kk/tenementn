<template>
  <div class="main">
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.go(-1)" />
    <van-cell-group>
      <!-- 房源 -->
      <van-cell title="房源信息" title-style="color:#20b97a" />
      <van-field
        v-model="number"
        type="number"
        label="小区名称"
        placeholder="请输入小区名称"
        input-align="right"
        right-icon="arrow"
      >
      </van-field>
      <van-field
        v-model="number"
        type="number"
        label="租金"
        placeholder="请输入租金/月"
      >
        <template #extra>
          <span>￥/月</span>
        </template>
      </van-field>
      <van-field
        v-model="number"
        type="number"
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #extra>
          <span>m²</span>
        </template>
      </van-field>
      <van-cell
        title="户 型"
        value="请选择"
        is-link
        @click="isShow = true"
      ></van-cell>
      <van-popup v-model="isShow" position="bottom">
        <van-picker title="标题" show-toolbar :columns="columns" />
      </van-popup>
      <van-cell
        title="所在楼层"
        value="请选择"
        is-link
        @click="isShow1 = true"
      ></van-cell>
      <van-popup v-model="isShow1" position="bottom">
        <van-picker title="标题" show-toolbar :columns="columns1" />
      </van-popup>
      <van-cell
        title="朝向"
        value="请选择"
        is-link
        @click="isShow2 = true"
      ></van-cell>
      <van-popup v-model="isShow2" position="bottom">
        <van-picker title="标题" show-toolbar :columns="columns2" />
      </van-popup>
    </van-cell-group>
    <van-cell title="房屋标题" />
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      placeholder="请输入标题 (例如：整租 小区名 2室 5000元)"
      show-word-limit
    />
    <van-cell title="房屋图像" />
    <van-uploader>
      <van-button
        class="fangxing"
        square
        icon="plus"
        type="default"
      ></van-button>
    </van-uploader>
    <!-- 配置 -->
    <van-cell title="房屋配置" />
    <div class="tubiao">
      <ul>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>衣柜</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>洗衣机</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>空调</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>天然气</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>冰箱</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>热水器</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>宽带</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>沙发</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>沙发</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xingxing"></i></span>
          </p>
          <span>沙发</span>
        </li>
      </ul>
    </div>
    <van-cell title="房屋描述" />
    <van-field
      v-model="message1"
      rows="6"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入房屋描述信息"
      show-word-limit
    />
    <div class="bottom-btn">
      <van-button class="moren" type="default">取消</van-button>
      <van-button class="zhuyao" type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
import { getHouseCondition } from '@/api/house'
export default {
  created () {
    this.getHouseCondition1()
  },
  data () {
    return {
      number: '',
      activeNames: [],
      message: '',
      message1: '',
      isShow: false,
      isShow1: false,
      isShow2: false,
      columns: [],
      columns1: [],
      columns2: [],
      getHouseCondition: ''
    }
  },
  methods: {
    async getHouseCondition1 () {
      try {
        const res = await getHouseCondition(this.params)
        console.log(res)
        this.columns = res.data.body.roomType.map(e => e.label)
        this.columns1 = res.data.body.floor.map(e => e.label)
        this.columns2 = res.data.body.oriented.map(e => e.label)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.main {
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
}
.fangxing {
  width: 166px;
  height: 166px;
  margin: 20px 20px 30px 20px;
}
.tubiao {
  box-sizing: border-box;
  overflow: auto;
  width: 750px;
  // background-color: pink;
  height: 300px;
  // background-color: pink;
  margin-top: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 150px;
      height: 60px;
      margin: 30px 0;
      font-size: 26px;
      text-align: center;
      // border-right: 1px solid #999;
      .iconfont {
        font-size: 50px;
      }
    }
  }
}
/deep/ .bottom-btn {
  position: fixed;
  bottom: 0;

  .moren {
    width: 375px;
    height: 90px;
    color: #20b97a;
  }
  .zhuyao {
    width: 375px;
    height: 90px;
    background-color: #20b97a;
  }
}
</style>

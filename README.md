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
    <!-- 吸附van-sticky -->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域" ref="item1">
          <div style="padding: 5px 16px">
            <van-cascader
              title="请选择所在地区"
              :options="options"
              @finish="onConfirm1"
            />
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="区域" ref="item2">
          <div style="padding: 5px 16px">
            <van-cascader
              title="请选择所在地区"
              :options="options"
              @finish="onConfirm2"
            />
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="区域" ref="item3">
          <div style="padding: 5px 16px">
            <van-cascader
              title="请选择所在地区"
              :options="options"
              @finish="onConfirm3"
            />
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="区域" ref="item4">
          <div style="padding: 5px 16px">
            <van-cascader
              title="请选择所在地区"
              :options="options"
              @finish="onConfirm4"
            />
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    /><van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    /><van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    /><van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    /><van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    /><van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
    <my-arrow ref="showarrow"></my-arrow>
  </div>
</template>

<script>
import MyArrow from '@/components/MyArrow.vue'
export default {
  created () { },
  data () {
    return {
      options: [
        {
          text: '浙江',
          children: [
            { id: 1, text: '浙江', children: [{ text: '浙江' }] },
            { id: 2, text: '浙江' }
          ]
        },
        { id: 4, text: '浙江' }
      ],
      activeId: 1,
      activeIndex: 0
    }
  },
  methods: {
    onConfirm1 () {
      this.$refs.item1.toggle()
    },
    onConfirm2 () {
      this.$refs.item2.toggle()
    },
    onConfirm3 () {
      this.$refs.item3.toggle()
    },
    onConfirm4 () {
      this.$refs.item4.toggle()
    },
    showArrow () {
      this.$refs.showarrow.show = true
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: { MyArrow }
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
</style>

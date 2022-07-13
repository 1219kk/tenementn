<template>
  <div>
    <van-popup v-model="show" position="top" style="height: 100%">
      <van-nav-bar title="城市列表" left-arrow @click-left="show = false" />
      <van-index-bar :index-list="computedCity.indexList">
        <span v-for="item in computedCity.data" :key="item.index">
          <van-index-anchor :index="item.index">
            {{ item.index }}
          </van-index-anchor>
          <van-cell
            v-for="city in item.cityList"
            :key="city.value"
            :title="city.label"
          />
        </span>
      </van-index-bar>
    </van-popup>
  </div>
</template>

<script>
import { getMyCity } from '@/api/area'
// getHotCity
export default {
  created () {
    this.getCity()
  },
  data () {
    return {
      show: false,
      cityList: []
    }
  },
  computed: {
    computedCity () {
      const cityList = this.cityList
      const report = []
      const indexList = cityList.map(e => ({ index: e.pinyin[0].toUpperCase() }))
        .filter(e => {
          if (report.includes(e.index)) {
            return false
          } else {
            report.push(e.index)
            return true
          }
        })
        .sort((o, n) => {
          return o.index > n.index ? 1 : -1
        })
      indexList.forEach(e => {
        e.cityList = cityList.filter(t => t.pinyin[0].toUpperCase() === e.index)
      })
      const result = {
        indexList: [...new Set(indexList.map(e => e.index))],
        data: indexList
      }
      return result
    }
  },
  methods: {
    setShow (show = false) {
      this.show = show
    },
    async getCity () {
      try {
        const res = await getMyCity({ level: 1 })
        this.cityList = res.data.body
      } catch (err) {
        console.log(err)
      }

      // async getHot () {
      //   try {
      //     const res = await getHotCity()
      //     console.log(res)
      //   } catch (err) {
      //     console.log()
      //   }
      // }
    }
  }
}
</script>

<style scoped lang='less'>
</style>

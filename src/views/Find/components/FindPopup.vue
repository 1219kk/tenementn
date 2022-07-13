<template>
  <div>
    <span class="huxing">户型</span>

    <!-- <template>
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-checkbox v-model="checked">
            <template #icon="{ checked }">
              <div class="my-check" :class="checked ? 'my-checked' : ''">
                选中
              </div>
            </template>
          </van-checkbox>
        </van-cell-group>
      </van-checkbox-group> -->
    <!-- </template> -->
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      result: [],
      checked: ''
    }
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-check {
  padding: 10px;
  width: 300px;
  height: 300px;
  background-color: #fff;
  border: 1px solid blue;
}
.my-checked {
  background-color: rgb(29, 170, 247);
}
.huxing {
  width: 100vw;
  height: 100vh;
  margin: 20px 0;
  font-size: 15px;
}
</style>

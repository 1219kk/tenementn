<template>
  <div>
    <!-- 登录后 -->
    <div class="header header-notlogin" v-if="user && user.token">
      <img src="@/assets/bg.png" class="notlogin-bg" />
      <div class="login-bgshang">
        <div class="bgshang-tupian">
          <img src="@/assets/avatar.png" class="bgshang-touxiang" />
        </div>
        <div class="login-name">name</div>
        <div class="tuichu">
          <van-button
            type="primary"
            size="small"
            round
            v-if="user && user.token"
            @click="logout"
            >退出</van-button
          >
        </div>
      </div>
    </div>
    <!-- 登录前 -->
    <div class="header header-login" v-else>
      <img src="@/assets/bg.png" class="login-bg" />
      <div class="login-bgshang">
        <div class="bgshang-tupian">
          <!-- <img src="@/assets/avatar.png" class="bgshang-touxiang" /> -->
          <img src="@/assets/bavatar.png" class="bgshang-touxiang" />
        </div>
        <div class="youke">游客</div>
        <div class="denglu">
          <van-button
            type="primary"
            size="small"
            @click="$router.push({ path: 'login' })"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <van-grid :column-num="3">
      <van-grid-item>
        <van-icon class="iconfont icon-xingxing" size="20px">
          <p>我的收藏</p>
        </van-icon>
      </van-grid-item>
      <van-grid-item>
        <van-icon class="iconfont icon-fangzi" size="20px">
          <p>我的出租</p>
        </van-icon>
      </van-grid-item>
      <van-grid-item>
        <van-icon class="iconfont icon-shizhong" size="20px">
          <p>看房记录</p>
        </van-icon>
      </van-grid-item>
      <van-grid-item>
        <van-icon class="iconfont icon-fkfangqia-" size="20px">
          <p>成为房主</p>
        </van-icon>
      </van-grid-item>
      <van-grid-item>
        <van-icon class="iconfont icon-geren" size="20px">
          <p>个人资料</p>
        </van-icon>
      </van-grid-item>
      <van-grid-item>
        <van-icon class="iconfont icon-lianxiwomen" size="20px">
          <p>联系我们</p>
        </van-icon>
      </van-grid-item>
    </van-grid>
    <div class="login-img">
      <img src="@/assets/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'

export default {
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await getUserInfo()
        console.log('res', res)
        this.userInfo = res.data.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确认退出吗' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header {
  width: 750px;
  height: 600px;
  // background-color: green;
  // background-size: cover;
  position: relative;
  min-height: 300px;
  img {
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
}
.login-bgshang {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
  .bgshang-tupian {
    position: relative;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 130px;
    height: 130px;
    border: 5px solid #f5f5f5;
    display: inline-block;
    box-shadow: 0 2px 2px #bdbdbd;
    .bgshang-touxiang {
      width: 100%;
      border-radius: 50%;
    }
  }
  .youke {
    margin-top: -40px;
    margin-bottom: 10px;
  }
  .denglu {
    height: 60px;
    color: #999;
    font-size: 12px;
    .van-button {
      margin-top: 10px;
    }
  }
  .login-name {
    margin-top: -50px;
    margin-bottom: 10px;
  }
}

.van-grid {
  margin: 5px;
}
.van-grid-item .van-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 120px;
  p {
    margin: 20px;
    font-size: 28px;
  }
}
.login-img {
  text-align: center;
  margin-top: 10px;
  img {
    height: 160px;
  }
}
</style>

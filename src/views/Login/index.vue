<template>
  <div>
    <div>
      <van-nav-bar title="账号登录" left-arrow></van-nav-bar>
      <div class="Login">
        <van-form @submit="onSubmit">
          <van-field
            label-width="30px"
            v-model.trim="username"
            name="username"
            placeholder="请输入用户名"
            :rules="[
              { required: true, message: '请填写用户名' },
              {
                pattern: /^[a-zA-Z0-9]{4,16}$/,
                message: '账号不符合规范',
              },
            ]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="请输入密码"
            :rules="[
              { required: true, message: '请填写密码' },
              { pattern: /^\d{6}$/, message: '密码的长度必须的6位' },
            ]"
          />
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              class="LoginBtn"
              >登录</van-button
            >
          </div>
          <div class="zuce">
            <a href="#/registe">还没有账号，去注册~</a>
          </div>
        </van-form>
      </div>
    </div>
    <!--   <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div> -->
  </div>
</template>

<script>
import { MyLogin } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const a = /^[a-zA-Z0-9]{5,8}$/
      const b = /^[a-zA-Z0-9]{5,12}$/
      // console.log('submit', values)
      if (this.username === '' || this.password === '') {
        this.$toast('用户名或者密码不能为空')
      } else if (!new RegExp(a).test(this.username)) {
        this.$toast('用户名格式不对')
      } else if (!new RegExp(b).test(this.password)) {
        this.$toast('密码格式不对')
      } else {
        try {
          // const res = await login({ username: this.username, password: this.password })
          const res = await MyLogin(values)
          console.log(res)
          console.log(values)
          // 将token值传到vuex中这里值是data.body中
          this.$store.commit('setUser', res.data.body)
          this.$toast('登录成功')
          this.$router.push({ path: 'personal' })
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
}
//   methods: {
//     onSubmit (values) {
//       MyLogin(values).then(res => {
//         const { status, body, description } = res.data
//         if (status === 200) {
//           this.$toast.success('登录成功')
//           // setTimeout(() => {
//           //   this.$router.push({ path: 'personal' })
//           // }, 2000)
//         } if (status === 400) {
//           this.$toast('失败')
//           console.log(description)
//         } else {
//           console.log(body)
//         }
//       }).finally(() => {

//       })
//     }
//   }
// }
</script>

<style scoped lang='less'>
.van-form {
  height: 412px;
}
.van-cell {
  height: 120px;
  font-size: 34px;
  margin: 20px;
}
.van-field__control {
  height: 30px;
}
.LoginBtn {
  margin-top: 30px;
  background-color: #21b97a;
  font-size: 38px;
  color: #fff;
  border: 1px solid #1cb676;
  border-radius: 2px;
  width: 100%;
}
.zuce {
  font-size: 28px;
  text-align: center;
  margin-top: 50px;
  a {
    color: #666;
  }
}
</style>

<template>
  <div class="header_index" :class="{ scrolled: scrolled, hidden: hidden }">
    <div class="content">
      <div class="header_left">
        <div class="logo">
          <img :src="logo" alt="">
        </div>
      </div>
      <div class="header_center">
        <div class="fontBtn">
          <div
            v-for="(item,id) in list"
            :key="id"
            @click="changeLink(item.path)"
            :class="item.class"
          >{{item.label}}</div>
        </div>
      </div>
      <div class="header_right">
        <button class="login" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/image/tab/Group.png"
export default {
  data() {
    return {
      scrolled: false,
      hidden: false,
      lastScrollPosition: 0,
      logo:logo,
      list: [
        { label: "首页", id: 1, path: "mainHome",class:"nav one" },
        { label: "企业", id: 2, path: "company",class:"nav two" },
        { label: "产品", id: 3, path: "product",class:"nav three" },
        { label: "动态", id: 4, path: "trends",class:"nav four" },
        { label: "联系我们", id: 5, path: "relation",class:"nav five" }
      ]
    };
  },
  methods: {
    changeLink(e) {
      this.$router.push({path:e})
    },
    login(){
      this.$router.push({ path:"/swiss" })
    },
    handleScroll() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > this.lastScrollPosition) {
        // 向下滚动
        this.hidden = true;
      } else {
        // 向上滚动
        this.hidden = false;
      }

      this.lastScrollPosition = scrollPosition;
      this.scrolled = scrollPosition > 0;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.header_index {
  width: 100%;
  height: 80px;
  .content {
    margin: 0 10%;
    display: flex;
    line-height: 40px;

    .header_left {
      margin-top: 22px;
      margin-right: 12%;
      .logo {
        width: 150px;
        height: 36px;
        top: 22px;
        left: 120px;
        img{
          heitgh:100%;
          width: 100%;
          background: transparent;
        }
      }
    }

    .header_center {
      margin-top: 28px;
      margin-right: 20%;
      .fontBtn {
        display: flex;
        flex-direction: row;
        height: 28px;
        width: 552px;
        .nav{
          width: 36px;
          height: 24px;
          line-height: 24px;
          cursor: pointer;
          color: #000;
          display: flex;
          flex-direction: row;
          margin-right: 50px;
          font-family: Roboto;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0px;
          text-align: left;
        }
        .five{
          width: 72px;
        }

        div:active {
          color: #274AFF;
          border-bottom: 2px #274AFF solid;
        }
      }
    }

    .header_right {
      margin-top: 20px;
      padding: 3px 34px 3px 34px;
      text-align: left;
      .login {
        cursor: pointer;
        background-color: #274AFF;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        height: 40px;
        width: 88px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0px;
      }

      .login:active {
        color: #000000;
      }
    }
  }
}

.scrolled{
  background: #0083ff;
  opacity: 0.8;
}
.hidden {
  opacity: 0; /* 隐藏导航栏 */
  transform: translateY(-100%); /* 将导航栏向上移动 */
  transition: opacity 1s ease, transform 1s ease; /* 添加过渡效果 */
}

.hidden-enter-active {
  transition: opacity 1s ease, transform 1s ease; /* 添加过渡效果 */
}

.hidden-leave-active {
  transition: opacity 1s ease, transform 1s ease; /* 添加过渡效果 */
}

.hidden-enter {
  opacity: 0; /* 进入过渡前的初始状态 */
  transform: translateY(-100%); /* 进入过渡前的初始状态 */
}

.hidden-leave-to {
  opacity: 0; /* 离开过渡后的结束状态 */
  transform: translateY(-100%); /* 离开过渡后的结束状态 */
}
</style>
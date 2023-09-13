<template>
  <!-- 首页 -->
  <div class="main_home">
    <div class="content">
      <show/>
      <business/>
      <introduce/>
      <develop/>
      <partners/>
      <enterprise/>
    </div>
    <div class="toTop">
      <button class="back-to-top" v-show="showBackToTop" @click="scrollToTop">
        返回顶部
      </button>
    </div>
  </div>
</template>

<script>
import show from "@/views/showIndex/show/index.vue"
import develop from "@/views/showIndex/developDirection/index.vue"
import enterprise from "@/views/showIndex/enterpriseDynamics/index.vue"
import partners from "@/views/showIndex/partners/index.vue";
import business from "@/views/showIndex/business/index.vue"
import introduce from "@/views/showIndex/productIntroduction/index.vue"
export default {
  components:{
    show,
    develop,
    enterprise,
    partners,
    business,
    introduce
  },
  data() {
    return {
      showBackToTop: false,
    };
  },
  methods: {
    handleScroll() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.showBackToTop = scrollPosition > 500;
    },
    scrollToTop() {
      const duration = 500;
      const start = window.pageYOffset || document.documentElement.scrollTop;
      const startTime = performance.now();
      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
      const animateScroll = (timestamp) => {
        const currentTime = timestamp - startTime;
        const scrollTo = Math.max(0, start - start * easeInOutQuad(currentTime / duration));

        window.scrollTo(0, scrollTo);

        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      }
      requestAnimationFrame(animateScroll);
    },
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.main_home{

  .content{
    height: 100%;
    width: 100%;
  }
  .toTop{
    .back-to-top{
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ccc;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .back-to-top.show {
      opacity: 1;
    }
  }
}
</style>

<template>
  <!-- 企业介绍 -->
  <div class="page">
    <!--    <img :src="image1" alt="">-->
    <swiper class="content" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="substance one">
        <div class="font">
          <p class="title">
            智能物链网
            <br>
            赋能新时代
          </p>
          <p class="introduce">
            Smart Blockchain of Things, enabling a new era.
          </p>
        </div>
        <div></div>
        <div class="illustration"></div>
      </swiper-slide>
      <swiper-slide class="substance two">
        <div class="font">
          <p class="title">
            产业供应链
            <br>
            智能可信链
          </p>
          <p class="introduce">
            Industry supply chain, intelligent trusted chain.
          </p>
        </div>
        <div></div>
        <div class="illustration"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import image from "@/assets/image/show/bigBack.png";
import image2 from "@/assets/image/show/Vector.png";

export default {
  data() {
    return {
      image: image,
      image2: image2,
      swiperOption: {
        loop: true,
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true
        // },
        autoplay: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #A4D2FF 0%, rgba(194, 225, 255, 0.32) 100%);

  .content {
    width: 100%;
    height: 100%;

    .substance {
      height: 100%;
      width: 100vh;
      display: flex;
      justify-content: space-between;
      background: url("@/assets/image/show/Mask group.png") no-repeat center;
      background-size: cover;

      p {
        color: #274AFF;
      }

      .font {
        width: 40%;
        margin: auto;

        .title {
          font-family: Roboto;
          font-size: 88px;
          font-weight: 600;
          letter-spacing: 0px;
          text-align: left;
          margin: 9% 0;
        }

        .introduce {
          font-family: Roboto;
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          letter-spacing: 0px;
          text-align: left;
          height: 30px
        }
      }

      .illustration {
        margin: auto;
        width: 100%;
        height: 100%;
        background: url("@/assets/image/show/Vector.png") no-repeat center;
        background-size: 130%;
      }
    }
  }
}
</style>

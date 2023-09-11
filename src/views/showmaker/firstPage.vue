<template>
<!-- 企业介绍 -->
  <div class="page">
    <div v-show="first" class="content one">
      <div class="substance">
        <div class="font">
          <p class="title">
            智能物链网
            <br>
            赋能新时代
          </p>
          <p class="introduce">
            Smart Blockchain of Things, enabling a new era.
          </p>
          <!--      <p class="introduce">-->
          <!--        北京中科慧云科技有限公司依托顶级的科研、产业和市场力量，致力<br>于研发有温度、可信任的技术，支撑国家粮食安全、大国储备和经济<br>安全，保障舌尖安全，助力乡村振兴，赋能价值经济:-->
          <!--      </p>-->
          <!--      <p class="content">-->
          <!--        1.完全自主可控，可证明安全，世界一流的区块链核心技术和平台供应商;<br>-->
          <!--        <br>-->
          <!--        2.粮食和物资储备行业信息化国家级智囊、资深专家，行业信息化的开拓者和引领者;<br>-->
          <!--        <br>-->
          <!--        3.世界顶级单位(全球规模最大综合性化工企业，世界最大农业上游企业) 区块链底层<br>&nbsp;&nbsp;技术和应用系统研发和服务单位。-->
          <!--      </p>-->
        </div>
        <div></div>
        <div class="illustration"></div>
      </div>
      <div class="sliding_bar">
        <button class="btn first"></button>
        <button class="btn last"></button>
      </div>
    </div>
    <div v-show="last" class="content two">
      <div class="substance">
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
      </div>
      <div class="sliding_bar">
        <button :class="firstClass" class="btn"></button>
        <button :class="lastClass" class="btn"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstClass:'first',
      lastClass:'last',
      first:true,
      last:false,
      toggleInterval: null
    };
  },
  methods: {
    toggleStyles() {
      this.firstClass = this.firstClass === 'first' ? 'last' : 'first';
      this.lastClass = this.lastClass === 'last' ? 'first' : 'last';
    }
  },
  beforeDestroy() {
    clearInterval(this.toggleInterval);
  },
  created() {
    this.toggleInterval = setInterval(() => {
      this.toggleStyles();
      this.first = !this.first;
      this.last = !this.last;
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content{
    margin: 3% 120px;
    .substance{
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 3%;
      p{
        color: #274AFF;
      }
      .font{
        width: 462px;
        height: 302px;

        .title{
          font-family: Roboto;
          font-size: 88px;
          font-weight: 600;
          letter-spacing: 0px;
          text-align: left;
          margin: 9% 0;
        }
        .introduce{
          font-family: Roboto;
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          letter-spacing: 0px;
          text-align: left;
          height: 30px
        }
      }
      .illustration{
        width: 586px;
        height: 445px;
        background: #a9a9a9;
        opacity: 0.1;
      }
    }
    .sliding_bar{
      height: 10%;
      width: 100%;
      text-align: center;
      .btn{
        width: 40px;
        height: 4px;
        border: none;
        cursor: pointer;
      }
      .first{
        width: 24px;
        height: 4px;
        border-radius: 6px;
        background: #274AFF;
        margin: 0 0.4%;
      }
      .last{
        width: 12px;
        height: 4px;
        border-radius: 6px;
        background: rgba(157, 133, 133, 0.8);
      }
    }
  }
}
</style>

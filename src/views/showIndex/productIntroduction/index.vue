<template>
  <div class="product_introduce">
    <div class="content top">
      <div class="left_animation">

      </div>
      <div class="right_font">
        <p>
          粮食<span>供应链</span>可信智能产品
        </p>
        <p>
          粮食和物资储备行业信息化国家级智囊、资深专家，行业信息化的开拓者和引领者
        </p>
      </div>
    </div>
    <div class="content bottom">
      <div class="left_font">
        <p>
          农业供应链综合服务
        </p>
        <p>
          研发的基于区块链的农产品品控追溯系统具有广泛影响力，世界最大 <br>
          农业上游企业的农业综合服务技术的核心供应商
        </p>
      </div>
      <div class="right_animation"></div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.product_introduce{
  .top{
    height: 551px;
    background: #EAF4FE;
    display: flex;
    justify-content: space-between;
    .left_animation{
      width: 695px;
      height: 650px;
      background: url("@/assets/image/show/Subtract.png") 100% 70% no-repeat;
    }
    .right_font{
      margin: auto;
      :nth-child(1){
        font-family: Roboto;
        font-size: 44px;
        font-weight: 600;
        line-height: 64px;
        letter-spacing: 0px;
        text-align: left;
      }
      :nth-child(2){
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
      }
      p{
        margin: 0;
        span{
          color: #2F49F5;
          font-family: Roboto;
          font-size: 44px;
          font-weight: 600;
          line-height: 64px;
          letter-spacing: 0px;
          text-align: left;
        }
      }
    }
  }
  .bottom{
    width: 100%;
    height: 655px;
    background-image: url("@/assets/image/show/自主链区块链平台.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    .left_font{
      margin: auto 10%;
      :nth-child(1){
        font-family: Roboto;
        font-size: 44px;
        font-weight: 600;
        line-height: 64px;
        letter-spacing: 0px;
        text-align: left;
      }
      :nth-child(2){
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
      }
      p{
        color: #fff;
        margin: 0;
      }
    }
    .right_animation{
      width: 480px;
      height: 560px;
      top: 2270px;
      left: 840px;
    }
  }
}
</style>
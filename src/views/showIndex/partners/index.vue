<template>
  <!-- 合作伙伴 -->
  <div class="partners">
    <div class="border">
      <div class="content customer">
        <div class="title">主要客户</div>
        <div class="icon">
          <div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
          </div>
          <div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
          </div>
        </div>
      </div>
      <div class="content friend">
        <div class="title">合作伙伴</div>
        <div class="brandCard">
          <div class="topCard">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="bottomCard">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {

  }
};
</script>

<style lang="scss" scoped>
.partners{
  .border{
    height: 100%;
    width: 100%;
    background-image: url("@/assets/image/show/Group 48096208.png"),url("@/assets/image/show/Ellipse 1301.png");
    background-position: top,bottom;
    background-repeat: no-repeat;
    background-size: cover;
    .content{
      height: 1018px;
      width: 1047px;
      margin: auto;
      .title{
        margin-top: 10%;
        font-family: Roboto;
        font-size: 48px;
        font-weight: 600;
        line-height: 50px;
        letter-spacing: 0px;
        text-align: center;
        color: #1D1D1E;
        margin-bottom: 2%;
      }
    }
    .customer{
      width: 1047px;
      height: 551px;
      .icon{
        display: flex;
        flex-direction: column;
        :nth-child(1),:nth-child(2){
          display: flex;
          flex-direction: row;
          margin-bottom: 2%;
        }
        :nth-child(1){
          display: flex;
          justify-content: space-between;
        }
        :nth-child(2){
          display: flex;
          justify-content: space-evenly;
        }
        .hexagon{
          height: 220px;
          width: 220px;
          border: #000 1px solid;
        }
      }
    }
    .friend{
      margin-top: 124px;
      width: 1019px;
      height: 343px;
      display: flex;
      flex-direction: column;
      .brandCard{
        display: flex;
        flex-direction: column;
        padding-left: 7.6%;
        .topCard,.bottomCard{
          display: flex;
          flex-direction: row;
          div{
            width: 200px;
            height: 68px;
            border: 1px solid #000;
          }
          :nth-child(1),:nth-child(2),:nth-child(3){
            margin: 0 20px 20px 0;
          }
        }
      }
    }
  }
}
</style>

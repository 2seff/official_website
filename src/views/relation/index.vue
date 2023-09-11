<template>
  <div class="relation_index">
    <div class="content">
      <div class="card">
        <div class="title">
          北京中科慧云科技有限公司
        </div>
        <div class="font">
          <div class="iconFont">
            <img class="icon" width="30" height="30" :src="emailIcon" alt="">
            <div>公司邮箱 :</div>
          </div>
          <div>123456@email.com</div>
          <hr>
        </div>
        <div class="font">
          <div class="iconFont">
            <img class="icon" width="30" height="30" :src="phoneIcon" alt="">
            <div>联系电话 :</div>
          </div>
          <div>186 1080 8981</div>
          <hr>
        </div>
        <div class="font">
          <div class="iconFont">
            <img class="icon" width="30" height="30" :src="positionIcon" alt="">
            <div>办公地址:</div>
          </div>
          <div>北京市西城区西直门南大街2号成铭大厦B2座B18S</div>
          <hr>
        </div>
        <div class="QRCode"></div>
      </div>
    </div>
  </div>
</template>

<script>
import email from "@/assets/photo/邮件.png"
import phone from "@/assets/photo/电话.png"
import position from "@/assets/photo/定位.png"
export default {
  data() {
    return {
      emailIcon:email,
      phoneIcon:phone,
      positionIcon:position
    };
  },
  methods: {},
  created() {

  }
};
</script>

<style lang="scss" scoped>
.relation_index{
  height: 100vh;
  width: 100%;
  .content{
    padding: 80px 80px 0 80px;
    .card{
      background: #fff;
      opacity: 0.7;
      margin: 30px auto 0;
      height: 550px;
      width: 40%;
      border: 1px #c7c7c7 solid;
      border-radius: 10px;
      .font{
        width: 70%;
        margin-left: 16%;
        .iconFont{
          margin: 10px 0 10px;
          display: flex;
          flex-direction: row;
          div{
            line-height: 30px;
          }
        }
      }
      .title{
        font-size: 25px;
        font-weight: bolder;
        text-align: center;
        margin: 40px 0 20px;
      }
    }
  }
}
</style>

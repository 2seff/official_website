<template>
  <div class="corporate_culture">
    <div class="content">
      <div class="title">
        <span>核心业务</span>
      </div>
      <div class="card_content">
        <div class="card" :class="'card'+item" v-for="(index,item) in 6" :key="index"></div>
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
.corporate_culture{
  height: 100vh;
  width: 100%;
  .content{
    padding: 0 80px 0;
    width: 100%;
    .title{
      height: 10%;
      //background: #274AFF;
      text-align: center;
      margin: 0;
      span{
        font-weight: bolder;
        font-family: Roboto;
        font-size: 48px;
        font-weight: 600;
        line-height: 50px;
        letter-spacing: 0px;
      }
    }
    .card_content {
      display: flex;
      flex-wrap: wrap;
      .card{
        width: 372px;
        height: 192px;
        top: 1010px;
        left: 120px;
        border: 1px solid #000;
        border-radius: 12px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(5){
          margin: 0 1% 1% 0;
        }
        &:nth-child(3){
          margin-bottom: 1%;
        }
      }
    }
  }
}
</style>

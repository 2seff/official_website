<template>
  <div class="product_index">
    <div class="content">
      <div class="sliding_bar">
        <button
          class="barBtn"
          v-for="(item,id) in list"
          :key="id"
          @click="cardChange(item.path)"
        >
          {{item.label}}
        </button>
      </div>
      <div class="card">
        <div class="card_top">
          <div class="cards left"></div>
          <div class="cards center"></div>
          <div class="cards right"></div>
        </div>
        <div class="card_bottom">
          <div class="cards left"></div>
          <div class="cards center"></div>
          <div class="cards right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        { label:"全部", id:1, selected: true },
        { label:"产品动态", id:2, selected: false },
        { label:"自主区块链平台", id:3, selected: false },
        { label:"视频智能分析系统", id:4, selected: false },
        { label:"智能粮库系统", id:5, selected: false },
        { label:"追溯产品", id:6, selected: false }
      ],
    };
  },
  methods: {
    cardChange(){

    }
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
.product_index{
  height: 100vh;
  width: 100%;
  .content{
    padding: 80px 80px 0 80px;
    .sliding_bar{
      margin: 0 32%;
      display: flex;
      width: 36%;
      flex-direction: row;
      border: 1px #c7c7c7 solid;
      border-radius: 10px;
      .barBtn{
        text-align: center;
        opacity: 30%;
        color: #000;
        height: 35px;
        line-height: 35px;
        cursor: pointer;
        border: none;
      }
      .barBtn :hover{
        color: #274AFF;
      }
    }
    .card{
      display: flex;
      flex-direction: column;
      width: 100%;
      .card_top{
        display: flex;
        flex-direction: row;
        padding: 20px 50px 0;
      }
      .card_bottom{
        display: flex;
        flex-direction: row;
        padding: 0 50px 20px;
      }
      .center{
        margin: 0 20px;
      }
      .cards{
        height: 250px;
        width: 33%;
        border: 1px #c7c7c7 solid;
        border-radius: 10px;
        margin-top: 20px;
      }
    }
  }
}
</style>

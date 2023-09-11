<template>
<!-- 动态页面 -->
  <div class="trends_index">
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
        { label:"全部", id:1},
        { label:"企业动态", id:2},
        { label:"行业资讯", id:3},
        { label:"最新政策", id:4}
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
.trends_index{
  height: 100vh;
  width: 100%;
  .content{
    padding: 80px 80px 0 80px;
    .sliding_bar{
      margin: 0 39.5%;
      display: flex;
      flex-direction: row;
      width: 21%;
      border: 1px #c7c7c7 solid;
      border-radius: 10px;
      .barBtn{
        width: 25%;
        text-align: center;
        opacity: 30%;
        color: #000;
        height: 35px;
        line-height: 35px;
        width: 80px;
        cursor: pointer;
        border: none;
      }
      .barBtn :hover{
        background-color: #274AFF;
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
        margin-left: 16%;
      }
      .card_bottom{
        display: flex;
        flex-direction: row;
        padding: 0 50px 20px;
        margin-left: 16%;
      }
      .center{
        margin: 0 20px;
      }
      .cards{
        height: 250px;
        width: 25%;
        border: 1px #c7c7c7 solid;
        border-radius: 10px;
        margin-top: 20px;
      }
    }
  }
}
</style>

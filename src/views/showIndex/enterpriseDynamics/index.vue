<template>
  <!-- 企业动态 -->
  <div class="industry_news">
    <div class="content">
      <div class="title">
        <span>
          企业动态
        </span>
      </div>
      <div class="card">
        <div class="left cards">

        </div>
        <div class="center cards">

        </div>
        <div class="right cards">

        </div>
      </div>
      <div class="more">
        <button class="moreBtn">
          更多动态
          <img :src="img" height="10" width="10" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/photo/方向向右-双.png"
export default {
  data() {
    return {
      img:image
    };
  },
  methods: {},
  created() {

  }
};
</script>

<style lang="scss" scoped>
.industry_news{
  height: 100vh;
  width: 100%;
  background: #DBEDFF;
  .content{
    padding:0 80px;
    .title{
      padding-top: 6%;
      font-size: 50px;
      font-weight: bolder;
      text-align: center;
      margin-bottom: 50px;
    }
    .card{
      display: flex;
      flex-direction: row;
      margin-left: 12%;
      .cards{
        margin: 0 50px;
        height: 300px;
        width: 20%;
        border: 1px #fff solid;
        border-radius: 15px;
      }
      .cards :focus{
        box-shadow: 5px 5px 1px 1px #c7c7c7;
      }
    }
    .more{
      margin: 30px 47%;
      .moreBtn{
        color: #fff;
        background-color: #274AFF;
        border: none;
        border-radius: 50px;
        height: 35px;
        width: 100px;
        cursor: pointer;

      }
    }
  }
}
</style>

<template>
<!-- 团队介绍 -->
  <div class="team_introduction">
    <div class="content one">
      <div class="team">
        <div class="left">
          <div class="title">
            团队介绍
          </div>
          <div class="introduce xinJ">
            <div class="rectangle"></div>
            <span>
            新疆中科慧云 (筹)
          </span>
          </div>
          <div class="introduce beiJ">
            <div class="rectangle"></div>
            <span>
            北京中科慧云科技有限公司
          </span>
          </div>
          <div class="introduce shenY">
            <div class="rectangle"></div>
            <span>
            沈阳中科慧云科技有限公司/<br>
            思远信链 (大连) 科技有限公司
          </span>
          </div>
          <div class="introduce wuX">
            <div class="rectangle"></div>
            <span>
            无锡中科慧云科技有限公司中科慧云
          </span>
          </div>
          <p>
            由清华、北大、北工大等多名教授、博士创立，其中有3名创始人是国家粮食和物资储备信息化专家 (是国内该行业拥有国家局专家最多的公司) ，从事粮食行业信息化研发和推广十几年。中科慧云高科技研发人员占95%以上;在沈阳、无锡、大连设立全资子公司。
          </p>
        </div>
        <div class="rightMap" ref="chart"></div>
      </div>
      <div class="middleware">
        <div class="content">
          <div class="font">
            <div class="number">
              <span class="ones">17</span><span class="twos">项</span>
            </div>
            <span>行业标准</span>
          </div>
          <div class="font">
            <div class="number">
              <span class="ones">18</span><span class="twos">项</span>
            </div>
            <span>发明专利</span>
          </div>
          <div class="font">
            <div class="number">
              <span class="ones">19</span><span class="twos">年</span>
            </div>
            <span>行业经验</span>
          </div>
          <div class="font">
            <div class="number">
              <span class="ones">1.3</span><span class="twos">亿</span>
            </div>
            <span>国拨经费</span>
          </div>
          <div class="font">
            <div class="number">
              <span class="ones">20</span><span class="twos">省</span>
            </div>
            <span>业务覆盖</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content two">
      <div class="talent_awards">
        <div class="content">
          <div class="left_card">
            <div class="icon"></div>
            <div class="prize">
              <div class="top">
                <span class="ones">3</span>
                <span class="twos">项省部级(一等奖2项，二等奖1项)</span>
              </div>
              <span class="ones">科技奖励</span>
            </div>
          </div>
          <div class="right_card">
            <div class="icon"></div>
            <div class="talent">
              <div class="top">
                <span class="ones">2</span>
                <span class="twos">位国家粮食和物资储备局</span>
              </div>
              <span class="ones">信息化专家</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  methods: {
    // getChinaMap(){
    //   window.dataList = [
    //     {
    //       name: '北京',
    //       value: 54
    //     },
    //     {
    //       name: '辽宁',
    //       value: 19
    //     },
    //     {
    //       name: '新疆',
    //       value: 4
    //     },
    //     {
    //       name: '江苏',
    //       value: 31
    //     },
    //   ];
    //   const chartDom = document.getElementsByClassName("rightMap");
    //   const myChart = echarts.init(chartDom);
    //   const option = {
    //     visualMap: {
    //       min: 0,
    //       max: 1000,
    //       left: 26,
    //       bottom: 40,
    //       showLabel: !0,
    //       text: ["高", "低"],
    //       pieces: [{
    //         gt: 100,
    //         label: "> 100 人",
    //         color: "#7f1100"
    //       }, {
    //         gte: 10,
    //         lte: 100,
    //         label: "10 - 100 人",
    //         color: "#ff5428"
    //       }, {
    //         gte: 1,
    //         lt: 10,
    //         label: "1 - 9 人",
    //         color: "#ff8c71"
    //       }, {
    //         gt: 0,
    //         lt: 1,
    //         label: "疑似",
    //         color: "#ffd768"
    //       }, {
    //         value: 0,
    //         color: "#ffffff"
    //       }],
    //       show: !0
    //     },
    //     geo: {
    //       map: "china",
    //       roam: !1,
    //       scaleLimit: {
    //         min: 1,
    //         max: 2
    //       },
    //       zoom: 1.23,
    //       top: 120,
    //       label: {
    //         normal: {
    //           show: !0,
    //           fontSize: "14",
    //           color: "rgba(0,0,0,0.7)"
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           //shadowBlur: 50,
    //           //shadowColor: 'rgba(0, 0, 0, 0.2)',
    //           borderColor: "rgba(0, 0, 0, 0.2)"
    //         },
    //         emphasis: {
    //           areaColor: "#f2d5ad",
    //           shadowOffsetX: 0,
    //           shadowOffsetY: 0,
    //           borderWidth: 0
    //         }
    //       }
    //     },
    //     series: [{
    //       name: "确诊病例",
    //       type: "map",
    //       geoIndex: 0,
    //       data: window.dataList
    //     }]
    //   };
    //   option && myChart.setOption(option);
    // }
  },
  created() {
    // this.getChinaMap()
  }
};
</script>

<style lang="scss" scoped>
.team_introduction{
  .content{
    height: 100%;
    width: 100%;
  }
  .one{
    height: 100vh;
    background-color: #E8F4FF;
    .team{
      padding: 80px 80px 0;
      display: flex;
      flex-direction: row;
      .left{
        width: 35%;
        margin-right: 100px;
        .title{
          font-size: 50px;
          font-weight: bolder;
          margin-bottom: 50px;
        }
        .introduce{
          display: flex;
          flex-direction: row;
          margin-top: 10px;
          .rectangle{
            height: 10px;
            width: 10px;
            margin: 6px 5px 0 0;
            border-radius: 2px;
          }
          span{
            font-weight: bolder;
          }
        }
        .xinJ{
          .rectangle{
            background-color: #6344E1;
          }
        }
        .beiJ{
          .rectangle{
            background-color: #EEB115;
          }
        }
        .shenY{
          .rectangle{
            background-color: #14C1B7;
          }
        }
        .wuX{
          .rectangle{
            background-color: #00A3FF;
          }
        }
      }
      .rightMap{
        height: 350px;
        width: 350px;
      }
    }
    .middleware{
      position: relative;
      top: 13%;
      left: 10%;
      height: 350px;
      background: #274AFF;
      width:80%;
      border-radius: 25px;
      .content{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        .font{
          height: 100%;
          width: 20%;
          color: #fff;
          margin: 10% 0 0 7%;
          .ones{
            font-size: 50px;
            font-weight: bolder;
          }
          .twos{
            font-size: 10px;
          }
        }
      }
    }
  }
  .two{
    height: 100vh;
    width: 100%;
    background-color: #DEEFFF;
    .talent_awards{
      .content{
        padding-top: 18%;
        display: flex;
        justify-content: space-between;
        .ones{
          font-size: 35px;
          font-weight: bolder;
        }
        .twos{
          font-size: 10px;
        }
        .icon{
          margin-top: 15%;
          height: 35%;
        }
        .left_card{
          height: 350px;
          width: 450px;
          border: 0.5px solid #fff;
          border-radius: 10px;
          background: linear-gradient(to right bottom,#D0EBFB,#fff, #D0EBFB);
          margin-left: 17%;
          display: flex;
          flex-direction: column;
          .prize{
            margin-left: 8%;
          }
        }
        .right_card{
          height: 350px;
          width: 450px;
          border: 0.5px solid #fff;
          border-radius: 10px;
          background: linear-gradient(to right bottom,#D1DDFF,#fff, #D1DDFF);
          margin-right: 17%;
          display: flex;
          flex-direction: column;
          .talent{
            margin-left: 8%;
          }
        }
      }
    }
  }
}
</style>

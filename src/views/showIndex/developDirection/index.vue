<template>
  <div class="develop_direction">
    <div class="content top">
      <div class="left_animation"></div>
      <div class="right_font">
        <p>
          自主<span>区块链</span>
        </p>
        <p>
          完全自主可控、可证明安全、世界一流的区块链核心技术和平台，世界顶级单位（全球规模最大综合性化工企业，世界最大农业上游企业）区块链底层技术和应用系统研发和服务单位
        </p>
      </div>
    </div>
    <div class="content bottom">
      <div class="center">
        <div class="font_content">
          <div class="font one">
            <div>
            <span>
            3
          </span>
              <span>
            项
          </span>
            </div>
            <span>
            授权发明专利
          </span>
          </div>
          <div class="font two">
            <div>
            <span>
            3
          </span>
              <span>
            项
          </span>
            </div>
            <span>
            行业标准
          </span>
          </div>
          <div class="font three">
            <div>
            <span>
            1
          </span>
              <span>
            项
          </span>
            </div>
            <span>
            团队标准
          </span>
          </div>
          <div class="font four">
            <div>
            <span>
            28
          </span>
              <span>
            项
          </span>
            </div>
            <span>
            软著
          </span>
          </div>
        </div>
      </div>
      <div class="bottom_content">
        <div class="left_animation">

        </div>
        <div class="right_font">
          <span class="title">
            粮食和物资储备行业资深信息化专家，引领行业信息化发展方向
          </span>
          <span class="substance">
            国家粮食和物资储备局资深信息化专家，中国科协、中国粮油学会“仓储物流与质量安全决策”咨询专家，中国粮油学会粮油食品智能装备分会常务理事，中国粮食商业协会智库专家，
国家粮食购销监管信息化规范编制专家，国家粮食和物资储备行业“十三五”“十四五”信息化规划编制专家，国家“十四五”粮食和物资储备科技发展规划编制专家，国家J粮信息化咨询专家，联合国世界粮食计划署（WFP）、APEC等重要活动区块链授课专家
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.develop_direction {
  .top {
    display: flex;
    flex-direction: row;
    margin: auto;

    .left_animation {
      width: 747.0382690429688px;
      height: 588.9676513671875px;
      top: 2944px;
      left: -84.0003662109375px;
      background: url("@/assets/image/show/Group 48096354.png") no-repeat 120%;
      background-size: cover;
    }

    .right_font {
      :nth-child(1) {
        font-family: Roboto;
        font-size: 44px;
        font-weight: 600;
        line-height: 64px;
        letter-spacing: 0px;
        text-align: left;
        width: 220px;
        height: 64px;

        span {
          color: #274AFF;
        }
      }

      :nth-child(2) {
        width: 480px;
        height: 90px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }

  .bottom {
    width: 100%;
    height: 682px;
    top: 3619px;
    left: 1px;
    background: linear-gradient(180deg, #C6E3FF -87.71%, rgba(194, 225, 255, 0.32) 91.29%);

    .center {
      width: 1200px;
      height: 220px;
      border-radius: 16px;
      background: #274AFF;
      margin: auto;
      position: relative;
      bottom: 110px;

      .font_content {
        margin: auto 10%;
        padding: 55px 0;
        display: flex;
        flex-direction: row;

        .font {
          width: 25%;
          text-align: center;

          div {
            :nth-child(1) {
              font-family: Roboto;
              font-size: 68px;
              font-weight: 700;
              line-height: 80px;
              letter-spacing: 0px;
              text-align: left;
              color: #fff;
            }

            :nth-child(2) {
              font-family: Roboto;
              font-size: 20px;
              font-weight: 500;
              line-height: 32px;
              letter-spacing: 0px;
              text-align: left;
              color: #fff;
            }
          }

          :nth-child(2) {
            font-family: Roboto;
            font-size: 24px;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 0px;
            text-align: left;
            color: #fff;
          }
        }
      }
    }

    .bottom_content{
      display: flex;
      flex-direction: row;
      justify-content: center;
      .left_animation{
        width: 470px;
        height: 472px;
        margin-right: 2%;
      }
      .right_font{
        width: 715px;
        height: 279px;
        display: flex;
        flex-direction: column;
        .title{
          font-family: Roboto;
          font-size: 44px;
          font-weight: 600;
          letter-spacing: 0px;
          text-align: left;
          color: #000;
        }
      }
    }
  }
}
</style>
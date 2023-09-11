<template>
<!-- 底部，联系我们 -->
  <div class="footer_index">
    <div class="content">
      <div class="footer_top">
        <div class="left">
          <img />
          <div class="left_font">
            定位:具有核心技术和产品的智能物链网解决方案供应商
          </div>
          <div class="left_font">理念:诚信、敬业、务实、创新</div>
          <div class="left_font">目标:致力于引领智能物链网产业的发展</div>
          <div class="left_font">使命:成就客户、成就品牌、成就员工</div>
        </div>
        <div class="center">
          <span>快捷链接</span>
          <div class="fastBtn">
            <div>首页</div>
            <div>企业</div>
            <div>产品</div>
            <div>动态</div>
            <div>联系我们</div>
          </div>
        </div>
        <div class="right">
          <span>联系方式</span>
          <div>
            联系电话:18610801234
          </div>
          <div>公司地址:北京市西直内南大街2号1内成铭大厦XXXXX</div>
          <div>公众号:123456789</div>
        </div>
      </div>
      <div class="footer_bottom">
        <hr>
        <p class="bottom_font">
          Copyright @ 2023 北京中科慧云科技有限公司京ICP备XXXXXX 网站声明 隐私政策
        </p>
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
.footer_index{
  height: 60vh;
  width: 100%;
  .content{
    height: 100%;
    background: linear-gradient(to right top,#CDF0FC,#fff,#E1F3FD);
    p{
      color: #000;
    }
    .footer_top{
      padding: 80px 80px 0;
      display: flex;
      flex-direction: row;
      height: 65%;
      .left{
        width: 50%;
        img{
          height: 20%;
        }
        .left_font{
          font-weight: bolder;
          margin-top: 10px;
        }
      }
      .center{
        width: 20%;
        .fastBtn{
          div{
            cursor: pointer;
            color: #000;
            margin-top: 10px;
          }
          div:hover{
            color: #274AFF;
          }
        }
        span{
          font-size: 18px;
          font-weight: bolder;
        }
      }
      .right{
        width: 25%;
        span{
          font-size: 18px;
          font-weight: bolder;
        }
        div{
          margin-top: 10px;
        }
        width: 25%;
      }
    }
    .footer_bottom{
      text-align: center;
    }
  }
}
</style>

<template>
  <!-- 底部，联系我们 -->
  <div class="footer_index">
    <div class="content">
      <div class="footer_top">
        <div class="left">
          <div class="photo">
            <img :src="image" alt="">
          </div>
          <div class="font">
            <div class="left_font">
              定位:具有核心技术和产品的智能物链网解决方案供应商
            </div>
            <div class="left_font">理念:诚信、敬业、务实、创新</div>
            <div class="left_font">目标:致力于引领智能物链网产业的发展</div>
            <div class="left_font">使命:成就客户、成就品牌、成就员工</div>
          </div>
        </div>
        <div class="right">
          <div class="bottom_btn">
            <span>快捷链接</span>
            <div class="fastBtn">
              <div>首页</div>
              <div>企业</div>
              <div>产品</div>
              <div>动态</div>
              <div>联系我们</div>
            </div>
          </div>
          <div class="connection">
            <div class="connect_type">
              <span>联系方式</span>
              <div class="type">
                <div>
                  联系电话:18610801234
                </div>
                <div>公司地址:北京市西直内南大街2号1内成铭大厦XXXXX</div>
                <div>公众号:123456789</div>
                <img :src="image1" alt="">
              </div>
            </div>
          </div>
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
import image from "@/assets/image/tab/logo.png"
import image1 from "@/assets/image/tab/QRCode.png"
export default {
  data() {
    return {
      image:image,
      image1:image1
    };
  },
  methods: {},
  created() {

  }
};
</script>

<style lang="scss" scoped>
.footer_index{
  height: 480px;
  width: 100%;
  .content{
    height: 100%;
    background: linear-gradient(to right bottom,#CDF0FC,#fff,#E1F3FD);
    padding-top: 60px;
    p{
      color: #000;
    }
    .footer_top{
      display: flex;
      justify-content: space-between;
      height: 400px;
      .left{
        width: 350px;
        height: 216px;
        margin-left: 120px;
        .photo{
          width: 200px;
          height: 88px;
          img{
            width: 200px;
            height: 50px;
          }
        }
        .font{
          width: 350px;
          height: 128px;
          .left_font{
            font-family: Roboto;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 16px;
          }
        }
      }
      .right{
        width: 560px;
        height: 270px;
        display: flex;
        justify-content: space-between;
        margin-right: 126px;
        .bottom_btn{
          width: 80px;
          height: 100%;
          .fastBtn{
            margin-top: 54px;
            div{
              margin-top: 16px;
              font-family: Roboto;
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
        .connection{
          width: 340px;
          height: 150px;
          .connect_type{
            .type{
              margin-top: 54px;
              div{
                margin-top: 16px;
                font-family: Roboto;
                font-size: 14px;
                font-weight: 500;
              }
              img{
                height: 60px;
                width: 60px;
                margin-top: 9px;
              }
            }
          }
        }
        span{
          font-family: Roboto;
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
    .footer_bottom{
      text-align: center;
      height: 80px;
      line-height: 80px;
      hr{
        width: 87%;
        margin: 0 auto;
      }
      p{
        margin: 0;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        color: #1D1D1E;
        letter-spacing: 0px;
      }
    }
  }
}
</style>

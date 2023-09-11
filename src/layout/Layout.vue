<template>
  <div class="layout">
    <div class="content">
      <div class="tabs">
        <tabs/>
      </div>
      <div class="route">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="footer">
        <foot/>
      </div>
    </div>
  </div>
</template>

<script>
import tabs from "@/views/tabs/index"
import foot from "@/views/footer/footerIndex"
export default {
  components:{
    tabs,
    foot
  },
  data() {
    return {};
  },
  methods: {},
  created() {

  }
};
</script>

<style lang="scss" scoped>
.layout{
  .content{
    .tabs{
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 9999;
    }
    .route{
      height: 100%;
    }
  }
}
</style>

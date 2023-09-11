<template>
<!-- 首页 -->
  <div class="main_home">
    <div class="content">
      <first/>
      <corporate/>
      <team/>
      <partners/>
      <news/>
    </div>
  </div>
</template>

<script>
import first from "@/views/showmaker/firstPage"
import corporate from "@/views/showmaker/corporateCulture"
import team from "@/views/showmaker/teamIntroduction"
import partners from "@/views/showmaker/partners";
import news from "@/views/showmaker/industryNews"
export default {
  components:{
    first,
    corporate,
    team,
    partners,
    news
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
.main_home{
  height: 100%;
  .content{
    height: 100%;
  }
}
</style>

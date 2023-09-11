<template>
  <!-- 首页 -->
  <div class="main_home">
    <div class="content">
      <show/>
      <business/>
      <develop/>
      <partners/>
      <introduce/>
      <enterprise/>
    </div>
  </div>
</template>

<script>
import show from "@/views/showIndex/show/index.vue"
import develop from "@/views/showIndex/developDirection/index.vue"
import enterprise from "@/views/showIndex/enterpriseDynamics/index.vue"
import partners from "@/views/showIndex/partners/index.vue";
import business from "@/views/showIndex/business/index.vue"
import introduce from "@/views/showIndex/productIntroduction/index.vue"
export default {
  components:{
    show,
    develop,
    enterprise,
    partners,
    business,
    introduce
  },
  data() {
    return {};
  },
  mounted() {
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

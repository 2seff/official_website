import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home";
import Layouts from "@/layout/Layout"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layouts",
    component: Layouts,
    children:[{
      path:'/',           //这个表示的是根目录，即一进入的页面
      redirect:'mainHome'  ,  //设置页面一进来就显示的页面，即重定向到goods组件，这里写的内容是对应组将的component的值
},
      {
        path:"mainHome",
        name: "MainHome",
        component: () => import("@/views/index")
      },
      {
        path:"company",
        name: "Company",
        component: () => import("@/views/showmaker/corporateCulture")
      },
      {
        path:"trends",
        name: "Trends",
        component: () => import("@/views/trends/index")
      },
      {
        path:"product",
        name: "Product",
        component: () => import("@/views/product/index")
      },
      {
        path:"relation",
        name: "Relation",
        component: () => import("@/views/relation/index")
      },
      {
        path:"partner",
        name: "Partner",
        component: () => import("@/views/showmaker/partners")
      },
      {
        path:"industry",
        name: "industry",
        component: () => import("@/views/showmaker/industryNews")
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

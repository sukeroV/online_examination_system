<template>
  <el-menu
    :default-active="active"
    class="el-menu-vertical-demo"
    :collapse="nBStore.isCollapse"
    @close="handleClose"
  @select="handleOpen"
  ref="menuRef"
  popper-effect="light"
  unique-opened
    active-text-color="#000000"
  >
    <!--    @open="handleOpen"-->
    <!--    @click="handleOpen"-->
    <!--    background-color="#545c64"-->
    <!--    router-->

<!--    0-->

    <el-menu-item-group>
<!--        <el-menu-item index="3-3">item three</el-menu-item>-->
      <!--       style="background-color: #FE8B8E" -->
<!--      <div style="font-size: 30px">-->
      <div style="display: flex; justify-content: center; align-items: center;height: 50px;background-color: rgba(165,171,170,0.2)" @click="changeIsCollapse">
        <el-icon style="width: 30px;height: 100px">
          <Hide v-if="nBStore.isCollapse" style="width: 30px;height: 100px">隐藏</Hide>
          <View v-else style="width: 30px;height: 100px">显示</View>
        </el-icon>
      </div>
<!--      </div>-->
<!--      <template #title><p @click="changeIsCollapse">隐藏侧边栏</p></template>-->
    </el-menu-item-group>

<!--    <el-menu-item index="0">-->
<!--&lt;!&ndash;       style="background-color: #FE8B8E" &ndash;&gt;-->
<!--&lt;!&ndash;      <div style="font-size: 30px">&ndash;&gt;-->
<!--        <el-icon @click="changeIsCollapse">-->
<!--          <Hide v-if="nBStore.isCollapse" />-->
<!--          <View v-else />-->
<!--        </el-icon>-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--      <template #title><p @click="changeIsCollapse">隐藏侧边栏</p></template>-->
<!--    </el-menu-item>-->

    <!--    1-->
    <el-menu-item :index="routerMap['1-1']">
<!--       style="background-color: #FE8B8E" -->
<!--      <div style="font-size: 30px">-->
        <el-icon @click="toIndex">
          <HomeFilled />
        </el-icon>
<!--      </div>-->
      <template #title><p @click="toIndex">首页</p></template>
    </el-menu-item>

<!--    2-->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>题库管理</span>
      </template>
      <el-menu-item :index="routerMap['2-1']">题目分类</el-menu-item>
      <el-menu-item :index="routerMap['2-2']">题目列表</el-menu-item>
    </el-sub-menu>

<!--    3-->
    <el-sub-menu index="/examPaperManagement">
      <template #title>
        <el-icon><location /></el-icon>
        <span>试卷管理</span>
        <span>
<!--          <RouterLink to="/examPaperManagement">试卷管理</RouterLink>-->
        </span>

      </template>
      <el-menu-item-group>
        <template #title>
<!--          <span>Group One</span>-->
          <RouterLink to="/index">首页</RouterLink>
        </template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="3-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="3-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="3-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

<!--    4-->
    <el-sub-menu index="/examAffairsManagement">
      <template #title>
        <el-icon><location /></el-icon>
        <span>考务管理</span>
        <span>
<!--          <RouterLink to="/examAffairsManagement">考务管理</RouterLink>-->
        </span>

      </template>
      <el-menu-item-group>
        <template #title>
<!--          <span>Group One</span>-->
          <RouterLink to="/index">首页</RouterLink>
        </template>
        <el-menu-item index="4-1">item one</el-menu-item>
        <el-menu-item index="4-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="4-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="4-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="4-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

<!--    5-->
    <el-sub-menu index="/examManagement">
      <template #title>
        <el-icon><location /></el-icon>
        <span>考试管理</span>
        <span>
<!--          <RouterLink to="/examManagement">考试管理</RouterLink>-->
        </span>

      </template>
      <el-menu-item-group>
        <template #title>
<!--          <span>Group One</span>-->
          <RouterLink to="/index">首页</RouterLink>
        </template>
        <el-menu-item index="5-1">item one</el-menu-item>
        <el-menu-item index="5-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="5-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="5-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="5-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import {
  Hide, HomeFilled,
  // Document,
  // Menu as IconMenu,
  // Setting,
  Location, View
} from '@element-plus/icons-vue'

import { useRouter,RouterLink,useRoute } from 'vue-router';
import {useNavigationBarMenuStore} from "@/stores/NavigationBarMenu"

const nBStore = useNavigationBarMenuStore()
const router = useRouter();
const route = useRoute();

const nowRoutePath = ref('/index')


const menuRef = ref(null);

const active = ref('1')

const routerMap = reactive({
  "1-1": "/index",
  "2-1": "/questionBankManagement/topicClassification",
  "2-2": "/questionBankManagement/questionList",
  "3-1": "/examPaperManagement",
  "4-1": "/examAffairsManagement",
  "5-1": "/examManagement",
})

watch(route, (newRoute, oldRoute) => {
  console.log('路由变化:', newRoute, oldRoute);
  console.log(newRoute.path, 'newRoute.path')
  // 在这里可以执行当路由变化时需要的操作
  active.value = newRoute.path
  nowRoutePath.value = newRoute.path
}, { deep: true });

const changeIsCollapse = () => {
  nBStore.isCollapse = !nBStore.isCollapse
  active.value = nowRoutePath.value
}

const toIndex = () => {
  console.log('toIndex')
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath, 'open',nBStore.isCollapse)

  if (nowRoutePath.value === key) {
    console.log("当前路由已经是该路由")
    return
  }

  // // 如果key只是数字，不是路由，不进行跳转 使用正则表达式
  // if (/^\d+$/.test(key)) {
  //   const str:string = key + '-1'
  //   const menu = routerMap[str]
  //   // console.log(menu, 'menu')
  //   // console.log(menu, 'menu')
  //   // active.value = menu
  //   router.push(menu)
  //   // console.log(active.value, 'active')
  //   return
  // }
  router.push(key)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath, 'close')
}

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/* 为激活的子菜单添加背景色 */
.el-submenu__title.is-active {
  background-color: #FE8B8E;
  color: #FE8B8E;
}

/* 如果需要为子菜单下的菜单项也设置激活时的背景色（通常不需要），可以添加如下样式 */
.el-menu-item.is-active {
  background-color: rgba(99, 140, 112, 0.65) !important; /* 子菜单项的激活背景色 */
}
</style>

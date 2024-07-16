<script setup lang="ts">
import {RouterView} from "vue-router";
import LeftMenu from "./components/LeftMenu.vue";
import {useNavigationBarMenuStore} from "@/stores/NavigationBarMenu"
import { DArrowLeft, DArrowRight, Hide, View } from '@element-plus/icons-vue'
const nBStore = useNavigationBarMenuStore()

// const changeIsCollapse = () => {
//   nBStore.isCollapse = !nBStore.isCollapse
// }
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <LeftMenu />
<!--          <el-row>-->
<!--            <el-col :span="20"><LeftMenu /></el-col>-->
<!--            <el-col :span="4"  offset="5"><el-icon><DArrowRight /></el-icon></el-col>-->
<!--          </el-row>-->
<!--        <LeftMenu />-->
<!--        <el-icon><DArrowRight /></el-icon>-->
<!--        <el-icon><DArrowLeft /></el-icon>-->
      </el-aside>
      <el-container>
        <el-header style="padding-left: 10px">
          pppp
        </el-header>

        <el-container>
          <el-main>
            <RouterView />
          </el-main>
<!--          <el-footer>Footer</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>



<style scoped>

</style>

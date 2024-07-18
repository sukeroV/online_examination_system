<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Approved by">
      <el-input v-model="formInline.user" placeholder="Approved by" clearable />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select
        v-model="formInline.region"
        placeholder="Activity zone"
        clearable
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const data = [
    { 序号: 1, 题库分类名称: "数学基础", 分类层级: 1, 排序值: 10, 创建人: "管理员A" },
    { 序号: 2, 题库分类名称: "物理原理", 分类层级: 1, 排序值: 20, 创建人: "管理员B" },
    { 序号: 3, 题库分类名称: "化学元素", 分类层级: 1, 排序值: 30, 创建人: "管理员C" },
    { 序号: 4, 题库分类名称: "数学进阶", 分类层级: 2, 排序值: 11, 创建人: "管理员A" },
    { 序号: 5, 题库分类名称: "力学基础", 分类层级: 2, 排序值: 21, 创建人: "管理员B" },
    { 序号: 6, 题库分类名称: "有机化学", 分类层级: 2, 排序值: 31, 创建人: "管理员D" },
    { 序号: 7, 题库分类名称: "微积分", 分类层级: 3, 排序值: 101, 创建人: "管理员A" },
    { 序号: 8, 题库分类名称: "电磁学", 分类层级: 3, 排序值: 201, 创建人: "管理员E" },
    { 序号: 9, 题库分类名称: "高分子化学", 分类层级: 3, 排序值: 301, 创建人: "管理员F" },
    { 序号: 10, 题库分类名称: "线性代数", 分类层级: 3, 排序值: 102, 创建人: "管理员A" }
];

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>

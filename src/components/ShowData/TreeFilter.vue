<template>
  <el-input
    v-model="filterText"
    style="width: 240px"
    placeholder="Filter keyword"
  />

  <el-tree
    ref="treeRef"
    style="max-width: 600px"
    class="filter-tree"
    :data="data"
    :props="defaultProps"
    default-expand-all
    :filter-node-method="filterNode"
  />
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { ElTree } from 'element-plus'

interface Tree {
  [key: string]: any
}

const filterText = ref('')
const treeRef = ref<InstanceType<typeof ElTree>>()

const defaultProps = {
  children: 'children',
  label: 'label',
}

watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
  if (!value) return true
  return data.label.includes(value)
}

const subject = reactive(
  ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治', '技术', '体育', '音乐', '美术', '信息技术', '心理健康', '通用技术', '其他']
)

const grade = reactive(
  ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三']
)
// 每个学科对应的年级
const data: Tree[] = [
  {
    id: 1,
    label: '语文',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 2,
    label: '数学',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 3,
    label: '英语',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 4,
    label: '物理',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 5,
    label: '化学',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 6,
    label: '生物',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 7,
    label: '历史',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 8,
    label: '地理',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 9,
    label: '政治',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  },
  {
    id: 10,
    label: '技术',
    children: grade.map((item, index) => {
      return {
        id: index + 1,
        label: item,
      }
    }),
  }
]

// const data: Tree[] = [
//   {
//     id: 1,
//     label: 'Level one 1',
//     children: [
//       {
//         id: 4,
//         label: 'Level two 1-1',
//         children: [
//           {
//             id: 9,
//             label: 'Level three 1-1-1',
//           },
//           {
//             id: 10,
//             label: 'Level three 1-1-2',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     label: 'Level one 2',
//     children: [
//       {
//         id: 5,
//         label: 'Level two 2-1',
//       },
//       {
//         id: 6,
//         label: 'Level two 2-2',
//       },
//     ],
//   },
//   {
//     id: 3,
//     label: 'Level one 3',
//     children: [
//       {
//         id: 7,
//         label: 'Level two 3-1',
//       },
//       {
//         id: 8,
//         label: 'Level two 3-2',
//       },
//     ],
//   },
// ]
</script>

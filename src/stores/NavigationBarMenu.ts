// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useNavigationBarMenuStore = defineStore('count',{
  // 动作
  actions:{},
  // 状态
  state(){
    return {
      isCollapse:false
    }
  },
  // 计算
  getters:{}
})
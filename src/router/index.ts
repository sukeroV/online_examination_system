import {createRouter,createWebHistory} from 'vue-router'
import Index from "../views/Index.vue";
import TopicClassification from "../views/QuestionBankManagement/TopicClassification.vue";
import QuestionBankManagement from "../views/QuestionBankManagement/QuestionBankManagement.vue";
import QuestionList from "../views/QuestionBankManagement/QuestionList.vue";
import ExamAffairsManagement from "../views/ExamAffairsManagement.vue";
import ExamManagement from "../views/ExamManagement.vue";
import ExamPaperManagement from "../views/ExamPaperManagement.vue";

const router = createRouter({
	history:createWebHistory(),
	routes:[
		{
			path:'/index',
			component:Index
		},
		{
			path:'/questionBankManagement',
			component:QuestionBankManagement,
			children:[
				{
					path:'topicClassification',
					component:TopicClassification
				},
				{
					path:'questionList',
					component:QuestionList
				}
			]
		},
		{
			path: '/examAffairsManagement',
			component: ExamAffairsManagement
		},
		{
			path: '/examManagement',
			component: ExamManagement
		},
		{
			path: '/examPaperManagement',
			component: ExamPaperManagement
		}
	]
})
export default router
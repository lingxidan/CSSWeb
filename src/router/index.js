import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import app from '@/App.vue'
import main from '@/pages/main'
// import login from '@/pages/login'
import registe from '@/pages/registe'
import search from '@/pages/search'
import chat from '@/pages/chat'
// 个人信息页
import user from '@/pages/user/user'
import selfVol from '@/pages/user/self-volunteer'
import selfSch from '@/pages/user/school/self-school'
import schInfo from '@/pages/user/school/school'
import zhiweiInfo from '@/pages/user/school/zhiwei'
import schUser from '@/pages/user/school/selfInfo'

import lunbo from '@/components/common/carousel'
// import topNav from '@/components/common/nav'

Vue.use(Router)

const router = new Router({
    routes: [{
            // 主页
            path: '/',
            name: 'main',
            component: main
        },
        // {
        //  // 主页
        //   path: '/',
        //   name: 'nav',
        //   component: nav
        // },
        // {
        //     // 登录页面
        //     path: '/login',
        //     name: 'login',
        //     component: login
        // },
        {
			path: '/user',
			name: 'user',
			component: user,
			children:[
				{
					path: 'volunteer',
					name: 'selfVol',
					component: selfVol
                },
                {
					path: 'school',
					name: 'selfSch',
                    component: selfSch,
                    children:[
                        {
                            path: 'school',
                            name: 'schInfo',
                            component: schInfo
                        },
                        {
                            path: 'zhiwei',
                            name: 'zhiweiInfo',
                            component: zhiweiInfo
                        },
                        {
                            path: 'user',
                            name: 'schUser',
                            component: schUser
                        }
                    ]
                }
            ]
        },
        {
            // 注册招募页面
            path: '/registe/school',
            name: 'registeSchool',
            component: registe
        },
        {
            // 注册志愿者页面
            path: '/registe/volunteer',
            name: 'registeVolun',
            component: registe
        },
        {
            // 搜索页面
            path: '/search',
            name: 'search',
            component: search
        },
        {
            // 聊天室
            path: '/chat',
            name: 'chat',
            component: chat
        },
        {
            // 轮播页面
            path: '/lunbo',
            name: 'lunbo',
            component: lunbo
        }
    ]
});
export default router;
let adminMenu = [{
    path: '/prison/list',
    title: '监狱管理',
    icon: 'iconfont icon-jianyuguanli'
  }, {
    path: '/prison-area/list',
    title: '监区说明管理',
    icon: 'iconfont icon-jianquxinxi'
  }, {
    path: '/prison-user/list',
    title: '监狱用户管理',
    icon: 'iconfont icon-jianyuyonghu'
  }, {
    path: '/feedback/list',
    title: '意见反馈',
    icon: 'iconfont icon-yijian'
  }, {
    path: '/advertisement/list',
    title: '广告管理',
    icon: 'iconfont icon-guanggaoguanli'
  }, {
    path: '/whitemember/list',
    title: '白名单管理',
    icon: 'iconfont icon-baimingdan'
  }, {
    path: '/terminal/list',
    title: '终端管理',
    icon: 'iconfont icon-zhongduanguanli'
  }, {
    path: '/version/list',
    title: '版本管理',
    icon: 'iconfont icon-banbengengxin'
  }, {
    path: '/log/app-error',
    title: 'APP崩溃日志',
    icon: 'iconfont icon-bengkuirizhi'
  // }, {
  //   path: '/log',
  //   title: '日志',
  //   icon: 'iconfont icon-folder',
  //   active: false,
  //   children: [
  //     {
  //     //   path: '/log/user-operation',
  //     //   title: '用户操作日志',
  //     //   icon: 'iconfont icon-circle-o'
  //     // }, {
  //       path: '/log/app-error',
  //       title: 'APP崩溃日志',
  //       icon: 'iconfont icon-circle-o'
  //     }
  //   ]
  }],
  checkMenu = [{
    path: '/registration/list',
    title: '家属注册管理',
    icon: 'iconfont icon-jiashuzhuce'
  }, {
    path: '/meeting/list',
    title: '会见申请管理',
    icon: 'iconfont icon-huijianshenqing'
  }, {
    path: '/mailbox/list',
    title: '监狱长信箱',
    icon: 'iconfont icon-jianyuchangxinxiang'
  }, {
    path: '/prisoner/list',
    title: '服刑人员信息管理',
    icon: 'iconfont icon-fuxingrenyuan'
  }, {
    path: '/family/list',
    title: '家属信息管理',
    icon: 'iconfont icon-jiashu'
  // }, {
  //   path: '/prison-accounts/list',
  //   title: '囚犯账户管理',
  //   icon: 'iconfont icon-folder'
  }, {
    path: '/prisoner-data',
    title: '数据管理',
    icon: 'iconfont icon-shujuguanli',
    active: false,
    children: [
      {
        path: '/prisoner-data/data-import',
        title: '罪犯数据导入',
        icon: 'iconfont icon-circle-o'
      }, {
        path: '/prisoner-data/term-change',
        title: '刑期变动数据导入',
        icon: 'iconfont icon-circle-o'
      }, {
        path: '/prisoner-data/reward-punishment',
        title: '罪犯奖惩数据导入',
        icon: 'iconfont icon-circle-o'
      }
    ]
  }],
  shopMenu = [{
    path: '/goods_management',
    title: '商品管理',
    icon: 'iconfont icon-folder'
  }, {
    path: '/orders',
    title: '家属订单',
    icon: 'iconfont icon-folder'
  }, {
    path: '/prisoner_orders',
    title: '订单管理',
    icon: 'iconfont icon-folder',
    active: false,
    children: [
      {
        path: '/prisoner_orders/import_index',
        title: '罪犯数据导入',
        icon: 'iconfont icon-circle-o'
      }
    ]
  }],
  infoMenu = [{
    path: '/jails/detail',
    title: '监狱基本信息管理',
    icon: 'iconfont icon-jianyujibenxinxi'
  }, {
    path: '/prison-affairs-public',
    title: '狱务公开信息管理',
    icon: 'iconfont icon-yuwugongkaixinxi',
    active: false,
    children: [
      {
        path: '/prison-affairs-public/prison-affairs-public',
        title: '狱务公开',
        icon: 'iconfont icon-circle-o'
      }, {
        path: '/prison-affairs-public/working-dynamics',
        title: '工作动态',
        icon: 'iconfont icon-circle-o'
      }, {
        path: '/prison-affairs-public/complaints-suggestions',
        title: '投诉建议公示',
        icon: 'iconfont icon-circle-o'
      }
    ]
  }]

export default [adminMenu, checkMenu, shopMenu, infoMenu]

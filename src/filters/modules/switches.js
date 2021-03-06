let switches = {
  gender: [
    { value: 'm', label: '男' },
    { value: 'f', label: '女' }
  ],
  isTrue: [
    { value: 0, label: '否' },
    { value: 1, label: '是' }
  ],
  families: [
    { value: 'm', label: '男' },
    { value: 'f', label: '女' }
  ],
  role: [
    { value: 0, label: '管理员' },
    { value: 1, label: '审核人员' },
    { value: 2, label: '商品用户' },
    { value: 3, label: '信息管理人员' }
  ],
  goodsCategory: [
    { value: 1, label: '洗化日用' },
    { value: 2, label: '食品饮料' },
    { value: 3, label: '服饰鞋帽' },
    { value: 4, label: '医药保健' },
    { value: 5, label: '电话卡' }
  ],
  applyStatus: [
    { value: 'PENDING', label: '未授权' },
    { value: 'DENIED', label: '已拒绝' },
    { value: 'PASSED', label: '已通过' },
    { value: 'FINISHED', label: '已完成' },
    { value: 'CANCELED', label: '已取消' }
  ]
}

export default switches

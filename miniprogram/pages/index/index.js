//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    items: [
      { name: '0', value: '全职' ,checked:false },
      { name: '1', value: '兼职' ,checked:false },
      { name: '2', value: '实习' ,checked:false },

    ],
    demo : ['','','','','',''],
    city: "城市",
    //职位上拉数据
    jobArray: [['a', 'b', 'c'], ['a1', 'a2', 'a3', 'a4'], ['a11', 'a12']],
    job: ['', '', '职位'],
    jobIndex: [0, 0, 0],
    // 公司下拉菜单数据
    sort_hidden: true,//下拉框的显示或隐藏
    zhezhao: true,//遮罩层
    dropup_pic_index: true,//选择下拉框
    gstab: [[
      { name: '0', value: '富士康', checked: false },
      { name: '1', value: '华硕电子厂', checked: false },
      { name: '2', value: '华宝', checked: false },
    ], [
      { name: '0', value: '富士康', checked: false },
      { name: '1', value: '华硕电子厂', checked: false },
      { name: '2', value: '华宝', checked: false },
    ]
    ],
    gs: '公司',
    upordown: "down",
    scrollheight:'',
    zhezhaotop:'',
  }, 
  //搜索跳转函数
  Tabsearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  
//一级导航函数
  clicks: function (e) {
    let index = e.currentTarget.dataset.id;
    let item = this.data.items;
    let i;
    for (i in item) {
      item[i].checked = false;
    }

    item[index].checked = true;

    this.setData({
      items: item
    })
    console.log(e)
    console.log(item[index].value)
    

  },

  //职位三级选择器函数

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var jobArray = this.data.jobArray;

    this.setData({
      jobIndex: e.detail.value,
      job: [jobArray[0][e.detail.value[0]], jobArray[1][e.detail.value[1]], jobArray[2][e.detail.value[2]]],
    })
    console.log([jobArray[0][e.detail.value[0]], jobArray[1][e.detail.value[1]], jobArray[2][e.detail.value[2]]])
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    console.log(e.detail);
    var data = {
      jobArray: this.data.jobArray,
      jobIndex: this.data.jobIndex,
    };
    data.jobIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.jobIndex[0]) {
          case 0:
            data.jobArray[1] = ['a1', 'a2', 'a3', 'a4'];
            data.jobArray[2] = ['a11', 'a12', 'a13'];
            break;
          case 1:
            data.jobArray[1] = ['b1', 'b2', 'b3', 'b4'];
            data.jobArray[2] = ['b11', 'b12', 'b13'];
            break;
          case 2:
            data.jobArray[1] = ['c1', 'c2', 'c3', 'c4'];
            data.jobArray[2] = ['c11', 'c12', 'c13'];
            break;
        }
        data.jobIndex[1] = 0;
        data.jobIndex[2] = 0;
        break;
      case 1:
        switch (data.jobIndex[0]) {
          case 0:
            switch (data.jobIndex[1]) {
              case 0:
                data.jobArray[2] = ['a11', 'a12', 'a13'];
                break;
              case 1:
                data.jobArray[2] = ['a21', 'a22', 'a23'];
                break;
              case 2:
                data.jobArray[2] = ['a31', 'a32', 'a33'];
                break;
              case 3:
                data.jobArray[2] = ['a41', 'a42', 'a43'];
                break;

            }
            break;
          case 1:
            switch (data.jobIndex[1]) {
              case 0:
                data.jobArray[2] = ['b11', 'b12', 'b13'];
                break;
              case 1:
                data.jobArray[2] = ['b21', 'b22', 'b23'];
                break;
              case 2:
                data.jobArray[2] = ['b31', 'b32', 'b33'];
                break;
              case 3:
                data.jobArray[2] = ['b41', 'b42', 'b43'];
                break;
            }
            break;
          case 2:
            switch (data.jobIndex[1]) {
              case 0:
                data.jobArray[2] = ['c11', 'c12', 'c13'];
                break;
              case 1:
                data.jobArray[2] = ['c21', 'c22', 'c23'];
                break;
              case 2:
                data.jobArray[2] = ['c31', 'c32', 'c33'];
                break;
              case 3:
                data.jobArray[2] = ['c41', 'c42', 'c43'];
                break;
            }
            break;
        }
        data.jobIndex[2] = 0;
        console.log(data.jobIndex);
        break;
    }
    this.setData(data);
  },

  // 公司下拉菜单函数

  // 下拉框确定点击事件
  dropdownTap(e) {
    let _this = this;
    _this.setData({
      id: e.currentTarget.dataset.index,//存入下拉框的id
      sort_hidden: !_this.data.sort_hidden,//下拉框的显示或隐藏
      zhezhao: !_this.data.zhezhao,//遮罩层
      upordown: "up",
    })
    this.scorallreset()
  },


  /**
   * 生命周期函数--监听页面加载
   */
  //职位选择函数
  gstab: function (e) {
    let index2 = e.currentTarget.dataset.id;
    let index1 = e.currentTarget.dataset.value;
    let item = this.data.gstab;
    let that = this;
    let i;
    for (i in item[0]) {
      item[0][i].checked = false;
    }
    for (i in item[1]) {
      item[1][i].checked = false;
    }
    item[index1][index2].checked = true;
    that.setData({
      gstab: item,
      gs: item[index1][index2].value,
      zhezhao: true,//遮罩层的显示或隐藏
      sort_hidden: true,//下拉框的显示或隐藏
      upordown: "down",
    })
    console.log(item[index1][index2].value)
    this.scorallreset()
  },

  move:function(){
    let that = this;
    this.scorallreset()
    that.setData({
      

      zhezhao: true,//遮罩层的显示或隐藏
      sort_hidden: true,//下拉框的显示或隐藏
      upordown: "down",
    })

  },
  // scoll重置高度函数

scorallreset:function(){
  let query = wx.createSelectorQuery()
    let windowHeight = wx.getSystemInfoSync().windowHeight
    let t3hight
    let that = this
    let tcactive = that.data.sort_hidden
  //在这里做计算，res里有需要的数据
    if(tcactive==true){
      query.select('.navList2').boundingClientRect(function (res) {
        t3hight = res.bottom;
        console.log('navList2', t3hight)
        console.log('navList2', t3hight,(windowHeight - t3hight))
        that.setData({
          scrollheight: (windowHeight - t3hight),
        })
      }).exec()
    }else{
      query.select('.sortup').boundingClientRect(function (res) {
        t3hight = res.bottom;
        console.log('.sort', res)
        console.log('.sort', t3hight, (windowHeight - t3hight))
        that.setData({
          scrollheight: (windowHeight - t3hight),
          zhezhaotop: t3hight,
        })
      }).exec()  
    }  
},


  onLoad: function (options) {
    this.scorallreset()
  }
  


})
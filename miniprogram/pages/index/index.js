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
    demo: [
      { name: '0', src: '/images/1.jpg', checked: false },
      { name: '1', src: '/images/2.jpg', checked: false },
      { name: '2', src: '/images/3.jpg', checked: false },
      { name: '3', src: '/images/1.jpg', checked: false },
      { name: '4', src: '/images/2.jpg', checked: false },
      { name: '5', src: '/images/3.jpg', checked: false },
      { name: '6', src: '/images/1.jpg', checked: false },
      
    ],
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
    // 薪资双向slider数据
    change: false, // 当两个slider在最右端重合时，将change设置为true，从而隐藏slider2，才能继续操作slider1
    max: 10000, // 两个slider所能达到的最大值
    min: 0, // 两个slider所能取的最小值
    rate: 100, // slider的最大最小值之差和100（或1000）之间的比率
    scale: 1, // 比例系数。页面显示值的时候，需要将slider1Value(slider2Value)乘以比例系数scale
    slider1Max: 10000, // slider1的最大取值
    slider1Value: 0, // slider1的值
    slider2Value: 10000, // slider2的值
    slider2Min: 0, // slider2的最小取值
    slider1W: 100, // slider1的宽度
    slider2W: 0, // slider2的宽度
    leftSliderPriceWidthX: '-1.5%',
    rightSliderPriceWidthX: '-21%',
    // 薪资下拉菜单数据
    xinzisort_hidden: true,//下拉框的显示或隐藏
    xinzizhezhao: true,//遮罩层
    xinzitab: [
      { name: '0', value: '不限', checked: false },
      { name: '1', value: '2千以下', checked: false },
      { name: '2', value: '2千-3千', checked: false },
      { name: '3', value: '3千-4千', checked: false },
      { name: '4', value: '4千-5千', checked: false },
      { name: '5', value: '5千-6千', checked: false },
      { name: '6', value: '6千-7千', checked: false },
      { name: '7', value: '8千-9千', checked: false },
      { name: '8', value: '9千-1万', checked: false },
      { name: '9', value: '1.1万-1.2万', checked: false },
      { name: '10', value: '1.2万以上', checked: false },
    ],
    xinzi: '薪资',
    xinziupordown: "down",
    windowHeight:'',
  }, 
  //搜索跳转函数
  Tabsearch: function () {
    this.recover_hidden()
    this.xinzirecover_hidden()
    wx.navigateTo({
      url: '../search/search',
    })
    
  },
  //城市函数
  clickcitys:function(){
    this.recover_hidden()
    this.xinzirecover_hidden()
    wx.navigateTo({
      url: '../citys/citys',
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
    this.recover_hidden()
    this.xinzirecover_hidden()

  },

  //职位三级选择器函数
  clickjob:function(){
    this.recover_hidden()
    this.xinzirecover_hidden()
  },
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
  //解决下拉菜单过程中触发其他事件问题
  recover_hidden:function(){
    this.setData({
      sort_hidden: true,
      zhezhao: true,//遮罩层
    })
    this.scorallreset()
  },
  // 下拉框确定点击事件
  dropdownTap(e) {
    this.xinzirecover_hidden()
    let _this = this;
    _this.setData({  
      sort_hidden: !_this.data.sort_hidden,//下拉框的显示或隐藏
      zhezhao: !_this.data.zhezhao,//遮罩层
      upordown: "up",
    }) 
    this.scorallreset()
  },


  /**
   * 生命周期函数--监听页面加载
   */
  //公司选择函数
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
  // 薪资下拉菜单函数

  // 下拉框确定点击事件
  //解决下拉菜单过程中触发其他事件问题
    xinzirecover_hidden: function () {
    this.setData({
      xinzisort_hidden: true,
      xinzizhezhao: true,//遮罩层
    })
    this.scorallreset()
  },
  xinzidropdownTap(e) {
    this.recover_hidden()
    let _this = this;
    _this.setData({
      xinzisort_hidden: !_this.data.xinzisort_hidden,//下拉框的显示或隐藏
      xinzizhezhao: !_this.data.xinzizhezhao,//遮罩层
      xinziupordown: "up",
    })
    _this.scorallreset()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //薪资选择函数
  xinzitab: function (e) {
    let index = e.currentTarget.dataset.id;

    let item = this.data.xinzitab;
    let that = this;
    let i;
    for (i in item) {
      item[i].checked = false;
    }

    item[index].checked = true;
    that.setData({
      xinzitab: item,
      xinzi: item[index].value,
      xinzizhezhao: true,//遮罩层的显示或隐藏
      xinzisort_hidden: true,//下拉框的显示或隐藏
      xinziupordown: "down",
    })
    console.log(item[index].value);
    this.scorallreset()

  },
  //蒙层滑动消失函数
  xinzimove: function () {
    let that = this;
    this.scorallreset()
    that.setData({
      xinzizhezhao: true,//遮罩层的显示或隐藏
      xinzisort_hidden: true,//下拉框的显示或隐藏
      xinziupordown: "down",
    })

  },
  //薪资确定重置函数
  suremoney: function () {
    let slider1Value = this.data.slider1Value;
    let slider2Value = this.data.slider2Value;
    let item = this.data.xinzitab;
    let i;
    for (i in item) {
      item[i].checked = false;
    }
    this.setData({
      xinzitab: item,
      xinzi: slider1Value + '-' + slider2Value,
      xinzizhezhao: true,//遮罩层的显示或隐藏
      xinzisort_hidden: true,//下拉框的显示或隐藏
      xinziupordown: "down",
    })
    this.scorallreset()
  },
  resetmoney: function () {
    let item = this.data.xinzitab;
    let that = this;
    let i;
    for (i in item) {
      item[i].checked = false;
    }
    that.setData({
      xinzitab: item,
      xinzi: '薪资',
      slider1Value: 0, // slider1的值
      slider2Value: 10000, // slider2的值
    })
  },



  //价格slider滑动




  // 开始滑动

  changeStart: function (e) {

    var idx = parseInt(e.currentTarget.dataset.idx)

    if (idx === 1) {

      // dW是当前操作的slider所能占据的最大宽度百分数

      var dW = (this.data.slider2Value - this.data.min) / this.data.rate

      this.setData({

        slider1W: dW,

        slider2W: 100 - dW,

        slider1Max: this.data.slider2Value,

        slider2Min: this.data.slider2Value,

        change: false

      })

    } else if (idx === 2) {

      var dw = (this.data.max - this.data.slider1Value) / this.data.rate

      this.setData({

        slider2W: dw,

        slider1W: 100 - dw,

        slider1Max: this.data.slider1Value,

        slider2Min: this.data.slider1Value,

        change: false

      })

    }

  },



  // 正在滑动

  changing: function (e) {

    var idx = parseInt(e.currentTarget.dataset.idx)

    var value = e.detail.value

    let rightSliderPriceWidthX = (this.data.max - value) / 116 - 21

    let leftSliderPriceWidthX = value / 116

    if (idx === 1) {

      this.setData({

        slider1Value: value,

        leftSliderPriceWidthX: leftSliderPriceWidthX + '%'

      })

    } else if (idx === 2) {

      this.setData({

        slider2Value: value,

        rightSliderPriceWidthX: rightSliderPriceWidthX + '%'

      })

    }

  },

  changed: function (e) {

    if (this.data.slider1Value === this.data.slider2Value && this.data.slider2Value === this.data.max) {

      this.setData({

        change: true

      })

    }

  },
  //工厂点击函数
  gongchangclick: function () {
    wx.navigateTo({
      url: '../gongchang/gongchang',
    })

  },
  // scoll重置高度函数

scorallreset:function(){
  let query = wx.createSelectorQuery()
  let windowHeight = this.data.windowHeight
  let t1hight
    let t3hight
    let that = this
    let tcactive1 = that.data.sort_hidden
    let tcactive2 = that.data.xinzisort_hidden
  query.select('.navList1').boundingClientRect(function (res) {
    t1hight = res.bottom;
    console.log('navList1', t1hight)
  
  }).exec()
  //在这里做计算，res里有需要的数据
  if (tcactive1 == true && tcactive2 == true){
      query.select('.navList2').boundingClientRect(function (res) {
        t3hight = res.bottom;
        console.log('navList2', t3hight)
        console.log('navList2', t3hight, windowHeight,(windowHeight - t3hight))
        that.setData({
          scrollheight: (windowHeight - t3hight),
        })
      }).exec()
  } else if(tcactive1 == false){
      query.select('.sortup').boundingClientRect(function (res) {
        t3hight = res.bottom;
        console.log('.sort', res)
        console.log('.sort', t3hight, (windowHeight - t3hight))
        that.setData({
          scrollheight: (windowHeight - t3hight),
          zhezhaotop: t3hight,
        })
      }).exec()  
  } else  {
    query.select('.xinzisortup').boundingClientRect(function (res) {
      t3hight = res.bottom;
      console.log('.xinzisort', res)
      console.log('.xinzisort', t3hight, (windowHeight - t3hight))
      that.setData({
        scrollheight: (windowHeight - t3hight),
        zhezhaotop: t3hight,
      })
    }).exec()
  }    
},
  onReady: function () {
    let windowHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      windowHeight: windowHeight
    })
    this.scorallreset()
    console.log('index:onShow')
  },

 
  


})
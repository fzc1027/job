// pages/workers/workers.js
import touch from './touch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '0', value: '我的下线员工', checked: true, yincang:false,},
      { name: '1', value: '我关注的公司职位', checked: false, yincang: true,},

    ],
    ygtab: [
      { name: '0', value: '综合', checked: true, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '1', value: '普工', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '2', value: '电工', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '3', value: '快递员', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '4', value: '厨师', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },

    ],
    gstab: [
      { name: '0', value: '综合', checked: true, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '1', value: '普工', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '2', value: '电工', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '3', value: '快递员', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '4', value: '厨师', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },

    ],
    worker: '',
    gs:'',
    slideButtons: [{
      text:'修改',
      src: '/images/xiugai.png',
    }, {
        text: '删除',
        src: '/images/renliziyuan/shanchu.png',
    }],
    xunhuan: [
      {
        name: "1",
        lock: true,
      },
      {
        name: "2",
        lock: true,
      },
      {
        name: "3",
        lock: false,
      }
    ],
   
  },
  //移动函数
  touch: new touch(),
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    let data = this.touch._touchstart(e, this.data.xunhuan)
    this.setData({
      xunhuan: data
    })
  },


  //滑动事件处理
  touchmove: function (e) {
    let data = this.touch._touchmove(e, this.data.xunhuan)
    this.setData({
      xunhuan: data
    })
  },
  //删除事件
  del: function (e) {
    var that=this
    wx.showModal({
      title: '提示',
      content: '确认要删除此条信息么？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.data.xunhuan.splice(e.currentTarget.dataset.index, 1)
          that.setData({
            xunhuan: that.data.xunhuan
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //修改
  edit: function (e) {
    var that = this
    wx.navigateTo({
      url: './xiugai/xiugai',
    })

  },
  //一级导航函数
  clicks: function (e) {
    let index = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset.id)
    let item = this.data.items;
    let i;
    for (i in item) {
      item[i].checked = false;
      item[i].yincang = true;
    }

    item[index].checked = true;
    item[index].yincang = false;

    this.setData({
      items: item
    })
    console.log(e)
    console.log(item[index].value)


  },
  //员工选择函数
  ygtab: function (e) {
    let index = e.currentTarget.dataset.id;
    console.log(e)
    let item = this.data.ygtab;

    let that = this;
    let i;
    for (i in item) {
      item[i].checked = false;
    }

    item[index].checked = true;
    that.setData({
      ygtab: item,

    })
    if (index == 0) {
      that.setData({
        worker: item,
      })
    } else {
      that.setData({
        worker: [item[index]],
      })
    }
    console.log(item[index])

  },
  //公司选择函数
  gstab: function (e) {
    let index = e.currentTarget.dataset.id;
    console.log(e)
    let item = this.data.gstab;
    
    let that = this;
    let i;
    for (i in item) {
      item[i].checked = false;
    }
   
    item[index].checked = true;
    that.setData({
      gstab: item,
  
    })
    if(index==0){
      that.setData({
        gs: item,
      })
    }else{
      that.setData({
        gs:[item[index]],
      })
    }
    console.log(item[index])
 
  },
  //左滑修改和删除函数
  slideButtonTap(e) {
    console.log('slide button tap', e.detail)
  },
  //员工下拉函数
  xiala:function(e){
    console.log(e)
    var index1=e.currentTarget.dataset.index1
    console.log(index1)
    var item1=this.data.worker
    console.log(item1)
    var yincang1 = item1[index1].xinxiyincang
    if(yincang1==true){
      item1[index1].xinxiyincang= false,
      item1[index1].xialatubiao ='/images/renliziyuan/xia.png'
      this.setData({
        worker:item1
      })
    }else{     
        item1[index1].xinxiyincang=true,
        item1[index1].xialatubiao ='/images/renliziyuan/you.png'
      this.setData({
        worker: item1
      })
    }
  },
  //公司下拉函数
  gsxiala: function (e) {
    console.log(e)
    var index2 = e.currentTarget.dataset.index2
    console.log(index2)
    var item2 = this.data.gs
    console.log(item2)
    var yincang2 = item2[index2].xinxiyincang
    if (yincang2 == true) {
      item2[index2].xinxiyincang = false,
        item2[index2].xialatubiao = '/images/renliziyuan/xia.png'
      this.setData({
        gs: item2
      })
    } else {
      item2[index2].xinxiyincang = true,
        item2[index2].xialatubiao = '/images/renliziyuan/you.png'
      this.setData({
        gs: item2
      })
    }
  },
  //招聘下线函数
  xiaxian: function () {
    wx.navigateTo({
      url: './xiaxian/xiaxian',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var gstab=this.data.gstab
    var ygtab = this.data.ygtab
      this.setData({
        worker:ygtab,
        gs: gstab
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
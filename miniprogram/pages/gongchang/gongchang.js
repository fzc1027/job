// miniprogram/pages/gongchang/gongchang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biaoqian:['电子工厂','千人大厂'],
    ellipsis: true, 
    readmore:'查看更多',
    demo: [
      { name: '0', src: '/images/1.jpg', checked: false },
      { name: '1', src: '/images/2.jpg', checked: false },
      { name: '2', src: '/images/3.jpg', checked: false },
      { name: '3', src: '/images/1.jpg', checked: false },
      { name: '4', src: '/images/2.jpg', checked: false },
      { name: '5', src: '/images/3.jpg', checked: false },
      { name: '6', src: '/images/1.jpg', checked: false },

    ],
    dianselect: false,
    diansrc:'/images/guanzhu.png' ,
  },
  ellipsis: function () {
    var value = !this.data.ellipsis;
    if(value==true){
    this.setData({
      ellipsis: value,
      readmore: '查看更多',
    }) 
    }else{
      this.setData({
        ellipsis: value,
        readmore: '收起',
      }) 
    }
  },
  /*点赞函数*/
  dianzan:function(){
    var value=!this.data.dianselect
    if (value == true) {
      this.setData({
        dianselect: value,
        diansrc: '/images/dianzan.png' ,
      })
    } else {
      this.setData({
        dianselect: value,
        diansrc: '/images/guanzhu.png' ,
      })
    }
  },
  //申请职位函数
  apply: function () {
    wx.navigateTo({
      url: '../apply/apply',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
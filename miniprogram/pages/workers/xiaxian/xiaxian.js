// pages/workers/xiaxian/xiaxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:'',
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    let data = App.touch._touchstart(e, this.data.items)
    this.setData({
      items: data
    })
  },

  /*简介函数*/
  jianjie: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      details: e.detail.value
    });
  },
  //手动添加职位函数
  erweima: function () {
    wx.navigateTo({
      url: '../code/code',
    })
  },
  //手动添加职位函数
  add: function () {
    wx.navigateTo({
      url: '../../apply/tjapply/tjapply',
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
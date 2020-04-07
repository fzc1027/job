// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    worker: [
      { name: '0', value: '综合', checked: true, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '1', value: '普工', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '2', value: '电工', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '3', value: '快递员', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },
      { name: '4', value: '厨师', checked: false, xinxiyincang: true, xialatubiao: '/images/renliziyuan/you.png', },

    ],
    xunhuan: ['', '', ''],
  },
  //信息修改函数
  clickxiugai: function () {
    wx.navigateTo({
      url: './xiugai/grxiugai',
    })
  },
  //余额函数
  clickyue: function () {
    wx.navigateTo({
      url: './yue/yue',
    })
  },
  /*下线函数*/
  xiaxian: function () {
    wx.switchTab({
      url: '../workers/workers',
    })
  },
  /*关注列表函数*/
  guanzhugs: function () {
    wx.navigateTo({
      url: '../guanzhu/guanzhu',
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
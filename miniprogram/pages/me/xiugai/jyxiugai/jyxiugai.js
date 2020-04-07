// pages/me/xiugai/jyxiugai/jyxiugai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*信息储存 */
    xl: '',
    xxmc: '',
    sxzy: '',
    zxsj: '',
 
  },
  /*最高学历函数*/
  xl: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      xl: e.detail.value
    });
  },
  /*学校名称函数*/
  xxmc: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      xxmc: e.detail.value
    });
  },
  /*所学专业函数*/
  sxzy: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      sxzy: e.detail.value
    });
  },
  /*在校时间函数*/
  zxsj: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      zxsj: e.detail.value
    });
  },
  /*确认保存函数*/
  save: function () {
    wx.navigateBack()
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
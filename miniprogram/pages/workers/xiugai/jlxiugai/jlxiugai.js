// pages/me/xiugai/jlxiugai/jlxiugai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*信息储存 */
    gsmc: '',
    zwmc: '',
    hylb: '',
    jnbq: '',
    zzsj: '',
    hylb: '',
    gzms: '',
    dqyx: '',
  },
  /*公司名称函数*/
  gsmc: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      gsmc: e.detail.value
    });
  },
  /*职位名称函数*/
  zwmc: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      zwmc: e.detail.value
    });
  },
  /*行业类别函数*/
  hylb: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      hylb: e.detail.value
    });
  },
  /*技能标签函数*/
  jnbq: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      jnbq: e.detail.value
    });
  },
  /*在职时间函数*/
  zzsj: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      zzsj: e.detail.value
    });
  },
  /*行业类别函数*/
  hylb: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      hylb: e.detail.value
    });
  },
  /*工作描述函数*/
  gzms: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      gzms: e.detail.value
    });
  },
  /*当前月薪函数*/
  dqyx: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      dqyx: e.detail.value
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
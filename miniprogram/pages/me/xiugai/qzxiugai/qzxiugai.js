// pages/me/xiugai/qzxiugai/qzxiugai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //城市
    region: ['省', '市', '区'],
    customItem: '全部',
    /*信息储存 */
    gzxz: '',
    yx: '',
    gzzt: '',
    city: '',
    zwlb: '',
    hylb: '',
  },
  /*工作性质函数*/
  gzxz: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      gzxz: e.detail.value
    });
  },
  /*期望月薪函数*/
  qwyx: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      yx: e.detail.value
    });
  },
  /*工作状态函数*/
  gzzt: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      gzzt: e.detail.value
    });
  },
  /*工作城市函数*/
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      city: e.detail.value[0] + '-' + e.detail.value[1] + '-' + e.detail.value[2]
    })
  },
  /*职位类别函数*/
  zwlb: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      gzxz: e.detail.value
    });
  },
  /*行业类别函数*/
  hylb: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      gzxz: e.detail.value
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
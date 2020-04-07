// pages/me/xiugai/grxiugai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    //身份证
    photos: "/images/card1.png",
    photos2: "/images/card2.png",
    //健康证
    jkphoto: "/images/card1.png",
    zhengjian: [],
    //个人信息与证件上传隐藏
    showgeren: false,
    showzhengjian: true,
    lock: true,
  },
  /*按钮*/
  kejian: function () {
    this.setData({
      lock: !this.data.lock
    })
  },
  //个人信息修改函数
  gerenxiugai: function () {
    wx.navigateTo({
      url: './jbxiugai/jbxiugai',
    })
  },
  //求职修改函数
  qiuzhixiugai: function () {
    wx.navigateTo({
      url: './qzxiugai/qzxiugai',
    })
  },
  //工作简历修改函数
  gongzuoxiugai: function () {
    wx.navigateTo({
      url: './jlxiugai/jlxiugai',
    })
  },
  //教育经历修改函数
  jiaoyuxiugai: function () {
    wx.navigateTo({
      url: './jyxiugai/jyxiugai',
    })
  },
  //证件修改函数
  zhengjianxiugai: function () {
    wx.navigateTo({
      url: './zjxiugai/zjxiugai',
    })
  },
  //信息与证件上传
  clicks1: function (e) {

    this.setData({
      showgeren: false,
      showzhengjian: true,
    })
  },
  clicks2: function (e) {

    this.setData({
      showgeren: true,
      showzhengjian: false,
    })

  },
  //上传健康证
  jkphoto: function (e) {
    var that = this

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          jkphoto: tempFilePaths
        })
        that.upLoadImg(tempFilePaths, 'card_user')
      }
    })

  },
  //上传身份证
  touchphoto: function (e) {
    var that = this
    var no = e.currentTarget.id;
    if (no == "1") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            photos: tempFilePaths
          })
          that.upLoadImg(tempFilePaths, 'card_user')
        }
      })
    } else if (no == "2") {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          that.setData({
            photos2: tempFilePaths
          })
          that.upLoadImg(tempFilePaths, 'card_guohui')
        }
      })
    }


  },

  //修改技能证
  changejnphoto: function (e) {
    var that = this
    var zhengjian = that.data.zhengjian
    console.log(e)
    var id = e.currentTarget.id;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        zhengjian[id] = tempFilePaths;
        console.log(zhengjian)
        that.setData({
          zhengjian: zhengjian
        })
        that.upLoadImg(tempFilePaths, 'card_user')
      }
    })

  },
  //技能证修改
  addjnphoto: function (e) {
    var that = this
    var zhengjian = that.data.zhengjian
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        zhengjian.push.apply(zhengjian, tempFilePaths)
        console.log(zhengjian)
        that.setData({
          zhengjian: zhengjian
        })
        that.upLoadImg(tempFilePaths, 'card_user')
      }
    })

  },
  upLoadImg: function (list, type) {
    var that = this;
    this.upload(that, list, type);
  },

  //多张图片上传
  upload: function (page, path, type) {
    var that = this;
    var curImgList = [];
    for (var i = 0; i < path.length; i++) {
      wx.showToast({
        icon: "loading",
        title: "正在上传"
      }),
        wx.uploadFile({
          url: 填写你的接口,
          //接口处理
          filePath: path[0],
          name: 'files',
          header: { "Content-Type": "multipart/form-data" },
          formData: {
            douploadpic: '1',
            token: _KMJH_Data.duoguan_user_token
          },
          success: function (res) {


            var imgdata = JSON.parse(res.data);
            //从json对象中创建JavaScript对象

            if (type == 'card_user') {
              that.setData({
                card_user: imgdata.savename
              })
            } else if (type == 'card_guohui') {
              that.setData({
                card_guohui: imgdata.savename
              })
            } else if (type == 'card_hand') {
              that.setData({
                card_hand: imgdata.savename
              })
            }

            if (res.statusCode != 200) {
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
              return;
            }
            var data = res.data

            page.setData({  //上传成功修改显示头像
              src: path[0]
            })
          },
          fail: function (e) {
            wx.showModal({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
          },
          complete: function () {
            wx.hideToast();  //隐藏Toast
          }
        })
    }
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
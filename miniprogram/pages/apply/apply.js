Page({

  /**
   * 页面的初始数据
   */
  data: {

    //身份证
    photos: "/images/card1.png",
    photos2: "/images/card2.png",
    region: ['省', '市', '区'],
    customItem: '全部',
    sexarray: ['男', '女'],
    index: 0,
    /*信息储存 */
    name:'',
    sex:'',
    date: '',
    cardnumber:'',
    phonenumber:'',
    city:'',
    details: '',
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
          url: 填写你的接口,  //接口处理
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
/*出生日期函数*/
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
/*城市函数*/
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      city: e.detail.value[0] + '-' + e.detail.value[1] + '-' + e.detail.value[2]
    })
  },
  /*姓名函数*/
  name: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      name: e.detail.value
    });
  },
  /*性别函数*/
  bindPickerChange: function (e) {
    var sexarray=this.data.sexarray
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      sex: sexarray[e.detail.value],
    })
  },
  /*身份证号函数*/
  cardnumber: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      cardnumber: e.detail.value
    });
  },
  /*电话号函数*/
  phonenumber: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      phonenumber: e.detail.value
    });
  },
  /*工作经验函数*/
  jingyan: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      details: e.detail.value
    });
  },
  /*提交函数*/
  submit:function(){
    wx.navigateTo({
      url: '../apply/applysuccess',
    })
  },
  onLoad: function (options) {
    var that = this
    // that.getusercard();
  },

})

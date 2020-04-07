// pages/quanzi/startqz/startqz.js
const recorderManager = wx.getRecorderManager()

const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      },
      {
        name: "3",
        lock: false,
      },
      {
        name: "3",
        lock: false,
      }
    ],
    zhengjian: [],
    bq: [],
    photos: "/images/card1.png",
    details: '',
    yinpinurl:[],
    setInter: '',
    jstime:0,
    /*语音隐藏*/
    luyin:true,
    /*标签*/
    ifbq:true,
    bq:[],
    bqtext:'',
  },
  /*发布函数*/
  fabu: function () {
    wx.switchTab({
      url: '../quanzi',
    })
  
  },
  /*文本函数*/
  wenben: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      details: e.detail.value
    });
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
  //删除照片
  deletephoto: function (e) {
    var index = e.currentTarget.id
    var that = this
    var zhengjian = that.data.zhengjian;
    console.log(e)
    zhengjian.splice(index, 1);
    that.setData({

      zhengjian: zhengjian

    })

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
  /*标签增加函数*/
  addbq: function (e) {
   
        this.setData({
          ifbq: false
        })
  },
  /*标签填写函数*/
  bqtext: function (e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      bqtext: e.detail.value
    });
  },
  cancel:function(e){
    this.setData({
      ifbq: true,
      bqtext: '',
    });
  },
  confirm: function (e) {
    var that=this
    var bqtext=that.data.bqtext
    var bq = that.data.bq
    if(bqtext!==''){
      bq.push(bqtext);
      that.setData({
        ifbq: true,
        bqtext: '',
        bq:bq,
      });
    }  
  },
  /*删除标签*/
  deletebq: function (e) {
    var index = e.currentTarget.id
    var that = this
    var bq = that.data.bq;
    console.log(e)
    bq.splice(index, 1);
    that.setData({

      bq: bq

    })

  },
  /*录音的函数*/
  startluyin:function(){
    this.setData({ 
      luyin: false 
    });
  },
  touchdown:function(e){
     //监听事件 按住说话
     console.log("开始录音")
    const options = {
      duration: 6000,
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 96000,
      format: 'mp3',
      frameSize: 50
    }
    recorderManager.start(options);//开始录音
    var that = this;
    //将计时器赋值给setInter
    that.data.setInter = setInterval(
      function () {
        var time = that.data.jstime + 1;
        that.setData({ jstime: time });
        console.log('setInterval==' + that.data.jstime);
      }
      , 1000);    
    
  },

  touchup: function (e) {
    

    console.log("结束录音")

    var that = this;

    recorderManager.stop(); //先停止录音
    clearInterval(that.data.setInter) 
    that.setData({
      jstime: 0,
      luyin: true,
    }) ;

    recorderManager.onStop((res) => {  //监听录音停止的事件

      console.log("监听录音停止事件", res)

      if (res.duration < 1000) {

        wx.showToast({

          title: '录音时间太短'

        })

        return;

      } else {

        wx.showLoading({

          title: '发送中...',

        });

        
        var yinpinurl = that.data.yinpinurl;

        var tempFilePath = res.tempFilePath; // 文件临时路径

        console.log("文件临时路径", tempFilePath)
         yinpinurl.push({
           time: Math.ceil(res.duration/1000),
           url: tempFilePath
         });
        console.log("文件临时路径", yinpinurl)
        that.setData({

          yinpinurl: yinpinurl

        })




        wx.uploadFile({

          url: '', //上传服务器的地址

          filePath: tempFilePath, //临时路径

          name: 'file',

          header: {

            contentType: "multipart/form-data", //按需求增加

          },

          formData: null,

          success: function (res) {

            console.log("上传成功")

            wx.hideLoading();

            

          },

          fail: function (err) {

            wx.hideLoading();

            console.log(err.errMsg);//上传失败

          }

        });

      }

    });

  },
/*播放音频*/
playyinpin:function(e){
  var index=e.currentTarget.id
  console.log(e)
  console.log("开始播放")
  innerAudioContext.src=this.data.yinpinurl[index].url;
  console.log("开始播放", this.data.yinpinurl[index])
  innerAudioContext.play()

  innerAudioContext.onEnded(()=>{
    innerAudioContext.stop();
  });

},
/*删除音频*/
  yindelete: function (e) {
    var index = e.currentTarget.id
    var that=this
    var yinpinurl = that.data.yinpinurl;
    console.log(e)
    yinpinurl.splice(index, 1);
    that.setData({

      yinpinurl: yinpinurl

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
    var that=this
    clearInterval(that.data.setInter) 
    that.setData({
      jstime: 0,
    });
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
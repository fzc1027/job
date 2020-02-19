//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    items: [
      { name: '0', value: '全职' ,checked:false },
      { name: '1', value: '兼职' ,checked:false },
      { name: '2', value: '实习' ,checked:false },

    ],
    demo : ['','','','','',''],
    city: "城市",
  },



  clicks: function (e) {
    let index = e.currentTarget.dataset.id;
    let item = this.data.items;
    let i;
    for (i in item) {
      item[i].checked = false;
    }

    item[index].checked = true;

    this.setData({
      items: item
    })
    console.log(e)
    console.log(item[index].value)
    

  }







})
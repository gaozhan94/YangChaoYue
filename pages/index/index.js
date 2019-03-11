//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabBar: 48,
    shareBtn: true,
  },
  onLoad: function () {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let tabBar = 48;
        if (res.system.includes('iOS')) {
          tabBar = 44;
        }
        that.setData({
          tabBar: tabBar,
          systemInfo: res,
        })
      }
    })
  },
  onShow:function(){
    let that = this;
    that.setData({
      shareBtn: true
    })
  },
  onShareAppMessage:function(){
    let that = this;
    that.setData({
      shareBtn:false
    })
    return {
      title: '抓住那个胖子',
      path: '/pages/index/index',
    }
  },

})

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo:{}

  },
  onLoad: function () {
    var _that=this
    wx.authorize({
      scope: 'scope.userInfo',
      success:function(res){
        console.log(res.errMsg)
        wx.getUserInfo({
          scope:"scope.userInfo",
          success:function(res){
            _that.setData({
              userInfo:res
            })
            console.log(_that.data.userInfo)



          }
        })
      },
      fail:function(res){
        console.log(res,"fail")
      }
    })


  },
})



Page({
  data: {
    test:[1,2,3],
    douban_top_movie:null,
    douban_coming_movie:null,
    douban_us_box: {
      date:""
    },
    inputShowed: false,
    search_value: "",
   
  },
  onLoad: function () { 
    this.load_data()
    // this.test_action()
    wx.authorize({
      scope:"scope.userInfo",
      success:function(res){
        wx.getUserInfo({
          success:function(res){
            console.log(res)
          }
        })
      }
      
    }) 
  },
  load_data: function () {
    var _that=this
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      data:{
        start:0,
        count:7,
      },
      success: function (res) { 
        _that.setData({
          douban_top_movie: res.data
        })
        // console.log(res.data)
      },
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      data: {
        start: 0,
        count: 7,
      },
      success: function (res) {
        _that.setData({
          douban_coming_movie: res.data
        })
        // console.log(res.data)
      },
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/us_box',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      data: {
        start: 0,
        count: 7,
      },
      success: function (res) {
        var us_box = new Array;
        for(var i= 0; i<res.data.subjects.length;i++){
          us_box = us_box.concat(res.data.subjects[i].subject)
        }
        _that.setData({
          douban_us_box:{
            subjects:us_box,
            date: res.data.date
          }
        })
        // console.log(res.data)
      },
    })
  },
  showInput: function () {
    wx.navigateTo({
      url: '../search/search'
    })
    
  },
})

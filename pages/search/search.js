

Page({
  data: {
    inputShowed: true,
    search_value: "",
    search_result:null
   
  },
  onLoad: function () { 
    this.load_data()
    // this.test_action()   
  },
  load_data: function () {
    var _that=this
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      search_value: "",
    })
    wx.navigateBack()
  },
  clearInput: function () {
    this.setData({
      search_value: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      search_value: e.detail.value
    });
  },
  search_action: function(e){
    var _that=this
    console.log(e.detail.value)
    wx.request({
      url: 'https://api.douban.com//v2/movie/search?',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      data: {
        q: e.detail.value,
        start: 0,
        count: 7
      },
      success: function (res) {
        _that.setData({
          search_result: res.data
        })
        console.log(res.data)
      },
    })

  }
})

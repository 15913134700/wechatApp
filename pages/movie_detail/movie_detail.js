
Page({
  data: {
    detail_id:null,
    douban_movie_detail: null,
    douban_movie_comments: null,
    carts_list:null,
  },
  onLoad: function (option) {
    this.load_data(option.movie_id);

  },
  load_data: function (movie_id) {
    var _that = this

    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + movie_id,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      data: {
        "apikey": "0b2bdeda43b5688921839c8ecb20399b"
      },
      success: function (res) {
        var result=res;
        var _temp_carts_list=new Array;
        result.data.genres=result.data.genres.join("／")
        for (var i = 0; i<result.data.directors.length;i++){
          _temp_carts_list.push(result.data.directors[i].name+"（导演）")
        }
        for (var i = 0; i < result.data.casts.length; i++) {
          _temp_carts_list.push(result.data.casts[i].name)
        }
        _temp_carts_list = _temp_carts_list.join("／")
        _that.setData({
          douban_movie_detail: result.data,
          carts_list: _temp_carts_list
        })
        console.log(res.data)
      },
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + movie_id +'/comments',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      data: {
        "apikey":"0b2bdeda43b5688921839c8ecb20399b",
        start: 0,
        count: 7,
      },
      success: function (res) {
        _that.setData({
          douban_movie_comments: res.data,
        })
        console.log(res.data)
      },
    })
  },


})

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {   
  },
  properties:{
    card_name:{
      type:String,
      value:'热门',
    },
    card_data:{
      type: Object,
      value:null,
    }

  },
  methods:{
    go_to_detail: function (e) {
      var movie_id = e.currentTarget.dataset.movie_id;
      console.log(movie_id)
      wx.navigateTo({
        url: '../movie_detail/movie_detail?movie_id=' + movie_id
      })
    },
  }
})

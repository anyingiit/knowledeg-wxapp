// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var account = wx.getStorageSync("account")
    if (account == null){
      account = false
    }
    this.setData({
      account: account
    })
    if(options.pisition){
      var openDetailNum = options.pisition-1
      console.log(openDetailNum)
      wx.navigateTo({
        url: 'account-detail/account-detail?id='+ openDetailNum,
      })
    }
  },
  onItemTap: function(even) {
    var index = even.currentTarget.dataset.index;
    console.log("onItemTap",index);
    wx.navigateTo({
      url: 'account-detail/account-detail?id=' + index,
    })
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
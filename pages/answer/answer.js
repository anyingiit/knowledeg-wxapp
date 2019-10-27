// pages/answer/answer.js
var getDataFile = require("../../datas/local_db.js")
function getRandomeArry(count){
  var originalArray = new Array;//原数组 
  var randoms = new Array;
  //给原数组originalArray赋值 
  for (var i = 0; i < count; i++) {
    originalArray[i] = i + 1;
  }
  for (var num, i = 0; i < count; i++) {
    do {
      num = Math.floor(Math.random() * count);
    } while (originalArray[num] == null);
    randoms[i] = originalArray[num];
    originalArray[num] = null;
  }
  return randoms;
}
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
		wx.showLoading({
			title: '试题加载中...',
		})
    var queCount = 100;
    var database = getDataFile.merge_db
    //console.log(database["choiceQuestion"]);
    var randoms = getRandomeArry(queCount);
    var question = new Array;
    console.log(randoms)
    for(var i= 0;i < queCount;i++){
      // console.log(database["choiceQuestion"][randoms[i]])
      question[i] = database["choiceQuestion"][randoms[i]];
    }
    console.log(question);
    this.setData({
      question: question,
      questionCount: question.length,
      queIndex: 0
    })
		wx.hideLoading()
  },
  onbindchange:function(even){
    this.setData({
      queIndex: even.detail.current
    })
    console.log(even.detail.current)
  },
  onChoice:function(even){

    console.log(even);
    console.log(even.currentTarget.dataset)
    var index = even.currentTarget.dataset.index
    var option = even.currentTarget.dataset.option
		var rightOption = this.data.question[index]["testQuestion"]["testQuestionOption"]["result"]
    if (this.data.question[index]["tap"] == null){
			wx.showLoading({
				title: '处理中...',
			})
      console.log("ok")
      if (rightOption == option){
        console.log("right")
        var serialStr = "question[" + index + "].theme."+ option + ".serial"
				var textStr = "question[" + index + "].theme." + option + ".text"
        this.setData({
          [serialStr]: "serial-right",
					[textStr]: "text-right"
        })
      }else{
        console.log("wrong")
				var serialStr = "question[" + index + "].theme." + option + ".serial"
				var textStr = "question[" + index + "].theme." + option + ".text"
				var rightSerialStr = "question[" + index + "].theme." + rightOption + ".serial"
				var rightTextStr = "question[" + index + "].theme." + rightOption + ".text"
				this.setData({
					[serialStr]: "serial-wrong",
					[textStr]: "text-wrong",
					[rightSerialStr]: "serial-right",
					[rightTextStr]: "text-right"
				})
      }
    }
    // this.data.question[index]["tap"] == true
    var str = "question["+ index +"].tap"//组合对象路径
    this.setData({//设置自锁
      [str]: true
    })
		wx.hideLoading()
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
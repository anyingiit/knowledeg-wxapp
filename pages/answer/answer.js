// pages/answer/answer.js
var getDataFile = require("../../datas/local_db.js")
function getRandomeArry(quantity, queCount) {
  var originalArray = new Array; //原数组 
  var randoms = new Array;
  //给原数组originalArray赋值 
  for (var i = 0; i < queCount; i++) {
    originalArray[i] = i + 1;
  }
  for (var num, i = 0; i < quantity; i++) {
    do {
      num = Math.floor(Math.random() * queCount);
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
  onLoad: function(options) {
    wx.showLoading({
      title: '试题加载中...',
    })
    var quantity = 2; //题目数量
    var queCount = 1000; //出题范围
    var database = getDataFile.merge_db
    //console.log(database["choiceQuestion"]);
    var randoms = getRandomeArry(quantity, queCount);
    var question = new Array;
    console.log(randoms)
    for (var i = 0; i < quantity; i++) {
      // console.log(database["choiceQuestion"][randoms[i]])
      question[i] = database["choiceQuestion"][randoms[i]];
    }
    console.log(question);
    this.setData({
      question: question,
      questionQuantity: question.length,
      queIndex: 0
    })
    wx.hideLoading()
  },
  onbindchange: function(even) {
    this.setData({
      queIndex: even.detail.current
    })
    console.log(even.detail.current)
  },
  onChoice: function(even) {

    console.log(even);
    console.log(even.currentTarget.dataset)
    var index = even.currentTarget.dataset.index
    var option = even.currentTarget.dataset.option
    var rightOption = this.data.question[index]["testQuestion"]["testQuestionOption"]["result"]
    if (this.data.question[index]["tap"] == null) {
      //设置自锁
      var str = "question[" + index + "].tap" //组合对象路径
      this.setData({ //设置自锁
        [str]: option
      })

      wx.showLoading({
        title: '处理中...',
      })
      console.log("ok")
      if (rightOption == option) { //题目回答正确的处理方法
        console.log("right")
        var serialStr = "question[" + index + "].theme." + option + ".serial"
        var textStr = "question[" + index + "].theme." + option + ".text"
        this.setData({
          [serialStr]: "serial-right",
          [textStr]: "text-right"
        })
        var replyStr = "question[" + index + "].reply"
        this.setData({
          [replyStr]: true
        })
      } else { //题目回答错误的处理方法
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
        var replyStr = "question[" + index + "].reply"
        this.setData({
          [replyStr]: false
        })
      }
      wx.hideLoading()
    } else {
      wx.showToast({
        title: '您已经答过该题了哦~',
        icon: 'none', // "success", "loading", "none"
      })
    }
    // this.data.question[index]["tap"] == true

  },
  onSubmit: function() {
    var that = this
    var question = this.data.question

    function haveUnanswered() {
      for (var key in question) {
        if (question[key].tap == null) {
          console.log("发现未作答题目...")
          return true
        }
      }
      return false
    }
    var datas = new Array
    var title, content = null
    if (haveUnanswered()) {
      title = "警告"
      content = "您还有未作答题目,是否仍然提交"
    } else {
      title = "提示"
      content = "您的题目已全部作答完毕,是否立即提交?"
    }
    wx.showModal({
      title: title,
      content: content,
      success(res) {
        if (res.confirm) {
          console.log("用户选择继续...")
          for (var key in question) {
            var result = question[key]["testQuestion"]["testQuestionOption"]["result"]
            var choice = question[key].tap
            var status = null
            if (question[key].tap != null) {
              if (choice == result) {
                status = true
              } else {
                status = false
              }
            } else {
              status = null
            }
            datas[key] = {
              choice: choice,
              status: status,
              questionNum: question[key].testQuestionNum,
              systemQuestionNum: key
            }
          }
          console.log(datas)
        } else if (res.cancel) {
          console.log("用户选择取消继续提交...")
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
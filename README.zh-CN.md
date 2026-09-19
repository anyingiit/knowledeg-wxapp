[English](README.md) · **简体中文**

> 英文版是规范版本。本页与 [README.md](README.md) 不一致时，以英文版为准。

<!-- translation-of: README.md sha256:505f1ea45b6b0004 -->

<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# knowledeg-wxapp

一个微信小程序，从约 1000 道本地题库中随机抽取 100 道选择题让玩家作答，每次选择立即判分，并把每一次完整的作答记录保存到本地，供之后查看。

[![License](https://img.shields.io/github/license/anyingiit/knowledeg-wxapp)](LICENSE)

[报告问题](https://github.com/anyingiit/knowledeg-wxapp/issues/new?template=bug_report.yml) · [提出需求](https://github.com/anyingiit/knowledeg-wxapp/issues/new?template=feature_request.yml)

<details>
  <summary>目录</summary>
  <ol>
    <li><a href="#about-the-project">关于本项目</a></li>
    <li><a href="#getting-started">开始使用</a></li>
    <li><a href="#usage">用法</a></li>
    <li><a href="#contributing">参与贡献</a></li>
    <li><a href="#license">许可证</a></li>
    <li><a href="#contact">联系方式</a></li>
  </ol>
</details>

## 关于本项目

knowledeg-wxapp 是一个微信小程序（`app.json`、`app.js`、`app.wxss`、`project.config.json`），GitHub 上该仓库已被标记为归档。首页仍然是官方脚手架自带的 "Hello World" 占位内容（`pages/index/index.js`），但答题功能是真实可用的：`pages/answer/answer.js` 会从 `datas/local_db.js` 中约 1000 道硬编码的选择题里随机抽取 100 道，以可左右滑动的卡片形式逐题展示，玩家点选后立即判断对错。

无论答完全部题目还是中途提交，作答记录都会以 `account` 为键写入本地存储，`pages/account/account.js` 与 `pages/account/account-detail/account-detail.js` 会列出并可重新查看这些记录。另外两个标签页只是未完成的脚手架，而非正式功能：`pages/logs/logs.js` 是微信官方脚手架自带的启动日志页面，`pages/testJson/testJson.js` 只是把题库整体输出到控制台用于调试。

计划中的功能与已知问题见 [open issues](https://github.com/anyingiit/knowledeg-wxapp/issues)。

## 开始使用

### 环境要求

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)（WeChat DevTools）——微信小程序既不是 npm 包，也不是独立脚本；`project.config.json` 中声明了 `"compileType": "miniprogram"` 以及基础库版本 `"libVersion": "2.9.1"`，只有微信开发者工具才能编译和预览这类项目。
- 一个属于你自己的微信小程序 AppID，需要通过[微信公众平台](https://mp.weixin.qq.com/)注册。`project.config.json` 中已经带有一个提交进仓库的 `appid`；导入项目前请把它换成你自己掌控的 AppID。

### 安装

不需要包管理器，也没有需要提前执行的构建步骤——项目导入微信开发者工具后，由它自己完成编译。

```sh
git clone https://github.com/anyingiit/knowledeg-wxapp.git
```

然后在微信开发者工具中：**项目 → 导入项目**，选择克隆下来的目录（其中的 `project.config.json` 和 `app.json` 标记了它是一个小程序项目根目录），并填入上面准备好的、属于你自己的 AppID。

## 用法

在微信开发者工具中编译并预览项目后，就可以像玩家一样使用它：打开"首页"标签，进入"答题"开始一局测验。`pages/answer/answer.js` 会从 `datas/local_db.js` 中发出 100 道随机题目；左右滑动可以在题目间切换，点选一个选项即锁定答案，并立即依据题目记录的 `result` 判分。无论答题是否全部完成，提交后都会把这次记录保存到本地存储，并跳转到"账户"标签（`pages/account/account.js`、`pages/account/account-detail/account-detail.js`），其中列出了每一次历史作答及其正确、错误与未作答的数量。

## 参与贡献

欢迎参与。[CONTRIBUTING.md](CONTRIBUTING.md) 说明如何提交 issue 或 pull request，[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 说明对所有参与者的行为要求。

请不要在公开的 issue 或 pull request 中报告安全问题。[SECURITY.md](SECURITY.md) 说明了私下报告的方式。

## 许可证

以 MIT 许可证分发。详见 [LICENSE](LICENSE)。

## 联系方式

项目地址：[https://github.com/anyingiit/knowledeg-wxapp](https://github.com/anyingiit/knowledeg-wxapp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

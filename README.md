<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# knowledeg-wxapp

A WeChat Mini Program that quizzes players with 100 questions drawn at random from a local bank of about 1,000 multiple-choice items, scores each answer immediately, and saves every completed attempt to local storage for later review.

**English** · [简体中文](README.zh-CN.md)

[![License](https://img.shields.io/github/license/anyingiit/knowledeg-wxapp)](LICENSE)

[Report a bug](https://github.com/anyingiit/knowledeg-wxapp/issues/new?template=bug_report.yml) · [Request a feature](https://github.com/anyingiit/knowledeg-wxapp/issues/new?template=feature_request.yml)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

knowledeg-wxapp is a WeChat Mini Program (`app.json`, `app.js`, `app.wxss`, `project.config.json`), and GitHub marks the repository as archived. The home tab is still the stock quickstart's "Hello World" placeholder (`pages/index/index.js`), but the quiz itself is real: `pages/answer/answer.js` picks 100 questions at random out of the roughly 1,000 hard-coded multiple-choice items in `datas/local_db.js`, presents them one at a time in a swipeable card, and marks each tapped option right or wrong on the spot.

Finishing (or abandoning) an attempt writes a scored record to local storage under the key `account`, which `pages/account/account.js` and `pages/account/account-detail/account-detail.js` list and can be reopened later. The remaining two tabs are unfinished scaffolding rather than features: `pages/logs/logs.js` is the stock WeChat quickstart's launch-log viewer, and `pages/testJson/testJson.js` just dumps the question bank to the console for debugging.

See the [open issues](https://github.com/anyingiit/knowledeg-wxapp/issues) for planned features and known issues.

## Getting Started

### Prerequisites

- [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) — a WeChat Mini Program is not an npm package or a standalone script; `project.config.json` declares `"compileType": "miniprogram"` and a base library `"libVersion"` of `2.9.1`, and only WeChat DevTools compiles and previews that kind of project.
- Your own WeChat Mini Program AppID, registered through the [WeChat Official Accounts Platform](https://mp.weixin.qq.com/). `project.config.json` already carries a committed `appid`; replace it with an AppID you control before importing the project.

### Installation

There is no package manager and no build step to run ahead of time — WeChat DevTools compiles the source itself once the project is imported.

```sh
git clone https://github.com/anyingiit/knowledeg-wxapp.git
```

Then, inside WeChat DevTools: **Project → Import Project**, point it at the cloned folder (its `project.config.json` and `app.json` mark it as a Mini Program root), and supply your own AppID from the prerequisites above.

## Usage

Compile and preview the project from WeChat DevTools, then use the app the way a player would: open the *Home* tab and navigate to *Answer* to start a quiz. `pages/answer/answer.js` deals out 100 random questions from `datas/local_db.js`; swipe between them and tap an option to lock in an answer, which is scored immediately against the question's recorded `result`. Submitting the run, finished or not, saves it to local storage and hands off to the *Account* tab (`pages/account/account.js`, `pages/account/account-detail/account-detail.js`), which lists every past attempt with its right/wrong/unanswered counts.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for how to open an issue or a pull request, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the standards expected of everyone taking part.

Please do not report security issues in public issues or pull requests. [SECURITY.md](SECURITY.md) explains how to report them privately.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

Project link: [https://github.com/anyingiit/knowledeg-wxapp](https://github.com/anyingiit/knowledeg-wxapp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

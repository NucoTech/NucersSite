# Nucers前端工程

> 本项目依赖`yarn`进行包管理，可以使用`yrm`切换软件源，`yrm use taobao`可以使用淘宝源

## 想法记录

- [ ] 支持webGL前端渲染3D模型
- [ ] 支持在线的代码编辑器导入导出
- [ ] 支持tensorflow.js提供前端人工智能交互内容
- [ ] 考虑支持前端直接执行不同语言的代码
- [ ] 支持OA表格数据导入、导出与可视化
- [ ] 支持插件规范化开发数据结构和DOM的插入
- [x] 重写user的个人中心更改布局风格
- [ ] 支持OA发起生成成员加入项目表格
- [ ] 支持骨架屏提高部分组件的用户体验
- [ ] 考虑支持提供在线直播发起
- [ ] 前端bug监测系统，收集数据上报后端

## 开发须知

- 支持别名引入模块，例如`@components/`代表`site/components`这个目录
- 模拟数据服务使用了`deno`，请确保本地的`deno`环境可用

## Getting Started

Mock本地数据服务启动

```bash
yarn mock
```

开发环境启动

```bash
yarn

yarn dev
```

commit流程

```bash
# 添加git管理
git add .

# 规范commit生成
npm run commit

# 提交更改
git push
```

浏览器打开[http://localhost:3000](http://localhost:3000)查看结果

## TODOS

- [ ] 修改默认的`favicon.ico`和`zeit.svg`

## 前端文档

- [更新日志](docs/CHANGELOG.md)

## 参考文档

- [Next.js Documentation](https://nextjs.org/docs) - Next.js特性和api
- [Learn Next.js](https://nextjs.org/learn) - 交互式教程

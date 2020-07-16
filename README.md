# Nucers

Nucers 社区建设平台

## 项目构建依赖

- `mddir` --- Windows下生成目录树的工具，其他平台可以使用`tree`命令

## 项目结构

```markdown
|-- Nucers
    |-- .gitignore
    |-- README.md
    |-- config
    |-- docs
    |   |-- README.md
    |-- server
    |-- site
```

### 单文件

- `.gitignore` git忽略文件控制
- `README.md` 全局`README.md`文件

### docs

Nucers社区建设平台文档

### server

后端接口项目

### site

前端项目

## 项目开发规范

- 帖子为了后续可拓展的用户体验，使用`po号`类似于bilibili的`AV号`，使用大写的`PO号`可以自动生成链接！例如`PO123123`链接到`/p/po123123`
- 开启tags和topics的模式，topics使用`#话题#`这类格式，同样可以为链接做好准备

## 项目及合作联系

- Zenith <liubingxing@nucosc.com>
- Herbert <herberthe@nucosc.com>

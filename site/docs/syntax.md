# Nucers帖子搜索语法设计

`<head>: <content>`

- `head`为搜索类型头，支持`title (默认)` `tags` `groups`，支持条件与运算`&&`，不支持搜索类型与运算
- `content`为搜索体内容，支持搜索体内容或运算`|`

> 注意：所有的搜索类型头仅允许出现一次，若出现多次后面的`内容`将会取代前面**同一类型**的`内容`

## examples

- 搜索标题为`Nucers社区简介`的帖子

> `title: Nucers社区简介`或者`Nucers社区简介`

- 搜索标签为`learn`或`study`的帖子

> `tags: learn | study`

- 搜索由组织`NUCOSC`发布的帖子

> `groups: NUCOSC`

- 搜索由组织`NUCOSC`发布的，标签为`notice`或`teach`，标题为`公告`的帖子

> `groups: NUCOSC && tags: notice | teach && title: 公告` 或 `公告 && groups: NUCOSC && tags: notice | teach`

## 搜索语法支持情况

| 搜索类型头 | 是否支持搜索体内容或运算 |
| --- | --- |
| 标题 `title` | 否 |
| 标签 `tags` | 是 |
| 组织 `groups` | 是 |

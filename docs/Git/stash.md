# 进阶指南

## 基础操作

::: tip
`[]`方括号中内容为可选，`[<stash>]`里面的 stash 代表进度的编号形如：`stash@{0}`, `<>`尖括号内的必填
:::

对当前的暂存区和工作区状态进行保存。

```Bash
git stash
```

列出所有保存的进度列表。

```Bash
git stash list
```

恢复工作进度

```Bash
git stash pop [--index] [<stash>]
```

`--index` 参数：不仅恢复工作区，还恢复暂存区
`<stash>` 指定恢复某一个具体进度。如果没有这个参数，默认恢复最新进度

如：以下命令恢复编号为 `0` 的进度的工作区和暂存区

```Bash
git stash pop --index stash@{0}
```

## 进阶操作

```Bash
git stash [save message] [-k|--no-keep-index] [--patch]
```

这是 git stash 保存进度的完整命令形式
使用 save 可以对进度添加备注

```Bash
git stash save "这是保存的进度"
```

现在执行 list，会发现后面会出现自定义的被合租

```Bash
git stash list
```

`stash@{0}`: On master: 这是保存的进度

`-k`和`--no-keep-index`指定保存进度后，是否重置暂存区
`--patch` 会显示工作区和 HEAD 的差异,通过编辑差异文件，排除不需要保存的内容。和`git add -p`命令类似

不删除已恢复的进度，其他同 git stash pop

```Bash
git stash apply [--index] [<stash>]
```

删除某一个进度，默认删除最新进度

```Bash
git stash drop [<stash>]
```

删除所有进度

```Bash
git stash clear
```

基于进度创建分支

```Bash
git stash branch <branchname> <stash>
```

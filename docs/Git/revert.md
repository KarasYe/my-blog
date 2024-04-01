# 进阶指南

## 基础操作

```Bash
git revert <commitHash>
```

## 配置项

`<commit>`: commit 选项是用来恢复一个提交的。要恢复一个提交，我们需要 commit 参考 ID。从 git log 命令可以找到 commit id。

```Bash
git revert <commitHash>
```

`<--edit>`:它用于在还原提交之前，编辑 commit 信息。是 git revert 命令的一个默认选项。

```Bash
git revert -e <commitHash>
```

`-m parent-number` /`--mainline parent-number`：这个选项用来 revert merge 的结果。一般来说，我们不能 revert 一个 merge，因为我们不知道哪一边的合并应该被认为是主线。我们可以指定父级编号，并允许 revert 来逆转相对于指定的父级的变化。

`-n/--no edit`：这个选项不会打开文本编辑器。它将直接恢复上次的提交。

```Bash
git revert -n <commitHash>
```

`--cleanup=<mode>`:这个清理选项决定了如何从信息中去除空格和注释。

`-n/--no-commit`:一般来说，revert 命令默认都会提交。no-commit 选项将不会自动提交。此外，如果使用这个选项，你的索引不必与 HEAD 的提交相匹配。no-commit 选项有利于连续恢复对你的索引有影响的多个提交。

## 进阶操作

Git Revert Merge

在 Git 中，Merge 是一个至少有两个父代的提交。它汇集了多条开发线。在一个工作流程中，功能是在分支中开发的，然后合并到主线中，合并的提交通常有两个主线。

如何 Revert 一个 Merge
通常情况下，revert 一个合并被认为是一个复杂的过程。如果做得不对，可能会很复杂。我们将在 git revert 命令的帮助下撤销一个 merge 操作。尽管其他一些命令（如 git reset）也可以做到这一点。让我们了解一下如何撤销合并。

要 revert 一个 merge，我们必须得到它的 commit-id。

要检查提交历史，请运行以下命令

```Bash
git log

git revert <commit reference> -m 1
```

上述命令将 revert 合并的操作。这里`-m 1`被用来指定作为主线的第一个父本。合并提交有多个父本。revert 需要额外的信息来决定哪一个合并的父本应被视为主线。在这种情况下，可以使用参数-m。

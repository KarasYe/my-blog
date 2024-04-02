import{_ as s,o as a,c as e,V as t}from"./chunks/framework.a1fec281.js";const D=JSON.parse('{"title":"进阶指南","description":"","frontmatter":{},"headers":[],"relativePath":"Git/revert.md","filePath":"Git/revert.md","lastUpdated":1711963633000}'),o={name:"Git/revert.md"},n=t(`<h1 id="进阶指南" tabindex="-1">进阶指南 <a class="header-anchor" href="#进阶指南" aria-label="Permalink to &quot;进阶指南&quot;">​</a></h1><h2 id="基础操作" tabindex="-1">基础操作 <a class="header-anchor" href="#基础操作" aria-label="Permalink to &quot;基础操作&quot;">​</a></h2><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">commitHas</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><p><code>&lt;commit&gt;</code>: commit 选项是用来恢复一个提交的。要恢复一个提交，我们需要 commit 参考 ID。从 git log 命令可以找到 commit id。</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">commitHas</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><code>&lt;--edit&gt;</code>:它用于在还原提交之前，编辑 commit 信息。是 git revert 命令的一个默认选项。</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">commitHas</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><code>-m parent-number</code> /<code>--mainline parent-number</code>：这个选项用来 revert merge 的结果。一般来说，我们不能 revert 一个 merge，因为我们不知道哪一边的合并应该被认为是主线。我们可以指定父级编号，并允许 revert 来逆转相对于指定的父级的变化。</p><p><code>-n/--no edit</code>：这个选项不会打开文本编辑器。它将直接恢复上次的提交。</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">commitHas</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><code>--cleanup=&lt;mode&gt;</code>:这个清理选项决定了如何从信息中去除空格和注释。</p><p><code>-n/--no-commit</code>:一般来说，revert 命令默认都会提交。no-commit 选项将不会自动提交。此外，如果使用这个选项，你的索引不必与 HEAD 的提交相匹配。no-commit 选项有利于连续恢复对你的索引有影响的多个提交。</p><h2 id="进阶操作" tabindex="-1">进阶操作 <a class="header-anchor" href="#进阶操作" aria-label="Permalink to &quot;进阶操作&quot;">​</a></h2><p>Git Revert Merge</p><p>在 Git 中，Merge 是一个至少有两个父代的提交。它汇集了多条开发线。在一个工作流程中，功能是在分支中开发的，然后合并到主线中，合并的提交通常有两个主线。</p><p>如何 Revert 一个 Merge 通常情况下，revert 一个合并被认为是一个复杂的过程。如果做得不对，可能会很复杂。我们将在 git revert 命令的帮助下撤销一个 merge 操作。尽管其他一些命令（如 git reset）也可以做到这一点。让我们了解一下如何撤销合并。</p><p>要 revert 一个 merge，我们必须得到它的 commit-id。</p><p>要检查提交历史，请运行以下命令</p><div class="language-Bash"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">referenc</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span></code></pre></div><p>上述命令将 revert 合并的操作。这里<code>-m 1</code>被用来指定作为主线的第一个父本。合并提交有多个父本。revert 需要额外的信息来决定哪一个合并的父本应被视为主线。在这种情况下，可以使用参数-m。</p>`,21),l=[n];function p(r,c,i,C,d,m){return a(),e("div",null,l)}const h=s(o,[["render",p]]);export{D as __pageData,h as default};
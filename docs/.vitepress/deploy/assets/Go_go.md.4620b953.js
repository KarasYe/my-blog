import{_ as s,o as a,c as n,V as l}from"./chunks/framework.a1fec281.js";const i=JSON.parse('{"title":"Go","description":"","frontmatter":{},"headers":[],"relativePath":"Go/go.md","filePath":"Go/go.md","lastUpdated":1711963633000}'),o={name:"Go/go.md"},p=l(`<h1 id="go" tabindex="-1">Go <a class="header-anchor" href="#go" aria-label="Permalink to &quot;Go&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Go 语言，也被称为 Golang，是谷歌在 2007 年推出的一种静态编译型语言。它是由计算机科学领域的重量级人物 Ken Thompson 和 Rob Pike，以及一些其他人士共同设计的。Go 语言的目的是为了解决大型软件项目规模和复杂度带来的问题，它提倡代码的可读性和简洁性，并强调并发性能。</p></div><p>以下是关于 Go 语言的一些基本特点：</p><ul><li>简洁性：Go 语言的语法清晰、简洁，易于学习。它借鉴了 C 语言的一些语法特性，但是进行了改进和优化。</li><li>并发性能：Go 语言的并发模型是它的一大亮点，可以轻松处理数千个并发任务。这使得 Go 语言在处理网络编程和并发编程任务时表现出色。</li><li>静态类型和编译型：Go 语言是静态类型、编译型的语言。这使得 Go 程序可以提前在编译阶段发现许多错误，并且运行效率更高。</li><li>丰富的标准库：Go 语言提供了丰富的标准库，涵盖了网络、数据处理、加密等众多领域。</li><li>跨平台：Go 语言可以轻易地在各种操作系统上运行，无论是 Windows、Linux 还是 Mac OS。</li></ul><p>此外，许多重要的开源项目，如 Docker、Kubernetes、Beego 等，都是使用 Go 语言开发的。这显示了 Go 语言在实际项目中的应用广泛性和高效性。</p><h2 id="主要特征" tabindex="-1">主要特征 <a class="header-anchor" href="#主要特征" aria-label="Permalink to &quot;主要特征&quot;">​</a></h2><ul><li>1.自动立即回收</li><li>2.更丰富的内置类型</li><li>3.函数多返回值</li><li>4.错误处理</li><li>5.匿名函数和闭包</li><li>6.类型和接口</li><li>7.并发编程</li><li>8.反射</li><li>9.语言交互性</li></ul><h2 id="基础类型" tabindex="-1">基础类型 <a class="header-anchor" href="#基础类型" aria-label="Permalink to &quot;基础类型&quot;">​</a></h2><p>Go 语言是一种静态类型、编译型的编程语言。它具有简洁的语法和丰富的标准库，适用于各种编程场景。以下是一些 Go 语言的基础类型：</p><ol><li>布尔类型（Boolean）：使用<code>bool</code>作为类型声明，其值可以是<code>true</code>或<code>false</code>。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> isOpen </span><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span></code></pre></div><ol start="2"><li>整数类型（Integer）：Go 语言提供了不同大小的整数类型，包括<code>int</code>（有符号整数，与操作系统相关），<code>int8</code>（有符号 8 位整数），<code>int16</code>（有符号 16 位整数），<code>int32</code>（有符号 32 位整数），<code>int64</code>（有符号 64 位整数），以及无符号版本的整数类型，如<code>uint</code>（无符号整数），<code>uint8</code>（无符号 8 位整数），<code>uint16</code>（无符号 16 位整数），<code>uint32</code>（无符号 32 位整数），<code>uint64</code>（无符号 64 位整数）。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> weight </span><span style="color:#C792EA;">int8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">70</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> postCode </span><span style="color:#C792EA;">int16</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12345</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> id </span><span style="color:#C792EA;">int32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9876543210</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> maxInt </span><span style="color:#C792EA;">int64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9223372036854775807</span></span></code></pre></div><details class="details custom-block"><summary>Details</summary><p>在 Go 语言中，<code>int</code>和<code>uint</code>是两种不同的整数类型，它们之间主要有以下几点区别：</p><ol><li>有符号与无符号：<code>int</code>是有符号类型，它可以表示正数、负数和零。而<code>uint</code>是无符号类型，只能表示非负数，不能表示负数和零。</li><li>存储大小：<code>int</code>的存储大小取决于运行环境，在 32 位系统上，<code>int</code>的存储大小为 32 位，而在 64 位系统上，<code>int</code>的存储大小为 64 位。而<code>uint</code>的存储大小也是根据运行环境而定，在 32 位系统上，<code>uint</code>的存储大小为 32 位，而在 64 位系统上，<code>uint</code>的存储大小为 64 位。</li><li>取值范围：由于有符号和无符号的限制，<code>int</code>和<code>uint</code>的取值范围也不同。<code>int</code>的取值范围是-(2^N-1)到 2^N-1，其中 N 是<code>int</code>的位数（32 位或 64 位）。而<code>uint</code>的取值范围是 0 到 2^N-1，其中 N 是<code>uint</code>的位数（32 位或 64 位）。</li></ol><p>在使用时，应根据需要选择合适的类型。如果需要表示有符号整数，应使用<code>int</code>；如果需要表示无符号整数，应使用<code>uint</code>。另外，需要注意的是，在进行算术运算时，不同类型的数值之间可能会发生溢出，需要根据实际情况进行适当的类型转换或错误处理。</p></details><ol start="3"><li>浮点数类型（Float）：Go 语言提供了<code>float32</code>（单精度浮点数）和<code>float64</code>（双精度浮点数）两种浮点数类型。</li></ol><p><code>float32</code>类型占用 4 个字节（32 位）的存储空间，其取值范围为-3.4E38 到 3.4E38，精度为 7 位有效数字。<code>float64</code>类型占用 8 个字节（64 位）的存储空间，其取值范围为-1.7E308 到 1.7E308，精度为 15 位有效数字。</p><p>浮点数的语法是在数字后面加上<code>f</code>或<code>F</code>作为后缀，例如：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> pi </span><span style="color:#C792EA;">float32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 3.14159f</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> g </span><span style="color:#C792EA;">float64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9.81</span></span></code></pre></div><details class="details custom-block"><summary>Details</summary><p>在进行浮点数运算时，需要注意以下几点：</p><ol><li>浮点数运算可能会产生精度损失，这是由于浮点数的存储方式和运算规则所决定的。例如，0.1 + 0.2 不等于 0.3。</li><li>浮点数比较必须使用<code>==</code>运算符进行精确比较，而不能使用<code>=</code>运算符。因为浮点数的精度限制可能导致无法精确比较两个浮点数是否相等。</li><li>浮点数可以用于表示无穷大和 NaN（非数字），可以使用<code>math</code>包中的函数来处理这些特殊情况。例如，<code>math.Inf(1)</code>表示正无穷大，<code>math.Inf(-1)</code>表示负无穷大，<code>math.NaN()</code>表示 NaN。</li></ol><p>总之，Go 语言中的浮点数类型主要有<code>float32</code>和<code>float64</code>两种，它们分别表示单精度浮点数和双精度浮点数。在使用时，应根据需要选择合适的类型，并注意浮点数运算的精度损失和特殊情况的处理。</p></details><ol start="4"><li>复数类型（Complex）：Go 语言提供了<code>complex64</code>（64 位实数和虚数）和<code>complex128</code>（128 位实数和虚数）两种复数类型。</li></ol><p><code>complex64</code>类型表示 64 位复数，由两个 32 位实数组成，分别表示复数的实部和虚部。其语法是在实部和虚部之间使用<code>+</code>号连接，例如：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> c </span><span style="color:#C792EA;">complex64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.14</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.7i</span></span></code></pre></div><p>complex128<code>类型表示128位复数，由两个64位实数组成，分别表示复数的实部和虚部。其语法是在实部和虚部之间使用</code>+\`号连接，例如：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> c </span><span style="color:#C792EA;">complex128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.14</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.7i</span></span></code></pre></div><p>在进行复数运算时，可以使用<code>+</code>、<code>-</code>、<code>*</code>和<code>/</code>等运算符进行实部和虚部的运算。还可以使用<code>real()</code>和<code>imag()</code>函数获取复数的实部和虚部。例如：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#C792EA;">complex64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3.14</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.7i</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">complex64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.5i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;">// 输出: (4.64 + 5.2i)</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">real</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;">// 输出: 3.14</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">imag</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;">// 输出: 2.7</span></span></code></pre></div><p>需要注意的是，在进行复数运算时，不同类型之间的复数运算可能会导致精度损失或溢出。因此，在进行复数运算时，应根据需要选择合适的复数类型，并注意处理精度损失或溢出的情况。</p><ol start="5"><li>字符串类型（String）：Go 语言使用字符串类型表示文本数据，可以使用双引号（&quot; &quot;）或反引号（<code>\`</code>）来声明字符串。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> name </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>这些是 Go 语言的一些基本类型，还有其他类型的组合和定义方式，例如结构体类型、指针类型等。掌握这些基础类型是学习 Go 语言的重要部分。</p><h2 id="复合类型" tabindex="-1">复合类型 <a class="header-anchor" href="#复合类型" aria-label="Permalink to &quot;复合类型&quot;">​</a></h2><p>Go 语言中有以下几种复合类型：</p><ol><li>指针（Pointer）：指针是一种特殊的引用类型，它存储了另一个类型的值的内存地址。通过指针，可以间接地访问和修改该值。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> ptr </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个指向int类型的指针</span></span>
<span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> num </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">num   </span><span style="color:#676E95;font-style:italic;">// 将num的地址赋值给ptr</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: 10</span></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ptr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 通过指针修改num的值</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: 20</span></span></code></pre></div><ol start="2"><li>数组（Array）：数组是一种具有固定长度的数据结构，可以存储相同类型的元素。数组的长度是固定的，不能改变。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个包含5个整数的数组</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: [0 0 0 0 0]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// 给数组的第四个元素赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: [0 0 0 10 0]</span></span></code></pre></div><ol start="3"><li>切片（Slice）：切片是对数组的一个引用，它提供了一个动态长度的、可修改的序列。切片的长度可以增长和缩小。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> slice </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个包含整数的切片</span></span>
<span class="line"><span style="color:#A6ACCD;">slice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 初始化切片</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: [1 2 3 4 5]</span></span>
<span class="line"><span style="color:#A6ACCD;">slice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 向切片追加元素</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: [1 2 3 4 5 6]</span></span></code></pre></div><ol start="4"><li>字典（Map）：字典是一种无序的键值对集合，每个键必须是唯一的。字典中的键和值可以是任意类型。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个字符串到整数的字典</span></span>
<span class="line"><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">apple</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">banana</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 初始化字典</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: map[apple:1 banana:2]</span></span>
<span class="line"><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 向字典中添加新的键值对</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: map[apple:1 banana:2 orange:3]</span></span></code></pre></div><ol start="5"><li>通道（Channel）：通道是一种用于线程间通信的数据结构。通道可以是有缓冲的或无缓冲的，可以发送或接收值。通道的元素类型可以是任意类型。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> ch </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个有缓冲的整数字段通道</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 创建一个容量为3的有缓冲通道</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 向通道发送数据</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ch</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 关闭通道</span></span></code></pre></div><h2 id="引用类型" tabindex="-1">引用类型 <a class="header-anchor" href="#引用类型" aria-label="Permalink to &quot;引用类型&quot;">​</a></h2><p>Go 语言中的引用类型包括切片（Slice）、字典（Map）、通道（Channel）、函数（Function）和接口（Interface）等。</p><ol><li>切片（Slice）：切片是对数组的一个引用，它提供了一个动态长度的、可修改的序列。切片的长度可以增长和缩小。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> slice </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个包含整数的切片</span></span>
<span class="line"><span style="color:#A6ACCD;">slice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 初始化切片</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: [1 2 3 4 5]</span></span>
<span class="line"><span style="color:#A6ACCD;">slice </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 向切片追加元素</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: [1 2 3 4 5 6]</span></span></code></pre></div><ol start="2"><li>字典（Map）：字典是一种无序的键值对集合，每个键必须是唯一的。字典中的键和值可以是任意类型。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个字符串到整数的字典</span></span>
<span class="line"><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">apple</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">banana</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 初始化字典</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: map[apple:1 banana:2]</span></span>
<span class="line"><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">orange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 向字典中添加新的键值对</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: map[apple:1 banana:2 orange:3]</span></span></code></pre></div><ol start="3"><li>通道（Channel）：通道是一种用于线程间通信的数据结构。通道可以是有缓冲的或无缓冲的，可以发送或接收值。通道的元素类型可以是任意类型。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> ch </span><span style="color:#89DDFF;">chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 声明一个有缓冲的整数字段通道</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 创建一个容量为3的有缓冲通道</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 向通道发送数据</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">ch </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ch</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 关闭通道</span></span></code></pre></div><ol start="4"><li>函数（Function）：函数是 Go 语言中的代码块，可以接受输入参数并返回输出结果。函数也可以是匿名的，直接执行一段代码而不暴露函数名。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 调用函数并接收结果</span></span>
<span class="line"><span style="color:#A6ACCD;">fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// 输出: 7</span></span></code></pre></div><ol start="5"><li>接口（Interface）：接口是一种抽象类型，它定义了一组方法的契约。接口的实现类必须实现接口定义的所有方法。接口可以用于实现多态和组合等高级编程特性。</li></ol><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shape</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Rectangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r Rectangle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,55),e=[p];function t(c,r,y,D,C,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};

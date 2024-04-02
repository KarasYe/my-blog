import{_ as s,o as a,c as n,V as l}from"./chunks/framework.a1fec281.js";const A=JSON.parse('{"title":"ECMAScript 2019","description":"","frontmatter":{},"headers":[],"relativePath":"EMACScript/ES2019.md","filePath":"EMACScript/ES2019.md","lastUpdated":1684745492000}'),o={name:"EMACScript/ES2019.md"},p=l(`<h1 id="ecmascript-2019" tabindex="-1">ECMAScript 2019 <a class="header-anchor" href="#ecmascript-2019" aria-label="Permalink to &quot;ECMAScript 2019&quot;">​</a></h1><h2 id="optional-catch-binding" tabindex="-1">Optional catch binding <a class="header-anchor" href="#optional-catch-binding" aria-label="Permalink to &quot;Optional catch binding&quot;">​</a></h2><p>简洁语法。 允许在<code>catch</code>中的参数不使用的情况下，省略绑定写法。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// try to use a web feature which may not be implemented</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (unused) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// fall back to a less desirable web feature with broader support</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//可以写成</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// try to use a web feature which may not be implemented</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// fall back to a less desirable web feature with broader support</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error handler</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="json-superset-json超集" tabindex="-1">JSON superset JSON超集 <a class="header-anchor" href="#json-superset-json超集" aria-label="Permalink to &quot;JSON superset JSON超集&quot;">​</a></h2><p>将<code>ecma-262</code>语法作为<code>json</code>的超集。 扩展<code>ECMAScript</code>字符串文字兼容json语法。</p><ul><li>以前<code>ECMAScript</code>字符串文字还不能包含字符<code>U+2028</code>行分隔符和<code>U+2029</code>段分隔符(必须使用转义序列将它们放入字符串中)。</li><li>由于<code>JSON</code>的语法是固定的，因此决定取消对<code>ECMAScript</code>字符串文字的限制。这简化了规范的语法，因为您不需要为<code>ECMAScript</code>字符串字面量和<code>JSON</code>字符串字面量单独制定规则。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//以前</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sourceCode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;</span><span style="color:#A6ACCD;">\\u2028</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">eval</span><span style="color:#A6ACCD;">(sourceCode)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// SyntaxError</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//现在</span></span>
<span class="line"><span style="color:#82AAFF;">eval</span><span style="color:#A6ACCD;">(sourceCode)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;&quot;</span></span></code></pre></div><h2 id="symbol-prototype-description" tabindex="-1">Symbol.prototype.description <a class="header-anchor" href="#symbol-prototype-description" aria-label="Permalink to &quot;Symbol.prototype.description&quot;">​</a></h2><p>提供了一个原型方法能够更简洁地获取到<code>Symbol()</code>中的描述。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My super symbol</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//之前获取描述的方式</span></span>
<span class="line"><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Symbol(My super symbol)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//改进后</span></span>
<span class="line"><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">description</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// My super symbol</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//无描述返回undefind</span></span></code></pre></div><h2 id="function-prototype-tostring-revision" tabindex="-1">Function.prototype.toString revision <a class="header-anchor" href="#function-prototype-tostring-revision" aria-label="Permalink to &quot;Function.prototype.toString revision&quot;">​</a></h2><p><code>toString()</code> 方法返回一个表示当前函数源代码的字符串。可以配合正则使用。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// expected output: &quot;function sum(a, b) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//                     return a + b;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//                   }&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">abs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// expected output: &quot;function abs() { [native code] }&quot;</span></span></code></pre></div><h2 id="object-fromentries" tabindex="-1">Object.fromEntries <a class="header-anchor" href="#object-fromentries" aria-label="Permalink to &quot;Object.fromEntries&quot;">​</a></h2><p><code>Object.fromEntries()</code> 方法把键值对列表(可以是类似 <code>Array</code>、<code>Map</code> 或者其它实现了可迭代协议的可迭代对象。)转换为一个对象。 <code>Object.fromEntries</code> 是与 <code>Object.entries()</code> 相反的方法。 配合<code>Object.entries()</code>可以对对象进行一些操作。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//Map 转化为 object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([ [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">] ])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromEntries</span><span style="color:#A6ACCD;">(map)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { foo: &quot;bar&quot;, baz: 42 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Array 转化为 object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [ [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromEntries</span><span style="color:#A6ACCD;">(arr)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//配合Object.entries处理object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromEntries</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(object1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">val</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> [ key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> ])</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(object2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { a: 2, b: 4, c: 6 }</span></span></code></pre></div><h2 id="well-formed-json-stringify-格式良好的json-stringify" tabindex="-1">Well-formed JSON.stringify 格式良好的JSON.stringify <a class="header-anchor" href="#well-formed-json-stringify-格式良好的json-stringify" aria-label="Permalink to &quot;Well-formed JSON.stringify 格式良好的JSON.stringify&quot;">​</a></h2><p>防止返回格式不正确的<code>Unicode</code>字符串。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// before</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\u{D800}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &#39;&quot;�&quot;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// after</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\u{D800}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;\\ud800&quot;</span></span></code></pre></div><h2 id="string-prototype-trimstart-string-prototype-trimend" tabindex="-1">String.prototype.trimStart / String.prototype.trimEnd <a class="header-anchor" href="#string-prototype-trimstart-string-prototype-trimend" aria-label="Permalink to &quot;String.prototype.trimStart / String.prototype.trimEnd&quot;">​</a></h2><p>单独控制去除字符串前后空格。</p><ul><li><code>trimStart</code> 别名 <code>trimLeft</code></li><li><code>trimEnd</code> 别名 <code>trimRight</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">   javascript   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;javascript&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">   javascript   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trimStart</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;javascript   &quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">   javascript   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trimEnd</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;   javascript&quot;</span></span></code></pre></div><h2 id="array-prototype-flat-array-prototype-flatmap" tabindex="-1">Array.prototype.flat / Array.prototype.flatMap <a class="header-anchor" href="#array-prototype-flat-array-prototype-flatmap" aria-label="Permalink to &quot;Array.prototype.flat / Array.prototype.flatMap&quot;">​</a></h2><p><code>Array.prototype.flat</code> 原生提供数组扁平化<code>API</code>。 <code>Array.prototype.flatMap()</code>与<code>arr.map(mapper).flat(1)</code> 功能相同。但 <code>flatMap</code> 通常在合并成一种方法的效率稍微高一些。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// flat</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">]]]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flat</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [ 1, 2, 3, 4, [ 5, 6 ] ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">]]]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [ 1, 2, 3, 4, 5, 6 ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">]]]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [ 1, 2, 3, 4, 5, 6 ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// flatMap</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flatMap</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> [item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [1, 100, 2, 200, 3, 300]</span></span></code></pre></div><h2 id="array-prototype-sort-stability" tabindex="-1">Array.prototype.sort stability <a class="header-anchor" href="#array-prototype-sort-stability" aria-label="Permalink to &quot;Array.prototype.sort stability&quot;">​</a></h2><p>之前，各个浏览器实现<code>sort</code>的算法并不一致。<code>chrome</code>对于长度小于等于10的数组使用插入排序（稳定排序），大于10的数组使用快速排序（不稳定排序）。这个功能将被稳定的<a href="https://v8.dev/features/stable-sort" target="_blank" rel="noreferrer">Tim</a>排序（一种混合稳定的排序算法，源自合并排序和插入排序）算法取代。</p>`,29),t=[p];function e(c,r,y,D,i,F){return a(),n("div",null,t)}const d=s(o,[["render",e]]);export{A as __pageData,d as default};
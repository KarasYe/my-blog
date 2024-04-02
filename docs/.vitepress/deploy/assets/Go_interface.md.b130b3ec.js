import{_ as s,o as n,c as a,V as l}from"./chunks/framework.a1fec281.js";const i=JSON.parse('{"title":"Interface(接口)","description":"","frontmatter":{},"headers":[],"relativePath":"Go/interface.md","filePath":"Go/interface.md","lastUpdated":1711963633000}'),p={name:"Go/interface.md"},o=l(`<h1 id="interface-接口" tabindex="-1">Interface(接口) <a class="header-anchor" href="#interface-接口" aria-label="Permalink to &quot;Interface(接口)&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>在Go语言中，接口（interface）是一种抽象类型，用于定义一组行为。接口定义了一组方法的契约，而不关心具体的实现。它允许你定义对象的行为，而不是实现细节。</p><p>接口的定义使用关键字<code>interface</code>，后面跟着方法签名列表。接口的方法签名的定义包括方法名、参数列表和返回类型。</p><p>下面是一个简单的接口示例：</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Shape</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">Perimeter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在上面的示例中，我们定义了一个名为<code>Shape</code>的接口，它包含两个方法<code>Area()</code>和<code>Perimeter()</code>，它们都返回<code>float64</code>类型的值。</p><p>接口的目的是定义一个对象应该具有的行为，而不是强制实现这些行为。接口允许你在不关心具体类型的情况下使用对象。</p><p>一个类型如果实现了接口中的所有方法，则被认为是实现了该接口。可以使用类型断言来判断一个类型是否实现了某个接口。</p><p>接口的用途包括：</p><ol><li>定义对象的行为：通过定义接口，可以定义对象应该具有的行为。任何实现了该接口的类型都遵循这些行为。</li><li>组合：通过将多个接口组合在一起，可以创建更复杂的接口。</li><li>类型转换：可以将实现了某个接口的类型转换为该接口类型，以使用该接口的方法。</li><li>接口实现检查：可以使用类型断言检查一个类型是否实现了某个接口。</li></ol><p>在Go语言中，接口是一种非常有用的特性，可以用于实现抽象和模块化设计，以及进行多态编程。</p><h2 id="完整实例" tabindex="-1">完整实例 <a class="header-anchor" href="#完整实例" aria-label="Permalink to &quot;完整实例&quot;">​</a></h2><p>当然，下面给出一个经典的接口例子，展示了接口在编程中的用法和实际应用。</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">math</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定义一个几何形状接口</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Geometry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Perimeter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定义一个矩形结构体</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Rectangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 为矩形结构体实现几何形状接口的方法</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r Rectangle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r Rectangle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Perimeter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 定义一个圆形结构体</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> radius </span><span style="color:#C792EA;">float64</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 为圆形结构体实现几何形状接口的方法</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c Circle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Pi </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">radius </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">radius</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">c Circle</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Perimeter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">float64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Pi </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">radius</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 创建一个矩形对象，并将其转换为几何形状接口类型</span></span>
<span class="line"><span style="color:#A6ACCD;"> rect </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Rectangle</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> geometryRect </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Geometry</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rect</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 使用几何形状接口的方法计算矩形的面积和周长</span></span>
<span class="line"><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">矩形的面积:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> geometryRect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">矩形的周长:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> geometryRect</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Perimeter</span><span style="color:#89DDFF;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 创建一个圆形对象，并将其转换为几何形状接口类型</span></span>
<span class="line"><span style="color:#A6ACCD;"> circle </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> Circle</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> geometryCircle </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Geometry</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">circle</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 使用几何形状接口的方法计算圆形的面积和周长</span></span>
<span class="line"><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">圆形的面积:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> geometryCircle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Area</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;"> fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">圆形的周长:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> geometryCircle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Perimeter</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>在上面的例子中，我们首先定义了一个名为<code>Geometry</code>的接口，它包含两个方法<code>Area()</code>和<code>Perimeter()</code>，用于计算对象的面积和周长。然后，我们定义了两个结构体<code>Rectangle</code>和<code>Circle</code>，分别表示矩形和圆形。为这两个结构体分别实现了<code>Geometry</code>接口的方法。</p><p>在<code>main</code>函数中，我们创建了一个矩形对象和一个圆形对象，并将它们转换为<code>Geometry</code>接口类型。然后，我们使用<code>Geometry</code>接口的方法来计算它们的面积和周长。由于实现了相同的接口，无论是矩形还是圆形，都可以使用相同的接口方法。这就是通过接口实现多态性的一个简单示例。</p>`,17),e=[o];function t(c,r,D,y,F,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
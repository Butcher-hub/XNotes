import{_ as s,c as i,o as a,a1 as n,al as l,am as h,an as p,ao as e,ap as t,aq as k,ar as r,as as E,at as d,au as g}from"./chunks/framework.lh4d3Jpg.js";const q=JSON.parse('{"title":"1、存储过程","description":"","frontmatter":{},"headers":[],"relativePath":"数据库/MySQL/存储过程与函数.md","filePath":"数据库/MySQL/存储过程与函数.md"}'),y={name:"数据库/MySQL/存储过程与函数.md"},c=n('<blockquote><p>MySQL从5.0版本开始支持存储过程函数。存储过程和函数能够将复杂的SQL逻辑封装在一起，应用程序无需关注存储过程和函数内部复杂的SQL逻辑，只需要简单调用存储过程和函数即可。</p></blockquote><h1 id="_1、存储过程" tabindex="-1">1、存储过程 <a class="header-anchor" href="#_1、存储过程" aria-label="Permalink to &quot;1、存储过程&quot;">​</a></h1><h2 id="_1-1-概念" tabindex="-1">1.1 概念 <a class="header-anchor" href="#_1-1-概念" aria-label="Permalink to &quot;1.1 概念&quot;">​</a></h2><p><img src="'+l+'" alt="输入图片说明"><img src="'+h+`" alt="输入图片说明"></p><h2 id="_1-2-创建存储过程" tabindex="-1">1.2 创建存储过程 <a class="header-anchor" href="#_1-2-创建存储过程" aria-label="Permalink to &quot;1.2 创建存储过程&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PROCEDURE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 存储过程名(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | INOUT 参数名 参数类型,...)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [characteristics ...]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> BEGIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     存储过程体</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> END</span></span></code></pre></div><p><img src="`+p+'" alt="输入图片说明"><img src="'+e+'" alt="输入图片说明"><img src="'+t+`" alt="输入图片说明"></p><h2 id="_1-3-简单示例" tabindex="-1">1.3 简单示例 <a class="header-anchor" href="#_1-3-简单示例" aria-label="Permalink to &quot;1.3 简单示例&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 类型1无参</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter $</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> procedure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> select_all_emps ()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   select</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $delimiter;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> select_all_emps ()</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 类型2 OUT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> procedure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> select_min_salary(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms double)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(salary) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">into</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> //</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 定义一个变量作为入参</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> select_min_salary(@ms);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查询这个变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @ms</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 类型3 IN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> procedure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> select_emp_salary(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emp_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> salary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> first_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emp_name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> //</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> select_emp_salary(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Lex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 类型4 IN + OUT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> procedure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> find_emp_salary(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empsalary double)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> salary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">into</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empsalary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> first_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empname;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> //</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @empname :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Lex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> find_emp_salary(@empname, @empsalary);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @empsalary;</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 类型5 INOUT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> procedure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> find_emp_manager(INOUT empname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> first_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">into</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employee_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manager_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> first_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empname);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> //</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @empname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Lex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> find_emp_manager(@empname);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @empname;</span></span></code></pre></div><h2 id="_1-4-存储过程的缺点" tabindex="-1">1.4 存储过程的缺点 <a class="header-anchor" href="#_1-4-存储过程的缺点" aria-label="Permalink to &quot;1.4 存储过程的缺点&quot;">​</a></h2><p><img src="`+k+`" alt="输入图片说明"></p><h1 id="_2、存储函数" tabindex="-1">2、存储函数 <a class="header-anchor" href="#_2、存储函数" aria-label="Permalink to &quot;2、存储函数&quot;">​</a></h1><h2 id="_2-1-语法格式" tabindex="-1">2.1 语法格式： <a class="header-anchor" href="#_2-1-语法格式" aria-label="Permalink to &quot;2.1 语法格式：&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FUNCTION</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 函数名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(参数名 参数类型,...)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RETURNS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 返回值类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[characteristics...]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 函数体 # 函数体中肯定优RETURN语句</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> END</span></span></code></pre></div><p><img src="`+r+`" alt="输入图片说明"></p><h2 id="_2-2-示例" tabindex="-1">2.2 示例 <a class="header-anchor" href="#_2-2-示例" aria-label="Permalink to &quot;2.2 示例&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_emp_email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(empname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">returns</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">deterministic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">contains </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">reads </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> data</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> email </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> first_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> empname);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> //</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">delimiter ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_emp_email(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Lex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h1 id="_3、对比存储过程与函数" tabindex="-1">3、对比存储过程与函数 <a class="header-anchor" href="#_3、对比存储过程与函数" aria-label="Permalink to &quot;3、对比存储过程与函数&quot;">​</a></h1><p><img src="`+E+'" alt="输入图片说明"></p><h1 id="_4、存储过程和存储函数的查看、修改、删除" tabindex="-1">4、存储过程和存储函数的查看、修改、删除 <a class="header-anchor" href="#_4、存储过程和存储函数的查看、修改、删除" aria-label="Permalink to &quot;4、存储过程和存储函数的查看、修改、删除&quot;">​</a></h1><h2 id="_4-1-查看" tabindex="-1">4.1 查看 <a class="header-anchor" href="#_4-1-查看" aria-label="Permalink to &quot;4.1 查看&quot;">​</a></h2><p><img src="'+d+'" alt="输入图片说明"><img src="'+g+'" alt="输入图片说明"></p>',26),o=[c];function m(F,A,D,_,u,b){return a(),i("div",null,o)}const C=s(y,[["render",m]]);export{q as __pageData,C as default};

import{r as s,o as n,c as a,b as t,w as e,a as o,d as p}from"./app.de3dbc13.js";const c='{"title":"Shortcodes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Creating A Shortcode","slug":"creating-a-shortcode"},{"level":3,"title":"Default Attributes","slug":"default-attributes"},{"level":3,"title":"Shortcode Content","slug":"shortcode-content"},{"level":2,"title":"Handling The Shortcode","slug":"handling-the-shortcode"},{"level":3,"title":"Shortcode Views","slug":"shortcode-views"},{"level":2,"title":"Registering The Shortcode","slug":"registering-the-shortcode"}],"relativePath":"docs/the-basics/shortcodes.md","lastUpdated":1613690719599}',l={},r=o('<h1 id="shortcodes"><a class="header-anchor" href="#shortcodes" aria-hidden="true">#</a> Shortcodes</h1><p><div class="table-of-contents"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#creating-a-shortcode">Creating A Shortcode</a><ul><li><a href="#default-attributes">Default Attributes</a></li><li><a href="#shortcode-content">Shortcode Content</a></li></ul></li><li><a href="#handling-the-shortcode">Handling The Shortcode</a><ul><li><a href="#shortcode-views">Shortcode Views</a></li></ul></li><li><a href="#registering-the-shortcode">Registering The Shortcode</a></li></ul></div></p><h2 id="introduction"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><h2 id="creating-a-shortcode"><a class="header-anchor" href="#creating-a-shortcode" aria-hidden="true">#</a> Creating A Shortcode</h2><p>You may generate a <code>Shortcode</code> by using the <code>make:shortcode</code> Radiate command:</p><div class="language-"><pre><code>wp radiate make:shortcode RecentPosts\n</code></pre></div><p>This will generate a <code>Shortcode</code> class located in your <code>app/WordPress/Shortcodes</code> directory.</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">Theme<span class="token punctuation">\\</span>WordPress<span class="token punctuation">\\</span>Shortcodes</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>WordPress<span class="token punctuation">\\</span>Shortcode</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">RecentPosts</span> <span class="token keyword">extends</span> <span class="token class-name">Shortcode</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * The shortcode name\n     *\n     * @var string\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;recent_posts&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * An array of allowed attributes and defaults\n     *\n     * @var array\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$defaultAttributes</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * handle the shortcode\n     *\n     * @return mixed\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre></div><p>The class generated will register a shortcode as a <em>snake_case</em> of your class name, for example, <code>RecentPosts</code> will register the <code>[recent_posts]</code> shortcode.</p><h3 id="default-attributes"><a class="header-anchor" href="#default-attributes" aria-hidden="true">#</a> Default Attributes</h3><p>Shortcodes accept attributes in the same manner as HTML elements. Use the <code>$defaultAttributes</code> array to declare your attributes with their default values. Attributes used in the shortcode that aren&#39;t declared on the class will be disregarded.</p><div class="language-php"><pre><code><span class="token comment">/**\n    * An array of allowed attributes and defaults\n    *\n    * @var array\n    */</span>\n<span class="token keyword">protected</span> <span class="token variable">$defaultAttributes</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string single-quoted-string">&#39;count&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token string single-quoted-string">&#39;order&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ASC&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div><p>If the shortcode used is <code>[recent_posts count=&quot;3&quot; post_type=&quot;page&quot;]</code> The attributes made available to your <code>Shortcode</code> class will be:</p><div class="language-php"><pre><code><span class="token punctuation">[</span>\n    <span class="token string single-quoted-string">&#39;count&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;3&#39;</span><span class="token punctuation">,</span>\n    <span class="token string single-quoted-string">&#39;order&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ASC&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div>',14),i=t("p",null,[p("Attributes will be defined as a "),t("code",null,"string"),p(" so any type manipulation should be done manually.")],-1),u=t("p",null,[p("Attributes declared in the "),t("code",null,"$defaultAttributes"),p(" array will be available as dynamic properties on the "),t("code",null,"Shortcode"),p(" class, for example you can get the shortcode count as "),t("code",null,"$this->count"),p(" or "),t("code",null,"$this->order"),p(".")],-1),d=t("p",null,[p("WordPress converts all shortcode attributes to lower case. We also recommend specifying your attributes as "),t("em",null,"snake_case"),p(".")],-1),k=o('<h3 id="shortcode-content"><a class="header-anchor" href="#shortcode-content" aria-hidden="true">#</a> Shortcode Content</h3><p>As well as attributes, shortcodes can accept content for example:</p><div class="language-"><pre><code>[recent_posts count=&quot;4&quot;]Radiate&#39;s Most Recent Posts:[/recent_posts]\n</code></pre></div><p>This is available on the <code>Shortcode</code> with the <code>content</code> method.</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Radiate&#39;s Most Recent Posts:</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="handling-the-shortcode"><a class="header-anchor" href="#handling-the-shortcode" aria-hidden="true">#</a> Handling The Shortcode</h2><p>The <code>handle</code> method of your <code>Shortcode</code> class is where you will define what happens when the shortcode is used. In most instances, the <code>handle</code> method will return a string to output to the screen.</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// do something</span>\n\n    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="shortcode-views"><a class="header-anchor" href="#shortcode-views" aria-hidden="true">#</a> Shortcode Views</h3><p>The Radiate <code>Shortcode</code> class makes the <code>view</code> method available so you can return a template file rather than writing it in your <code>handle</code> method.</p><p>The <code>Shortcode</code> instance is automatically passed to the view, available as the <code>$shortcode</code> variable. Other parameters may be passed to your view from the <code>handle</code> method.</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token variable">$displayMode</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">count</span> <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">?</span> <span class="token string single-quoted-string">&#39;grid&#39;</span> <span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;column&#39;</span><span class="token punctuation">;</span>\n\n    <span class="token variable">$posts</span> <span class="token operator">=</span> <span class="token function">wp_get_recent_posts</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;numberposts&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">count</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;order&#39;</span>       <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">order</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;post_status&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;publish&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">OBJECT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;shortcodes.recent-posts&#39;</span><span class="token punctuation">,</span> <span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;displayMode&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',12),h=t("p",null,[p("Shortcode attributes will be available in your view like so "),t("code",null,"$shortcode->count"),p(" and "),t("code",null,"$shortcode->order"),p(".")],-1),g=o('<p>In you view, you will be able to access the shortcode attributes like so:</p><div class="language-php"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recent-posts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$shortcode</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$displayMode</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$posts</span> <span class="token keyword">as</span> <span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token delimiter important">?&gt;</span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">endforeach</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="registering-the-shortcode"><a class="header-anchor" href="#registering-the-shortcode" aria-hidden="true">#</a> Registering The Shortcode</h2><p>You can register your newly created shortcode by adding the classname to the <code>WordPressServiceProvider</code> in the <code>$shortcodes</code> array.</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">Theme<span class="token punctuation">\\</span>Providers</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Providers<span class="token punctuation">\\</span>WordPressServiceProvider</span> <span class="token keyword">as</span> ServiceProvider<span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Theme<span class="token punctuation">\\</span>WordPress<span class="token punctuation">\\</span>Shortcodes<span class="token punctuation">\\</span>RecentPosts</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">WordPressServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * The shortcodes to register\n     *\n     * @var array\n     */</span>\n    <span class="token keyword">protected</span> <span class="token variable">$shortcodes</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token class-name static-context">RecentPosts</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></code></pre></div><p>Shortcodes should be unique so, if another shortcode is registered before yours with the same name, then your shortcode will not be registered.</p>',6),m=t("p",null,"Shortcodes should be unique so we recommend giving the name a unique prefix.",-1);l.render=function(o,p,c,l,v,y){const w=s("AppNotice");return n(),a("div",null,[r,t(w,{type:"info"},{default:e((()=>[i])),_:1}),u,t(w,{type:"warning"},{default:e((()=>[d])),_:1}),k,t(w,{type:"info"},{default:e((()=>[h])),_:1}),g,t(w,{type:"info"},{default:e((()=>[m])),_:1})])};export default l;export{c as __pageData};

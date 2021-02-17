import{o as a,c as n,d as s}from"./app.d6b3e7a3.js";const e='{"title":"Middleware","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Creating Middleware","slug":"creating-middleware"},{"level":3,"title":"Before And After Middleware","slug":"before-and-after-middleware"}],"relativePath":"the-basics/middleware.md","lastUpdated":1613506355687}',t={},p=s('<h1 id="middleware"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h1><p><div class="table-of-contents"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#creating-middleware">Creating Middleware</a><ul><li><a href="#before-and-after-middleware">Before And After Middleware</a></li></ul></li></ul></div></p><h2 id="introduction"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Middleware provide a simple way of accessing or transforming a HTTP request before it gets to a defined route controller.</p><p>When a request is passed to a route, it is first passed through each defined middleware. The middleware can then decide whether to pass on the same request, a modified request, a totally new request, or even abort altogether.</p><p>The chaining of middleware makes a reusable interface for dealing with requests before they get to the route controllers.</p><p>For example, Radiate provides middleware that trims whitespace from strings and converts empty strings into <code>null</code>. The request that reaches your controllers has been transformed into something more user friendly without you having to handle the logic in each controller.</p><p>A great use of middleware is to authenticate a request. If the request passes the authentication, the request reaches your controller, otherwise an error will be thrown.</p><p>Middleware is located in the <code>app/Http/Middleware</code> directory.</p><h2 id="creating-middleware"><a class="header-anchor" href="#creating-middleware" aria-hidden="true">#</a> Creating Middleware</h2><p>Middleware can be created with the <code>make:middleware</code> command.</p><div class="language-"><pre><code>wp radiate make:middleware EnsureApiKeyIsvalid\n</code></pre></div><p>This command will place a new <code>EnsureApiKeyIsvalid</code> class within your <code>app/Http/Middleware</code> directory. In this middleware, we will only allow access to the route if the supplied token input matches a specified value.</p><div class="language-php"><pre><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Closure</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>HttpResponseException</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">EnsureApiKeyIsvalid</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * Ensure the API key provided is valid\n     *\n     * @param \\Radiate\\Http\\Request $request\n     * @param \\Closure $next\n     * @return mixed\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Closure</span> <span class="token variable">$next</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;token&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;my-api-token&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token variable">$next</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpResponseException</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;API token is invalid&#39;</span><span class="token punctuation">,</span> <span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="before-and-after-middleware"><a class="header-anchor" href="#before-and-after-middleware" aria-hidden="true">#</a> Before And After Middleware</h3><p>Middleware can perform tasks before or after passing the request deeper into the application. For example, the following middleware would perform some task before the request is handled by the application:</p><div class="language-php"><pre><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Closure</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">BeforeMiddleware</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Closure</span> <span class="token variable">$next</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Perform action</span>\n\n        <span class="token keyword">return</span> <span class="token variable">$next</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>However, this middleware would perform its task after the request is handled by the application:</p><div class="language-php"><pre><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Middleware</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Closure</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">AfterMiddleware</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token class-name type-declaration">Closure</span> <span class="token variable">$next</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$next</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Perform action</span>\n\n        <span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',19);t.render=function(s,e,t,o,c,l){return a(),n("div",null,[p])};export default t;export{e as __pageData};

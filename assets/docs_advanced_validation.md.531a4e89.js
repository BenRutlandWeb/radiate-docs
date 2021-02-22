import{r as n,o as a,c as s,a as e,w as t,d as p,b as o}from"./app.3648918a.js";const l='{"title":"Validation","description":"","frontmatter":{},"headers":[{"level":2,"title":"The Validator","slug":"the-validator"},{"level":2,"title":"Validation On The Request","slug":"validation-on-the-request"},{"level":2,"title":"Custom Rules","slug":"custom-rules"},{"level":2,"title":"Form Request Validation","slug":"form-request-validation"},{"level":3,"title":"Creating Form Requests","slug":"creating-form-requests"}],"relativePath":"docs/advanced/validation.md","lastUpdated":1614035377892}',i={},c=p('<h1 id="validation"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> Validation</h1><p><div class="table-of-contents"><ul><li><a href="#the-validator">The Validator</a></li><li><a href="#validation-on-the-request">Validation On The Request</a></li><li><a href="#custom-rules">Custom Rules</a></li><li><a href="#form-request-validation">Form Request Validation</a><ul><li><a href="#creating-form-requests">Creating Form Requests</a></li></ul></li></ul></div></p><h2 id="the-validator"><a class="header-anchor" href="#the-validator" aria-hidden="true">#</a> The Validator</h2><p>Radiate&#39;s valiator provides a simple API for validating input.</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>ValidationException</span><span class="token punctuation">;</span>\n\n<span class="token variable">$data</span><span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Radiate&#39;</span><span class="token punctuation">,</span>\n    <span class="token string single-quoted-string">&#39;url&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://radiate-framework.github.io/&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token variable">$rules</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required&#39;</span><span class="token punctuation">,</span>\n    <span class="token string single-quoted-string">&#39;url&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|url&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token class-name static-context">Validator</span><span class="token operator">::</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$rules</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">ValidationException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></code></pre></div><h2 id="validation-on-the-request"><a class="header-anchor" href="#validation-on-the-request" aria-hidden="true">#</a> Validation On The Request</h2><p>Radiate&#39;s valiator provides a simple API for basic form validation.</p><p>The validate method is made available on the <code>Request</code> class.</p><div class="language-php"><pre><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;name&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required&#39;</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;email&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;requred|email&#39;</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|min:8&#39;</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;terms&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;accepted&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// do stuff</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="custom-rules"><a class="header-anchor" href="#custom-rules" aria-hidden="true">#</a> Custom Rules</h2><p>You can create custom validation rules with the <code>make:rule</code> command. Rules are stored in the <code>app/Rules</code> directory.</p><div class="language-"><pre><code>wp radiate make:rule Uppercase\n</code></pre></div><p>This will generate:</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">Theme<span class="token punctuation">\\</span>Rules</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>Rules<span class="token punctuation">\\</span>Rule</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Uppercase</span> <span class="token keyword">implements</span> <span class="token class-name">Rule</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * Determine if the validation rule passes.\n     *\n     * @param string $attribute\n     * @param mixed $value\n     * @return bool\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">passes</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">strtoupper</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token variable">$value</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/**\n     * Get the validation error message.\n     *\n     * @return string|array\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;:Attribute must be uppercase&#39;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre></div><h2 id="form-request-validation"><a class="header-anchor" href="#form-request-validation" aria-hidden="true">#</a> Form Request Validation</h2><h3 id="creating-form-requests"><a class="header-anchor" href="#creating-form-requests" aria-hidden="true">#</a> Creating Form Requests</h3><p>For more complex validation scenarios, you may wish to create a &quot;form request&quot;. Form requests are custom request classes that encapsulate their own validation and authorization logic. To create a form request class, you may use the <code>make:request</code> Radiate CLI command:</p><div class="language-"><pre><code>php artisan make:request RegisterRequest\n</code></pre></div><p>The generated form request class will be placed in the <code>app/Http/Requests</code> directory. If this directory does not exist, it will be created when you run the <code>make:request</code> command. Each form request generated by Radiate has a method: <code>rules</code>.</p><p>As you might have guessed, the <code>rules</code> method returns the validation rules that should apply to the request&#39;s data:</p><div class="language-php"><pre><code><span class="token comment">/**\n * Get the validation rules that apply to the request.\n *\n * @return array\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;name&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|max:255&#39;</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;email&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|email&#39;</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|min:8&#39;</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;terms&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;accepted&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',21),r=e("p",null,[o("You may type-hint any dependencies you require within the "),e("code",null,"rules"),o(" method's signature. They will automatically be resolved via the Radiate service container.")],-1),u=p('<p>So, how are the validation rules evaluated? All you need to do is type-hint the request on your controller method. The incoming form request is validated before the controller method is called, meaning you do not need to clutter your controller with any validation logic:</p><div class="language-php"><pre><code><span class="token comment">/**\n * Store a new blog post.\n *\n * @param \\Theme\\Http\\Requests\\StorePostRequest $request\n * @return mixed\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">StorePostRequest</span> <span class="token variable">$request</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// The incoming request is valid...</span>\n\n    <span class="token comment">// Retrieve the validated input data...</span>\n    <span class="token variable">$validated</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>If validation fails, an HTTP response with a 422 status code will be returned to the user including a JSON representation of the validation errors.</p>',3);i.render=function(p,o,l,i,d,k){const g=n("AppNotice");return a(),s("div",null,[c,e(g,{type:"info"},{default:t((()=>[r])),_:1}),u])};export default i;export{l as __pageData};
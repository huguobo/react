webpackJsonp([5943726495002],{754:function(n,a){n.exports={data:{markdownRemark:{html:'<p>过去，组件内的 JavaScript 错误常常会破坏 React 内部状态并在下一次渲染时<a href="https://github.com/facebook/react/issues/4026">产生</a> <a href="https://github.com/facebook/react/issues/6895">加密的</a> <a href="https://github.com/facebook/react/issues/8579">错误信息</a>。这些错误总会在应用代码的早期触发，但 React 并没有提供一种方式能够在组件内部优雅地来处理，也不能从错误中恢复。</p>\n<h2 id="错误边界介绍"><a href="#%E9%94%99%E8%AF%AF%E8%BE%B9%E7%95%8C%E4%BB%8B%E7%BB%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>错误边界介绍</h2>\n<p>部分 UI 的异常不应该破坏了整个应用。为了解决 React 用户的这一问题，React 16 引入了一种称为 “错误边界” 的新概念。</p>\n<p>错误边界是<strong>用于捕获其子组件树 JavaScript 异常，记录错误并展示一个回退的 UI</strong> 的 React 组件，而不是整个组件树的异常。错误组件在渲染期间，生命周期方法内，以及整个组件树构造函数内捕获错误。</p>\n<blockquote>\n<p>注意</p>\n</blockquote>\n<blockquote>\n<p>错误边界<strong>无法</strong>捕获如下错误:</p>\n</blockquote>\n<blockquote>\n<ul>\n<li>事件处理 （<a href="https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers">了解更多</a>）</li>\n<li>异步代码 （例如 <code>setTimeout</code> 或 <code>requestAnimationFrame</code> 回调函数）</li>\n<li>服务端渲染</li>\n<li>错误边界自身抛出来的错误 （而不是其子组件）</li>\n</ul>\n</blockquote>\n<p>如果一个类组件定义了一个名为 <code>componentDidCatch(error, info):</code> 的新方法，则其成为一个错误边界：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line">  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token comment">// Display fallback UI</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token comment">// You can also log the error to an error reporting service</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token function">logErrorToMyService</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token comment">// You can render any custom fallback UI</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Something went wrong<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span>\n</span>    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>而后你可以像一个普通的组件一样使用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyWidget</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><code>componentDidCatch()</code> 方法机制类似于 JavaScript <code>catch {}</code>，但是针对组件。仅有类组件可以成为错误边界。实际上，大多数时间你仅想要定义一个错误边界组件并在你的整个应用中使用。</p>\n<p>注意<strong>错误边界仅可以捕获其子组件的错误</strong>。错误边界无法捕获其自身的错误。如果一个错误边界无法渲染错误信息，则错误会向上冒泡至最接近的错误边界。这也类似于 JavaScript 中 catch {} 的工作机制。</p>\n<h3 id="componentdidcatch-参数"><a href="#componentdidcatch-%E5%8F%82%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>componentDidCatch 参数</h3>\n<p><code>error</code> 是被抛出的错误。</p>\n<p><code>info</code> 是一个含有 <code>componentStack</code> 属性的对象。这一属性包含了错误期间关于组件的堆栈信息。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">//...</span>\n<span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  \n  <span class="token comment">/* Example stack information:\n     in ComponentThatThrows (created by App)\n     in ErrorBoundary (created by App)\n     in div (created by App)\n     in App\n  */</span>\n  <span class="token function">logComponentStackToMyService</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>componentStack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//...</span>\n</code></pre>\n      </div>\n<h2 id="在线演示"><a href="#%E5%9C%A8%E7%BA%BF%E6%BC%94%E7%A4%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>在线演示</h2>\n<p>查看通过 <a href="https://github.com/facebook/react/issues/10294">React 16 beta 版本</a>来<a href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010">定义和使用错误边界的例子</a>。</p>\n<h2 id="如何放置错误边界"><a href="#%E5%A6%82%E4%BD%95%E6%94%BE%E7%BD%AE%E9%94%99%E8%AF%AF%E8%BE%B9%E7%95%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>如何放置错误边界</h2>\n<p>错误边界的粒度完全取决于你的应用。你可以将其包装在最顶层的路由组件并为用户展示一个 “发生异常（Something went wrong）“的错误信息，就像服务端框架通常处理崩溃一样。你也可以将单独的插件包装在错误边界内部以保护应用不受该组件崩溃的影响。</p>\n<h2 id="未捕获错误（uncaught-errors）的新行为"><a href="#%E6%9C%AA%E6%8D%95%E8%8E%B7%E9%94%99%E8%AF%AF%EF%BC%88uncaught-errors%EF%BC%89%E7%9A%84%E6%96%B0%E8%A1%8C%E4%B8%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>未捕获错误（Uncaught Errors）的新行为</h2>\n<p>这一改变有非常重要的意义。<strong>自 React 16 开始，任何未被错误边界捕获的错误将会卸载整个 React 组件树。</strong></p>\n<p>我们对这一决定饱含争论，但在我们的经验中放置下一个错误的UI比完全移除它要更糟糕。例如，在类似 Messenger 的产品中留下一个异常的可见 UI 可能会导致用户将信息发错给别人。类似的，对于支付类的应用来说，什么都不展示也比显示一堆错误更好。</p>\n<p>这一改变意味着随着你迁入到 React 16，你将可能会发现一些已存在你应用中但未曾注意到的崩溃。增加错误边界能够让你在发生异常时提供更好的用户体验。</p>\n<p>例如，Facebook Messenger 将侧边栏、信息面板，对话框以及信息输入框包装在单独的错误边界中。如果其中的某些 UI 组件崩溃，其余部分仍然能够交互。</p>\n<p>我们也鼓励使用 JS 错误报告服务（或自行构建）这样你能够掌握在生产环境中发生的未捕获的异常，并将其修复。</p>\n<h2 id="组件栈追踪"><a href="#%E7%BB%84%E4%BB%B6%E6%A0%88%E8%BF%BD%E8%B8%AA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组件栈追踪</h2>\n<p>React 16 会将渲染期间所有在开发环境下的发生的错误打印到控制台，即使应用程序意外的将其掩盖。除了错误信息和 JavaScript 栈外，其还提供了组件栈追踪。现在你可以准确地查看发生在组件树内的错误信息：</p>\n<img src="https://raw.githubusercontent.com/discountry/react/master/content/images/docs/error-boundaries-stack-trace.png" alt="Error caught by Error Boundary component" />\n<p>你也可以在组件堆栈中查看文件名和行数。这一功能在 <a href="https://github.com/facebookincubator/create-react-app">Create React App 项目</a>中默认开启：</p>\n<img src="https://raw.githubusercontent.com/discountry/react/master/content/images/docs/error-boundaries-stack-trace-line-numbers.png" alt="Error caught by Error Boundary component with line numbers" />\n<p>若你不使用 Create React App，你可以手动添加该<a href="https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source">插件</a>到你的 Babel 配置中。注意其仅能在开发环境中使用并<strong>禁止在生产环境中使用</strong>。</p>\n<h2 id="为何不使用-trycatch"><a href="#%E4%B8%BA%E4%BD%95%E4%B8%8D%E4%BD%BF%E7%94%A8-trycatch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为何不使用 try/catch?</h2>\n<p><code>try</code> / <code>catch</code> 非常棒，但其仅能在命令式代码（imperative code）下可用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token function">showButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>然而，React 组件是声明式的并且具体指出 <em>声明</em> 什么需要被渲染：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>错误边界保留了 React 原生的声明性质，且其行为符合你的预期。例如，即使错误发生 <code>componentDidUpdate</code> 时期由某一个深层组件树中的 <code>setState</code> 调用引起，其仍然能够冒泡到最近的错误边界。</p>\n<h2 id="事件处理器如何处理？"><a href="#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%99%A8%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>事件处理器如何处理？</h2>\n<p>错误边界无法捕获事件处理器内部的错误。</p>\n<p>React 不需要错误边界在事件处理器内将其从错误中恢复。不像渲染方法或生命周期钩子，事件处理器不会再渲染周期内触发。因此若他们抛出异常，React 仍然能够知道需要在屏幕上显示什么。</p>\n<p>如果你需要在事件处理器内部捕获错误，使用普通的 JavaScript try / catch 语句：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> error<span class="token punctuation">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  \n  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token comment">// Do something that could throw</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Caught an error<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Note that the above example is demonstrating regular JavaScript behavior and doesn’t use error boundaries.</p>\n<p>注意上述例子仅是说明普通的 JavaScript 行为而并未使用错误边界。</p>\n<h2 id="自-react-15-的名称变更"><a href="#%E8%87%AA-react-15-%E7%9A%84%E5%90%8D%E7%A7%B0%E5%8F%98%E6%9B%B4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>自 React 15 的名称变更</h2>\n<p>React 15 在一个不同的方法名下：<code>unstable_handleError</code> 包含了一个支持有限的错误边界。这一方法不再能用，同时自 React 16 beta 发布起你需要在代码中将其修改为 <code>componentDidCatch</code>。</p>\n<p>为这一改变，我们已提供了一个 <a href="https://github.com/reactjs/react-codemod#error-boundaries">codemod</a> 来帮助你自动迁移你的代码。</p>',frontmatter:{title:"Error Boundaries",next:null,prev:null},fields:{path:"docs/error-boundaries.md",slug:"docs/error-boundaries.html"}}},pathContext:{slug:"docs/error-boundaries.html"}}}});
//# sourceMappingURL=path---docs-error-boundaries-html-d5dc554ed30d37028a36.js.map
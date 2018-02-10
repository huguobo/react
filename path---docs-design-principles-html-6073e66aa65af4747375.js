webpackJsonp([25402446437713],{752:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We wrote this document so that you have a better idea of how we decide what React does and what React doesn’t do, and what our development philosophy is like. While we are excited to see community contributions, we are not likely to choose a path that violates one or more of these principles.</p>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>This document assumes a strong understanding of React. It describes the design principles of <em>React itself</em>, not React components or applications.</p>\n<p>For an introduction to React, check out <a href="/docs/thinking-in-react.html">Thinking in React</a> instead.</p>\n</blockquote>\n<h3 id="composition"><a href="#composition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Composition</h3>\n<p>The key feature of React is composition of components. Components written by different people should work well together. It is important to us that you can add functionality to a component without causing rippling changes throughout the codebase.</p>\n<p>For example, it should be possible to introduce some local state into a component without changing any of the components using it. Similarly, it should be possible to add some initialization and teardown code to any component when necessary.</p>\n<p>There is nothing “bad” about using state or lifecycle hooks in components. Like any powerful feature, they should be used in moderation, but we have no intention to remove them. On the contrary, we think they are integral parts of what makes React useful. We might enable <a href="https://github.com/reactjs/react-future/tree/master/07%20-%20Returning%20State">more functional patterns</a> in the future, but both local state and lifecycle hooks will be a part of that model.</p>\n<p>Components are often described as “just functions” but in our view they need to be more than that to be useful. In React, components describe any composable behavior, and this includes rendering, lifecycle, and state. Some external libraries like <a href="http://facebook.github.io/relay/">Relay</a> augment components with other responsibilities such as describing data dependencies. It is possible that those ideas might make it back into React too in some form.</p>\n<h3 id="common-abstraction"><a href="#common-abstraction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Common Abstraction</h3>\n<p>In general we <a href="https://www.youtube.com/watch?v=4anAwXYqLG8">resist adding features</a> that can be implemented in userland. We don’t want to bloat your apps with useless library code. However, there are exceptions to this.</p>\n<p>For example, if React didn’t provide support for local state or lifecycle hooks, people would create custom abstractions for them. When there are multiple abstractions competing, React can’t enforce or take advantage of the properties of either of them. It has to work with the lowest common denominator.</p>\n<p>This is why sometimes we add features to React itself. If we notice that many components implement a certain feature in incompatible or inefficient ways, we might prefer to bake it into React. We don’t do it lightly. When we do it, it’s because we are confident that raising the abstraction level benefits the whole ecosystem. State, lifecycle hooks, cross-browser event normalization are good examples of this.</p>\n<p>We always discuss such improvement proposals with the community. You can find some of those discussions by the <a href="https://github.com/facebook/react/issues?q=is:open+is:issue+label:%22big+picture%22">“big picture”</a> label on the React issue tracker.</p>\n<h3 id="escape-hatches"><a href="#escape-hatches" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Escape Hatches</h3>\n<p>React is pragmatic. It is driven by the needs of the products written at Facebook. While it is influenced by some paradigms that are not yet fully mainstream such as functional programming, staying accessible to a wide range of developers with different skills and experience levels is an explicit goal of the project.</p>\n<p>If we want to deprecate a pattern that we don’t like, it is our responsibility to consider all existing use cases for it and <a href="/blog/2016/07/13/mixins-considered-harmful.html">educate the community about the alternatives</a> before we deprecate it. If some pattern that is useful for building apps is hard to express in a declarative way, we will <a href="/docs/more-about-refs.html">provide an imperative API</a> for it. If we can’t figure out a perfect API for something that we found necessary in many apps, we will <a href="/docs/context.html">provide a temporary subpar working API</a> as long as it is possible to get rid of it later and it leaves the door open for future improvements.</p>\n<h3 id="stability"><a href="#stability" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stability</h3>\n<p>We value API stability. At Facebook, we have more than 20 thousand components using React. Many other companies, including <a href="https://twitter.com/">Twitter</a> and <a href="https://www.airbnb.com/">Airbnb</a>, are also heavy users of React. This is why we are usually reluctant to change public APIs or behavior.</p>\n<p>However we think stability in the sense of “nothing changes” is overrated. It quickly turns into stagnation. Instead, we prefer the stability in the sense of “It is heavily used in production, and when something changes, there is a clear (and preferably automated) migration path.”</p>\n<p>When we deprecate a pattern, we study its internal usage at Facebook and add deprecation warnings. They let us assess the impact of the change. Sometimes we back out if we see that it is too early, and we need to think more strategically about getting the codebases to the point where they are ready for this change.</p>\n<p>If we are confident that the change is not too disruptive and the migration strategy is viable for all use cases, we release the deprecation warning to the open source community. We are closely in touch with many users of React outside of Facebook, and we monitor popular open source projects and guide them in fixing those deprecations.</p>\n<p>Given the sheer size of the Facebook React codebase, successful internal migration is often a good indicator that other companies won’t have problems either. Nevertheless sometimes people point out additional use cases we haven’t thought of, and we add escape hatches for them or rethink our approach.</p>\n<p>We don’t deprecate anything without a good reason. We recognize that sometimes deprecations warnings cause frustration but we add them because deprecations clean up the road for the improvements and new features that we and many people in the community consider valuable.</p>\n<p>For example, we added a <a href="/warnings/unknown-prop.html">warning about unknown DOM props</a> in React 15.2.0. Many projects were affected by this. However fixing this warning is important so that we can introduce the support for <a href="https://github.com/facebook/react/issues/140">custom attributes</a> to React. There is a reason like this behind every deprecation that we add.</p>\n<p>When we add a deprecation warning, we keep it for the rest of the current major version, and <a href="/blog/2016/02/19/new-versioning-scheme.html">change the behavior in the next major version</a>. If there is a lot of repetitive manual work involved, we release a <a href="https://www.youtube.com/watch?v=d0pOgY8__JM">codemod</a> script that automates most of the change. Codemods enable us to move forward without stagnation in a massive codebase, and we encourage you to use them as well.</p>\n<p>You can find the codemods that we released in the <a href="https://github.com/reactjs/react-codemod">react-codemod</a> repository.</p>\n<h3 id="interoperability"><a href="#interoperability" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Interoperability</h3>\n<p>We place high value in interoperability with existing systems and gradual adoption. Facebook has a massive non-React codebase. Its website uses a mix of a server-side component system called XHP, internal UI libraries that came before React, and React itself. It is important to us that any product team can <a href="https://www.youtube.com/watch?v=BF58ZJ1ZQxY">start using React for a small feature</a> rather than rewrite their code to bet on it.</p>\n<p>This is why React provides escape hatches to work with mutable models, and tries to work well together with other UI libraries. You can wrap an existing imperative UI into a declarative component, and vice versa. This is crucial for gradual adoption.</p>\n<h3 id="scheduling"><a href="#scheduling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scheduling</h3>\n<p>Even when your components are described as functions, when you use React you don’t call them directly. Every component returns a <a href="/blog/2015/12/18/react-components-elements-and-instances.html#elements-describe-the-tree">description of what needs to be rendered</a>, and that description may include both user-written components like <code>&#x3C;LikeButton></code> and platform-specific components like <code>&#x3C;div></code>. It is up to React to “unroll” <code>&#x3C;LikeButton></code> at some point in the future and actually apply changes to the UI tree according to the render results of the components recursively.</p>\n<p>This is a subtle distinction but a powerful one. Since you don’t call that component function but let React call it, it means React has the power to delay calling it if necessary. In its current implementation React walks the tree recursively and calls render functions of the whole updated tree during a single tick. However in the future it might start <a href="https://github.com/facebook/react/issues/6170">delaying some updates to avoid dropping frames</a>.</p>\n<p>This is a common theme in React design. Some popular libraries implement the “push” approach where computations are performed when the new data is available. React, however, sticks to the “pull” approach where computations can be delayed until necessary.</p>\n<p>React is not a generic data processing library. It is a library for building user interfaces. We think that it is uniquely positioned in an app to know which computations are relevant right now and which are not.</p>\n<p>If something is offscreen, we can delay any logic related to it. If data is arriving faster than the frame rate, we can coalesce and batch updates. We can prioritize work coming from user interactions (such as an animation caused by a button click) over less important background work (such as rendering new content just loaded from the network) to avoid dropping frames.</p>\n<p>To be clear, we are not taking advantage of this right now. However the freedom to do something like this is why we prefer to have control over scheduling, and why <code>setState()</code> is asynchronous. Conceptually, we think of it as “scheduling an update”.</p>\n<p>The control over scheduling would be harder for us to gain if we let the user directly compose views with a “push” based paradigm common in some variations of <a href="https://en.wikipedia.org/wiki/Functional_reactive_programming">Functional Reactive Programming</a>. We want to own the “glue” code.</p>\n<p>It is a key goal for React that the amount of the user code that executes before yielding back into React is minimal. This ensures that React retains the capability to schedule and split work in chunks according to what it knows about the UI.</p>\n<p>There is an internal joke in the team that React should have been called “Schedule” because React does not want to be fully “reactive”.</p>\n<h3 id="developer-experience"><a href="#developer-experience" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Developer Experience</h3>\n<p>Providing a good developer experience is important to us.</p>\n<p>For example, we maintain <a href="https://github.com/facebook/react-devtools">React DevTools</a> which let you inspect the React component tree in Chrome and Firefox. We have heard that it brings a big productivity boost both to the Facebook engineers and to the community.</p>\n<p>We also try to go an extra mile to provide helpful developer warnings. For example, React warns you in development if you nest tags in a way that the browser doesn’t understand, or if you make a common typo in the API. Developer warnings and the related checks are the main reason why the development version of React is slower than the production version.</p>\n<p>The usage patterns that we see internally at Facebook help us understand what the common mistakes are, and how to prevent them early. When we add new features, we try to anticipate the common mistakes and warn about them.</p>\n<p>We are always looking out for ways to improve the developer experience. We love to hear your suggestions and accept your contributions to make it even better.</p>\n<h3 id="debugging"><a href="#debugging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Debugging</h3>\n<p>When something goes wrong, it is important that you have breadcrumbs to trace the mistake to its source in the codebase. In React, props and state are those breadcrumbs.</p>\n<p>If you see something wrong on the screen, you can open React DevTools, find the component responsible for rendering, and then see if the props and state are correct. If they are, you know that the problem is in the component’s <code>render()</code> function, or some function that is called by <code>render()</code>. The problem is isolated.</p>\n<p>If the state is wrong, you know that the problem is caused by one of the <code>setState()</code> calls in this file. This, too, is relatively simple to locate and fix because usually there are only a few <code>setState()</code> calls in a single file.</p>\n<p>If the props are wrong, you can traverse the tree up in the inspector, looking for the component that first “poisoned the well” by passing bad props down.</p>\n<p>This ability to trace any UI to the data that produced it in the form of current props and state is very important to React. It is an explicit design goal that state is not “trapped” in closures and combinators, and is available to React directly.</p>\n<p>While the UI is dynamic, we believe that synchronous <code>render()</code> functions of props and state turn debugging from guesswork into a boring but finite procedure. We would like to preserve this constraint in React even though it makes some use cases, like complex animations, harder.</p>\n<h3 id="configuration"><a href="#configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration</h3>\n<p>We find global runtime configuration options to be problematic.</p>\n<p>For example, it is occasionally requested that we implement a function like <code>React.configure(options)</code> or <code>React.register(component)</code>. However this poses multiple problems, and we are not aware of good solutions to them.</p>\n<p>What if somebody calls such a function from a third-party component library? What if one React app embeds another React app, and their desired configurations are incompatible? How can a third-party component specify that it requires a particular configuration? We think that global configuration doesn’t work well with composition. Since composition is central to React, we don’t provide global configuration in code.</p>\n<p>We do, however, provide some global configuration on the build level. For example, we provide separate development and production builds. We may also <a href="https://github.com/facebook/react/issues/6627">add a profiling build</a> in the future, and we are open to considering other build flags.</p>\n<h3 id="beyond-the-dom"><a href="#beyond-the-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Beyond the DOM</h3>\n<p>We see the value of React in the way it allows us to write components that have fewer bugs and compose together well. DOM is the original rendering target for React but <a href="http://facebook.github.io/react-native/">React Native</a> is just as important both to Facebook and the community.</p>\n<p>Being renderer-agnostic is an important design constraint of React. It adds some overhead in the internal representations. On the other hand, any improvements to the core translate across platforms.</p>\n<p>Having a single programming model lets us form engineering teams around products instead of platforms. So far the tradeoff has been worth it for us.</p>\n<h3 id="implementation"><a href="#implementation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Implementation</h3>\n<p>We try to provide elegant APIs where possible. We are much less concerned with the implementation being elegant. The real world is far from perfect, and to a reasonable extent we prefer to put the ugly code into the library if it means the user does not have to write it. When we evaluate new code, we are looking for an implementation that is correct, performant and affords a good developer experience. Elegance is secondary.</p>\n<p>We prefer boring code to clever code. Code is disposable and often changes. So it is important that it <a href="https://youtu.be/4anAwXYqLG8?t=13m9s">doesn’t introduce new internal abstractions unless absolutely necessary</a>. Verbose code that is easy to move around, change and remove is preferred to elegant code that is prematurely abstracted and hard to change.</p>\n<h3 id="optimized-for-tooling"><a href="#optimized-for-tooling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Optimized for Tooling</h3>\n<p>Some commonly used APIs have verbose names. For example, we use <code>componentDidMount()</code> instead of <code>didMount()</code> or <code>onMount()</code>. This is <a href="https://github.com/reactjs/react-future/issues/40#issuecomment-142442124">intentional</a>. The goal is to make the points of interaction with the library highly visible.</p>\n<p>In a massive codebase like Facebook, being able to search for uses of specific APIs is very important. We value distinct verbose names, and especially for the features that should be used sparingly. For example, <code>dangerouslySetInnerHTML</code> is hard to miss in a code review.</p>\n<p>Optimizing for search is also important because of our reliance on <a href="https://www.youtube.com/watch?v=d0pOgY8__JM">codemods</a> to make breaking changes. We want it to be easy and safe to apply vast automated changes across the codebase, and unique verbose names help us achieve this. Similarly, distinctive names make it easy to write custom <a href="https://github.com/yannickcr/eslint-plugin-react">lint rules</a> about using React without worrying about potential false positives.</p>\n<p><a href="/docs/displaying-data.html#jsx-syntax">JSX</a> plays a similar role. While it is not required with React, we use it extensively at Facebook both for aesthetic and pragmatic reasons.</p>\n<p>In our codebase, JSX provides an unambiguous hint to the tools that they are dealing with a React element tree. This makes it possible to add build-time optimizations such as <a href="http://babeljs.io/docs/plugins/transform-react-constant-elements/">hoisting constant elements</a>, safely lint and codemod internal component usage, and <a href="https://github.com/facebook/react/pull/6771">include JSX source location</a> into the warnings.</p>\n<h3 id="dogfooding"><a href="#dogfooding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dogfooding</h3>\n<p>We try our best to address the problems raised by the community. However we are likely to prioritize the issues that people are <em>also</em> experiencing internally at Facebook. Perhaps counter-intuitively, we think this is the main reason why the community can bet on React.</p>\n<p>Heavy internal usage gives us the confidence that React won’t disappear tomorrow. React was created at Facebook to solve its problems. It brings tangible business value to the company and is used in many of its products. <a href="https://en.wikipedia.org/wiki/Eating_your_own_dog_food">Dogfooding</a> it means that our vision stays sharp and we have a focused direction going forward.</p>\n<p>This doesn’t mean that we ignore the issues raised by the community. For example, we added support for <a href="/docs/webcomponents.html">web components</a> and <a href="https://github.com/facebook/react/pull/6243">SVG</a> to React even though we don’t rely on either of them internally. We are actively <a href="https://github.com/facebook/react/issues/2686">listening to your pain points</a> and <a href="/blog/2016/07/11/introducing-reacts-error-code-system.html">address them</a> to the best of our ability. The community is what makes React special to us, and we are honored to contribute back.</p>\n<p>After releasing many open source projects at Facebook, we have learned that trying to make everyone happy at the same time produced projects with poor focus that didn’t grow well. Instead, we found that picking a small audience and focusing on making them happy brings a positive net effect. That’s exactly what we did with React, and so far solving the problems encountered by Facebook product teams has translated well to the open source community.</p>\n<p>The downside of this approach is that sometimes we fail to give enough focus to the things that Facebook teams don’t have to deal with, such as the “getting started” experience. We are acutely aware of this, and we are thinking of how to improve in a way that would benefit everyone in the community without making the same mistakes we did with open source projects before.</p>',frontmatter:{title:"Design Principles",next:null,prev:"implementation-notes.html"},fields:{path:"docs/design-principles.md",slug:"docs/design-principles.html"}}},pathContext:{slug:"docs/design-principles.html"}}}});
//# sourceMappingURL=path---docs-design-principles-html-6073e66aa65af4747375.js.map
import{r as e,o as a,c as r,a as t,w as i,d as o,b as s}from"./app.d6b3e7a3.js";const d='{"title":"Directory Structure","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"The App Directory","slug":"the-app-directory"},{"level":2,"title":"The Routes Directory","slug":"the-routes-directory"},{"level":2,"title":"Root Files","slug":"root-files"}],"relativePath":"getting-started/directory-structure.md","lastUpdated":1613496683693}',n={},h=o('<h1 id="directory-structure"><a class="header-anchor" href="#directory-structure" aria-hidden="true">#</a> Directory Structure</h1><p><div class="table-of-contents"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#the-app-directory">The App Directory</a></li><li><a href="#the-routes-directory">The Routes Directory</a></li><li><a href="#root-files">Root Files</a></li></ul></div></p><h2 id="introduction"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The default application structure is intended to provide a great starting point for both large and small applications. Radiate imposes almost no restrictions on where any given class is located - as long as Composer can autoload the class.</p><p>The theme and plugin directories have been implemented almost identically to allow for less cognitive load when switching between plugin and theme development. There are some exceptions however, and these are down to the way WordPress implements themes and plugins differently.</p>',5),c=s("The following structure is from a Radiate theme, but the plugin will follow the same structure, less a few files in the root."),l=o('<div class="language-"><pre><code>.\n├── app/\n│   ├── Events/\n│   ├── Http/\n│   │   ├── Controllers/\n│   │   └── Middleware/\n│   ├── Listeners/\n│   ├── Mail/\n│   └── Providers/\n│       ├── EventServiceProvider.php\n│       └── RouteServiceProvider.php\n├── routes/\n│   ├── ajax.php\n│   └── api.php\n├── composer.json\n├── functions.php\n├── helpers.php\n├── index.php\n├── LICENSE\n├── package.json\n├── README.md\n├── screenshot.png\n└── style.css\n</code></pre></div><h2 id="the-app-directory"><a class="header-anchor" href="#the-app-directory" aria-hidden="true">#</a> The App Directory</h2><p>The majority of your application is housed in the <code>app</code> directory. By default, this directory is namespaced under <code>Theme</code> and <code>Plugin</code> and is autoloaded by Composer using the PSR-4 autoloading standard.</p><p>The app directory contains a <code>Providers</code> directory by default. This directory contains your application service providers such as the <code>EventServiceProvider</code> where your WordPress actions/filters can be declared, and the <code>RouteServiceProvider</code> where your REST and AJAX routes can be configured.</p><p>A variety of other directories will be generated inside the <code>app</code> directory as you use the <code>make</code> Radiate commands to generate classes. So, for example, the <code>app/Mail</code> directory will not exist until you execute the <code>make:mail</code> Radiate command to generate a mail class.</p>',5),p=t("p",null,[s("Many of the classes in the "),t("code",null,"app"),s(" directory can be generated by Radiate via the "),t("code",null,"wp-cli"),s(". To review the available commands, run the "),t("code",null,"wp radiate --list"),s(" command in your terminal.")],-1),u=o('<h4 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h4><p>The <code>Events</code> directory does not exist by default, but will be created for you by the <code>make:event</code> Radiate command.</p><h4 id="http"><a class="header-anchor" href="#http" aria-hidden="true">#</a> Http</h4><p>The <code>Http</code> directory contains your controllers and middleware. Almost all of the logic to handle REST and AJAX requests entering your application will be placed in this directory.</p><h4 id="listeners"><a class="header-anchor" href="#listeners" aria-hidden="true">#</a> Listeners</h4><p>This directory does not exist by default, but will be created for you if you execute the <code>make:listener</code> Radiate command. The <code>Listeners</code> directory contains the classes that handle your events. Events extend WordPress actions and filters which helps keep all action/filter logic in one place.</p><h4 id="mail"><a class="header-anchor" href="#mail" aria-hidden="true">#</a> Mail</h4><p>This directory does not exist by default, but will be created for you if you execute the <code>make:mail</code> Radiate command. The <code>Mail</code> directory contains all of your classes that represent emails sent by your application.</p><h4 id="providers"><a class="header-anchor" href="#providers" aria-hidden="true">#</a> Providers</h4><p>The <code>Providers</code> directory contains all of the service providers for your application. Service providers bootstrap your application by binding services in the service container, registering events, or performing any other tasks to prepare your application for incoming requests.</p><h2 id="the-routes-directory"><a class="header-anchor" href="#the-routes-directory" aria-hidden="true">#</a> The Routes Directory</h2><h4 id="ajax-php"><a class="header-anchor" href="#ajax-php" aria-hidden="true">#</a> ajax.php</h4><p>This is where the AJAX routes are registered. They automatically have the <code>ajax</code> middleware applied.</p><h4 id="api-php"><a class="header-anchor" href="#api-php" aria-hidden="true">#</a> api.php</h4><p>This is where the REST API routes are registered. They are automatically namespaced and have the <code>api</code> middleware applied. For more information about Radiate&#39;s routing, see <a href="./../the-basics/routing.html#the-default-route-files">The default route files</a>.</p><h2 id="root-files"><a class="header-anchor" href="#root-files" aria-hidden="true">#</a> Root Files</h2><h4 id="composer-json"><a class="header-anchor" href="#composer-json" aria-hidden="true">#</a> composer.json</h4><p>The composer configuration file.</p><h4 id="functions-php"><a class="header-anchor" href="#functions-php" aria-hidden="true">#</a> functions.php</h4><p>The entry point for themes and plugins. This is where Radiate registers the middleware and service providers before boot. In the case of the plugin, this is where plugin definitions are declared.</p><h4 id="helpers-php"><a class="header-anchor" href="#helpers-php" aria-hidden="true">#</a> helpers.php</h4><p>Add any application helper functions here. This file is autoloaded by Composer.</p><h4 id="index-php"><a class="header-anchor" href="#index-php" aria-hidden="true">#</a> index.php</h4><p>This is a blank file present in the theme and plugin for WordPress compatability and commonality between both implementations.</p><h4 id="license"><a class="header-anchor" href="#license" aria-hidden="true">#</a> LICENSE</h4><p>The MIT license - feel free to change as applicable</p><h4 id="package-json"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h4><p>Radiate comes with a package.json file to quickly get started with asset transpilation/compilation</p><h4 id="readme-md"><a class="header-anchor" href="#readme-md" aria-hidden="true">#</a> <a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md</a></h4><p>The readme - feel free to change as applicable</p><h4 id="screenshot-png"><a class="header-anchor" href="#screenshot-png" aria-hidden="true">#</a> screenshot.png</h4><p>Only present in the theme, this image is a WordPress requirement</p><h4 id="style-css"><a class="header-anchor" href="#style-css" aria-hidden="true">#</a> style.css</h4><p>Only present in the theme, this is a WordPress requirement. The theme definitions are declared in this file.</p>',34);n.render=function(o,s,d,n,f,m){const y=e("AppNotice");return a(),r("div",null,[h,t(y,{type:"info"},{default:i((()=>[c])),_:1}),l,t(y,{type:"info"},{default:i((()=>[p])),_:1}),u])};export default n;export{d as __pageData};

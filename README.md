
vue-i18next
===========

Vue plugin for integrating I18Next.

<p/>
<img src="https://nodei.co/npm/vue-i18next.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/vue-i18next.png" alt=""/>

About
-----

This is a plugin for the [Vue](http://vuejs.org) view data-binding
library, integrating the [I18Next](http://i18next.com) internationalization library.
It provides a global `Vue.t()` function and a local `$t()` function which
passes-through to `i18next.t()` with the exception that the global
Vue parameter `i18nextLanguage` is passed to `i18next.t()` as option
`lng` and for `$t()` the local Vue option `i18nextNamespace` is
passed to `i18next.t()` as option `ns`. As this plugin is based
on [vue-params](https://github.com/rse/vue-params), the target language
can be altered at any time by assigning to the variable
`Vue.params.i18nextLanguage`. As a result, the data-bindings will
be forced to update by [vue-params](https://github.com/rse/vue-params).

Usage
-----

```shell
# install necessary packages
$ npm install vue vue-params vue-i18next
```

```js
/* initial setup */
Vue.use(VueParams)
Vue.use(VueI18Next)
Vue.params.i18nextLanguage = "en"
i18next.init({ lng: Vue.params.i18nextLanguage, ... })
```

```js
/* usage in global context */
Vue.t("foo")
Vue.t("bar.baz", { lng: "de", ns: "quux" })
```

```js
/* setup a view data-binding */
new vue = new Vue({
    el: $("#sample"),
    i18nextNamespace: "quux"
})
```

```html
<!-- usage in local context -->
<div id="sample">
    {{ $t("foo") }}
    {{ $t("bar.baz", { lng: "de", ns: "quux" }) }}
</div>
```

License
-------

Copyright (c) 2016-2021 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


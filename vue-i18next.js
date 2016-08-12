/*!
**  VueI18Next -- Vue Plugin for I18Next Integration
**  Copyright (c) 2016 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  Universal Module Definition (UMD)  */
(function (root, name, factory) {
    /* global define: false */
    /* global module: false */
    if (typeof define === "function" && typeof define.amd !== "undefined")
        /*  AMD environment  */
        define(name, function () { return factory(root); })
    else if (typeof module === "object" && typeof module.exports === "object")
        /*  CommonJS environment  */
        module.exports = factory(root)
    else
        /*  Browser environment  */
        root[name] = factory(root)
}(this, "VueI18Next", function (/* root */) {
    /* global i18next: true */

    /*  the Plugin */
    var VueI18Next = {
        install: function (Vue, options) {
            /*  determine options  */
            var opts = {}
            Vue.util.extend(opts, options)

            /*  ensure vue-params plugin is present  */
            if (typeof Vue.params !== "object")
                throw new Error("Vue.params is missing (requires the use of vue-params plugin)")
            Vue.paramsCreate("i18nextLanguage")
            Vue.params.i18nextLanguage = "en"

            /*  expose a global API method  */
            Vue.t = function (key, options) {
                var opts = {}
                var lng = Vue.params.i18nextLanguage
                if (typeof lng === "string" && lng !== "")
                    opts.lng = lng
                Vue.util.extend(opts, options)
                return i18next.t(key, opts)
            }

            /*  expose a local API method  */
            Vue.prototype.$t = function (key, options) {
                var opts = {}
                var lng = Vue.params.i18nextLanguage
                if (typeof lng === "string" && lng !== "")
                    opts.lng = lng
                var ns = this.$options.i18nextNamespace
                if (typeof ns === "string" && ns !== "")
                    opts.ns = ns
                Vue.util.extend(opts, options)
                return i18next.t(key, opts)
            }
        }
    }

    /*  export API  */
    return VueI18Next
}))


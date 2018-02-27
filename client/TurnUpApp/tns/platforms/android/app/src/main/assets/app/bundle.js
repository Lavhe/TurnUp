module.exports =
webpackJsonp([0],{

/***/ 119:
/* no static exports found */
/* all exports used */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nativescript_vue__ = __webpack_require__(/*! nativescript-vue */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nativescript_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nativescript_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App_vue__ = __webpack_require__(/*! ./components/App.vue */ 169);



new __WEBPACK_IMPORTED_MODULE_0_nativescript_vue___default.a({
    render: function render(h) {
        return h('app');
    },

    components: {
        App: __WEBPACK_IMPORTED_MODULE_1__components_App_vue__["a" /* default */]
    }
}).$start();

/***/ }),

/***/ 166:
/* no static exports found */
/* all exports used */
/*!******************************************************!*\
  !*** ../~/ns-vue-loader/lib/component-normalizer.js ***!
  \******************************************************/
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.template = compiledTemplate.template
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 169:
/* exports provided: default */
/* exports used: default */
/*!****************************!*\
  !*** ./components/App.vue ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_App_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./App.vue */ 170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_45ba5ed4_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_App_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-45ba5ed4","hasScoped":false,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./App.vue */ 194);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!css-loader!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-45ba5ed4","scoped":false,"hasInlineConfig":false}!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./App.vue */ 181)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 166)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_45ba5ed4_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45ba5ed4", Component.options)
  } else {
    hotAPI.reload("data-v-45ba5ed4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 170:
/* exports provided: default */
/* exports used: default */
/*!*******************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/App.vue ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Home_vue__ = __webpack_require__(/*! ./Home.vue */ 187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BottomNav_vue__ = __webpack_require__(/*! ./BottomNav.vue */ 184);
//
//
//
//
//
//
//
//
//
//
//
//
//




var dialogs = __webpack_require__(/*! ui/dialogs */ 66);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'app',
    data: function data() {
        return {
            loggedIn: true,
            user: null
        };
    },
    mounted: function mounted() {
        // dialogs.alert("Test the dialogs");
    },

    components: {
        Home: __WEBPACK_IMPORTED_MODULE_0__Home_vue__["a" /* default */],
        BottomNav: __WEBPACK_IMPORTED_MODULE_1__BottomNav_vue__["a" /* default */]
    },
    methods: {}
});

/***/ }),

/***/ 171:
/* exports provided: default */
/* exports used: default */
/*!*************************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/BottomNav.vue ***!
  \*************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_tab_view__ = __webpack_require__(/*! ui/tab-view */ 46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_tab_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ui_tab_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Profile_vue__ = __webpack_require__(/*! ./Profile.vue */ 189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Clubs_vue__ = __webpack_require__(/*! ./Clubs.vue */ 185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Events_vue__ = __webpack_require__(/*! ./Events.vue */ 186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LiquorStores_vue__ = __webpack_require__(/*! ./LiquorStores.vue */ 188);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//


var dialogs = __webpack_require__(/*! ui/dialogs */ 66);







/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Profile: __WEBPACK_IMPORTED_MODULE_1__Profile_vue__["a" /* default */], Clubs: __WEBPACK_IMPORTED_MODULE_2__Clubs_vue__["a" /* default */], Events: __WEBPACK_IMPORTED_MODULE_3__Events_vue__["a" /* default */], LiquorStores: __WEBPACK_IMPORTED_MODULE_4__LiquorStores_vue__["a" /* default */] },
  data: function data() {
    return {
      count: 20,
      currentTab: 0,
      tabs: [{
        text: 'Profile',
        icon: 'profile',
        view: 'Profile'
      }, {
        text: 'Clubs',
        icon: 'clubs',
        view: 'Clubs'
      }, {
        text: 'Events',
        icon: 'events',
        view: 'Events'
      }, {
        text: 'Liquor',
        icon: 'liquor',
        view: 'LiquorStores'
      }]
    };
  },

  props: ['LoggedIn', 'User'],
  mounted: function mounted() {
    dialogs.alert('Hello!').then(function () {
      console.log("Dialog closed");
    });

    // var tab = TabView.getViewById("bottomNav");

    // console.log(".............##########..............####### before #########...............###########");
    // console.log(" ");
    // console.log(" ");
    // console.log(JSON.stringify(tab));
    // console.log(" ");
    // console.log(" ");
    // console.log(".............##########..............####### after #########...............###########");
  },

  events: _defineProperty({
    eventChanged: function eventChanged(event) {
      dialogs.alert("This").then(function () {
        console.log("Dialog closed");
      });
      this.currentTab = 2;
    }
  }, 'eventChanged', function eventChanged() {
    dialogs.alert("This").then(function () {
      console.log("Dialog closed");
    });
    this.currentTab = 2;
  }),
  methods: (_methods = {
    tapped: function tapped() {
      this.currentTab = 2;
      dialogs.alert("This").then(function () {
        console.log("Dialog closed");
      });
    },
    clicked: function clicked(value) {
      //dialogs.alert("tapped " + value);
      this.tabs[0].text = "clicked " + value;
    },
    onChangeTab: function onChangeTab(args) {
      // dialogs.alert("args " + args);
      this.tabs[0].text = ".pop()";
    }
  }, _defineProperty(_methods, 'onChangeTab', function onChangeTab() {
    this.tabs[0].text = ".. .pop()";
  }), _defineProperty(_methods, 'eventChanged', function eventChanged(event) {
    dialogs.alert("This").then(function () {
      console.log("Dialog closed");
    });
    this.currentTab = 2;
  }), _defineProperty(_methods, 'eventChanged', function eventChanged() {
    dialogs.alert("This").then(function () {
      console.log("Dialog closed");
    });
    this.currentTab = 2;
  }), _methods)
});

/***/ }),

/***/ 172:
/* exports provided: default */
/* exports used: default */
/*!*********************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/Clubs.vue ***!
  \*********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs__ = __webpack_require__(/*! ui/dialogs */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ui_dialogs__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  created: function created() {
    // dialogs.alert("Started clubs");
  },

  methods: {}
});

/***/ }),

/***/ 173:
/* exports provided: default */
/* exports used: default */
/*!**********************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/Events.vue ***!
  \**********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs__ = __webpack_require__(/*! ui/dialogs */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ui_dialogs__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      Title: 'the title',
      Img: '',
      LineUp: ['', '', ''],
      Fee: 0,
      Description: '',
      DateTimeStart: new Date(),
      DateTimeEnd: new Date(),
      PostedBy: new Object(),
      PostedAt: new Date(),
      Location: new Object()
    };
  },
  created: function created() {},

  methods: {
    taped: function taped() {
      __WEBPACK_IMPORTED_MODULE_0_ui_dialogs___default.a.alert("Tap");
    }
  }
});

/***/ }),

/***/ 174:
/* exports provided: default */
/* exports used: default */
/*!********************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/Home.vue ***!
  \********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs__ = __webpack_require__(/*! ui/dialogs */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ui_dialogs__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {}
});

/***/ }),

/***/ 175:
/* exports provided: default */
/* exports used: default */
/*!****************************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/LiquorStores.vue ***!
  \****************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      title: "This is the title"
    };
  },
  created: function created() {},

  methods: {}
});

/***/ }),

/***/ 176:
/* exports provided: default */
/* exports used: default */
/*!***********************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/Profile.vue ***!
  \***********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs__ = __webpack_require__(/*! ui/dialogs */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ui_dialogs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ui_dialogs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      user: {
        name: 'Uzzie',
        surname: 'Sirwali',
        status: 'If you need to style certain parts of the text differently, you can use a combination of a FormattedString and Span elements.',
        username: 'Lavhe',
        email: 'mulavhe@gmail.com',
        coverPic: '~/src/pic',
        stats: [{
          key: "Posts",
          value: "20"
        }, {
          key: "Followers",
          value: "30"
        }, {
          key: "Following",
          value: "40"
        }],
        profilePic: 'data:image/png;base64,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'
      }
    };
  },
  created: function created() {},

  methods: {
    onEventTap: function onEventTap($event) {
      //dialogs.alert("Miracles do happen!");
    }
  }
});

/***/ }),

/***/ 177:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!../~/css-loader!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-010534c4","scoped":false,"hasInlineConfig":false}!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/Profile.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!../~/css-loader!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-09a617b2","scoped":false,"hasInlineConfig":false}!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/Clubs.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 179:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!../~/css-loader!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-35c4fab1","scoped":false,"hasInlineConfig":false}!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/LiquorStores.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 180:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!../~/css-loader!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-3f16ec98","scoped":false,"hasInlineConfig":false}!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/Events.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!../~/css-loader!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-45ba5ed4","scoped":false,"hasInlineConfig":false}!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/App.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!../~/css-loader!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-67410f3a","scoped":false,"hasInlineConfig":false}!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/Home.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 183:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!../~/css-loader!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-a0ab07a6","scoped":true,"hasInlineConfig":false}!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/BottomNav.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 184:
/* exports provided: default */
/* exports used: default */
/*!**********************************!*\
  !*** ./components/BottomNav.vue ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_BottomNav_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./BottomNav.vue */ 171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_a0ab07a6_hasScoped_true_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_BottomNav_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-a0ab07a6","hasScoped":true,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./BottomNav.vue */ 196);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!css-loader!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-a0ab07a6","scoped":true,"hasInlineConfig":false}!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./BottomNav.vue */ 183)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 166)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a0ab07a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_BottomNav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_a0ab07a6_hasScoped_true_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_BottomNav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/BottomNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a0ab07a6", Component.options)
  } else {
    hotAPI.reload("data-v-a0ab07a6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 185:
/* exports provided: default */
/* exports used: default */
/*!******************************!*\
  !*** ./components/Clubs.vue ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Clubs_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./Clubs.vue */ 172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_09a617b2_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Clubs_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-09a617b2","hasScoped":false,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./Clubs.vue */ 191);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!css-loader!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-09a617b2","scoped":false,"hasInlineConfig":false}!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./Clubs.vue */ 178)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 166)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Clubs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_09a617b2_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Clubs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Clubs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09a617b2", Component.options)
  } else {
    hotAPI.reload("data-v-09a617b2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 186:
/* exports provided: default */
/* exports used: default */
/*!*******************************!*\
  !*** ./components/Events.vue ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Events_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./Events.vue */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_3f16ec98_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Events_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-3f16ec98","hasScoped":false,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./Events.vue */ 193);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!css-loader!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-3f16ec98","scoped":false,"hasInlineConfig":false}!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./Events.vue */ 180)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 166)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Events_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_3f16ec98_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Events_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Events.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f16ec98", Component.options)
  } else {
    hotAPI.reload("data-v-3f16ec98", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 187:
/* exports provided: default */
/* exports used: default */
/*!*****************************!*\
  !*** ./components/Home.vue ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Home_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./Home.vue */ 174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_67410f3a_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Home_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-67410f3a","hasScoped":false,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./Home.vue */ 195);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!css-loader!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-67410f3a","scoped":false,"hasInlineConfig":false}!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./Home.vue */ 182)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 166)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_67410f3a_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67410f3a", Component.options)
  } else {
    hotAPI.reload("data-v-67410f3a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 188:
/* exports provided: default */
/* exports used: default */
/*!*************************************!*\
  !*** ./components/LiquorStores.vue ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_LiquorStores_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./LiquorStores.vue */ 175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_35c4fab1_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_LiquorStores_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-35c4fab1","hasScoped":false,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./LiquorStores.vue */ 192);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!css-loader!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-35c4fab1","scoped":false,"hasInlineConfig":false}!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./LiquorStores.vue */ 179)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 166)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_LiquorStores_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_35c4fab1_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_LiquorStores_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/LiquorStores.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35c4fab1", Component.options)
  } else {
    hotAPI.reload("data-v-35c4fab1", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 189:
/* exports provided: default */
/* exports used: default */
/*!********************************!*\
  !*** ./components/Profile.vue ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Profile_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./Profile.vue */ 176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_010534c4_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Profile_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-010534c4","hasScoped":false,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./Profile.vue */ 190);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":0,"remove":true}!css-loader!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-010534c4","scoped":false,"hasInlineConfig":false}!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./Profile.vue */ 177)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 166)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_Profile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_010534c4_hasScoped_false_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_Profile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-010534c4", Component.options)
  } else {
    hotAPI.reload("data-v-010534c4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 190:
/* exports provided: default */
/* exports used: default */
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-010534c4","hasScoped":false,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/Profile.vue ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <StackLayout>\n   <FlexboxLayout justifyContent=\"space-around\">\n     <Label alignSelf=\"center\"  height=\"30\" fontWeight=\"bold\" :text=\"user.surname + \' \' + user.name\"></Label>\n     <Label alignSelf=\"center\"  height=\"20\" :text=\"user.username\"></Label>\n     <Image stretch=\"none\" alignSelf=\"center\" :src=\"user.profilePic\" width=\"70\" height=\"70\" borderRadius=\"50%\" backgroundColor=\"#1c6b48\"/>\n   </FlexboxLayout>\n   <GridLayout columns=\"*,*,*\" rows=\"*,*\">\n      <FlexboxLayout v-for=\"(stat,i) in user.stats\" :key=\"i\" :col=\"i\" flexWrap=\"nowrap\" alignItems=\"stretch\" justifyContent=\"space-around\">\n       <Label alignSelf=\"center\" fontWeight=\"bold\" row=\"1\" :text=\"stat.value\"></Label>\n       <Label alignSelf=\"center\" row=\"2\"  :text=\"stat.key\"></Label>\n      </FlexboxLayout>\n   </GridLayout>\n   <FlexboxLayout justifyContent=\"space-around\" >\n     <Label alignSelf=\"center\" :text=\"user.status\"></Label>\n   </FlexboxLayout>\n  </StackLayout>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 191:
/* exports provided: default */
/* exports used: default */
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-09a617b2","hasScoped":false,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/Clubs.vue ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <StackLayout>\n    <Label text=\"The clubs\"></Label>\n  </StackLayout>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 192:
/* exports provided: default */
/* exports used: default */
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-35c4fab1","hasScoped":false,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/LiquorStores.vue ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <stack-layout columns=\"*,2*\" rows=\"2*,3*\" width=\"300\" height=\"300\">\n    <Label class=\"text-primary\" text=\"https://nativescript.org\" @tap=\"taped\">{{ Title }}</Label>\n    <Label class=\"text-muted\" :text=\"DateTimeStart\"></Label>\n    <Label class=\"text-danger\" :text=\"PostedAt\"></Label>\n  </stack-layout>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 193:
/* exports provided: default */
/* exports used: default */
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-3f16ec98","hasScoped":false,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/Events.vue ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <stack-layout columns=\"*,2*\" rows=\"2*,3*\" width=\"300\" height=\"300\">\n    <Label class=\"text-primary\" text=\"https://nativescript.org\" @tap=\"taped\">{{ Title }}</Label>\n    <Label class=\"text-muted\" :text=\"DateTimeStart\"></Label>\n    <Label class=\"text-danger\" :text=\"PostedAt\"></Label>\n  </stack-layout>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 194:
/* exports provided: default */
/* exports used: default */
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-45ba5ed4","hasScoped":false,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/App.vue ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <page\n      actionBarHidden=\"true\">\n      <StackLayout>\n          <BottomNav\n              style=\"margin-bottom:2px;bottom:2px\"\n              :LoggedIn=\"loggedIn\"\n              :User=\"user\">\n          </BottomNav>\n      </StackLayout>\n  </page>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 195:
/* exports provided: default */
/* exports used: default */
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-67410f3a","hasScoped":false,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/Home.vue ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <stack-layout style=\"margin-top:200px\">\n    <SearchBar placeholder=\"Search ...\"></SearchBar>\n    <scroll-view orientation=\"horizontal\" style=\"height:20%;background-color:red\">\n      <Label text=\"Profiling\"></Label>\n    </scroll-view>\n  </stack-layout>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 196:
/* exports provided: default */
/* exports used: default */
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-a0ab07a6","hasScoped":true,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/BottomNav.vue ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <TabView id=\"bottomNav\" :selectedIndex=\"currentTab\" selectedIndexChanged=\"eventChanged\" :selectedTabChanged=\"()=>{dialogs.alert(\'Hello!\').then(() => {console.log(\'Dialog closed\')});}\" selectedTabTextColor=\"#aa66cc\" androidSelectedTabHighlightColor=\"#9933CC\" tabBackgroundColor=\"transparent\">\n    <TabViewItem @tap=\"tapped\" v-for=\"(tab,i) in tabs\" :key=\"i\" :title=\"tab.text\">\n        <StackLayout>\n          <component :is=\"tab.view\"></component>\n          <StackLayout>\n            <Label :text=\"\'current \' + currentTab\"></Label>\n          </StackLayout>\n        </StackLayout>\n    </TabViewItem>\n  </TabView>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[119]);
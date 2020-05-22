"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type]['apply'](console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),

/***/ 11:
/*!**************************************!*\
  !*** H:/帝莎学院仿微信/nvue/store/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 6));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    token: "",
    login: false,
    userInfo: {} },

  mutations: {
    INIT: function INIT(state) {
      uni.getStorage({
        key: 'userInfo',
        success: function success(res) {
          state.login = true;
          state.token = res.userInfo.token;
          state.userInfo = res.userInfo;
        } });

    },
    LOGIN: function LOGIN(state, provider) {
      if (provider) {
        state.login = true;
        state.token = provider.token || '';
        state.userInfo = provider || {};
        uni.setStorage({
          key: "userInfo",
          data: provider });

      }
    },
    LOGOUT: function LOGOUT(state) {
      state.login = false;
      state.token = "";
      state.userInfo = {};
      uni.removeStorage({
        key: "userInfo" });

    } },

  actions: {} });var _default =

store;exports.default = _default;

/***/ }),

/***/ 12:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.default = exports.createNamespacedHelpers = exports.mapActions = exports.mapGetters = exports.mapMutations = exports.mapState = exports.Store = void 0; /**
                                                                                                                                                                                                                                                                      * vuex v3.0.1
                                                                                                                                                                                                                                                                      * (c) 2017 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
var applyMixin = function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
typeof window !== 'undefined' &&
window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */
/**
       * Deep copy the given object considering circular structure.
       * This function caches all nested objects and its copies.
       * If it detects circular structure, use cached copy to avoid infinite loop.
       *
       * @param {*} obj
       * @param {Array<Object>} cache
       * @return {*}
       */


/**
           * forEach for object
           */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors$1);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  var state = options.state;if (state === void 0) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  this._actionSubscribers.forEach(function (sub) {return sub(action, this$1.state);});

  return entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);
};

Store.prototype.subscribe = function subscribe(fn) {
  return genericSubscribe(fn, this._subscribers);
};

Store.prototype.subscribeAction = function subscribeAction(fn) {
  return genericSubscribe(fn, this._actionSubscribers);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors);

function genericSubscribe(fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () {return fn(store);};
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) {return;}

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function get() {return store.getters[type];},
      enumerable: true });

  });

  return gettersProxy;
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.length ?
  path.reduce(function (state, key) {return state[key];}, state) :
  state;
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "Expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});exports.mapState = mapState;

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});exports.mapMutations = mapMutations;

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});exports.mapGetters = mapGetters;

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});exports.mapActions = mapActions;

var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};exports.createNamespacedHelpers = createNamespacedHelpers;

function normalizeMap(map) {
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =



index_esm;exports.default = _default;

/***/ }),

/***/ 15:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 16:
/*!**************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/main.js?{"page":"pages%2Fcompage%2FapplyFriend%2FapplyFriend"} ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 2);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 17);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_compage_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/compage/applyFriend/applyFriend.nvue?mpType=page */ 20);

        
        
        
        _pages_compage_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_compage_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/compage/applyFriend/applyFriend'
        _pages_compage_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_compage_applyFriend_applyFriend_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 17:
/*!***************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/main.js?{"type":"appStyle"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 18).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 18:
/*!***************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 19);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 19:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "justify-around": {
    "justifyContent": "space-around"
  },
  "align-center": {
    "alignItems": "center"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "w-100": {
    "width": "750rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-1": {
    "marginTop": "10rpx"
  },
  "mb-2": {
    "marginTop": "20rpx"
  },
  "mb-3": {
    "marginTop": "30rpx"
  },
  "mb-4": {
    "marginTop": "40rpx"
  },
  "mb-5": {
    "marginTop": "50rpx"
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "font-20": {
    "fontSize": "20rpx"
  },
  "font-25": {
    "fontSize": "25rpx"
  },
  "font-30": {
    "fontSize": "30rpx"
  },
  "font-35": {
    "fontSize": "35rpx"
  },
  "font-40": {
    "fontSize": "40rpx"
  },
  "text-bold": {
    "fontWeight": "bold"
  },
  "text-white": {
    "color": "#FFFFFF"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#FFFFFF"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "rgba(39,40,50,0.1)"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(39,40,50,0.1)"
  },
  "font-xs": {
    "fontSize": "12rpx"
  },
  "font-sm": {
    "fontSize": "14rpx"
  },
  "font-md": {
    "fontSize": "16rpx"
  },
  "font-lg": {
    "fontSize": "18rpx"
  },
  "text-main-color": {
    "color": "rgba(39,40,50,1)"
  },
  "text-sec-color": {
    "color": "rgba(39,40,50,0.6)"
  },
  "text-three-color": {
    "color": "rgba(39,40,50,0.4)"
  },
  "bg-dark-color": {
    "backgroundColor": "rgba(39,40,50,0.2)"
  },
  "bg-color-1": {
    "backgroundColor": "rgba(244,244,244,1)"
  },
  "bg-color-2": {
    "backgroundColor": "rgba(243,244,246,1)"
  },
  "yellow": {
    "backgroundColor": "rgba(255,228,49,1)"
  },
  "red": {
    "backgroundColor": "rgba(255,93,91,1)"
  },
  "blue": {
    "backgroundColor": "rgba(87,153,255,1)"
  },
  "round-sm": {
    "borderRadius": "5rpx"
  },
  "round-md": {
    "borderRadius": "10rpx"
  },
  "round-lg": {
    "borderRadius": "20rpx"
  },
  "circle": {
    "borderRadius": 50
  },
  "border-color": {
    "borderColor": "rgba(39,40,50,0.1)"
  },
  "temp-bg": {
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "temp-border": {
    "borderStyle": "solid",
    "borderColor": "#FF0000",
    "borderWidth": "2"
  }
}

/***/ }),

/***/ 2:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 3);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),

/***/ 20:
/*!******************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages/compage/applyFriend/applyFriend.nvue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyFriend.nvue?vue&type=template&id=565d0ec6&mpType=page */ 21);
/* harmony import */ var _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyFriend.nvue?vue&type=script&lang=js&mpType=page */ 23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "2783a664",
  false,
  _applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "H:/帝莎学院仿微信/nvue/pages/compage/applyFriend/applyFriend.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 21:
/*!************************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages/compage/applyFriend/applyFriend.nvue?vue&type=template&id=565d0ec6&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./applyFriend.nvue?vue&type=template&id=565d0ec6&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_template_id_565d0ec6_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 22:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/pages/compage/applyFriend/applyFriend.nvue?vue&type=template&id=565d0ec6&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("view", { staticClass: ["apply-friend", "mx-5"] }, [
        _c("view", { staticClass: ["title", "align-center", "mt-4"] }, [
          _c(
            "u-text",
            { staticClass: ["text-main-color", "font-40", "text-bold"] },
            [_vm._v("申请添加好友")]
          )
        ]),
        _c("view", { staticClass: ["chunk", "my-5"] }, [
          _c("u-text", { staticClass: ["tag", "text-sec-color", "font-30"] }, [
            _vm._v("发送添加朋友申请")
          ]),
          _c(
            "view",
            {
              staticClass: ["box", "bg-color-2", "round-md", "mt-1"],
              staticStyle: { height: "150rpx" }
            },
            [
              _c("u-textarea", {
                staticClass: ["textarea", "mx-2", "my-2"],
                attrs: { value: "", value: _vm.applyValue },
                on: {
                  input: function($event) {
                    _vm.applyValue = $event.detail.value
                  }
                }
              })
            ],
            1
          )
        ]),
        _c("view", { staticClass: ["chunk"] }, [
          _c("u-text", { staticClass: ["tag", "text-sec-color", "font-30"] }, [
            _vm._v("设置备注")
          ]),
          _c(
            "view",
            { staticClass: ["box", "bg-color-2", "round-md", "mt-1", "py-2"] },
            [
              _c("u-input", {
                attrs: { type: "text", value: "123", value: _vm.nickname },
                on: {
                  input: function($event) {
                    _vm.nickname = $event.detail.value
                  }
                }
              })
            ],
            1
          )
        ]),
        _c("view", { staticClass: ["chunk", "my-5"] }, [
          _c("u-text", { staticClass: ["tag", "text-sec-color", "font-30"] }, [
            _vm._v("设置朋友权限")
          ]),
          _c(
            "view",
            { staticClass: ["box", "bg-color-2", "round-md", "mt-1"] },
            [_c("u-text", [_vm._v("请设置朋友权限")])]
          )
        ]),
        _c("view", { staticClass: ["chunk"] }, [
          _c("u-text", { staticClass: ["tag", "text-sec-color", "font-30"] }, [
            _vm._v("朋友圈和视频动态")
          ]),
          _c(
            "view",
            { staticClass: ["box", "bg-color-2", "round-md", "mt-1"] },
            [_c("u-text", [_vm._v("朋友圈和视频动态")])]
          )
        ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 23:
/*!******************************************************************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages/compage/applyFriend/applyFriend.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./applyFriend.nvue?vue&type=script&lang=js&mpType=page */ 24);
/* harmony import */ var _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_workapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_applyFriend_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 24:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/帝莎学院仿微信/nvue/pages/compage/applyFriend/applyFriend.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 95));






























var _Friend = __webpack_require__(/*! @/model/Friend.js */ 25);
var _vuex = __webpack_require__(/*! vuex */ 12);
var _util = __webpack_require__(/*! @/utils/util.js */ 98);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  data: function data() {
    return {
      applyValue: '想认识你',
      nickname: '',
      userId: '',
      friendId: '' };

  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    // 好友申请
    this.applyFriend();
  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['userInfo'])),

  onLoad: function onLoad(options) {
    __f__("log", options, 123, " at pages\\compage\\applyFriend\\applyFriend.nvue:52");
    if (options.friendId) {
      this.friendId = options.friendId;
    }
  },
  methods: {
    // 好友申请
    applyFriend: function applyFriend() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var params, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                uni.showLoading({
                  title: '发送中...' });

                params = {
                  applyValue: _this.applyValue,
                  nickname: _this.nickname,
                  userId: _this.userInfo._id,
                  friendId: _this.friendId };_context.next = 4;return (

                  _Friend.Friend.applyFriend(params));case 4:res = _context.sent;
                setTimeout(function () {
                  uni.hideLoading();
                  uni.navigateBack({
                    delta: 1 });

                  (0, _util._toast)('发送成功', 'center');
                }, 1500);case 6:case "end":return _context.stop();}}}, _callee);}))();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),

/***/ 25:
/*!***************************************!*\
  !*** H:/帝莎学院仿微信/nvue/model/Friend.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.Friend = void 0;var _http = __webpack_require__(/*! ../utils/http.js */ 26);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var



Friend = /*#__PURE__*/function () {function Friend() {_classCallCheck(this, Friend);}_createClass(Friend, null, [{ key: "applyFriend",
    // 申请添加好友
    value: function applyFriend(params) {
      __f__("log", params, " at model\\Friend.js:8");
      return _http.Http.request({
        url: "/friend/apply",
        data: {
          apply_value: params.applyValue,
          nickname: params.nickname,
          user_id: params.userId,
          friend_id: params.friendId } });


    }

    // 检测是否好友
  }, { key: "checkIsFriend", value: function checkIsFriend(userId, friendId) {
      return _http.Http.request({
        url: "/friend/check?userId=".concat(userId, "&friendId=").concat(friendId),
        method: "GET" });

    } }]);return Friend;}();exports.Friend = Friend;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),

/***/ 26:
/*!*************************************!*\
  !*** H:/帝莎学院仿微信/nvue/utils/http.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.Http = void 0;var _config = __webpack_require__(/*! @/config/config */ 27);


var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var errors = {
  "400001": "数据不合法" };var


Http = /*#__PURE__*/function () {function Http() {_classCallCheck(this, Http);}_createClass(Http, null, [{ key: "request", value: function request(_ref)




    {var url = _ref.url,_ref$data = _ref.data,data = _ref$data === void 0 ? {} : _ref$data,_ref$method = _ref.method,method = _ref$method === void 0 ? "POST" : _ref$method;
      return new Promise(function (resolve, reject) {
        // 这里从store中拿到token
        var token = _store.default.state.token || '';
        __f__("log", token, "token", " at utils\\http.js:19");
        uni.request({
          url: "".concat(_config.config.apiBaseUrl).concat(url),
          data: data,
          method: method,
          header: {
            "Authorization": token },

          success: function success(res) {
            var statusCode = res.statusCode.toString();
            // console.log(res, "http")
            if (statusCode.startsWith('2')) {
              if (res.data.status == 0) {
                return resolve(res.data);
              }
              // uni.showToast({
              // 	title: res.data.msg,
              // 	icon: "none"
              // })

            } else {
              // 错误
              uni.showToast({
                title: res.data.message,
                icon: "none" });

            }
          },
          fail: function fail(err) {
            reject(err);
            __f__("log", err, "fail", " at utils\\http.js:49");
            uni.showToast({
              title: "请稍后再试",
              icon: "none" });

          } });

      });
    } }]);return Http;}();exports.Http = Http;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),

/***/ 27:
/*!****************************************!*\
  !*** H:/帝莎学院仿微信/nvue/config/config.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.config = void 0;var config = {
  apiBaseUrl: 'http://192.168.1.100:3000' };exports.config = config;

/***/ }),

/***/ 3:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),

/***/ 4:
/*!***************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages.json?{"type":"style"} ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/login/login":{},"pages/compage/visiting/visiting":{"navigationBarBackgroundColor":"#ffffff","titleNView":{"buttons":[{"type":"menu"}]}},"pages/compage/addFriend/addFriend":{},"pages/tabbar/contacts/contacts":{},"pages/tabbar/index/index":{},"pages/tabbar/my/my":{},"pages/tabbar/find/find":{},"pages/compage/applyFriend/applyFriend":{"navigationBarBackgroundColor":"#ffffff","titleNView":{"buttons":[{"text":"发送","fontSize":"18px","width":"100px"}]}}},"globalStyle":{}});

/***/ }),

/***/ 5:
/*!**************************************************!*\
  !*** H:/帝莎学院仿微信/nvue/pages.json?{"type":"stat"} ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__67AA67B"});

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ 95:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 96);

/***/ }),

/***/ 96:
/*!****************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ 98:
/*!*************************************!*\
  !*** H:/帝莎学院仿微信/nvue/utils/util.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports._toast = _toast; // showToast
function _toast(title, position, icon) {
  uni.showToast({
    title: title,
    icon: icon || "none",
    position: position || "top" });

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5IiwidW5pLWFwcDovLy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVleC9kaXN0L3Z1ZXguZXNtLmpzPzJmNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL21haW4uanM/YzhhZSIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvbWFpbi5qcz9iMzc1Iiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9BcHAudnVlPzY4ODMiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL0FwcC52dWU/YTA1YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3VuaS1zdGF0L2Rpc3QvaW5kZXguanM/OTIxYiIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvcGFnZXMvY29tcGFnZS9hcHBseUZyaWVuZC9hcHBseUZyaWVuZC5udnVlPzgxZDkiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL3BhZ2VzL2NvbXBhZ2UvYXBwbHlGcmllbmQvYXBwbHlGcmllbmQubnZ1ZT9kM2FkIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy9jb21wYWdlL2FwcGx5RnJpZW5kL2FwcGx5RnJpZW5kLm52dWU/OGU0OCIsIndlYnBhY2s6Ly8vSDov5bid6I6O5a2m6Zmi5Lu/5b6u5L+hL252dWUvcGFnZXMvY29tcGFnZS9hcHBseUZyaWVuZC9hcHBseUZyaWVuZC5udnVlPzRlYWYiLCJ1bmktYXBwOi8vL3BhZ2VzL2NvbXBhZ2UvYXBwbHlGcmllbmQvYXBwbHlGcmllbmQubnZ1ZSIsInVuaS1hcHA6Ly8vbW9kZWwvRnJpZW5kLmpzIiwidW5pLWFwcDovLy91dGlscy9odHRwLmpzIiwidW5pLWFwcDovLy9jb25maWcvY29uZmlnLmpzIiwid2VicGFjazovLy9IOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy5qc29uPzg1NmUiLCJ3ZWJwYWNrOi8vL0g6L+W4neiOjuWtpumZouS7v+W+ruS/oS9udnVlL3BhZ2VzLmpzb24/NTMxMiIsbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdnVlL2JhYmVsLXByZXNldC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzPzQ3OTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2dWUvYmFiZWwtcHJlc2V0LWFwcC9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzPzk1YTIiLCJ1bmktYXBwOi8vL3V0aWxzL3V0aWwuanMiXSwibmFtZXMiOlsidHlwb2YiLCJ2IiwicyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImlzRGVidWdNb2RlIiwiX19jaGFubmVsSWRfXyIsImxvZyIsInR5cGUiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJhcHBseSIsImZvcm1hdExvZyIsInNoaWZ0IiwicHVzaCIsInBvcCIsInJlcGxhY2UiLCJtc2dzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJWdWUiLCJ1c2UiLCJWdWV4Iiwic3RvcmUiLCJTdG9yZSIsInN0YXRlIiwidG9rZW4iLCJsb2dpbiIsInVzZXJJbmZvIiwibXV0YXRpb25zIiwiSU5JVCIsInVuaSIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwicmVzIiwiTE9HSU4iLCJwcm92aWRlciIsInNldFN0b3JhZ2UiLCJkYXRhIiwiTE9HT1VUIiwicmVtb3ZlU3RvcmFnZSIsImFjdGlvbnMiLCJhcHBseU1peGluIiwidmVyc2lvbiIsIk51bWJlciIsInNwbGl0IiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2dWV4SW5pdCIsIl9pbml0Iiwib3B0aW9ucyIsImluaXQiLCJjb25jYXQiLCIkb3B0aW9ucyIsIiRzdG9yZSIsInBhcmVudCIsImRldnRvb2xIb29rIiwid2luZG93IiwiX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsImRldnRvb2xQbHVnaW4iLCJfZGV2dG9vbEhvb2siLCJlbWl0Iiwib24iLCJ0YXJnZXRTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsInN1YnNjcmliZSIsIm11dGF0aW9uIiwiZm9yRWFjaFZhbHVlIiwib2JqIiwiZm4iLCJrZXlzIiwiZm9yRWFjaCIsImlzT2JqZWN0IiwiaXNQcm9taXNlIiwidmFsIiwidGhlbiIsImFzc2VydCIsImNvbmRpdGlvbiIsIkVycm9yIiwiTW9kdWxlIiwicmF3TW9kdWxlIiwicnVudGltZSIsIl9jaGlsZHJlbiIsImNyZWF0ZSIsIl9yYXdNb2R1bGUiLCJyYXdTdGF0ZSIsInByb3RvdHlwZUFjY2Vzc29ycyQxIiwibmFtZXNwYWNlZCIsImNvbmZpZ3VyYWJsZSIsImdldCIsImFkZENoaWxkIiwibW9kdWxlIiwicmVtb3ZlQ2hpbGQiLCJnZXRDaGlsZCIsInVwZGF0ZSIsImdldHRlcnMiLCJmb3JFYWNoQ2hpbGQiLCJmb3JFYWNoR2V0dGVyIiwiZm9yRWFjaEFjdGlvbiIsImZvckVhY2hNdXRhdGlvbiIsImRlZmluZVByb3BlcnRpZXMiLCJNb2R1bGVDb2xsZWN0aW9uIiwicmF3Um9vdE1vZHVsZSIsInJlZ2lzdGVyIiwicGF0aCIsInJlZHVjZSIsInJvb3QiLCJnZXROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJ1cGRhdGUkMSIsInRoaXMkMSIsInByb2Nlc3MiLCJhc3NlcnRSYXdNb2R1bGUiLCJuZXdNb2R1bGUiLCJzbGljZSIsIm1vZHVsZXMiLCJyYXdDaGlsZE1vZHVsZSIsInVucmVnaXN0ZXIiLCJ0YXJnZXRNb2R1bGUiLCJ3YXJuIiwiZnVuY3Rpb25Bc3NlcnQiLCJ2YWx1ZSIsImV4cGVjdGVkIiwib2JqZWN0QXNzZXJ0IiwiaGFuZGxlciIsImFzc2VydFR5cGVzIiwiYXNzZXJ0T3B0aW9ucyIsIm1ha2VBc3NlcnRpb25NZXNzYWdlIiwiYnVmIiwiaW5zdGFsbCIsIlByb21pc2UiLCJwbHVnaW5zIiwic3RyaWN0IiwiX2NvbW1pdHRpbmciLCJfYWN0aW9ucyIsIl9hY3Rpb25TdWJzY3JpYmVycyIsIl9tdXRhdGlvbnMiLCJfd3JhcHBlZEdldHRlcnMiLCJfbW9kdWxlcyIsIl9tb2R1bGVzTmFtZXNwYWNlTWFwIiwiX3N1YnNjcmliZXJzIiwiX3dhdGNoZXJWTSIsInJlZiIsImRpc3BhdGNoIiwiY29tbWl0IiwiYm91bmREaXNwYXRjaCIsInBheWxvYWQiLCJib3VuZENvbW1pdCIsImluc3RhbGxNb2R1bGUiLCJyZXNldFN0b3JlVk0iLCJwbHVnaW4iLCJjb25maWciLCJkZXZ0b29scyIsInByb3RvdHlwZUFjY2Vzc29ycyIsIl92bSIsIl9kYXRhIiwiJCRzdGF0ZSIsInNldCIsIl90eXBlIiwiX3BheWxvYWQiLCJfb3B0aW9ucyIsInVuaWZ5T2JqZWN0U3R5bGUiLCJlbnRyeSIsImVycm9yIiwiX3dpdGhDb21taXQiLCJjb21taXRJdGVyYXRvciIsInN1YiIsInNpbGVudCIsImFjdGlvbiIsImFsbCIsImdlbmVyaWNTdWJzY3JpYmUiLCJzdWJzY3JpYmVBY3Rpb24iLCJ3YXRjaCIsImdldHRlciIsImNiIiwiJHdhdGNoIiwicmVnaXN0ZXJNb2R1bGUiLCJpc0FycmF5IiwicHJlc2VydmVTdGF0ZSIsInVucmVnaXN0ZXJNb2R1bGUiLCJwYXJlbnRTdGF0ZSIsImdldE5lc3RlZFN0YXRlIiwiZGVsZXRlIiwicmVzZXRTdG9yZSIsImhvdFVwZGF0ZSIsIm5ld09wdGlvbnMiLCJjb21taXR0aW5nIiwic3VicyIsImkiLCJzcGxpY2UiLCJob3QiLCJvbGRWbSIsIndyYXBwZWRHZXR0ZXJzIiwiY29tcHV0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJlbmFibGVTdHJpY3RNb2RlIiwibmV4dFRpY2siLCIkZGVzdHJveSIsInJvb3RTdGF0ZSIsImlzUm9vdCIsIm1vZHVsZU5hbWUiLCJsb2NhbCIsImNvbnRleHQiLCJtYWtlTG9jYWxDb250ZXh0IiwibmFtZXNwYWNlZFR5cGUiLCJyZWdpc3Rlck11dGF0aW9uIiwicmVnaXN0ZXJBY3Rpb24iLCJyZWdpc3RlckdldHRlciIsImNoaWxkIiwibm9OYW1lc3BhY2UiLCJtYWtlTG9jYWxHZXR0ZXJzIiwiZ2V0dGVyc1Byb3h5Iiwic3BsaXRQb3MiLCJsb2NhbFR5cGUiLCJ3cmFwcGVkTXV0YXRpb25IYW5kbGVyIiwid3JhcHBlZEFjdGlvbkhhbmRsZXIiLCJyb290R2V0dGVycyIsInJlc29sdmUiLCJjYXRjaCIsImVyciIsInJhd0dldHRlciIsIndyYXBwZWRHZXR0ZXIiLCJkZWVwIiwic3luYyIsIl9WdWUiLCJtYXBTdGF0ZSIsIm5vcm1hbGl6ZU5hbWVzcGFjZSIsInN0YXRlcyIsIm5vcm1hbGl6ZU1hcCIsIm1hcHBlZFN0YXRlIiwiZ2V0TW9kdWxlQnlOYW1lc3BhY2UiLCJ2dWV4IiwibWFwTXV0YXRpb25zIiwibWFwcGVkTXV0YXRpb24iLCJsZW4iLCJtYXBHZXR0ZXJzIiwibWFwcGVkR2V0dGVyIiwibWFwQWN0aW9ucyIsIm1hcHBlZEFjdGlvbiIsImNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzIiwiYmluZCIsImNoYXJBdCIsImhlbHBlciIsImluZGV4X2VzbSIsIlNUQVRfVkVSU0lPTiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsImdldERDbG91ZElkIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwic2lnbiIsInN1YnN0ciIsImdldFNwbGljaW5nIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJlX24iLCJlX3YiLCJnZXROZXR3b3JrVHlwZSIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJGcmllbmQiLCJwYXJhbXMiLCJIdHRwIiwiYXBwbHlfdmFsdWUiLCJhcHBseVZhbHVlIiwibmlja25hbWUiLCJ1c2VyX2lkIiwidXNlcklkIiwiZnJpZW5kX2lkIiwiZnJpZW5kSWQiLCJlcnJvcnMiLCJyZWplY3QiLCJhcGlCYXNlVXJsIiwiaGVhZGVyIiwic3RhdHVzQ29kZSIsInN0YXJ0c1dpdGgiLCJzdGF0dXMiLCJzaG93VG9hc3QiLCJpY29uIiwiZXhwb3J0cyIsIk9wIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImFyZyIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJyZWNvcmQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIm9iamVjdCIsInJldmVyc2UiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0IiwicHJldiIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkZ1bmN0aW9uIiwiX3RvYXN0IiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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SDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFD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QUksSUFBSSxNQUZEO0FBR2IyRyxZQUFRLEVBQUVBLFFBQVEsSUFBSSxLQUhULEVBQWQ7O0FBS0EsQyIsImZpbGUiOiJwYWdlcy9jb21wYWdlL2FwcGx5RnJpZW5kL2FwcGx5RnJpZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcbiIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIHZhciBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXG59XG5cbmZ1bmN0aW9uIGlzRGVidWdNb2RlICgpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgcmV0dXJuIHR5cGVvZiBfX2NoYW5uZWxJZF9fID09PSAnc3RyaW5nJyAmJiBfX2NoYW5uZWxJZF9fXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cgKHR5cGUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldXG4gIH1cbiAgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldXG4gIH1cbiAgdmFyIHR5cGUgPSBhcmdzLnNoaWZ0KClcbiAgaWYgKGlzRGVidWdNb2RlKCkpIHtcbiAgICBhcmdzLnB1c2goYXJncy5wb3AoKS5yZXBsYWNlKCdhdCAnLCAndW5pLWFwcDovLy8nKSlcbiAgICByZXR1cm4gY29uc29sZVt0eXBlXVsnYXBwbHknXShjb25zb2xlLCBhcmdzKVxuICB9XG5cbiAgdmFyIG1zZ3MgPSBhcmdzLm1hcChmdW5jdGlvbiAodikge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICh0eXBlID09PSAnW29iamVjdCBvYmplY3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBhcnJheV0nKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcblxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdlxuICB9KVxuICB2YXIgbXNnID0gJydcblxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XG4gICAgdmFyIGxhc3RNc2cgPSBtc2dzLnBvcCgpXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXG5cbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcbiAgICAgIG1zZyArPSBsYXN0TXNnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtc2cgPSBtc2dzWzBdXG4gIH1cblxuICBjb25zb2xlW3R5cGVdKG1zZylcbn1cbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5WdWUudXNlKFZ1ZXgpXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG5cdHN0YXRlOiB7XHJcblx0XHR0b2tlbjogXCJcIixcclxuXHRcdGxvZ2luOiBmYWxzZSxcclxuXHRcdHVzZXJJbmZvOiB7fVxyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHRJTklUKHN0YXRlKSB7XHJcblx0XHRcdHVuaS5nZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRrZXk6ICd1c2VySW5mbycsXHJcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0c3RhdGUubG9naW4gPSB0cnVlXHJcblx0XHRcdFx0XHRzdGF0ZS50b2tlbiA9IHJlcy51c2VySW5mby50b2tlblxyXG5cdFx0XHRcdFx0c3RhdGUudXNlckluZm8gPSByZXMudXNlckluZm9cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRMT0dJTihzdGF0ZSwgcHJvdmlkZXIpIHtcclxuXHRcdFx0aWYgKHByb3ZpZGVyKSB7XHJcblx0XHRcdFx0c3RhdGUubG9naW4gPSB0cnVlXHJcblx0XHRcdFx0c3RhdGUudG9rZW4gPSBwcm92aWRlci50b2tlbiB8fCAnJ1xyXG5cdFx0XHRcdHN0YXRlLnVzZXJJbmZvID0gcHJvdmlkZXIgfHwge31cclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRrZXk6IFwidXNlckluZm9cIixcclxuXHRcdFx0XHRcdGRhdGE6IHByb3ZpZGVyXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdExPR09VVChzdGF0ZSkge1xyXG5cdFx0XHRzdGF0ZS5sb2dpbiA9IGZhbHNlXHJcblx0XHRcdHN0YXRlLnRva2VuID0gXCJcIlxyXG5cdFx0XHRzdGF0ZS51c2VySW5mbyA9IHt9XHJcblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlKHtcclxuXHRcdFx0XHRrZXk6IFwidXNlckluZm9cIixcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cdGFjdGlvbnM6IHt9XHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiIsIi8qKlxuICogdnVleCB2My4wLjFcbiAqIChjKSAyMDE3IEV2YW4gWW91XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xudmFyIGFwcGx5TWl4aW4gPSBmdW5jdGlvbiAoVnVlKSB7XG4gIHZhciB2ZXJzaW9uID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pO1xuXG4gIGlmICh2ZXJzaW9uID49IDIpIHtcbiAgICBWdWUubWl4aW4oeyBiZWZvcmVDcmVhdGU6IHZ1ZXhJbml0IH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIG92ZXJyaWRlIGluaXQgYW5kIGluamVjdCB2dWV4IGluaXQgcHJvY2VkdXJlXG4gICAgLy8gZm9yIDEueCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICB2YXIgX2luaXQgPSBWdWUucHJvdG90eXBlLl9pbml0O1xuICAgIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgICAgIG9wdGlvbnMuaW5pdCA9IG9wdGlvbnMuaW5pdFxuICAgICAgICA/IFt2dWV4SW5pdF0uY29uY2F0KG9wdGlvbnMuaW5pdClcbiAgICAgICAgOiB2dWV4SW5pdDtcbiAgICAgIF9pbml0LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWdWV4IGluaXQgaG9vaywgaW5qZWN0ZWQgaW50byBlYWNoIGluc3RhbmNlcyBpbml0IGhvb2tzIGxpc3QuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHZ1ZXhJbml0ICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnM7XG4gICAgLy8gc3RvcmUgaW5qZWN0aW9uXG4gICAgaWYgKG9wdGlvbnMuc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gdHlwZW9mIG9wdGlvbnMuc3RvcmUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcHRpb25zLnN0b3JlKClcbiAgICAgICAgOiBvcHRpb25zLnN0b3JlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQuJHN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IG9wdGlvbnMucGFyZW50LiRzdG9yZTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBkZXZ0b29sSG9vayA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG5mdW5jdGlvbiBkZXZ0b29sUGx1Z2luIChzdG9yZSkge1xuICBpZiAoIWRldnRvb2xIb29rKSB7IHJldHVybiB9XG5cbiAgc3RvcmUuX2RldnRvb2xIb29rID0gZGV2dG9vbEhvb2s7XG5cbiAgZGV2dG9vbEhvb2suZW1pdCgndnVleDppbml0Jywgc3RvcmUpO1xuXG4gIGRldnRvb2xIb29rLm9uKCd2dWV4OnRyYXZlbC10by1zdGF0ZScsIGZ1bmN0aW9uICh0YXJnZXRTdGF0ZSkge1xuICAgIHN0b3JlLnJlcGxhY2VTdGF0ZSh0YXJnZXRTdGF0ZSk7XG4gIH0pO1xuXG4gIHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAobXV0YXRpb24sIHN0YXRlKSB7XG4gICAgZGV2dG9vbEhvb2suZW1pdCgndnVleDptdXRhdGlvbicsIG11dGF0aW9uLCBzdGF0ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgaXRlbSB0aGF0IHBhc3MgdGhlIHRlc3RcbiAqIGJ5IHNlY29uZCBhcmd1bWVudCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8qKlxuICogRGVlcCBjb3B5IHRoZSBnaXZlbiBvYmplY3QgY29uc2lkZXJpbmcgY2lyY3VsYXIgc3RydWN0dXJlLlxuICogVGhpcyBmdW5jdGlvbiBjYWNoZXMgYWxsIG5lc3RlZCBvYmplY3RzIGFuZCBpdHMgY29waWVzLlxuICogSWYgaXQgZGV0ZWN0cyBjaXJjdWxhciBzdHJ1Y3R1cmUsIHVzZSBjYWNoZWQgY29weSB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGNhY2hlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cblxuLyoqXG4gKiBmb3JFYWNoIGZvciBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbHVlIChvYmosIGZuKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihvYmpba2V5XSwga2V5KTsgfSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbXNnKSB7XG4gIGlmICghY29uZGl0aW9uKSB7IHRocm93IG5ldyBFcnJvcigoXCJbdnVleF0gXCIgKyBtc2cpKSB9XG59XG5cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiBNb2R1bGUgKHJhd01vZHVsZSwgcnVudGltZSkge1xuICB0aGlzLnJ1bnRpbWUgPSBydW50aW1lO1xuICB0aGlzLl9jaGlsZHJlbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3Jhd01vZHVsZSA9IHJhd01vZHVsZTtcbiAgdmFyIHJhd1N0YXRlID0gcmF3TW9kdWxlLnN0YXRlO1xuICB0aGlzLnN0YXRlID0gKHR5cGVvZiByYXdTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHJhd1N0YXRlKCkgOiByYXdTdGF0ZSkgfHwge307XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDEgPSB7IG5hbWVzcGFjZWQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEubmFtZXNwYWNlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIXRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gYWRkQ2hpbGQgKGtleSwgbW9kdWxlKSB7XG4gIHRoaXMuX2NoaWxkcmVuW2tleV0gPSBtb2R1bGU7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gcmVtb3ZlQ2hpbGQgKGtleSkge1xuICBkZWxldGUgdGhpcy5fY2hpbGRyZW5ba2V5XTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiBnZXRDaGlsZCAoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9jaGlsZHJlbltrZXldXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAocmF3TW9kdWxlKSB7XG4gIHRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkID0gcmF3TW9kdWxlLm5hbWVzcGFjZWQ7XG4gIGlmIChyYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zID0gcmF3TW9kdWxlLmFjdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zID0gcmF3TW9kdWxlLm11dGF0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycyA9IHJhd01vZHVsZS5nZXR0ZXJzO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIGZvckVhY2hDaGlsZCAoZm4pIHtcbiAgZm9yRWFjaFZhbHVlKHRoaXMuX2NoaWxkcmVuLCBmbik7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hHZXR0ZXIgPSBmdW5jdGlvbiBmb3JFYWNoR2V0dGVyIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQWN0aW9uID0gZnVuY3Rpb24gZm9yRWFjaEFjdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaE11dGF0aW9uID0gZnVuY3Rpb24gZm9yRWFjaE11dGF0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zLCBmbik7XG4gIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBNb2R1bGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMSApO1xuXG52YXIgTW9kdWxlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIE1vZHVsZUNvbGxlY3Rpb24gKHJhd1Jvb3RNb2R1bGUpIHtcbiAgLy8gcmVnaXN0ZXIgcm9vdCBtb2R1bGUgKFZ1ZXguU3RvcmUgb3B0aW9ucylcbiAgdGhpcy5yZWdpc3RlcihbXSwgcmF3Um9vdE1vZHVsZSwgZmFsc2UpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobW9kdWxlLCBrZXkpIHtcbiAgICByZXR1cm4gbW9kdWxlLmdldENoaWxkKGtleSlcbiAgfSwgdGhpcy5yb290KVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0TmFtZXNwYWNlID0gZnVuY3Rpb24gZ2V0TmFtZXNwYWNlIChwYXRoKSB7XG4gIHZhciBtb2R1bGUgPSB0aGlzLnJvb3Q7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBrZXkpIHtcbiAgICBtb2R1bGUgPSBtb2R1bGUuZ2V0Q2hpbGQoa2V5KTtcbiAgICByZXR1cm4gbmFtZXNwYWNlICsgKG1vZHVsZS5uYW1lc3BhY2VkID8ga2V5ICsgJy8nIDogJycpXG4gIH0sICcnKVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlJDEgKHJhd1Jvb3RNb2R1bGUpIHtcbiAgdXBkYXRlKFtdLCB0aGlzLnJvb3QsIHJhd1Jvb3RNb2R1bGUpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlciAocGF0aCwgcmF3TW9kdWxlLCBydW50aW1lKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBydW50aW1lID09PSB2b2lkIDAgKSBydW50aW1lID0gdHJ1ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydFJhd01vZHVsZShwYXRoLCByYXdNb2R1bGUpO1xuICB9XG5cbiAgdmFyIG5ld01vZHVsZSA9IG5ldyBNb2R1bGUocmF3TW9kdWxlLCBydW50aW1lKTtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgdGhpcy5yb290ID0gbmV3TW9kdWxlO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldChwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgcGFyZW50LmFkZENoaWxkKHBhdGhbcGF0aC5sZW5ndGggLSAxXSwgbmV3TW9kdWxlKTtcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChyYXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvckVhY2hWYWx1ZShyYXdNb2R1bGUubW9kdWxlcywgZnVuY3Rpb24gKHJhd0NoaWxkTW9kdWxlLCBrZXkpIHtcbiAgICAgIHRoaXMkMS5yZWdpc3RlcihwYXRoLmNvbmNhdChrZXkpLCByYXdDaGlsZE1vZHVsZSwgcnVudGltZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyIChwYXRoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLmdldChwYXRoLnNsaWNlKDAsIC0xKSk7XG4gIHZhciBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIGlmICghcGFyZW50LmdldENoaWxkKGtleSkucnVudGltZSkgeyByZXR1cm4gfVxuXG4gIHBhcmVudC5yZW1vdmVDaGlsZChrZXkpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlIChwYXRoLCB0YXJnZXRNb2R1bGUsIG5ld01vZHVsZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydFJhd01vZHVsZShwYXRoLCBuZXdNb2R1bGUpO1xuICB9XG5cbiAgLy8gdXBkYXRlIHRhcmdldCBtb2R1bGVcbiAgdGFyZ2V0TW9kdWxlLnVwZGF0ZShuZXdNb2R1bGUpO1xuXG4gIC8vIHVwZGF0ZSBuZXN0ZWQgbW9kdWxlc1xuICBpZiAobmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICAgIGlmICghdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIlt2dWV4XSB0cnlpbmcgdG8gYWRkIGEgbmV3IG1vZHVsZSAnXCIgKyBrZXkgKyBcIicgb24gaG90IHJlbG9hZGluZywgXCIgK1xuICAgICAgICAgICAgJ21hbnVhbCByZWxvYWQgaXMgbmVlZGVkJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUoXG4gICAgICAgIHBhdGguY29uY2F0KGtleSksXG4gICAgICAgIHRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpLFxuICAgICAgICBuZXdNb2R1bGUubW9kdWxlc1trZXldXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZnVuY3Rpb25Bc3NlcnQgPSB7XG4gIGFzc2VydDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7IH0sXG4gIGV4cGVjdGVkOiAnZnVuY3Rpb24nXG59O1xuXG52YXIgb2JqZWN0QXNzZXJ0ID0ge1xuICBhc3NlcnQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpOyB9LFxuICBleHBlY3RlZDogJ2Z1bmN0aW9uIG9yIG9iamVjdCB3aXRoIFwiaGFuZGxlclwiIGZ1bmN0aW9uJ1xufTtcblxudmFyIGFzc2VydFR5cGVzID0ge1xuICBnZXR0ZXJzOiBmdW5jdGlvbkFzc2VydCxcbiAgbXV0YXRpb25zOiBmdW5jdGlvbkFzc2VydCxcbiAgYWN0aW9uczogb2JqZWN0QXNzZXJ0XG59O1xuXG5mdW5jdGlvbiBhc3NlcnRSYXdNb2R1bGUgKHBhdGgsIHJhd01vZHVsZSkge1xuICBPYmplY3Qua2V5cyhhc3NlcnRUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFyYXdNb2R1bGVba2V5XSkgeyByZXR1cm4gfVxuXG4gICAgdmFyIGFzc2VydE9wdGlvbnMgPSBhc3NlcnRUeXBlc1trZXldO1xuXG4gICAgZm9yRWFjaFZhbHVlKHJhd01vZHVsZVtrZXldLCBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICAgIGFzc2VydChcbiAgICAgICAgYXNzZXJ0T3B0aW9ucy5hc3NlcnQodmFsdWUpLFxuICAgICAgICBtYWtlQXNzZXJ0aW9uTWVzc2FnZShwYXRoLCBrZXksIHR5cGUsIHZhbHVlLCBhc3NlcnRPcHRpb25zLmV4cGVjdGVkKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VBc3NlcnRpb25NZXNzYWdlIChwYXRoLCBrZXksIHR5cGUsIHZhbHVlLCBleHBlY3RlZCkge1xuICB2YXIgYnVmID0ga2V5ICsgXCIgc2hvdWxkIGJlIFwiICsgZXhwZWN0ZWQgKyBcIiBidXQgXFxcIlwiICsga2V5ICsgXCIuXCIgKyB0eXBlICsgXCJcXFwiXCI7XG4gIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcbiAgICBidWYgKz0gXCIgaW4gbW9kdWxlIFxcXCJcIiArIChwYXRoLmpvaW4oJy4nKSkgKyBcIlxcXCJcIjtcbiAgfVxuICBidWYgKz0gXCIgaXMgXCIgKyAoSlNPTi5zdHJpbmdpZnkodmFsdWUpKSArIFwiLlwiO1xuICByZXR1cm4gYnVmXG59XG5cbnZhciBWdWU7IC8vIGJpbmQgb24gaW5zdGFsbFxuXG52YXIgU3RvcmUgPSBmdW5jdGlvbiBTdG9yZSAob3B0aW9ucykge1xuICB2YXIgdGhpcyQxID0gdGhpcztcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgLy8gQXV0byBpbnN0YWxsIGlmIGl0IGlzIG5vdCBkb25lIHlldCBhbmQgYHdpbmRvd2AgaGFzIGBWdWVgLlxuICAvLyBUbyBhbGxvdyB1c2VycyB0byBhdm9pZCBhdXRvLWluc3RhbGxhdGlvbiBpbiBzb21lIGNhc2VzLFxuICAvLyB0aGlzIGNvZGUgc2hvdWxkIGJlIHBsYWNlZCBoZXJlLiBTZWUgIzczMVxuICBpZiAoIVZ1ZSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gICAgaW5zdGFsbCh3aW5kb3cuVnVlKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KFZ1ZSwgXCJtdXN0IGNhbGwgVnVlLnVzZShWdWV4KSBiZWZvcmUgY3JlYXRpbmcgYSBzdG9yZSBpbnN0YW5jZS5cIik7XG4gICAgYXNzZXJ0KHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJywgXCJ2dWV4IHJlcXVpcmVzIGEgUHJvbWlzZSBwb2x5ZmlsbCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgIGFzc2VydCh0aGlzIGluc3RhbmNlb2YgU3RvcmUsIFwiU3RvcmUgbXVzdCBiZSBjYWxsZWQgd2l0aCB0aGUgbmV3IG9wZXJhdG9yLlwiKTtcbiAgfVxuXG4gIHZhciBwbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zOyBpZiAoIHBsdWdpbnMgPT09IHZvaWQgMCApIHBsdWdpbnMgPSBbXTtcbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0OyBpZiAoIHN0cmljdCA9PT0gdm9pZCAwICkgc3RyaWN0ID0gZmFsc2U7XG5cbiAgdmFyIHN0YXRlID0gb3B0aW9ucy5zdGF0ZTsgaWYgKCBzdGF0ZSA9PT0gdm9pZCAwICkgc3RhdGUgPSB7fTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHN0YXRlID0gc3RhdGUoKSB8fCB7fTtcbiAgfVxuXG4gIC8vIHN0b3JlIGludGVybmFsIHN0YXRlXG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBmYWxzZTtcbiAgdGhpcy5fYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fbW9kdWxlcyA9IG5ldyBNb2R1bGVDb2xsZWN0aW9uKG9wdGlvbnMpO1xuICB0aGlzLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgdGhpcy5fd2F0Y2hlclZNID0gbmV3IFZ1ZSgpO1xuXG4gIC8vIGJpbmQgY29tbWl0IGFuZCBkaXNwYXRjaCB0byBzZWxmXG4gIHZhciBzdG9yZSA9IHRoaXM7XG4gIHZhciByZWYgPSB0aGlzO1xuICB2YXIgZGlzcGF0Y2ggPSByZWYuZGlzcGF0Y2g7XG4gIHZhciBjb21taXQgPSByZWYuY29tbWl0O1xuICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24gYm91bmREaXNwYXRjaCAodHlwZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiBkaXNwYXRjaC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkKVxuICB9O1xuICB0aGlzLmNvbW1pdCA9IGZ1bmN0aW9uIGJvdW5kQ29tbWl0ICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbW1pdC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkLCBvcHRpb25zKVxuICB9O1xuXG4gIC8vIHN0cmljdCBtb2RlXG4gIHRoaXMuc3RyaWN0ID0gc3RyaWN0O1xuXG4gIC8vIGluaXQgcm9vdCBtb2R1bGUuXG4gIC8vIHRoaXMgYWxzbyByZWN1cnNpdmVseSByZWdpc3RlcnMgYWxsIHN1Yi1tb2R1bGVzXG4gIC8vIGFuZCBjb2xsZWN0cyBhbGwgbW9kdWxlIGdldHRlcnMgaW5zaWRlIHRoaXMuX3dyYXBwZWRHZXR0ZXJzXG4gIGluc3RhbGxNb2R1bGUodGhpcywgc3RhdGUsIFtdLCB0aGlzLl9tb2R1bGVzLnJvb3QpO1xuXG4gIC8vIGluaXRpYWxpemUgdGhlIHN0b3JlIHZtLCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHJlYWN0aXZpdHlcbiAgLy8gKGFsc28gcmVnaXN0ZXJzIF93cmFwcGVkR2V0dGVycyBhcyBjb21wdXRlZCBwcm9wZXJ0aWVzKVxuICByZXNldFN0b3JlVk0odGhpcywgc3RhdGUpO1xuXG4gIC8vIGFwcGx5IHBsdWdpbnNcbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHsgcmV0dXJuIHBsdWdpbih0aGlzJDEpOyB9KTtcblxuICBpZiAoVnVlLmNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xQbHVnaW4odGhpcyk7XG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IHN0YXRlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5zdGF0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl92bS5fZGF0YS4kJHN0YXRlXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoZmFsc2UsIFwiVXNlIHN0b3JlLnJlcGxhY2VTdGF0ZSgpIHRvIGV4cGxpY2l0IHJlcGxhY2Ugc3RvcmUgc3RhdGUuXCIpO1xuICB9XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24gY29tbWl0IChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGNvbW1pdFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG4gICAgdmFyIG9wdGlvbnMgPSByZWYub3B0aW9ucztcblxuICB2YXIgbXV0YXRpb24gPSB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQgfTtcbiAgdmFyIGVudHJ5ID0gdGhpcy5fbXV0YXRpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbXV0YXRpb24gdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gY29tbWl0SXRlcmF0b3IgKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIocGF5bG9hZCk7XG4gICAgfSk7XG4gIH0pO1xuICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1YihtdXRhdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSk7XG5cbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICBvcHRpb25zICYmIG9wdGlvbnMuc2lsZW50XG4gICkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW3Z1ZXhdIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSArIFwiLiBTaWxlbnQgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIFwiICtcbiAgICAgICdVc2UgdGhlIGZpbHRlciBmdW5jdGlvbmFsaXR5IGluIHRoZSB2dWUtZGV2dG9vbHMnXG4gICAgKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2ggKF90eXBlLCBfcGF5bG9hZCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBkaXNwYXRjaFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcblxuICB2YXIgYWN0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX2FjdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBhY3Rpb24gdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIoYWN0aW9uLCB0aGlzJDEuc3RhdGUpOyB9KTtcblxuICByZXR1cm4gZW50cnkubGVuZ3RoID4gMVxuICAgID8gUHJvbWlzZS5hbGwoZW50cnkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBoYW5kbGVyKHBheWxvYWQpOyB9KSlcbiAgICA6IGVudHJ5WzBdKHBheWxvYWQpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlIChmbikge1xuICByZXR1cm4gZ2VuZXJpY1N1YnNjcmliZShmbiwgdGhpcy5fc3Vic2NyaWJlcnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlQWN0aW9uID0gZnVuY3Rpb24gc3Vic2NyaWJlQWN0aW9uIChmbikge1xuICByZXR1cm4gZ2VuZXJpY1N1YnNjcmliZShmbiwgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiB3YXRjaCAoZ2V0dGVyLCBjYiwgb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBnZXR0ZXIgPT09ICdmdW5jdGlvbicsIFwic3RvcmUud2F0Y2ggb25seSBhY2NlcHRzIGEgZnVuY3Rpb24uXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLl93YXRjaGVyVk0uJHdhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldHRlcih0aGlzJDEuc3RhdGUsIHRoaXMkMS5nZXR0ZXJzKTsgfSwgY2IsIG9wdGlvbnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24gcmVwbGFjZVN0YXRlIChzdGF0ZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5fdm0uX2RhdGEuJCRzdGF0ZSA9IHN0YXRlO1xuICB9KTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlIChwYXRoLCByYXdNb2R1bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7IHBhdGggPSBbcGF0aF07IH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICAgIGFzc2VydChwYXRoLmxlbmd0aCA+IDAsICdjYW5ub3QgcmVnaXN0ZXIgdGhlIHJvb3QgbW9kdWxlIGJ5IHVzaW5nIHJlZ2lzdGVyTW9kdWxlLicpO1xuICB9XG5cbiAgdGhpcy5fbW9kdWxlcy5yZWdpc3RlcihwYXRoLCByYXdNb2R1bGUpO1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHRoaXMuc3RhdGUsIHBhdGgsIHRoaXMuX21vZHVsZXMuZ2V0KHBhdGgpLCBvcHRpb25zLnByZXNlcnZlU3RhdGUpO1xuICAvLyByZXNldCBzdG9yZSB0byB1cGRhdGUgZ2V0dGVycy4uLlxuICByZXNldFN0b3JlVk0odGhpcywgdGhpcy5zdGF0ZSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUudW5yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uIHVucmVnaXN0ZXJNb2R1bGUgKHBhdGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7IHBhdGggPSBbcGF0aF07IH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICB9XG5cbiAgdGhpcy5fbW9kdWxlcy51bnJlZ2lzdGVyKHBhdGgpO1xuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZSh0aGlzJDEuc3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBWdWUuZGVsZXRlKHBhcmVudFN0YXRlLCBwYXRoW3BhdGgubGVuZ3RoIC0gMV0pO1xuICB9KTtcbiAgcmVzZXRTdG9yZSh0aGlzKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5ob3RVcGRhdGUgPSBmdW5jdGlvbiBob3RVcGRhdGUgKG5ld09wdGlvbnMpIHtcbiAgdGhpcy5fbW9kdWxlcy51cGRhdGUobmV3T3B0aW9ucyk7XG4gIHJlc2V0U3RvcmUodGhpcywgdHJ1ZSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuX3dpdGhDb21taXQgPSBmdW5jdGlvbiBfd2l0aENvbW1pdCAoZm4pIHtcbiAgdmFyIGNvbW1pdHRpbmcgPSB0aGlzLl9jb21taXR0aW5nO1xuICB0aGlzLl9jb21taXR0aW5nID0gdHJ1ZTtcbiAgZm4oKTtcbiAgdGhpcy5fY29tbWl0dGluZyA9IGNvbW1pdHRpbmc7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggU3RvcmUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuZnVuY3Rpb24gZ2VuZXJpY1N1YnNjcmliZSAoZm4sIHN1YnMpIHtcbiAgaWYgKHN1YnMuaW5kZXhPZihmbikgPCAwKSB7XG4gICAgc3Vicy5wdXNoKGZuKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gc3Vicy5pbmRleE9mKGZuKTtcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBzdWJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZSAoc3RvcmUsIGhvdCkge1xuICBzdG9yZS5fYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBzdGF0ZSA9IHN0b3JlLnN0YXRlO1xuICAvLyBpbml0IGFsbCBtb2R1bGVzXG4gIGluc3RhbGxNb2R1bGUoc3RvcmUsIHN0YXRlLCBbXSwgc3RvcmUuX21vZHVsZXMucm9vdCwgdHJ1ZSk7XG4gIC8vIHJlc2V0IHZtXG4gIHJlc2V0U3RvcmVWTShzdG9yZSwgc3RhdGUsIGhvdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmVWTSAoc3RvcmUsIHN0YXRlLCBob3QpIHtcbiAgdmFyIG9sZFZtID0gc3RvcmUuX3ZtO1xuXG4gIC8vIGJpbmQgc3RvcmUgcHVibGljIGdldHRlcnNcbiAgc3RvcmUuZ2V0dGVycyA9IHt9O1xuICB2YXIgd3JhcHBlZEdldHRlcnMgPSBzdG9yZS5fd3JhcHBlZEdldHRlcnM7XG4gIHZhciBjb21wdXRlZCA9IHt9O1xuICBmb3JFYWNoVmFsdWUod3JhcHBlZEdldHRlcnMsIGZ1bmN0aW9uIChmbiwga2V5KSB7XG4gICAgLy8gdXNlIGNvbXB1dGVkIHRvIGxldmVyYWdlIGl0cyBsYXp5LWNhY2hpbmcgbWVjaGFuaXNtXG4gICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZuKHN0b3JlKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3RvcmUuZ2V0dGVycywga2V5LCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLl92bVtrZXldOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSAvLyBmb3IgbG9jYWwgZ2V0dGVyc1xuICAgIH0pO1xuICB9KTtcblxuICAvLyB1c2UgYSBWdWUgaW5zdGFuY2UgdG8gc3RvcmUgdGhlIHN0YXRlIHRyZWVcbiAgLy8gc3VwcHJlc3Mgd2FybmluZ3MganVzdCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBhZGRlZFxuICAvLyBzb21lIGZ1bmt5IGdsb2JhbCBtaXhpbnNcbiAgdmFyIHNpbGVudCA9IFZ1ZS5jb25maWcuc2lsZW50O1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHRydWU7XG4gIHN0b3JlLl92bSA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IHtcbiAgICAgICQkc3RhdGU6IHN0YXRlXG4gICAgfSxcbiAgICBjb21wdXRlZDogY29tcHV0ZWRcbiAgfSk7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gc2lsZW50O1xuXG4gIC8vIGVuYWJsZSBzdHJpY3QgbW9kZSBmb3IgbmV3IHZtXG4gIGlmIChzdG9yZS5zdHJpY3QpIHtcbiAgICBlbmFibGVTdHJpY3RNb2RlKHN0b3JlKTtcbiAgfVxuXG4gIGlmIChvbGRWbSkge1xuICAgIGlmIChob3QpIHtcbiAgICAgIC8vIGRpc3BhdGNoIGNoYW5nZXMgaW4gYWxsIHN1YnNjcmliZWQgd2F0Y2hlcnNcbiAgICAgIC8vIHRvIGZvcmNlIGdldHRlciByZS1ldmFsdWF0aW9uIGZvciBob3QgcmVsb2FkaW5nLlxuICAgICAgc3RvcmUuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvbGRWbS5fZGF0YS4kJHN0YXRlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkgeyByZXR1cm4gb2xkVm0uJGRlc3Ryb3koKTsgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbE1vZHVsZSAoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aCwgbW9kdWxlLCBob3QpIHtcbiAgdmFyIGlzUm9vdCA9ICFwYXRoLmxlbmd0aDtcbiAgdmFyIG5hbWVzcGFjZSA9IHN0b3JlLl9tb2R1bGVzLmdldE5hbWVzcGFjZShwYXRoKTtcblxuICAvLyByZWdpc3RlciBpbiBuYW1lc3BhY2UgbWFwXG4gIGlmIChtb2R1bGUubmFtZXNwYWNlZCkge1xuICAgIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV0gPSBtb2R1bGU7XG4gIH1cblxuICAvLyBzZXQgc3RhdGVcbiAgaWYgKCFpc1Jvb3QgJiYgIWhvdCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHJvb3RTdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHZhciBtb2R1bGVOYW1lID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgIFZ1ZS5zZXQocGFyZW50U3RhdGUsIG1vZHVsZU5hbWUsIG1vZHVsZS5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbG9jYWwgPSBtb2R1bGUuY29udGV4dCA9IG1ha2VMb2NhbENvbnRleHQoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCk7XG5cbiAgbW9kdWxlLmZvckVhY2hNdXRhdGlvbihmdW5jdGlvbiAobXV0YXRpb24sIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3Rlck11dGF0aW9uKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgbXV0YXRpb24sIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hBY3Rpb24oZnVuY3Rpb24gKGFjdGlvbiwga2V5KSB7XG4gICAgdmFyIHR5cGUgPSBhY3Rpb24ucm9vdCA/IGtleSA6IG5hbWVzcGFjZSArIGtleTtcbiAgICB2YXIgaGFuZGxlciA9IGFjdGlvbi5oYW5kbGVyIHx8IGFjdGlvbjtcbiAgICByZWdpc3RlckFjdGlvbihzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaEdldHRlcihmdW5jdGlvbiAoZ2V0dGVyLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJHZXR0ZXIoc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBnZXR0ZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hDaGlsZChmdW5jdGlvbiAoY2hpbGQsIGtleSkge1xuICAgIGluc3RhbGxNb2R1bGUoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aC5jb25jYXQoa2V5KSwgY2hpbGQsIGhvdCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIG1ha2UgbG9jYWxpemVkIGRpc3BhdGNoLCBjb21taXQsIGdldHRlcnMgYW5kIHN0YXRlXG4gKiBpZiB0aGVyZSBpcyBubyBuYW1lc3BhY2UsIGp1c3QgdXNlIHJvb3Qgb25lc1xuICovXG5mdW5jdGlvbiBtYWtlTG9jYWxDb250ZXh0IChzdG9yZSwgbmFtZXNwYWNlLCBwYXRoKSB7XG4gIHZhciBub05hbWVzcGFjZSA9IG5hbWVzcGFjZSA9PT0gJyc7XG5cbiAgdmFyIGxvY2FsID0ge1xuICAgIGRpc3BhdGNoOiBub05hbWVzcGFjZSA/IHN0b3JlLmRpc3BhdGNoIDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzdG9yZS5fYWN0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgYWN0aW9uIHR5cGU6IFwiICsgKGFyZ3MudHlwZSkgKyBcIiwgZ2xvYmFsIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaCh0eXBlLCBwYXlsb2FkKVxuICAgIH0sXG5cbiAgICBjb21taXQ6IG5vTmFtZXNwYWNlID8gc3RvcmUuY29tbWl0IDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzdG9yZS5fbXV0YXRpb25zW3R5cGVdKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBsb2NhbCBtdXRhdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdG9yZS5jb21taXQodHlwZSwgcGF5bG9hZCwgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGdldHRlcnMgYW5kIHN0YXRlIG9iamVjdCBtdXN0IGJlIGdvdHRlbiBsYXppbHlcbiAgLy8gYmVjYXVzZSB0aGV5IHdpbGwgYmUgY2hhbmdlZCBieSB2bSB1cGRhdGVcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobG9jYWwsIHtcbiAgICBnZXR0ZXJzOiB7XG4gICAgICBnZXQ6IG5vTmFtZXNwYWNlXG4gICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuZ2V0dGVyczsgfVxuICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1ha2VMb2NhbEdldHRlcnMoc3RvcmUsIG5hbWVzcGFjZSk7IH1cbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldE5lc3RlZFN0YXRlKHN0b3JlLnN0YXRlLCBwYXRoKTsgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvY2FsXG59XG5cbmZ1bmN0aW9uIG1ha2VMb2NhbEdldHRlcnMgKHN0b3JlLCBuYW1lc3BhY2UpIHtcbiAgdmFyIGdldHRlcnNQcm94eSA9IHt9O1xuXG4gIHZhciBzcGxpdFBvcyA9IG5hbWVzcGFjZS5sZW5ndGg7XG4gIE9iamVjdC5rZXlzKHN0b3JlLmdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAvLyBza2lwIGlmIHRoZSB0YXJnZXQgZ2V0dGVyIGlzIG5vdCBtYXRjaCB0aGlzIG5hbWVzcGFjZVxuICAgIGlmICh0eXBlLnNsaWNlKDAsIHNwbGl0UG9zKSAhPT0gbmFtZXNwYWNlKSB7IHJldHVybiB9XG5cbiAgICAvLyBleHRyYWN0IGxvY2FsIGdldHRlciB0eXBlXG4gICAgdmFyIGxvY2FsVHlwZSA9IHR5cGUuc2xpY2Uoc3BsaXRQb3MpO1xuXG4gICAgLy8gQWRkIGEgcG9ydCB0byB0aGUgZ2V0dGVycyBwcm94eS5cbiAgICAvLyBEZWZpbmUgYXMgZ2V0dGVyIHByb3BlcnR5IGJlY2F1c2VcbiAgICAvLyB3ZSBkbyBub3Qgd2FudCB0byBldmFsdWF0ZSB0aGUgZ2V0dGVycyBpbiB0aGlzIHRpbWUuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdldHRlcnNQcm94eSwgbG9jYWxUeXBlLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnNbdHlwZV07IH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBnZXR0ZXJzUHJveHlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJNdXRhdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKSB7XG4gIHZhciBlbnRyeSA9IHN0b3JlLl9tdXRhdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9tdXRhdGlvbnNbdHlwZV0gPSBbXSk7XG4gIGVudHJ5LnB1c2goZnVuY3Rpb24gd3JhcHBlZE11dGF0aW9uSGFuZGxlciAocGF5bG9hZCkge1xuICAgIGhhbmRsZXIuY2FsbChzdG9yZSwgbG9jYWwuc3RhdGUsIHBheWxvYWQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJBY3Rpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fYWN0aW9uc1t0eXBlXSB8fCAoc3RvcmUuX2FjdGlvbnNbdHlwZV0gPSBbXSk7XG4gIGVudHJ5LnB1c2goZnVuY3Rpb24gd3JhcHBlZEFjdGlvbkhhbmRsZXIgKHBheWxvYWQsIGNiKSB7XG4gICAgdmFyIHJlcyA9IGhhbmRsZXIuY2FsbChzdG9yZSwge1xuICAgICAgZGlzcGF0Y2g6IGxvY2FsLmRpc3BhdGNoLFxuICAgICAgY29tbWl0OiBsb2NhbC5jb21taXQsXG4gICAgICBnZXR0ZXJzOiBsb2NhbC5nZXR0ZXJzLFxuICAgICAgc3RhdGU6IGxvY2FsLnN0YXRlLFxuICAgICAgcm9vdEdldHRlcnM6IHN0b3JlLmdldHRlcnMsXG4gICAgICByb290U3RhdGU6IHN0b3JlLnN0YXRlXG4gICAgfSwgcGF5bG9hZCwgY2IpO1xuICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcbiAgICAgIHJlcyA9IFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH1cbiAgICBpZiAoc3RvcmUuX2RldnRvb2xIb29rKSB7XG4gICAgICByZXR1cm4gcmVzLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgc3RvcmUuX2RldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6ZXJyb3InLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckdldHRlciAoc3RvcmUsIHR5cGUsIHJhd0dldHRlciwgbG9jYWwpIHtcbiAgaWYgKHN0b3JlLl93cmFwcGVkR2V0dGVyc1t0eXBlXSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBkdXBsaWNhdGUgZ2V0dGVyIGtleTogXCIgKyB0eXBlKSk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVyc1t0eXBlXSA9IGZ1bmN0aW9uIHdyYXBwZWRHZXR0ZXIgKHN0b3JlKSB7XG4gICAgcmV0dXJuIHJhd0dldHRlcihcbiAgICAgIGxvY2FsLnN0YXRlLCAvLyBsb2NhbCBzdGF0ZVxuICAgICAgbG9jYWwuZ2V0dGVycywgLy8gbG9jYWwgZ2V0dGVyc1xuICAgICAgc3RvcmUuc3RhdGUsIC8vIHJvb3Qgc3RhdGVcbiAgICAgIHN0b3JlLmdldHRlcnMgLy8gcm9vdCBnZXR0ZXJzXG4gICAgKVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbmFibGVTdHJpY3RNb2RlIChzdG9yZSkge1xuICBzdG9yZS5fdm0uJHdhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEuJCRzdGF0ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydChzdG9yZS5fY29tbWl0dGluZywgXCJEbyBub3QgbXV0YXRlIHZ1ZXggc3RvcmUgc3RhdGUgb3V0c2lkZSBtdXRhdGlvbiBoYW5kbGVycy5cIik7XG4gICAgfVxuICB9LCB7IGRlZXA6IHRydWUsIHN5bmM6IHRydWUgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE5lc3RlZFN0YXRlIChzdGF0ZSwgcGF0aCkge1xuICByZXR1cm4gcGF0aC5sZW5ndGhcbiAgICA/IHBhdGgucmVkdWNlKGZ1bmN0aW9uIChzdGF0ZSwga2V5KSB7IHJldHVybiBzdGF0ZVtrZXldOyB9LCBzdGF0ZSlcbiAgICA6IHN0YXRlXG59XG5cbmZ1bmN0aW9uIHVuaWZ5T2JqZWN0U3R5bGUgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgaWYgKGlzT2JqZWN0KHR5cGUpICYmIHR5cGUudHlwZSkge1xuICAgIG9wdGlvbnMgPSBwYXlsb2FkO1xuICAgIHBheWxvYWQgPSB0eXBlO1xuICAgIHR5cGUgPSB0eXBlLnR5cGU7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycsIChcIkV4cGVjdHMgc3RyaW5nIGFzIHRoZSB0eXBlLCBidXQgZm91bmQgXCIgKyAodHlwZW9mIHR5cGUpICsgXCIuXCIpKTtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQsIG9wdGlvbnM6IG9wdGlvbnMgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsIChfVnVlKSB7XG4gIGlmIChWdWUgJiYgX1Z1ZSA9PT0gVnVlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbdnVleF0gYWxyZWFkeSBpbnN0YWxsZWQuIFZ1ZS51c2UoVnVleCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgVnVlID0gX1Z1ZTtcbiAgYXBwbHlNaXhpbihWdWUpO1xufVxuXG52YXIgbWFwU3RhdGUgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgc3RhdGVzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKHN0YXRlcykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZFN0YXRlICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuJHN0b3JlLnN0YXRlO1xuICAgICAgdmFyIGdldHRlcnMgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzO1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBTdGF0ZScsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUgPSBtb2R1bGUuY29udGV4dC5zdGF0ZTtcbiAgICAgICAgZ2V0dGVycyA9IG1vZHVsZS5jb250ZXh0LmdldHRlcnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbC5jYWxsKHRoaXMsIHN0YXRlLCBnZXR0ZXJzKVxuICAgICAgICA6IHN0YXRlW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcE11dGF0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBtdXRhdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAobXV0YXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkTXV0YXRpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHZhciBjb21taXQgPSB0aGlzLiRzdG9yZS5jb21taXQ7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcE11dGF0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29tbWl0ID0gbW9kdWxlLmNvbnRleHQuY29tbWl0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuYXBwbHkodGhpcywgW2NvbW1pdF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGNvbW1pdC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEdldHRlcnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgZ2V0dGVycykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChnZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHZhbCA9IG5hbWVzcGFjZSArIHZhbDtcbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEdldHRlciAoKSB7XG4gICAgICBpZiAobmFtZXNwYWNlICYmICFnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcEdldHRlcnMnLCBuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgISh2YWwgaW4gdGhpcy4kc3RvcmUuZ2V0dGVycykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBnZXR0ZXI6IFwiICsgdmFsKSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbdmFsXVxuICAgIH07XG4gICAgLy8gbWFyayB2dWV4IGdldHRlciBmb3IgZGV2dG9vbHNcbiAgICByZXNba2V5XS52dWV4ID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwQWN0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBhY3Rpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRBY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHZhciBkaXNwYXRjaCA9IHRoaXMuJHN0b3JlLmRpc3BhdGNoO1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBBY3Rpb25zJywgbmFtZXNwYWNlKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCA9IG1vZHVsZS5jb250ZXh0LmRpc3BhdGNoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuYXBwbHkodGhpcywgW2Rpc3BhdGNoXS5jb25jYXQoYXJncykpXG4gICAgICAgIDogZGlzcGF0Y2guYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHsgcmV0dXJuICh7XG4gIG1hcFN0YXRlOiBtYXBTdGF0ZS5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcEdldHRlcnM6IG1hcEdldHRlcnMuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucy5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcEFjdGlvbnM6IG1hcEFjdGlvbnMuYmluZChudWxsLCBuYW1lc3BhY2UpXG59KTsgfTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTWFwIChtYXApIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFwKVxuICAgID8gbWFwLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBrZXkgfSk7IH0pXG4gICAgOiBPYmplY3Qua2V5cyhtYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBtYXBba2V5XSB9KTsgfSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZXNwYWNlIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWFwKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICBtYXAgPSBuYW1lc3BhY2U7XG4gICAgICBuYW1lc3BhY2UgPSAnJztcbiAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZS5jaGFyQXQobmFtZXNwYWNlLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgIG5hbWVzcGFjZSArPSAnLyc7XG4gICAgfVxuICAgIHJldHVybiBmbihuYW1lc3BhY2UsIG1hcClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2R1bGVCeU5hbWVzcGFjZSAoc3RvcmUsIGhlbHBlciwgbmFtZXNwYWNlKSB7XG4gIHZhciBtb2R1bGUgPSBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhbW9kdWxlKSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gbW9kdWxlIG5hbWVzcGFjZSBub3QgZm91bmQgaW4gXCIgKyBoZWxwZXIgKyBcIigpOiBcIiArIG5hbWVzcGFjZSkpO1xuICB9XG4gIHJldHVybiBtb2R1bGVcbn1cblxudmFyIGluZGV4X2VzbSA9IHtcbiAgU3RvcmU6IFN0b3JlLFxuICBpbnN0YWxsOiBpbnN0YWxsLFxuICB2ZXJzaW9uOiAnMy4wLjEnLFxuICBtYXBTdGF0ZTogbWFwU3RhdGUsXG4gIG1hcE11dGF0aW9uczogbWFwTXV0YXRpb25zLFxuICBtYXBHZXR0ZXJzOiBtYXBHZXR0ZXJzLFxuICBtYXBBY3Rpb25zOiBtYXBBY3Rpb25zLFxuICBjcmVhdGVOYW1lc3BhY2VkSGVscGVyczogY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnNcbn07XG5cbmV4cG9ydCB7IFN0b3JlLCBpbnN0YWxsLCBtYXBTdGF0ZSwgbWFwTXV0YXRpb25zLCBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zLCBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyB9O1xuZXhwb3J0IGRlZmF1bHQgaW5kZXhfZXNtO1xuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2NvbXBhZ2UvYXBwbHlGcmllbmQvYXBwbHlGcmllbmQubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvY29tcGFnZS9hcHBseUZyaWVuZC9hcHBseUZyaWVuZCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaWNvbmZvbnRcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCJcbiAgfSxcbiAgXCJmbGV4LTFcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiZmxleC1jZW50ZXJcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZsZXgtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImZsZXgtY29sdW1uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImp1c3RpZnktYmV0d2VlblwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWFyb3VuZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiXG4gIH0sXG4gIFwiYWxpZ24tY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImZsZXgtd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInctMTAwXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sLTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtbC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWwtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1sLTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtbC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXItMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1iLTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1iLTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1iLTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1iLTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1iLTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm14LTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXgtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm14LTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXktMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm15LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteS0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXktNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm15LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwbC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBsLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGwtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwbC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBsLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHItMVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHItMlwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHItM1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHItNFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHItNVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHktMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHktMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHktM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHktNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHktNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwiZm9udC0yMFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJmb250LTI1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVycHhcIlxuICB9LFxuICBcImZvbnQtMzBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiZm9udC0zNVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM1cnB4XCJcbiAgfSxcbiAgXCJmb250LTQwXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInRleHQtYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwidGV4dC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInRleHQtZWxsaXBzaXNcIjoge1xuICAgIFwibGluZXNcIjogMVxuICB9LFxuICBcImJnLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYmctaG92ZXItcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6aG92ZXJcIjogXCIjMDA2MmNjXCJcbiAgfSxcbiAgXCJiZy1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYmctaG92ZXItc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiM1NDViNjJcIlxuICB9LFxuICBcImJnLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYmctaG92ZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMWU3ZTM0XCJcbiAgfSxcbiAgXCJiZy1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcImJnLWhvdmVyLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzExN2E4YlwiXG4gIH0sXG4gIFwiYmctd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkMzllMDBcIlxuICB9LFxuICBcImJnLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2JkMjEzMFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctaG92ZXItbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RhZTBlNVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZDIxMjRcIlxuICB9LFxuICBcImJnLXdoaXRlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcImJnLXRyYW5zcGFyZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjEpXCJcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuMSlcIlxuICB9LFxuICBcImZvbnQteHNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMnJweFwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cnB4XCJcbiAgfSxcbiAgXCJmb250LW1kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTZycHhcIlxuICB9LFxuICBcImZvbnQtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOHJweFwiXG4gIH0sXG4gIFwidGV4dC1tYWluLWNvbG9yXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwxKVwiXG4gIH0sXG4gIFwidGV4dC1zZWMtY29sb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuNilcIlxuICB9LFxuICBcInRleHQtdGhyZWUtY29sb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2JhKDM5LDQwLDUwLDAuNClcIlxuICB9LFxuICBcImJnLWRhcmstY29sb3JcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjIpXCJcbiAgfSxcbiAgXCJiZy1jb2xvci0xXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjQ0LDI0NCwyNDQsMSlcIlxuICB9LFxuICBcImJnLWNvbG9yLTJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNDMsMjQ0LDI0NiwxKVwiXG4gIH0sXG4gIFwieWVsbG93XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDIyOCw0OSwxKVwiXG4gIH0sXG4gIFwicmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDkzLDkxLDEpXCJcbiAgfSxcbiAgXCJibHVlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoODcsMTUzLDI1NSwxKVwiXG4gIH0sXG4gIFwicm91bmQtc21cIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicm91bmQtbWRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInJvdW5kLWxnXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJjaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwXG4gIH0sXG4gIFwiYm9yZGVyLWNvbG9yXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiYSgzOSw0MCw1MCwwLjEpXCJcbiAgfSxcbiAgXCJ0ZW1wLWJnXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4zKVwiXG4gIH0sXG4gIFwidGVtcC1ib3JkZXJcIjoge1xuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjRkYwMDAwXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjJcIlxuICB9XG59IiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwbHlGcmllbmQubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjVkMGVjNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXBwbHlGcmllbmQubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9hcHBseUZyaWVuZC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIyNzgzYTY2NFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJIOi/luJ3ojo7lrabpmaLku7/lvq7kv6EvbnZ1ZS9wYWdlcy9jb21wYWdlL2FwcGx5RnJpZW5kL2FwcGx5RnJpZW5kLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcd29ya2FwcFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMCFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTY1ZDBlYzYmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImFwcGx5LWZyaWVuZFwiLCBcIm14LTVcIl0gfSwgW1xuICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widGl0bGVcIiwgXCJhbGlnbi1jZW50ZXJcIiwgXCJtdC00XCJdIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJ0ZXh0LW1haW4tY29sb3JcIiwgXCJmb250LTQwXCIsIFwidGV4dC1ib2xkXCJdIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi55Sz6K+35re75Yqg5aW95Y+LXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJjaHVua1wiLCBcIm15LTVcIl0gfSwgW1xuICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRhZ1wiLCBcInRleHQtc2VjLWNvbG9yXCIsIFwiZm9udC0zMFwiXSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLlj5HpgIHmt7vliqDmnIvlj4vnlLPor7dcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYm94XCIsIFwiYmctY29sb3ItMlwiLCBcInJvdW5kLW1kXCIsIFwibXQtMVwiXSxcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE1MHJweFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidS10ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRleHRhcmVhXCIsIFwibXgtMlwiLCBcIm15LTJcIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiXCIsIHZhbHVlOiBfdm0uYXBwbHlWYWx1ZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5hcHBseVZhbHVlID0gJGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImNodW5rXCJdIH0sIFtcbiAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0YWdcIiwgXCJ0ZXh0LXNlYy1jb2xvclwiLCBcImZvbnQtMzBcIl0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi6K6+572u5aSH5rOoXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJveFwiLCBcImJnLWNvbG9yLTJcIiwgXCJyb3VuZC1tZFwiLCBcIm10LTFcIiwgXCJweS0yXCJdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHZhbHVlOiBcIjEyM1wiLCB2YWx1ZTogX3ZtLm5pY2tuYW1lIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm5pY2tuYW1lID0gJGV2ZW50LmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImNodW5rXCIsIFwibXktNVwiXSB9LCBbXG4gICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGFnXCIsIFwidGV4dC1zZWMtY29sb3JcIiwgXCJmb250LTMwXCJdIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuiuvue9ruaci+WPi+adg+mZkFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJib3hcIiwgXCJiZy1jb2xvci0yXCIsIFwicm91bmQtbWRcIiwgXCJtdC0xXCJdIH0sXG4gICAgICAgICAgICBbX2MoXCJ1LXRleHRcIiwgW192bS5fdihcIuivt+iuvue9ruaci+WPi+adg+mZkFwiKV0pXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJjaHVua1wiXSB9LCBbXG4gICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGFnXCIsIFwidGV4dC1zZWMtY29sb3JcIiwgXCJmb250LTMwXCJdIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuaci+WPi+WciOWSjOinhumikeWKqOaAgVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJib3hcIiwgXCJiZy1jb2xvci0yXCIsIFwicm91bmQtbWRcIiwgXCJtdC0xXCJdIH0sXG4gICAgICAgICAgICBbX2MoXCJ1LXRleHRcIiwgW192bS5fdihcIuaci+WPi+WciOWSjOinhumikeWKqOaAgVwiKV0pXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXHdvcmthcHBcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFx3b3JrYXBwXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FwcGx5RnJpZW5kLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjwhLS0g55Sz6K+35aW95Y+LIC0tPlxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJhcHBseS1mcmllbmQgbXgtNVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZSBhbGlnbi1jZW50ZXIgbXQtNFwiPjx0ZXh0IGNsYXNzPVwidGV4dC1tYWluLWNvbG9yIGZvbnQtNDAgdGV4dC1ib2xkXCI+55Sz6K+35re75Yqg5aW95Y+LPC90ZXh0Pjwvdmlldz5cclxuXHRcdDwhLS0g55Sz6K+3IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjaHVuayBteS01XCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGFnIHRleHQtc2VjLWNvbG9yIGZvbnQtMzBcIj7lj5HpgIHmt7vliqDmnIvlj4vnlLPor7c8L3RleHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm94IGJnLWNvbG9yLTIgcm91bmQtbWQgbXQtMVwiIHN0eWxlPVwiaGVpZ2h0OiAxNTBycHg7XCI+PHRleHRhcmVhIHYtbW9kZWw9XCJhcHBseVZhbHVlXCIgdmFsdWU9XCJcIiBjbGFzcz1cInRleHRhcmVhIG14LTIgbXktMlwiIC8+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5aSH5rOoIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjaHVua1wiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRhZyB0ZXh0LXNlYy1jb2xvciBmb250LTMwXCI+6K6+572u5aSH5rOoPC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJveCBiZy1jb2xvci0yIHJvdW5kLW1kIG10LTEgcHktMlwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJuaWNrbmFtZVwiIHZhbHVlPVwiMTIzXCIgLz48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PCEtLSDmnYPpmZAgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNodW5rIG15LTVcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0YWcgdGV4dC1zZWMtY29sb3IgZm9udC0zMFwiPuiuvue9ruaci+WPi+adg+mZkDwvdGV4dD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3ggYmctY29sb3ItMiByb3VuZC1tZCBtdC0xXCI+6K+36K6+572u5pyL5Y+L5p2D6ZmQPC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g5Yqo5oCB5p2D6ZmQIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjaHVua1wiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRhZyB0ZXh0LXNlYy1jb2xvciBmb250LTMwXCI+5pyL5Y+L5ZyI5ZKM6KeG6aKR5Yqo5oCBPC90ZXh0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJveCBiZy1jb2xvci0yIHJvdW5kLW1kIG10LTFcIj7mnIvlj4vlnIjlkozop4bpopHliqjmgIE8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSAnQC9tb2RlbC9GcmllbmQuanMnO1xyXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwTXV0YXRpb25zIH0gZnJvbSAndnVleCc7XHJcbmltcG9ydCB7IF90b2FzdCB9IGZyb20gJ0AvdXRpbHMvdXRpbC5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YXBwbHlWYWx1ZTogJ+aDs+iupOivhuS9oCcsXHJcblx0XHRcdG5pY2tuYW1lOiAnJyxcclxuXHRcdFx0dXNlcklkOiAnJyxcclxuXHRcdFx0ZnJpZW5kSWQ6ICcnXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0b25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGUpIHtcclxuXHRcdC8vIOWlveWPi+eUs+ivt1xyXG5cdFx0dGhpcy5hcHBseUZyaWVuZCgpO1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdC4uLm1hcFN0YXRlKFsndXNlckluZm8nXSlcclxuXHR9LFxyXG5cdG9uTG9hZChvcHRpb25zKSB7XHJcblx0XHRjb25zb2xlLmxvZyhvcHRpb25zLCAxMjMpO1xyXG5cdFx0aWYgKG9wdGlvbnMuZnJpZW5kSWQpIHtcclxuXHRcdFx0dGhpcy5mcmllbmRJZCA9IG9wdGlvbnMuZnJpZW5kSWQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvLyDlpb3lj4vnlLPor7dcclxuXHRcdGFzeW5jIGFwcGx5RnJpZW5kKCkge1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5Y+R6YCB5LitLi4uJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdFx0XHRhcHBseVZhbHVlOiB0aGlzLmFwcGx5VmFsdWUsXHJcblx0XHRcdFx0bmlja25hbWU6IHRoaXMubmlja25hbWUsXHJcblx0XHRcdFx0dXNlcklkOiB0aGlzLnVzZXJJbmZvLl9pZCxcclxuXHRcdFx0XHRmcmllbmRJZDogdGhpcy5mcmllbmRJZFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBGcmllbmQuYXBwbHlGcmllbmQocGFyYW1zKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdF90b2FzdCgn5Y+R6YCB5oiQ5YqfJywgJ2NlbnRlcicpO1xyXG5cdFx0XHR9LCAxNTAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPjwvc3R5bGU+XG4iLCJpbXBvcnQge1xyXG5cdEh0dHBcclxufSBmcm9tIFwiLi4vdXRpbHMvaHR0cC5qc1wiO1xyXG5cclxuY2xhc3MgRnJpZW5kIHtcclxuXHQvLyDnlLPor7fmt7vliqDlpb3lj4tcclxuXHRzdGF0aWMgYXBwbHlGcmllbmQocGFyYW1zKSB7XHJcblx0XHRjb25zb2xlLmxvZyhwYXJhbXMpXHJcblx0XHRyZXR1cm4gSHR0cC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBgL2ZyaWVuZC9hcHBseWAsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRhcHBseV92YWx1ZTogcGFyYW1zLmFwcGx5VmFsdWUsXHJcblx0XHRcdFx0bmlja25hbWU6IHBhcmFtcy5uaWNrbmFtZSxcclxuXHRcdFx0XHR1c2VyX2lkOiBwYXJhbXMudXNlcklkLFxyXG5cdFx0XHRcdGZyaWVuZF9pZDogcGFyYW1zLmZyaWVuZElkXHJcblx0XHRcdH0sXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Ly8g5qOA5rWL5piv5ZCm5aW95Y+LXHJcblx0c3RhdGljIGNoZWNrSXNGcmllbmQodXNlcklkLCBmcmllbmRJZCkge1xyXG5cdFx0cmV0dXJuIEh0dHAucmVxdWVzdCh7XHJcblx0XHRcdHVybDogYC9mcmllbmQvY2hlY2s/dXNlcklkPSR7dXNlcklkfSZmcmllbmRJZD0ke2ZyaWVuZElkfWAsXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdH0pXHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRGcmllbmRcclxufTtcclxuIiwiaW1wb3J0IHtcclxuXHRjb25maWdcclxufSBmcm9tIFwiQC9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJ1xyXG5cclxuY29uc3QgZXJyb3JzID0ge1xyXG5cdFwiNDAwMDAxXCI6IFwi5pWw5o2u5LiN5ZCI5rOVXCIsXHJcbn1cclxuXHJcbmNsYXNzIEh0dHAge1xyXG5cdHN0YXRpYyByZXF1ZXN0KHtcclxuXHRcdHVybCxcclxuXHRcdGRhdGEgPSB7fSxcclxuXHRcdG1ldGhvZCA9IFwiUE9TVFwiLFxyXG5cdH0pIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdC8vIOi/memHjOS7jnN0b3Jl5Lit5ou/5YiwdG9rZW5cclxuXHRcdFx0bGV0IHRva2VuID0gc3RvcmUuc3RhdGUudG9rZW58fCcnXHJcblx0XHRcdGNvbnNvbGUubG9nKHRva2VuLFwidG9rZW5cIilcclxuXHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdHVybDogYCR7Y29uZmlnLmFwaUJhc2VVcmx9JHt1cmx9YCxcclxuXHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdG1ldGhvZCxcclxuXHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiB0b2tlblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMsIFwiaHR0cFwiKVxyXG5cdFx0XHRcdFx0aWYgKHN0YXR1c0NvZGUuc3RhcnRzV2l0aCgnMicpKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuZGF0YS5zdGF0dXMgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKHJlcy5kYXRhKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHQvLyBcdHRpdGxlOiByZXMuZGF0YS5tc2csXHJcblx0XHRcdFx0XHRcdC8vIFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHRcdFx0Ly8gfSlcclxuXHJcblx0XHRcdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8vIOmUmeivr1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzLmRhdGEubWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZXJyID0+IHtcclxuXHRcdFx0XHRcdHJlamVjdChlcnIpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIsIFwiZmFpbFwiKVxyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eojeWQjuWGjeivlVwiLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRIdHRwXHJcbn07XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuXHRhcGlCYXNlVXJsOiAnaHR0cDovLzE5Mi4xNjguMS4xMDA6MzAwMCdcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRjb25maWdcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOntcInBhZ2VzL2xvZ2luL2xvZ2luXCI6e30sXCJwYWdlcy9jb21wYWdlL3Zpc2l0aW5nL3Zpc2l0aW5nXCI6e1wibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2ZmZmZmZlwiLFwidGl0bGVOVmlld1wiOntcImJ1dHRvbnNcIjpbe1widHlwZVwiOlwibWVudVwifV19fSxcInBhZ2VzL2NvbXBhZ2UvYWRkRnJpZW5kL2FkZEZyaWVuZFwiOnt9LFwicGFnZXMvdGFiYmFyL2NvbnRhY3RzL2NvbnRhY3RzXCI6e30sXCJwYWdlcy90YWJiYXIvaW5kZXgvaW5kZXhcIjp7fSxcInBhZ2VzL3RhYmJhci9teS9teVwiOnt9LFwicGFnZXMvdGFiYmFyL2ZpbmQvZmluZFwiOnt9LFwicGFnZXMvY29tcGFnZS9hcHBseUZyaWVuZC9hcHBseUZyaWVuZFwiOntcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmZmZmZmZcIixcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInRleHRcIjpcIuWPkemAgVwiLFwiZm9udFNpemVcIjpcIjE4cHhcIixcIndpZHRoXCI6XCIxMDBweFwifV19fX0sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fNjdBQTY3QlwifSIsIm1vZHVsZS5leHBvcnRzID0gVnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLy8gc2hvd1RvYXN0XHJcbmZ1bmN0aW9uIF90b2FzdCh0aXRsZSwgcG9zaXRpb24sIGljb24pIHtcclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdHRpdGxlOiB0aXRsZSxcclxuXHRcdGljb246IGljb24gfHwgXCJub25lXCIsXHJcblx0XHRwb3NpdGlvbjogcG9zaXRpb24gfHwgXCJ0b3BcIlxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG5cdF90b2FzdFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
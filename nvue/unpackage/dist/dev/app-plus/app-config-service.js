
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/chat/chat/chat","pages/tabbar/index/index","pages/start/start","pages/login/login","pages/find/moment/moment","pages/friend/applyFriend/applyFriend","pages/compage/visiting/visiting","pages/friend/applyList/applyList","pages/friend/addFriend/addFriend","pages/tabbar/my/my","pages/tabbar/contacts/contacts","pages/tabbar/find/find","pages/compage/chat/chat","pages/user/userDetail/userDetail"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"ededed","backgroundColor":"red","titleNView":false,"scrollIndicator":"none"},"tabBar":{"color":"#000000","selectedColor":"#08C261","borderStyle":"black","backgroundColor":"#F7F7F7","list":[{"iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-select.png","pagePath":"pages/tabbar/index/index","text":"首页"},{"iconPath":"static/tabbar/mail.png","selectedIconPath":"static/tabbar/mail-select.png","pagePath":"pages/tabbar/contacts/contacts","text":"通讯录"},{"iconPath":"static/tabbar/find.png","selectedIconPath":"static/tabbar/find-select.png","pagePath":"pages/tabbar/find/find","text":"发现"},{"iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-select.png","pagePath":"pages/tabbar/my/my","text":"我的"}]},"renderer":"native","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"let's chat","compilerVersion":"2.6.11","entryPagePath":"pages/chat/chat/chat","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/chat/chat/chat","meta":{"isQuit":true,"isNVue":true},"window":{}},{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/start/start","meta":{"isNVue":true},"window":{}},{"path":"/pages/login/login","meta":{"isNVue":true},"window":{}},{"path":"/pages/find/moment/moment","meta":{"isNVue":true},"window":{}},{"path":"/pages/friend/applyFriend/applyFriend","meta":{"isNVue":true},"window":{}},{"path":"/pages/compage/visiting/visiting","meta":{"isNVue":true},"window":{"navigationBarBackgroundColor":"#ffffff","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/friend/applyList/applyList","meta":{"isNVue":true},"window":{"titleNView":{"buttons":[{"text":"新的朋友","float":"left","fontWeight":"bold","fontSize":"18px","width":"100px"},{"text":"添加朋友","float":"right","fontSize":"18px","width":"100px"}]}}},{"path":"/pages/friend/addFriend/addFriend","meta":{"isNVue":true},"window":{}},{"path":"/pages/tabbar/my/my","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar/contacts/contacts","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/tabbar/find/find","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{}},{"path":"/pages/compage/chat/chat","meta":{"isNVue":true},"window":{}},{"path":"/pages/user/userDetail/userDetail","meta":{"isNVue":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('nativescript-vue'));
var dialogs = _interopDefault(require('ui/dialogs'));
var TabView = _interopDefault(require('ui/tab-view'));

var Home = { template: "<stack-layout style=\"margin-top:200px\"> <SearchBar placeholder=\"Search ...\"></SearchBar> <scroll-view orientation=\"horizontal\" style=\"height:20%;background-color:red\"> <grid-layout :row=\"i\" rows=\"*,auto\" v-for=\"i in 12\"> <Label :text=\"'text' + i\"></Label> </grid-layout> </scroll-view> </stack-layout>",
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {}
};

var Profile = { template: "<StackLayout> <scroll-view orientation=\"horizontal\" style=\"height:100%;background-color:gray\"> <Label text=\"Profiling\"></Label> <GridLayout rows=\"auto *\"> <GridLayout row=\"0\" rows=\"auto auto\"> <GridLayout row=\"0\" rowSpan=\"3\" rows=\"auto auto auto\" columns=\"*,auto\" verticalAlignment=\"bottom\" class=\"m-t-25\"> <Label row=\"1\" column=\"0\" :text=\"user.name\" textWrap=\"true\" class=\"text-left p-1-15\"></Label> <Label row=\"2\" column=\"0\" :text=\"user.surname\" textWrap=\"true\" class=\"text-left p-1-15\"></Label> <Label row=\"3\" column=\"0\" :text=\"user.email\" textWrap=\"true\" class=\"text-left p-1-15\"></Label> <Button row=\"0\" column=\"1\" text=\"Follow\" class=\"btn btn-outline btn-rounded-sm btn-active\" borderColor=\"#aa66cc\"></Button> </GridLayout> </GridLayout> <ListView row=\"1\" class=\"list-group\" :items=\"events\" @itemTap=\"onEventTap($event)\" separatorColor=\"#aa66cc\"> <template scope=\"event\"> <StackLayout class=\"list-group-item\"> <Label class=\"list-group-item-heading\" :text=\"event\"></Label> <Label class=\"list-group-item-text\" :text=\"'event' + in full\"></Label> </StackLayout> </template> </ListView> </GridLayout> </scroll-view> </StackLayout>",
  data: function data() {
    return {
      user: {
        name: 'Uzzie',
        surnmae: 'Sirwali',
        email: 'mulavhe@gmail.com',
        coverPic: '~/src/pic',
        profilePic: '~/src'
      },
      events: ['VendaNgaDecember', 'FillUp', 'SedzaMachelo']
    };
  },
  created: function created() {},

  methods: {
    onEventTap: function onEventTap($event) {
      dialogs / alert("Miracles do happen!");
    }
  }
};

var Clubs = { template: "<StackLayout> <Label text=\"The clubs\"></Label> </StackLayout>",
  data: function data() {
    return {};
  },
  created: function created() {
    dialogs.alert("Started clubs");
  },

  methods: {}
};

var Events = { template: "<stack-layout columns=\"*,2*\" rows=\"2*,3*\" width=\"300\" height=\"300\"> <Label class=\"text-primary\" text=\"https://nativescript.org\" @tap=\"taped\">{{ Title }}</Label> <Label class=\"text-muted\" :text=\"DateTimeStart\"></Label> <Label class=\"text-danger\" :text=\"PostedAt\"></Label> </stack-layout>",
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
      alert("Tap");
    }
  }
};

var LiquorStores = {
  data: function data() {
    return {};
  },
  created: function created() {},

  methods: {}
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var BottomNav = { template: "<TabView id=\"bottomNav\" :selectedIndex=\"currentTab\" selectedTabChanged=\"eventChanged($event)\" selectedTabTextColor=\"#aa66cc\" androidSelectedTabHighlightColor=\"#9933CC\" tabBackgroundColor=\"transparent\"> <TabViewItem v-for=\"(tab,i) in tabs\" :key=\"i\" :title=\"tab.text\"> <StackLayout> <component :is=\"tab.view\"></component> <StackLayout> <Label :text=\"'current ' + currentTab\"></Label> </StackLayout> </StackLayout> </TabViewItem> </TabView>", _scopeId: 'data-v-b2339d4a',
  components: { Profile: Profile, Clubs: Clubs, Events: Events, LiquorStores: LiquorStores },
  data: function data() {
    return {
      currentTab: 1,
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
    var tab = TabView.getViewById("bottomNav");

    console.log(".............##########..............####### before #########...............###########");
    console.log(" ");
    console.log(" ");
    console.log(JSON.stringify(tab));
    console.log(" ");
    console.log(" ");
    console.log(".............##########..............####### after #########...............###########");
  },

  methods: defineProperty({
    tapped: function tapped() {
      this.currentTab = 2;
      dialogs.alert("tapped");
    },
    clicked: function clicked(value) {
      dialogs.alert("tapped " + value);
      this.tabs[0].text = "clicked " + value;
    },
    onChangeTab: function onChangeTab(args) {
      dialogs.alert("args " + args);
      this.tabs[0].text = ".pop()";
    }
  }, 'onChangeTab', function onChangeTab() {
    this.tabs[0].text = ".. .pop()";
  })
};

var App = { template: "<page actionBarHidden=\"true\"> <stack-layout> <Home></Home> <BottomNav style=\"margin-bottom:2px;bottom:2px\" :LoggedIn=\"loggedIn\" :User=\"user\"> </BottomNav> </stack-layout> </page>",
    data: function data() {
        return {
            loggedIn: true,
            user: null
        };
    },
    mounted: function mounted() {
        dialogs.alert("Test");
    },

    components: {
        Home: Home,
        BottomNav: BottomNav
    },
    methods: {}
};

new Vue({
    render: function render(h) {
        return h('app');
    },
    components: {
        App: App
    }
}).$start();

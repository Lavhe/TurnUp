<template>
    <TabView id="bottomNav" :selectedIndex="currentTab" selectedTabChanged="eventChanged($event)" selectedTabTextColor="#aa66cc" androidSelectedTabHighlightColor="#9933CC" tabBackgroundColor="transparent">
      <TabViewItem v-for="(tab,i) in tabs" :key="i" :title="tab.text">
          <StackLayout>
            <component :is="tab.view"></component>
            <StackLayout>
              <Label :text="'current ' + currentTab"></Label>
            </StackLayout>
          </StackLayout>
      </TabViewItem>
    </TabView>
</template>

<script>

import dialogs from 'ui/dialogs'
import TabView from 'ui/tab-view'

import Profile from './Profile.vue'
import Clubs from './Clubs.vue'
import Events from './Events.vue'
import LiquorStores from './LiquorStores.vue'

export function eventChanged($event){
  console.log(".............##########..............####### before #########...............###########");
  console.log(" ");
  console.log(" ");
  console.log(JSON.stringify($event));
  console.log(" ");
  console.log(" ");
  console.log(".............##########..............####### after #########...............###########");
}

export default {
  components:{  Profile,Clubs,Events,LiquorStores },
  data() {
    return {
        currentTab: 1,
        tabs: [{
            text: 'Profile',
            icon: 'profile',
            view:'Profile'
          },
          {
            text: 'Clubs',
            icon: 'clubs',
            view:'Clubs'
          },
          {
            text: 'Events',
            icon: 'events',
            view:'Events'
          },
          {
            text: 'Liquor',
            icon: 'liquor',
            view:'LiquorStores'
          }
      ]
    }
  },
  props: ['LoggedIn', 'User'],
  mounted() {
    var tab = TabView.getViewById("bottomNav");

    console.log(".............##########..............####### before #########...............###########");
    console.log(" ");
    console.log(" ");
    console.log(JSON.stringify(tab));
    console.log(" ");
    console.log(" ");
    console.log(".............##########..............####### after #########...............###########");

  },
  methods: {
      tapped(){
        this.currentTab =  2;
        dialogs.alert("tapped");
      },
      clicked(value){
        dialogs.alert("tapped " + value);
        this.tabs[0].text = "clicked " + value;
      },
      onChangeTab(args) {
        dialogs.alert("args " + args);
        this.tabs[0].text = ".pop()";
      },
      onChangeTab() {
        this.tabs[0].text = ".. .pop()";
      }
  }
}
</script>

<style scoped>
#bottomNav {
}
</style>

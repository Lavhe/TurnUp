<template>
  <StackLayout>
    <scroll-view orientation="horizontal" style="height:100%;background-color:gray">
      <Label text="Profiling"></Label>
      <GridLayout rows="auto *">
        <GridLayout row="0" rows="auto auto">
          <GridLayout row="0" rowSpan="3" rows="auto auto auto" columns="*,auto" verticalAlignment="bottom" class="m-t-25">
            <Label row="1" column="0" :text="user.name" textWrap="true" class="text-left p-1-15"></Label>
            <Label row="2" column="0" :text="user.surname" textWrap="true" class="text-left p-1-15"></Label>
            <Label row="3" column="0" :text="user.email" textWrap="true" class="text-left p-1-15"></Label>
            <Button row="0" column="1" text="Follow" class="btn btn-outline btn-rounded-sm btn-active" borderColor="#aa66cc"></Button>
          </GridLayout>
        </GridLayout>
        <ListView row="1" class="list-group" :items="events" @itemTap="onEventTap($event)" separatorColor="#aa66cc">
          <template scope="event">
            <StackLayout class="list-group-item">
              <Label class="list-group-item-heading" :text="event"></Label>
              <Label class="list-group-item-text" :text="'event' + in full"></Label>
            </StackLayout>
          </template>
        </ListView>
      </GridLayout>
    </scroll-view>
  </StackLayout>
</template>

<script>
import dialogs from 'ui/dialogs'
  export default {
    data() {
      return {
        user:{
          name:'Uzzie',
          surnmae:'Sirwali',
          email:'mulavhe@gmail.com',
          coverPic:'~/src/pic',
          profilePic:'~/src'
        },
        events:['VendaNgaDecember','FillUp','SedzaMachelo']
      }
    },
    created() {
    },
    methods: {
      onEventTap($event){
        dialogs/alert("Miracles do happen!");
      }
    }
  }
</script>

<style>
</style>

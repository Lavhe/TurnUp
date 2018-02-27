<template>
  <StackLayout>
     <Label text="Profiling"></Label>
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
        }
      }
    },
    created() {
    },
    methods: {
      onEventTap($event){
        dialogs.alert("Miracles do happen!");
      }
    }
  }
</script>

<style>
</style>

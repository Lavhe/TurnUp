<template>
  <stack-layout style="margin-top:200px">
    <SearchBar placeholder="Search ..."></SearchBar>
    <scroll-view orientation="horizontal" style="height:20%;background-color:red">
      <grid-layout :row="i" rows="*,auto" v-for="i in 12">
        <Label :text="'text' + i"></Label>
      </grid-layout>
    </scroll-view>
  </stack-layout>
</template>

<script>
  import dialogs from 'ui/dialogs'
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>
</style>

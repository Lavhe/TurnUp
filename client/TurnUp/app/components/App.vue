<template>
    <page
        actionBarHidden="true">
        <stack-layout>
            <Home></Home>
            <BottomNav
                style="margin-bottom:2px;bottom:2px"
                :LoggedIn="loggedIn"
                :User="user">
            </BottomNav>
        </stack-layout>
    </page>
</template>

<script>
    import Home from './Home.vue'
    import BottomNav from './BottomNav.vue'

    import dialogs from 'ui/dialogs'

    export default {
        data() {
            return {
                loggedIn:true,
                user:null,
            }
        },
        mounted(){
            dialogs.alert("Test");
        },
        components: {
            Home,
            BottomNav
        },
        methods:{
            
        }
    }
</script>

<style>
    label {
        text-align: center;
        font-size: 25;
    }

    Button {
        background-color: #00caab;
    }


</style>

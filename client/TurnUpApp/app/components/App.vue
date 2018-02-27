<template>
    <page
        actionBarHidden="true">
        <StackLayout>
            <BottomNav
                style="margin-bottom:2px;bottom:2px"
                :LoggedIn="loggedIn"
                :User="user">
            </BottomNav>
        </StackLayout>
    </page>
</template>

<script>
    import Home from './Home.vue'
    import BottomNav from './BottomNav.vue'

    const dialogs  = require('ui/dialogs')

    export default {
        name:'app',
        data() {
            return {
                loggedIn:true,
                user:null,
            }
        },
        mounted(){
           // dialogs.alert("Test the dialogs");
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

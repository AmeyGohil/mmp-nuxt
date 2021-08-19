<template>
    <profile-edit-component></profile-edit-component>
</template>
<script>
import profileEditComponent from '~/components/dashboard/profileEditComponent.vue'

export default{
    layout:'dashboard-customer',
    components:{
        'profile-edit-component': profileEditComponent
    },
    data(){
        return {

        }
    }

}
</script>
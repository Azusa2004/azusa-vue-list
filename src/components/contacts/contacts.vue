<template>
    <div class="main">
        <eachContacts :contactsTitle="righttitle" @contactsTitle="$emit('contactsTitle',$event)" @contactsTitle2="$emit('contactsTitle2',$event)"></eachContacts>
        
      

    </div>
</template>

<script setup lang="ts">
    import eachContacts from './eachContacts.vue';
   const props = defineProps(['righttitle']);

</script>

<style scoped>
.main{
    width: 100%;
    height:522px;
    margin-top: 20px;
    display: flex;
    flex-wrap:wrap;
    overflow: auto;
}
</style>
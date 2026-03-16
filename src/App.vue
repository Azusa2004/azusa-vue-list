<template>
  <main>
    <LeftappD1 @addtransmit="addinformation2" :title="ModifyContactObject"></LeftappD1>
    <RightD1 :title="information"  @contactsTitle="DeleteEacontact" @contactsTitle2="ModifyContact" v-model:sousuo="sousuo"></RightD1>                                                                
  </main>
</template>

<script setup lang="ts">
 import LeftappD1 from './components/Left/LeftappD1.vue';
 import RightD1 from './components/Right/RightD1.vue';
 import { computed, ref } from 'vue';

    let information=ref<Contact[]>([
        {_id:'1',name:'王二',phone:'15918285086',email:'6056438679@qq.com',school:'成都蜗牛学苑',address:'四川省成都市锦江区',gender:'朋友',remarks:'前端开发工程师'},
        {_id:'2',name:'小明',phone:'13987567849',email:'57698775@qq.com',school:'清华大学',address:'北京市',gender:'同事',remarks:'后端开发工程师'},
        {_id:'3',name:'王二',phone:'18776567898',email:'6056438@qq.com',school:'四川大学',address:'四川省成都市',gender:'其他',remarks:'全栈开发工程师'}
    ])

    function addinformation2(information2:any){
      let data = information2
      data = data.value
      information.value.push(data[0])
    }
    //删除
    function DeleteEacontact(data:string){
     information.value= information.value.filter((item=>item._id!==data))
    }
    //修改
    let ModifyContactObject=ref<Contact[]>([]);
    function ModifyContact(data:string){
      ModifyContactObject.value=information.value.filter((item=>item._id==data))
    }

    //搜索
    const sousuo=ref('')
     const searchData = computed(()=>{
        if(sousuo.value){
          information.value.filter((item)=>{
             return item.name.includes(sousuo.value)||item.phone.includes(sousuo.value)
          })
        }
        return information.value
      })

</script>

<style scoped>
  main{
    width: 1140px;
    height: 750px;
    display: flex;
    border-radius: 20px;
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.3);
  }
</style>
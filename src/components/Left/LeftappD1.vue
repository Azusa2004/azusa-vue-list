<template>
    <div class="main">
        <div class="head">
            <img src="../../assets/添加人群_people-plus.png" alt="">
            <h3>{{props1.title.length==0? '添加':'修改'}}新联系人</h3>
        </div>

        <div class="leftName">
            <p>姓名*</p>
            <input type="text" placeholder="请输入姓名" :class="{borde:namebool}" @focus="namebool=true" @blur="namebool=false"
            v-model.lazy="namemodel">
        </div>

        <div class="leftName">
            <p>手机号码*</p>
            <input type="text" placeholder="请输入手机号码" :class="{borde:phonebool}" @focus="phonebool=true" @blur="phonebool=false"
            v-model.lazy="phonemodel">
        </div>

        <div class="leftName">
            <p>电子邮箱</p>
            <input type="text" placeholder="请输入电子邮箱" :class="{borde:mailbox}" @focus="mailbox=true" @blur="mailbox=false"
             v-model.lazy="email">
        </div>

        <div class="leftName">
            <p>公司/学校</p>
            <input type="text" placeholder="请输入公司或学校名称" :class="{borde:school}" @focus="school=true" @blur="school=false"
            v-model.lazy="school1">
        </div>

        <div class="leftName">
            <p>地址</p>
            <input type="text" placeholder="请输入联系地址" :class="{borde:address}" @focus="address=true" @blur="address=false"
            v-model.lazy="address1">
        </div>

        <div class="leftRadio">
            <p>关系标签</p>
           <label><input type="radio" v-model="gender" value="家人">&nbsp;家人</label>
           <label><input type="radio" v-model="gender" value="朋友">&nbsp;朋友</label>
           <label><input type="radio" v-model="gender" value="同事">&nbsp;同事</label>
           <label><input type="radio" v-model="gender" value="其他">&nbsp;其他</label>
        </div>  

         <div class="lefttext">
            <p>备注</p>
            <textarea placeholder="添加备注信息" :class="{borde:text}" @focus="text=true" @blur="text=false" v-model.lazy="remarks"></textarea>
        </div>

         <div class="towBoot">
            <div class="leftBoot mouse" @click="add">
                <img src="../../assets/加_plus.png" alt="">
                {{props1.title.length==0? '添加':'修改'}}联系人
            </div>
            <div class="rightBoot mouse" @click="cancel">
                <img src="../../assets/重新_redo.png" alt="">
                重置表单
            </div>
        </div>
        

    </div>
</template>

<script setup lang="ts">
import { ref,watch} from 'vue';
import type { ag } from './LeftappD1';
    let namebool=ref(false);
   let phonebool=ref(false)
   let mailbox=ref(false)
   let school=ref(false)
   let address=ref(false)
   let text=ref(false)

   let namemodel=ref('');
   const chineseEnglishOnly = /^[\u4e00-\u9fa5A-Za-z]+$/;
    let phonemodel=ref('');
    const simplePhone = /^1\d{10}$/
    let email=ref('');
    let school1=ref('');
    let address1=ref('');
    let gender=ref(``);
    let remarks=ref(``);

  
    let information2=ref<ag[]>([]);
    const emit=defineEmits(['addtransmit']);
    //添加按钮
    function add(){
        if(namemodel.value.length!=0&&phonemodel.value.length!=0){
            if(chineseEnglishOnly.test(namemodel.value)&&simplePhone.test(phonemodel.value)){
                information2.value=[{_id: Date.now(), name:namemodel.value,phone:phonemodel.value,email:email.value,school:school1.value,address:address1.value,gender:gender.value,remarks:remarks.value}];
                namemodel.value='';
                phonemodel.value='';
                email.value='';
                school1.value='';
                address1.value='';
                gender.value='';
                remarks.value=''
                emit('addtransmit',information2,'title',[]);
            }else{
                alert('请输入正确的姓名或手机号');
            }
        }else{
            alert('名字或手机号不能为空');
        }
    }

    //清除按钮
    function cancel(){
         namemodel.value='';
          phonemodel.value='';
          email.value='';
          school1.value='';
          address1.value='';
          gender.value='';
          remarks.value=''
        information2=ref<ag[]>([]);
    }

    //接收要修改的数据
    let props1=defineProps(['title']);
    
    watch(() => props1.title, (newVal) => {
  if (newVal && newVal.length > 0) {
    namemodel.value = newVal[0].name;
    phonemodel.value = newVal[0].phone;
    email.value = newVal[0].email;
    school1.value = newVal[0].school;
    address1.value = newVal[0].address;
    gender.value = newVal[0].gender;
    remarks.value = newVal[0].remarks;
  }
}, { immediate: true, deep: true });



</script>

<style scoped>
    .mouse{
        cursor: pointer;
    }
    .main{
        width: 290px;
        height: calc(100%-40px);
        background-color: #f6f8fb;
        border-right: 1px solid #ddebff;
        border-radius:20px 0 0 20px ;
        padding: 20px;
    }
    .head{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .head>img{
        width: 28px;
        height: 26px;
    }
    .head>h3{
        font-size: 23px;
        margin-left: 8px
    }

    .leftName,.leftRadio{
        width: 100%;
        height: 70px;
        margin-top: 15px;
    }
    .leftName>input{
        margin-top: 6px;
        width: 260px;
        height: 38px;
        border: 1.5px solid #dde1ff;
        border-radius: 10px;
        padding-left: 15px;
        font-size: 15px;
    }
    .leftRadio>p{
        margin-bottom: 5px
    }
    .leftRadio>label{
        margin: 0 6px 0 0;
    }
    .lefttext>textarea{
        width: 249px;
        height: 40px;
        margin-top: 6px;
        resize: none;
        padding: 12px;
        font-size: 15px;
        font-weight: 600;
        border: 1.5px solid #dde1ff;
         border-radius: 10px;
    }
    .towBoot{
        width: 263px;
        padding: 0 8px;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }
    .leftBoot,.rightBoot{
        width: 120px;
        height: 40px;
        border-radius: 8px;
        background-color: thistle;
        
    }

    .leftBoot{
        background: linear-gradient(to right, #6977e0, #7450a9);
        color: white;
        font-size: 14px;
        display: flex;
        align-items: center;
         animation: scaleOut 0.3s ease forwards;
        cursor: pointer;
    }
    .leftBoot>img, .rightBoot>img{
        width: 16px;
        height: 16px;
        margin:0 7px 0 10px;
    }
    .rightBoot{
        background-color:#ffffff; 
         font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
         animation: scaleOut 0.3s ease forwards;
        cursor: pointer;
    }
    .rightBoot>img{
        margin-left: 0 !important;
    }

    .leftBoot:hover{
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        animation: scaleIn 0.3s ease forwards;
    }
    .rightBoot:hover{
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        animation: scaleIn 0.3s ease forwards;
    }


    @keyframes scaleIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.borde{
    border: 1.5px solid #6879ff !important;
}
</style>
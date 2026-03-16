<template>
    <div class="head" v-for="item in contactsTitle">
        <div class="headportrait">
            <div class="img">{{item.name.slice(0,1) }}</div>
            <div class="deleteButto">
                <div @click="ModifyContact(item._id) ,DeleteContact(item._id) "><img src="../../assets/编辑2_edit-two.png" alt=""></div>
                <div @click="DeleteContact(item._id)"><img src="../../assets/删除4_delete-four.png" alt=""></div>
            </div>
        </div>

        <div class="name">{{ item.name }}</div>

        <div class="phone">
            <img src="../../assets/电话_phone-telephone.png" alt="">
            <span>{{ item.phone }}</span>
        </div>

        <div class="phone">
            <img src="../../assets/邮件_mail.png" alt="">
            <span>{{ item.email }}</span>
        </div>

        <div class="phone">
            <img src="../../assets/酒店_hotel.png" alt="">
            <span>{{ item.school }}</span>
        </div>

        <div class="phone">
            <img src="../../assets/已定位_local.png" alt="">
            <span>{{ item.address }}</span>
        </div>

        <div class="relationship relationship" :class="{'colleague':item.gender==='同事'||item.gender==='其他','family':item.gender==='家人'||item.gender==='朋友'}">{{item.gender }}</div>

        <div class="phone">
            <img src="../../assets/标签_tag.png" alt="">
            <span>{{ item.remarks }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
  
    const props = defineProps(['contactsTitle']);
    //删除
    let emit=defineEmits(['contactsTitle','contactsTitle2']);
    function DeleteContact(id:string){
        emit(`contactsTitle`,id)
    }
    //修改
   function ModifyContact(id:string){
        emit(`contactsTitle2`,id)
   }
    

</script>

<style scoped>
.head{
    width: 290px;
    height: 290px;
    border: 1.5px solid #dde1ff;
    border-radius: 10px;
    margin: 20px 20px 0 20px;
     animation: scaleOut 0.3s ease forwards;
        cursor: pointer;
        padding: 15px;
}
.headportrait{
    width: 100%;
    height: 55px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
}
.headportrait>.img{
    width: 55px;
    height: 55px;
    background: linear-gradient(to bottom right, #6977e0, #7450a9);
    border-radius: 50%;
    font-size: 24px;
    font-weight: 600;
    color: white;
    text-align: center;
    line-height: 55px;
}
.name{
    width: 100%;
    font-size: 18px;
    font-weight: 600;
}
.phone{
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.phone>img{
    width: 20px;
    height: 20px;
}

.phone>span{
    margin-left: 8px;
    font-size: 15px;
    color: #909090;
}

.deleteButto{
    display: flex;
}
.deleteButto>div{
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px
}
.deleteButto>div>img{
    width: 20px;
    height: 20px;
}
.deleteButto>div:hover{
     box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.relationship{
    width: 40px;
    height: 25px;
    border-radius: 25px;
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    line-height: 25px;
 
}
.colleague{
     background-color: #fef3c7;
    color: #92400e;
 
}
.family{
    background-color: #d1fae5;
    color: #065f46;
}





.head:hover{
        animation: scaleIn 0.3s ease forwards;
}

   @keyframes scaleIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.03);
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
</style>
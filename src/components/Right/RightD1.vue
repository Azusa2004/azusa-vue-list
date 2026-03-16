<template>
    <div class="main2">
        <div class="head">
            <img src="../../assets/通讯录_address-book.png" alt="">
            <h3>联系人列表</h3>
            <div class="inputDiv">
                <img src="../../assets/搜索_search.png" alt="" class="mouse">
                <input type="text"  v-model.lazy="sousuoText">
            </div>
        </div>

        <div class="main3">
            <div class="total">
                <div>{{ title.length }}</div>
                <span>联系人总数</span>
            </div>
            <div class="result">
                <div>{{ title.length }}</div>
                <span>搜索结果</span>
            </div>
            <div class="family">
                <div>{{ (props.title as any[]).filter(item=>item.gender=='家人').length }}</div>
                <span>家人数量</span>
            </div>
            <div class="friend">
                <div>{{(props.title as any[]).filter(item=>item.gender=='朋友').length }}</div>
                <span>朋友数量</span>
            </div>
        </div>

        <contacts :righttitle="title"  @contactsTitle="$emit('contactsTitle',$event)" @contactsTitle2="$emit('contactsTitle2',$event)"></contacts>
    </div>
</template>

<script setup lang="ts">
    import contacts from '../contacts/contacts.vue';
    let props=defineProps(['title']);
    const emit=defineEmits(['contactsTitle', 'contactsTitle2'])
    let sousuoText= defineModel('sousuoText');
 

</script>

<style scoped>
    .main2{
        width: 748px;
        height:calc(100% - 40px);
        background-color: white;
        border-radius: 0 20px 20px 0;
        padding: 20px 30px 20px 40px;
    }

    .head{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        
    }
    .head>h3{
        flex-wrap: wrap;
    }
    .head>img{
        width: 28px;
        height: 26px;
    }
    .head>h3{
        font-size: 23px;
        margin-left: 8px;
    }

    .inputDiv{
        margin-top: 6px;
        width: 260px;
        height: 38px;
        border: 1.5px solid #dde1ff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin-left: auto;
    }
     .inputDiv>img{
        width: 20px;
        height: 20px;
        margin: 0 9px;
     }
     .inputDiv>input{
        width: 200px;
        height: 30px;
        border: none;
        font-size: 16px;
     }

     .main3{
        width: 741px;
        height: 95px;
        margin-top: 20px;
        background-color: #f6f8fb;
        border-radius: 10px;
        display: flex;
     }
     .main3>div{
        width: 185px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center
     }
     .main3>div>div{
        font-size: 25px;
        font-weight: 700;
        color: #667eea;
        text-align: center;
     }
      .main3>div>span{
        display: block;
        color: #868686;
        width: 100%;
        text-align: center;
      }
</style>
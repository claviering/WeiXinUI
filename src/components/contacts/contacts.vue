<template>
    <div class="boxs">
        <div class="contact_box" v-for="(value, key) in imgss">
            <div class="contact_img"><img :src=value></div>
            <div class="contact_text">{{key}}</div>
            <div class="contacts_border"></div>
        </div>
        <div class="contacts_alp">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
    </div>
</template>

<script>
    import new_friend from './1.png';
    import group_chats from './2.png';
    import tags from './3.png';
    import official from './4.png';
    export default{
        data(){
            return {
                imgss:{
                    'New Friends':new_friend,
                    'Group Chats': group_chats,
                    'Tags': tags,
                    'Official Accounts': official
                }
            }
        }
    }
</script>

<style scope>
    .boxs{
        width: 100%;
        position: relative;
    }
    .contact_box{
        width: 100%;
        height: 50px;
        padding: 2%;
        position: relative;
        display: flex;
        align-items: center;
        background-color: rgb(255,255,255);
    }
    .contact_img{
        width: 50px;
        height: 50px;
        float: left;
        box-sizing: border-box;
    }
    .contact_text{
        color: black;
        font-weight: bold;
        float: left;
        box-sizing: border-box;
        padding-left: 2%;
    }
    .contacts_border{
        height: 1px;
        width: 90%;
        margin:0px;
        padding:0px;
        background-color: #d2caca; 
        position: absolute;
        bottom: 0px;
    }
    .contacts_alp{
        height: 200%;
        width: 10px;
        position: absolute;
        top: 0px;
        right: 7px;
        line-height: 24px;
    }
</style>
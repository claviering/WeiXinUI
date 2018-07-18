<template>
    <div>
        <div class="me">
            <div class="my_img">            
            </div>
            <div class="my_info">
                <div class="my_name">my name</div>
                <div clss="my_id">ID: my ID</div>
            </div>
            <div class="QR_code"><img :src=qr_code alt=""></div>
        </div>
        <img_text v-for="(value, key, index) in items" :img=value :text=key v-bind:tag="index"></img_text>
        
    </div>
</template>

<script>
    import img_text from './../commom/img_text.vue';
    import qr_code from './QR_code25.png';
    import wallet from './wallet.png';
    import box from './box.png';
    import posts from './posts.png';
    import momey from './momey.png';
    import sticker from './sticker.png';
    import setting from './setting.png';

    export default{
        data(){
            return{
                qr_code:qr_code,
                items:{
                    "Wallet": wallet,
                    "Favorites": box,
                    "My Posts": posts,
                    "Cards & Offers": momey,
                    "Sticker Gallery": sticker,
                    "Settings": setting
                }
            }
        },
        components:{
            img_text:img_text
        }

    }
</script>

<style scope>
    .me{
        width: 100%;
        height: 90px;
        background-color: white;
        border-bottom-style: solid;
        border-width: thin;
        border-color: #d2caca;
        position: relative;
        margin-top: 5%;
    }
    .my_img{
        width: 70px;
        height: 70px;
        background-image: url(./wechat.jpg);
        float:left;
        margin: 10px;
    }
    .my_info{
        float: left;
        width: 60%;
        box-sizing: border-box;
    }
    .my_name{
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 2em;
        color: black;
        overflow: hidden;
    }
    .my_id{
        color: #bfb6b6;
        overflow: hidden;
    }
    .QR_code{
        float:right;
        color: #bfb6b6;
        position: absolute;
        top: 32px;
        right: 32px;
    }
    .dis_img{
        padding-left: 25px;
    }
    div[tag="0"]{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    div[tag="5"]{
        margin-top: 20px;
    }
    div[tag="1"]{
        position: relative;
    }
    div[tag="1"]:after{
        content: '';
        position: absolute;
        left:5%;
        bottom: 0px;
        height: 1px;
        width: 90%;
        background-color: rgb(235,235,235);
    }
    div[tag="2"]{
        position: relative;
    }
    div[tag="2"]:after{
        content: '';
        position: absolute;
        left:5%;
        bottom: 0px;
        height: 1px;
        width: 90%;
        background-color: rgb(235,235,235);
    }
    div[tag="3"]{
        position: relative;
    }
    div[tag="3"]:after{
        content: '';
        position: absolute;
        left:5%;
        bottom: 0px;
        height: 1px;
        width: 90%;
        background-color: rgb(235,235,235);
    }
</style>
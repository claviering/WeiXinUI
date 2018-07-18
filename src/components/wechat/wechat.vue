<template>
    <div class="chat">
        <div class="img" src="wechat">
            
        </div>
        <div class="msg">
            <div class="name">我的好友</div>
            <div clss="chat">[photo]</div>
        </div>
        <div class="time">Yesterday</div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scope>
    .chat{
        width: 100%;
        height: 90px;
        background-color: white;
        border-bottom-style: solid;
        border-width: thin;
        border-color: #d2caca;
        position: relative;
    }
    .img{
        width: 70px;
        height: 70px;
        background-image: url(./wechat.jpg);
        float:left;
        margin: 10px;
    }
    .msg{
        float: left;
        width: 60%;
        box-sizing: border-box;
    }
    .name{
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 2em;
        color: black;
        overflow: hidden;
    }
    .chat{
        color: #bfb6b6;
        overflow: hidden;
    }
    .time{
        float:right;
        color: #bfb6b6;
        position: absolute;
        top: 0%;
        right: 0%;
        padding-top: 10px;
    }
    
</style>
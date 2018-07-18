<template>
    <div id="tabbar">

        <router-link to="/wechat" tag="div" class="box">
            <div><span class="icon-chat"></span></div>
            <div>WeChat</div>
        </router-link>
        <router-link to="/contacts" tag="div" class="box">
            <div><span class="icon-contacts"></span></div>
            <div>Contacts</div>
        </router-link>
        <router-link to="/discover" tag="div" class="box">
            <div><span class="icon-discover"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></div>
            <div>Discover</div>
        </router-link>
        <router-link to="/me" tag="div" class="box">
            <div><span class="icon-me"></span></div>
            <div>Me</div>
        </router-link> 
    </div>
</template>

<script> 
    export default{

    }
</script>

<style>
@import './icomoon/style.css';
    #tabbar{
        width: 100%;
        height: 8%;
        background-color: #fff;
        position: fixed;
        bottom: 0px;
        z-index: 200;
        display: flex;
        align-items: center;
    }
    .box{
        float: left;
        width: 25%;
        color: #a29292;
        box-sizing: border-box;
        text-align: center;
        display: block;
    }
    .router-link-active{
        color: green;
    }
</style>
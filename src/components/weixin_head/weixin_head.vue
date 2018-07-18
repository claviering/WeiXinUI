<template>
  <div id="weixin_head">
    <div class="cent">
        <div class="text">
            <p>WeChat</p>
        </div>
        <div class="add" src="add.png"></div>
        <div class="discover" src="search.png"></div>
    </div>
  </div>

</template>

<script>
    export default {
        data(){
            return{
            }
        }
    }
</script>

<style>
    #weixin_head{
        width: 100%;
        height: 50%;
        margin: 0px;
        padding: 0px;
        background-color: #060606;
        text-align: center;
        display: flex;
        align-items: center;
    }
    .cent{
        width: 100%;
        padding-top: 2%;
        padding-bottom: 2%;
        display: inline-block;
        vertical-align: middle;
    }
    .text{
        color: white;
        float:left;
        padding-left: 4%;
        box-sizing: border-box;
    }
    div > p{
        width: 30px;
        margin: 0px;
        padding: 0px;
    }
    .add{
        width: 20px;
        height: 20px;
        background-image: url(./add1.png);
        float:right;
        margin-right: 2%;
        box-sizing: border-box;
    }
    .discover{
        width: 20px;
        height: 20px;
        background-image: url(./search1.png);
        float:right;
        margin-right: 2%;
        box-sizing: border-box;
    }

</style>
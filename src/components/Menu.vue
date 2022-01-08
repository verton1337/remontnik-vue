<template>
    <div class="nav-menu">
    <img class="close-btn" src="img/x-btn.svg" alt="" @click="$emit('callback')">
    <ul class="menu">
        <li class="menu-item">Заказать звонок</li>
        <li class="menu-item">О компании</li>
        <li class="menu-item">Контакты</li>
        <li class="menu-item">Отзывы</li>
        <li class="menu-item">Услуги</li>
        <li class="menu-item">Цены</li>

    <hr>
        <li class="menu-item">Специалистам</li>
        <li class="menu-item">Войти как специалист</li>
        <div>
        <img src="img/vk.png" alt="">
        <img src="img/instagram.png" alt="">
        <img src="img/twitter.png" alt="">
        </div>
    </ul>
    </div>
</template>

<script>
export default {
    name: "Menu",

}
</script>

<style scoped>
    .nav-menu{

        display: block;
        position: absolute;
        right:0;
        top:0;
        z-index: 9;
        margin-right: 0;
        width: 300px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 25px 25px;

    }
    .nav-menu *{
        margin-left: 5px;
    }

    ul{
        list-style-type: none;
        margin: auto;
        padding: 5;
        margin-top:60px;
    }
    li{
        height: 24px;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.7);
    }
    .close-btn{
        position: absolute;
        right: 0;
        width: 32px;
        cursor:pointer;
    }

</style>
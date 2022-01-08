<template>
  <div class="register-page">
      <Header></Header>
      <div class="content">
          <MyInput placeholder="Введите имя пользователя"/>
          <MyInput  placeholder="Введите пароль"/>
          <MyInput  placeholder="Повторите пароль"/>
          <MyInput  placeholder="Введите ваше имя"/>
          <Button class="btn"> Зарегистрироваться</Button>
      </div>
  </div>    
</template>

<script>
import Header from "@/components/Header.vue"
import MyInput from "@/components/MyInput.vue"
import Button from "@/components/Button.vue"

export default {
    name: "RegisterPage",
    components:{
        Header,
        MyInput,
        Button,
    },
}
</script>

<style scoped>
.content{
    width: 80vw;
    margin: 0 10vw 0 10vw;
}
.content *{
    margin:auto;
    margin-top: 20px;
    display:flex;
}
.btn{
    display: inline-block;
}
</style>
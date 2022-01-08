<template>
  <div class="logn-page">
      <Header></Header>
      <div class="content">
          <MyInput placeholder="Введите имя пользователя" />
          <MyInput placeholder="Введите пароль" />

          <div class="btns">
            <Button class="login-btn">Войти</Button>
            <Button class="login-btn">Зарегистрироваться</Button>
          </div>
            
      </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import MyInput from "@/components/MyInput.vue"
import Button from "@/components/Button.vue"

export default {
    name: "LoginPage",
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
.content input, .btns{
    margin:auto;
    margin-top: 20px;
    display:flex;
}



</style>
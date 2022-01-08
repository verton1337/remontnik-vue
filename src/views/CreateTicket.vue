<template>
  <div class="create-ticket">
      <Header></Header>
      <div class="content">
          <h3>Создание заявки</h3>
          <MyInput placeholder="Имя клиента"/>
          <MyInput placeholder="Телефон клиента"/>
          <MyInput placeholder="Адрес клиента"/>
          <MySelect default="Категория заявки" :options="categories" />
          <MyInput placeholder="Адрес"/>
          <MyDateInput/>
          <Button >Создать</Button>

      </div>
  </div>
</template>

<script>

import Header from "@/components/Header.vue"
import MyInput from "@/components/MyInput.vue"
import Button from "@/components/Button.vue"
import MySelect from "@/components/MySelect.vue"
import MyDateInput from "@/components/MyDateInput.vue"
export default {
    name: "CreateTicket",
    components:{
        Header,
        MyInput,
        Button,
        MySelect,
        MyDateInput,


    },
    data(){
        return{
            categories:[
                {   
                    id:1,
                    value: "Категория 1"
                },
                {   
                    id:2,
                    value: "Категория 2"
                },
                {   
                    id:3,
                    value: "Категория 3"
                }
            ]
        }
    }

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
</style>
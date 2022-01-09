<template>
  <div class="card">
      <div class=text>
          <span>Имя: {{$props.client.name}}</span>
          <span>Номер телефона: {{$props.client.phone}}</span>
      </div>
      <div ><Button class="btn" :data-client="$props.client.id">Создать</Button></div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
    name: "ClientCard",
    components:{
        Button
    },
    props:{
        client: Object,


    }

}
</script>

<style scoped>

.card{
    background: rgba(196, 196, 196, 0.13);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    display:flex;
    justify-content: space-between;
}
.text{
    font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 36px;
/* identical to box height */
color: rgba(0, 0, 0, 0.6);
}
.text span{
    display:block;
}

</style>
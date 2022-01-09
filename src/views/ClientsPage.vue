<template>
  <Header></Header>
  <div class="clients">
      <h3>Необработанные клиенты</h3>
      <div class="content">
            <ClientCard
            v-for="client in clients"
            :client="client" 
            :key="client.id"
        
            />
      </div>
      

  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import ClientCard from "@/components/ClientCard.vue"
export default {
    name: "ClietnsPage",
    components:{
        Header,
        ClientCard,
   
    },
    data(){
        return {
            clients:[
                {
                    id:1,
                    name:"Alex",
                    phone:"8-999-888-90-90"
                },
                {
                    id:2,
                    name:"Ivan",
                    phone:"8-999-888-90-90"
                },
                {
                    id:3,
                    name:"Maria",
                    phone:"8-999-888-90-90"
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
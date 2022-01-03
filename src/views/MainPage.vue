<template>
    <div id = "main-page">
        <Header></Header>
        <MyInput></MyInput>
        <Button>Найти</Button>
        <Card>Категория</Card>
        <Container> </Container>
  
    </div>
</template>

<script>
    import Button from '@/components/Button.vue'
    import MyInput from '@/components/MyInput.vue'
    import Header from '@/components/Header.vue'
    import Card from '@/components/Card.vue'
    import Container from '@/components/Container.vue'
    

    export default {
        name: "MainPage",
        components:{
            Button,
            MyInput,
            Header,
            Card,
            Container,
      

        }
    }
</script>

<style scoped>


</style>

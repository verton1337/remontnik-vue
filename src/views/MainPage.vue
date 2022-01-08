<template>
    <div id = "main-page">
        <Header></Header>
        <div class="content">
            <div class="search">
                <MyInput placeholder="Введите текст" :w="635" ></MyInput>
                <Button>Найти</Button>
            </div>
            <div class="categories pure-g" >
                <Card 
                    class="pure-u-1-3" 
                    v-for="category in categories" 
                    :key="category.id" 
                    :pic="category.pic"
                    >
                    {{category.name}} 
                </Card>
                
            </div>
            <div class="all-categories">
                <div ></div>
                <a href="#" class="all-categories-link">все категории</a>
            </div>
                
            <h3 class="pure-u-1-1">
                Как это работает
            </h3>
            <div class="how-to pure-g">
                
                <Card class="pure-u-1-3" pic="https://picsum.photos/300/300">Закажите звонок </Card>
                <Card class="pure-u-1-3" pic="https://picsum.photos/300/300">Специалист с вами свяжется </Card>
                <Card class="pure-u-1-3" pic="https://picsum.photos/300/300">К вам приедет мастер </Card>
            </div>
            <h3>
                    Отзывы
            </h3>
            <div class="reviews" >
                <Container 
                    v-for="review in reviews" 
                    :key="review.id" 
                    :category="review.category" 
                    :pic="review.pic" 
                    :price="review.price"
                    >{{review.description}}
                </Container>
            </div>
        </div>
        
       
  
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
     
      

        },
        data(){
            return {
                categories: [
                    {
                        id:1,
                        name:"Категория 1",
                        pic: "https://picsum.photos/300/300"
                    },
                    {
                        id:2,
                        name:"Категория 2",
                        pic: "https://picsum.photos/300/300"
                    },
                    {
                        id:3,
                        name:"Категория 3",
                        pic: "https://picsum.photos/300/300"
                    },

                    ],
                reviews: [
                    {
                        id:1,
                        category: "Категория 1",
                        price: 1600,
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dicta voluptates eveniet quas saepe enim quae unde et consectetur veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam consequuntur, voluptatibus aperiam sequi mollitia at voluptate rem neque qui quibusdam fuga corrupti et sunt quos omnis, id sint nam.",
                        pic: "https://picsum.photos/64/64"
                    },
                    {
                        id:2,
                        category: "Категория 1",
                        price: 1600,
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dicta voluptates eveniet quas saepe enim quae unde et consectetur veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam consequuntur, voluptatibus aperiam sequi mollitia at voluptate rem neque qui quibusdam fuga corrupti et sunt quos omnis, id sint nam.",
                        pic: "https://picsum.photos/64/64"
                    },
                    {
                        id:3,
                        category: "Категория 1",
                        price: 1600,
                        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dicta voluptates eveniet quas saepe enim quae unde et consectetur veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam consequuntur, voluptatibus aperiam sequi mollitia at voluptate rem neque qui quibusdam fuga corrupti et sunt quos omnis, id sint nam.",
                        pic: "https://picsum.photos/64/64"
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
}
.search{
    display:flex;
    justify-items: center;
    padding-top:2rem;
    padding-bottom: 5rem;
}

.all-categories{
    display:flex;
    justify-content: space-between;
}
.all-categories-link{
    margin-right:0;
}

</style>

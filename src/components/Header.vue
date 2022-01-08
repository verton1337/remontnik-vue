<template>
  <div class="header">
      <router-link to="/">
      <div class="logo-block">
          <img src="img/logo.png" class="logo" alt="">
          <span class="gray-text">Ремонтник</span><span class="green-text">.online</span>
      </div>
      </router-link>
      <div class="menu-block">
          <img class="menu-btn" src="img/menu-btn.svg" alt="" @click="toggleMenu">
          
     </div>
    
     <Menu v-show="menuVisible" @callback="toggleMenu"></Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
    name: "Header",
    components:{
        Menu,

    },
    data(){
        return{
            menuVisible: false,

        }
    },
    methods:{
        toggleMenu(){
            this.menuVisible = !this.menuVisible
        }
    }

}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
  
        width: 100vw;
        height: 110px;
        left: 0px;
        top: 0px;

        background: #F5FDEF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 25px 25px;
    }

    .logo{
        width: 64px;
        
    }
    .gray-text{
        font-family: Rubik One;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 37px;

        color: #40423E;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .green-text{
        font-family: Rubik One;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 37px;

        color: #29CB25;


    }
    .menu-btn{
        margin-top: 2rem;
        margin-right: 1rem;
        cursor:pointer;
    }
    a{
        text-decoration: none;
    }

</style>
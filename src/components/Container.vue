<template>
  <div class="container">
      <div class="text">
          <span class="category">{{ $props.category}}</span>
          <p class="description">
             <slot> </slot> 
         </p>
      </div>
        <span class="price">
              {{ $props.price}} руб.
          </span>
        <img  class="pic" :src="$props.pic" alt="">
  </div>
</template>

<script>
export default {
    props:{
        pic: String,
        price: Number,
        category: String,

    }
}
</script>

<style scoped>

.container{
    display: flex;
    justify-content: space-between;
    background: rgba(196, 196, 196, 0.13);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    
}

.category{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    /* identical to box height */
    color: rgba(0, 0, 0, 0.6);
    display: block;
}
    
.description{
    display: block;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
}

.price{
    display: inline;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 41px;
    color: #000000;
    min-width: 10rem;
    margin: auto;
}
.pic{
    display: inline;
    width: 10rem;
    height: 10rem;
    margin: auto;
    margin-right:10px;

}

</style>
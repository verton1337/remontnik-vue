<template>
  <input type="text" :placeholder="$props.placeholder" :style = "{width:($props.w || 635) + 'px'}">
</template>

<script>
export default {
    name: "MyInput",
    props:{
            placeholder:String,
            w:Number,
 

        }

}
</script>

<style scoped>

input{
    
    height: 60px;
    background: rgba(196, 196, 196, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    border-radius: 30px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    /* identical to box height */
    color: rgba(0, 0, 0, 0.25);
}

</style>
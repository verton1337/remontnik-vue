<template>
  <select :style = "{width:($props.w || 635) + 'px'}">
      <option selected disabled>{{$props.default}}</option>
      <option 
      v-for="option in $props.options"
      :key="option.id"
      :value="option.id"
      >{{option.value}}
      </option>
  </select>
</template>

<script>
export default {
    name:"MySelect",
    props: {
        options: Array,
        default: String,
        w: Number,
        


    }

}
</script>

<style>
select{
    display: inline;
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
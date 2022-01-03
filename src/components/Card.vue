<template>
  <div class="card">

    <img class="pic" src="" alt="">
    <span class="description">
          <slot> </slot>
    </span>

  </div>
</template>

<script>
export default {
    name: "Card",


}
</script>

<style scoped>
    .card{
        width: 300px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .pic{
        width: 280px;
        height: 280px;
        margin-left: 5px;
        margin-top: 5px;

    }
    .description{
        font-family: Rubik One;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 37px;

        color: rgba(64, 66, 62, 0.88);

        border: 1px solid #FFFFFF;
    }

</style>
<template>
  <div class="btn">
      <span class="text"><slot ></slot></span>
  </div>
</template>

<script>
export default {
    name: "my-button",

}
</script>

<style>
/* cyrillic */
@font-face {
  font-family: 'Rubik One';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/rubikone/v12/0nkqC9H5Je0aiyQv-6PIbCTvmP8.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'Rubik One';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/rubikone/v12/0nkqC9H5Je0aiyQv-6PIZiTvmP8.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Rubik One';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/rubikone/v12/0nkqC9H5Je0aiyQv-6PIaCTv.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.btn{
    display: inline-block;
    cursor:pointer;
    background: rgba(242, 36, 36, 0.67);
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    border-radius: 30px;
}
.text{
display: inline-block;
font-family: Rubik One;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 37px;
color: #FFFFFF;
padding: 15px 35px 15px 35px;


}
 
</style>
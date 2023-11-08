<template>
<!-- <h1 style="color : brown">Sowmiya </h1> -->
    <div class="fullPage">
        <div class="formGet">
            <h2 style="color : brown">User Entry </h2>
            <form @submit.prevent="nameManupulation" class="formEntry">
                <!-- <form class="formEntry"> -->
                <label for="firstName"> FirstName :  </label>
                <input type="text" v-model="firstName" required>
                <br> <br>
                <label for="lastName"> Last Name :  </label>
                <input type="text" v-model="lastName" required>
                <br> <br>
                <label for = "address"> Your Address </label>
                <br>
                <textarea v-model="address" cols = "30" rows = "10" placeholder = "ur address"></textarea>
                <div  class="form-entry-submit">
                <input type="submit" value="Enter">
                </div>
            </form>
            <br>
        </div>
        <div class="formPerform">
            <h2 style="color : brown"> Performance </h2>
            Name :
            <br>
            <!-- <p id="combinedName">{{ combinedName }}</p> -->
            <!-- <p :class="{ 'blue-text': shouldChangeColor }">{{ combinedName }}</p> -->
            <!-- <p :class="{ 'blue-text':  shouldChangeColor }">{{ combinedName }}</p> -->
            <p v-html="combinedName"></p>
            <br>
            Address :
            <p :class="{'custom-color': resultAddress}">{{ resultAddress }}</p>
        </div>
    </div>
</template>

<script type="text/javascript" src='./js/sample-component.js'></script>

<style lang="scss" scoped>
.fullPage {
// background-image: url('https://wallpapers.com/images/hd/barren-desert-full-screen-hd-desktop-2a7mins6pfq3q39v.jpg');
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      display: flex;
    //   justify-content: center;
      align-items: center;
      .formGet {
        width: fit-content;
        border: 5px solid black;
        padding: 50px;
        margin: 50px;
        margin-right: 300px;
      }
      .formPerform {
        width: fit-content;
        border: 5px solid black;
        padding: 50px;
        margin: 100px;
        margin-left: 300px;
        .custom-color {
  color: #2cb77f;
}
      }
}
</style>

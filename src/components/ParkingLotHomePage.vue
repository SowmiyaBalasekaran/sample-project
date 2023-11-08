<template>
  <div class="division">
        <div class="header">
            <div class="logo">
                <img src="../assets/company-logo.png" alt="My logo">
            </div>
            <div class="title">SS parkingLot !</div>
            <button class="register">Register</button>
        </div>
        <div class="main">
            <!-- <div class="emptySpace"></div> -->
            <div class="form">
                <form action="" method="get" class="form-example">
                  <h2 style="color:red"> Login to ur account </h2>
                    <div class="form-example">
                      <label for="name">Enter your name: </label>
                      <input type="text" name="name" id="name" required />
                    </div>
                    <div class="form-example">
                      <label for="Password">Password: </label>
                      <input type="Password" name="password" id="password" required />
                    </div>
                    <div class="form-example-submit">
                      <input type="submit" value="Login" />
                    </div>
                  </form>
            </div>
            <div class="emptySpace"></div>
        </div>
        <div class="footer">
            <div class="about">
                <div class="heading">About</div>
                <div class="value">
                    <div class="value1">Partners</div>
                    <div class="value2">Career</div>
                </div>
            </div>
            <div class="address">
                <div class="heading">Address</div>
                <div class="value">No.47 3rd Main Street M.V.M Nage Dindigul 624001</div>
            </div>
            <div class="contactUs">
                <div class="heading">Contact Us</div>
                <div class="value">9489463369</div>
            </div>
        </div>
     </div>
</template>

<script type="text/javascript" src='./js/parking-lot-home-page.js'></script>

<style lang="scss" scoped>
.division {
  display: flex;
  flex-wrap: nowrap;
    flex-direction: column;
    .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  align-items: center;
    /* align-items: center; */
    background-color: rgb(94, 34, 233);
    height: 150px;
    width: 100%;
    .logo img{
      display: flex;
    align-items: center;
  justify-content: center;
  max-width: 100px;
    max-height: 100px;
  text-decoration: none;
  /* margin-left: 20%; */
  border-radius: 50%;
    }
    .title {
      /* margin-left: 35%; */
    font-size: 90px;
    width: 50%;
    /* margin-bottom: 1%; */
    display: flex;
    align-items: center;
  justify-content: center;
  font-family: 'Sriracha', cursive;
  color: #000;
    }
    .register {
      /* margin-left: 25%; */
    background-color: #b9309e; /* Green background color */
    border: none; /* No border */
    color: white; /* White text color */
    padding: 15px 32px; /* Padding around text */
    text-align: center; /* Center-align text */
    text-decoration: none; /* Remove underline from text */
    /* display: inline-block;  */
    /* Display as inline-block element */
    font-size: 16px; /* Font size */
    margin: 10p0x; /* Margin around the button */
    cursor: pointer; /* Cursor style on hover */
    display: flex;
    align-items: center;
  justify-content: center;
    border-radius: 8px; /* Border radius for rounded corners */
    }
}
.main {
  display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url('../assets/company-background.png');
    height: 500px;
    width: 100%;
    .form {
      border: 3px solid palevioletred;
      margin-left: 66%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 300px;
    padding: 30px;
    width: auto;

    label,
  input {
    display: table-cell;  /* provides label on one page and input on another page */
    margin-bottom: 10px;
  }
  label {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    font-size: 30px;
    color: #0af549;
    padding-right: 10px;
  }
    }
    }
.footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  /* justify-content: center; */
    background-color: rgb(230, 95, 151);
    height: 150px;
    width: 100%;
    .about {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    width: 33%;
    .heading{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 75px;
    width: 33%;
    font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 20px;
}
.value{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100px;
    width: 33%;
}
.value1{
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* height: 15px; */
    align-items: center;
    justify-content: center;
    width: 33%;
    font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 20px;
}
.value2{
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* height: 15px; */
    align-items: center;
    justify-content: center;
    width: 33%;
    font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 20px;
}
}
.address {
    display: flex;
    align-items:center ;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    width: 33%;
    .heading{
    display: flex;
    /* align-items: ; */
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 20px;
    /* height: 15px; */

    width: 33%;
}
.value{
    display: flex;
    /* align-items :center ; */
    /* justify-content: center; */
    font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 20px;
    /* height: 15px; */

    /* width: 33%; */
}
}
.contactUs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    width: 33%;
    .heading{
    display: flex;
    /* align-items: ; */
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 20px;
    /* height: 15px; */

    width: 33%;
}
.value{
    display: flex;
    /* align-items :center ; */
    /* justify-content: center; */
    font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 20px;
    /* height: 15px; */

    /* width: 33%; */
}
}
}
}
</style>

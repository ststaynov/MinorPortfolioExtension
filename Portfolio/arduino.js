var five = require("johnny-five"),
    board = new five.Board();


var content;
var constantContent;
//Check if value has been constant for 3 seconds and if Yes >> change value of text file
var myVar = setInterval(checkConstant, 1000);


function checkConstant(){
   //console.log("checkConstant!");
    if (constantContent != content) {
      constantContent = content;
      console.log("CONSTANT CHANGED!!!!!");
      writeToFile();
    };
};

// write to file
var fs = require("fs");

function writeToFile () {
    var fs = require("fs");
    fs.writeFile("./text.txt", constantContent, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
};

//Johnny-five start 
board.on("ready", function() {
  var imu = new five.IMU({
    controller: "MPU6050"
  });


this.loop(5000, function() {
    console.log("accelerometer");
    console.log("  x            : ", imu.accelerometer.x);
    console.log("  y            : ", imu.accelerometer.y);
    console.log("  z            : ", imu.accelerometer.z);
    console.log("--------------------------------------");

    if (imu.accelerometer.x > -1.40 && imu.accelerometer.x < -0.60 && imu.accelerometer.y > -0.40 && imu.accelerometer.y < 0.40 && imu.accelerometer.z > -0.40 && imu.accelerometer.z < 0.40) { //perfect case x is -1.00, y is 0, z is 0 
      content = 0;
       console.log("000000000000000000000");
      checkConstant();
    } else if (imu.accelerometer.x > -0.40 && imu.accelerometer.x < 0.40 && imu.accelerometer.y > -0.40 && imu.accelerometer.y < 0.40 && imu.accelerometer.z > 0.60 && imu.accelerometer.z < 1.40) { //perfect case x is 0, y is 0, z is 1  
      content = 1;
       console.log("111111111111111111111");
      checkConstant();
    } else if (imu.accelerometer.x > 0.60 && imu.accelerometer.x < 1.40 && imu.accelerometer.y > -0.40 && imu.accelerometer.y < 0.40 && imu.accelerometer.z > -0.40 && imu.accelerometer.z < 0.40) { //perfect case x is 1.00, y is 0, z is 0 
      content = 2;
       console.log("222222222222222222222");
      checkConstant();
    } else if (imu.accelerometer.x > -0.40 && imu.accelerometer.x < 0.40 && imu.accelerometer.y > -0.40 && imu.accelerometer.y < 0.40) { //perfect case x is 0, y is 0, z is -1 
      content = 3;
       console.log("333333333333333333333");
      checkConstant();
    } else if (imu.accelerometer.x > -0.40 && imu.accelerometer.x < 0.40 && imu.accelerometer.y > 0.60 && imu.accelerometer.y < 1.40 && imu.accelerometer.z > -0.40 && imu.accelerometer.z < 0.40) { //perfect case x is 0, y is 1, z is 0 
      content = 4;
       console.log("444444444444444444444");
      checkConstant();
    } else if (imu.accelerometer.x > -0.40 && imu.accelerometer.x < 0.40 && imu.accelerometer.z > -0.40 && imu.accelerometer.z < 0.40) { //perfect case x is 0, y is -1.00, z is 0 
      content = 5;
       console.log("555555555555555555555");
      checkConstant();
    } else {
      console.log("NOOONE");
    };

});
  // imu.on("change", function() {
  //   console.log("temperature");
  //   console.log("  celsius      : ", this.temperature.celsius);
  //   console.log("  fahrenheit   : ", this.temperature.fahrenheit);
  //   console.log("  kelvin       : ", this.temperature.kelvin);
  //   console.log("--------------------------------------");

  //   console.log("accelerometer");
  //   console.log("  x            : ", this.accelerometer.x);
  //   console.log("  y            : ", this.accelerometer.y);
  //   console.log("  z            : ", this.accelerometer.z);
  //   console.log("  pitch        : ", this.accelerometer.pitch);
  //   console.log("  roll         : ", this.accelerometer.roll);
  //   console.log("  acceleration : ", this.accelerometer.acceleration);
  //   console.log("  inclination  : ", this.accelerometer.inclination);
  //   console.log("  orientation  : ", this.accelerometer.orientation);
  //   console.log("--------------------------------------");

  //   console.log("gyro");
  //   console.log("  x            : ", this.gyro.x);
  //   console.log("  y            : ", this.gyro.y);
  //   console.log("  z            : ", this.gyro.z);
  //   console.log("  pitch        : ", this.gyro.pitch);
  //   console.log("  roll         : ", this.gyro.roll);
  //   console.log("  yaw          : ", this.gyro.yaw);
  //   console.log("  rate         : ", this.gyro.rate);
  //   console.log("  isCalibrated : ", this.gyro.isCalibrated);
  //   console.log("--------------------------------------");    
  // });

});
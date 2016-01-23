//Tabs
var tabs = require("sdk/tabs");
var fs = require('sdk/io/fs');
var { setInterval } = require("sdk/timers");

//tabs.open("http://www.google.com");
// tabs.on('activate', function(tab) {
//   tab.url = "http://example.com";
// });

function writeToFile() {

    // write to file
    fs.writeFile("C:\\Users\\ststa\\Desktop\\Portfolio\\text.txt", "1", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 

};
writeToFile();

var counter = setInterval(readTheFile, 1000);
var content;
function readTheFile(){
    
    fs.readFile("C:\\Users\\ststa\\Desktop\\Portfolio\\text.txt","utf-8", function(err,data)
    {
    if(err) {
            return console.log(err);
    }
    console.log("File was read!" + typeof data);
    assignToPage(data);
    });
    
};

function assignToPage(data){
    console.log("assignToPage" + data);
    var Data = Number(data);
    switch (Data) {
        case 0:
            if(content != Data){
                console.log("New data is " + data);
                tabs.open("http://athena.fhict.nl/users/i297315/DesignChallenge/index.html");

            }
            console.log("0");
            content = Data;
            break;
        case 1:
            if(content != Data){
                console.log("New data is " + data);
                tabs.open("http://athena.fhict.nl/users/i297315/StoryCreation/index.html");
            }
            console.log("1");
            content = Data;
            break;
        case 2:
            if(content != Data){
                console.log("New data is " + data);
                tabs.open("http://athena.fhict.nl/users/i297315/CriticalDesign/index.html");
            }
            console.log("2");
            content = Data;
            break;
        case 3:
            if(content != Data){
                console.log("New data is " + data);
                tabs.open("http://athena.fhict.nl/users/i297315/InternationalCommunication/index.html");
            }
            console.log("3");
            content = Data;
            break;
        case 4:
            if(content != Data){
                console.log("New data is " + data);
                tabs.open("http://athena.fhict.nl/users/i297315/HumanCenteredDesign/index.html");
            }
            console.log("4");
            content = Data;
            break;
        case 5:
            if(content != Data){
                console.log("New data is " + data);
                tabs.open("http://athena.fhict.nl/users/i297315/ValuePropositionDesign/index.html");
            }
            console.log("5");
            content = Data;
            break;
        default:
            console.log('default');
    }
};
// read the file and loop through data
// function startCountDown(){
//     setTimeout(function(){
//     readTheFile();
//     console.log("inloop");;
//     }, 5000);
// };
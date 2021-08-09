let testplan = true

function test(){
    console.log(document.getElementById("test1").value)
    B = 12;
    
    if((document.getElementById("test1").value === "test") && (testplan) ){
        console.log("test in value")
        let subresultnum = Math.floor( Math.random() * 1+1)
        console.log(subresultnum)
    }
}



let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
let getMember = ["812608069128159233","524907316269678622","814890074185007104"]
function randomChoice(arr) {
  let A = Math.floor(Math.random() * arr.length);
  let B = arr[A];
  arr.splice(A,1);
  return B;
}


let nort = getMember.slice(0,getMember.length)
//console.log(nort)
const animals = {'ant':"a", 'bison':"b", 'camel':"c", 'duck':"d", 'elephant':"e"};

// expected output: Array ["camel", "duck", "elephant"]


// expected output: Array ["camel", "duck"]

function addressListToName(list){
  let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
  let result=[];
  for(l of list){
          for(key in memberList){
                  if(String(l) === String(memberList[key])){
                          result.push(key);
                  };
          };     
  };
 return result;
};

class GetMemberData {
        constructor(address,name,blackOrWhite,roll,count){
                this.address = address;
                this.name = name;
                this.blackOrWhite = blackOrWhite;
                this.roll = roll;
                this.count = count;
                
        };
};

let V = new GetMemberData("1234","Rou","black","werewolf",0)

eval("var " + String(V.name) + "= new GetMemberData(\"1234\",\"Rou\",\"black\",\"werewolf\",0)");


function f(){
	x = 0; // グローバル変数
	//console.log(x);
}
function g(){
	//console.log(x);
}
function F(){
        a = 0;
}
 //0
g(); //0


function addressListToName(str){
        let memberList = {"ロウ":"812608069128159233","しおん":"524907316269678622","Uki":"814890074185007104","miho":"814826300770484244","mint":"812608586710253598","なかま":"838767066198573076","huuya":"620970054170705921","たくあん":"812609175666163723","kaitwo":"812624786534432779","あづき":"812616102282002443","音声用":"842394503104430090"}
                for(key in memberList){
                        if(String(str) === String(memberList[key])){
                                return String(key);
                        };
                };     
};

console.log(addressListToName("812608069128159233"))
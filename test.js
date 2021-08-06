let testplan = true

function test(){
    console.log(document.getElementById("test1").value)
    
    if((document.getElementById("test1").value === "test") && (testplan) ){
        console.log("test in value")
        testplan = false
        console.log("here text is true")
    }
}

function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
      if ($.inArray(e, result) == -1) result.Push(e);
    });
    return result;
  }

let a =["aw","add","ef","erhg","aw","add"]

let theliat = ["aw","add","ef","erhg","aw","add"]

theliat = theliat.filter(
    function(a){if (!this[a]) {this[a] = 1; return a;}},
    {}
   );
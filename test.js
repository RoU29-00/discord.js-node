let testplan = true

function test(){
    console.log(document.getElementById("test1").value)
    
    if((document.getElementById("test1").value === "test") && (testplan) ){
        console.log("test in value")
        let subresultnum = Math.floor( Math.random() * 1+1)
        console.log(subresultnum)
    }
}


let Astro = Object.keys(obj).filter( (key) => { 
  for(let a =0;a<memberList;a++)
  Object.keys(memberList).forEach(key => {return obj[key] === memberList[a]})});
Mrg += "@" + Astro
console.log(Mrg)


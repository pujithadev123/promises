let a=new Promise((x,y)=>{
    if(1){
        x("order placed")
    }
    else{
        y("rejected")
    }
})
let b=new Promise((x,y)=>{
    if(1){
        x("order shipped")
    }
    else{
        y("rejected")
    }
})

let c=new Promise((x,y)=>{
    if(1){
        x("delivery patner will take the product and it will delivered with in 10days")
    }
    else{
        y("rejected")
    }
})

let d=new Promise((x,y)=>{
    if(1){
        x(" order was reached")

    }
    else{
        y(" rejected ")
      
    }
})

a.then((res)=>{
    console.log(res)
    return b;
}).then ((res)=>{
    console.log(res)
    return c;
}).then ((res)=>{
    console.log(res)
    return d;
}).then ((res)=>{
    console.log(res)
})
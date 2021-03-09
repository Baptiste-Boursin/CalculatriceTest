module.exports = {

  add : (a , b)=>{
    return a + b;
  },

  mul : (a,b)=>{
    return a * b
  },

  sub : (a,b)=>{
    return a - b;
  },

  div : (a,b)=>{
    if(b===0){
      throw  new Error("Division par 0 interdite")
    }
    return a / b
  },

  prct : (a,b) =>{
    return CalculService.div(CalculService.mul(a , b),100);
  },

  pow : (a)=>{
    return CalculService.mul(a,a);
  }
}

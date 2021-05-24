
var Index={

  template:`<div style="background-color:#C8BFE7">

    <h1>这里是首页</h1>    
    <button @click="godetail_1">查看商品1的详情</button>
    <router-link to="details/2">查看商品2的详情</router-link>
  </div>`,  
   
  methods:{
    godetail_1(){
    this.$router.push("/details/1");
   }
  }
}
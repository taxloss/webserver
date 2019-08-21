new Vue ({
    el: "#vue-app",
    data:{
      name:'',
      age:''

    },
    methods:{
      logName: function(){
        console.log("You enter your name");
        
      },
      logAge: function(){
        console.log("You enter your age");
      }

    }

});
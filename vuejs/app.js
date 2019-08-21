new Vue({
    el:'#vue-app',
    data:{
      name :'Toshiko',
      job: 'Ninja'
      },

    methods:{
       greet :function(time){
           
         return 'Good '+time +' '+this.name;
       }
    }
});
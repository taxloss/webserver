new Vue({
  el:'#vue-app',
  data:{
      name: "Toshiko",
      job:"Ninja",
      website:"http://www.thenetninja.co.uk",
      websiteTag:'<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
  },
  methods:{
      
    greet: function(time){
      return 'Good '+time +' '+this.name;

    }
  }

});
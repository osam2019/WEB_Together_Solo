export const filter_func={
  bigOption_filter: function(bigOption){
    this.$http.get('data.json')
    .then(response => {
      return response.json();
    }).then(data => {
      const resultArray = [];
      for(let key in data){
        if(data[key].bigOption == bigOption)
          resultArray.push(data[key]);
      }
      this.cards = resultArray;
    });
  },

}

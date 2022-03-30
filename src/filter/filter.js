import Vue from 'vue'

Vue.filter("date", function (oldVal) {
  let date = new Date(oldVal) 
  let year = date.getFullYear();
  //日期
  let data=date.getDate()>=10 ? date.getDate() : "0"+( date.getDate());
  //月份
  let day = date.getMonth()+1>=10  ? date.getMonth()+1 : "0" + (date.getMonth()+1);  
  
  let time = year+"年" + day  +"月" + data + "日  " ;
  return time 
})
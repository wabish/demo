var $ = require('jquery');

$('#app').html('正在加载中...');

$.ajax({
  url: 'http://localhost:8080/cobish',
  type: 'post',
  success: function(json) {
    console.log(json);

    $('#app').html(json.data);
  }
});
$(document).ready(function(){

    // 设置按钮不可用
    $('.btn').prop('disabled', true);

    // 监听文本框输入，如果有值，则设置按钮可用
    $('.txt').on('input', function() {
        if ($(this).val().length > 0) {
            $('.btn').prop('disabled', false);
        } else {
            $('.btn').prop('disabled', true);
        }
    });

    // 按钮点击事件
    $('.btn').on('click', function() {
        alert($('.txt').val());
    });

});

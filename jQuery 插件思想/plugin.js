(function($) {

    $.fn.getUser = function(options) {
        var defaults = {
            elm: this,
            username: 'Cosplay',
            age: 100,
            sex: '男',
            callback: function() {}
        }

        var options = $.extend(defaults, options);

        var _this = options.elm,
            username = options.username,
            age = options.age,
            sex = options.sex;
        callback = options.callback;

        var showData = function() {
            $(_this).val(username + "--" + age + "--" + sex);
        }()

        callback && callback(sex); //回调函数
    }

})(jQuery);
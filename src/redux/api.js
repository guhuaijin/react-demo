
let url = 'http://app38.s.weshaketv.com:9017/fybk3'

export default {

    getLocalNews(cb) {

        $.ajax({
            type: "GET",
            url: url + "/rss/recommendNew",
            dataType: "jsonp",
            data: {
                openid: '28c8b4644db449949f1b4f0ea50b2360',
                incr: 0,
                size: 20 //新闻类型: 1-热榜 2-地区 3-阅单 4-个性推荐
            },
            success: function(data) {
                cb(data);
            }
        });

     
    }

}

let url = 'https://api.douban.com/v2/book/search?q=%E6%9D%91%E4%B8%8A%E6%98%A5%E6%A0%91&count=20&start=1'
// import axios from 'axios'

export default {

    getLocalNews(cb) {
        $.ajax({
            type: "GET",
            url: url,
            dataType: "jsonp",
            data: {
            },
            success: function(data) {
                cb(data);
            }
        });

        // axios.get(url).then(function(res) {
        //     if (res.status >= 200 && res.status < 300) {
        //         cb(res);
        //     }
        // }).catch((error) => {
        //     // new Error('desc');
        //     return Promise.reject(error)
        // })
    }

}
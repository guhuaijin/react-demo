import axios from 'axios'

let url = 'http://app38.s.weshaketv.com:9017/fybk3'

export default {

    getLocalNews(cb) {
        axios.get(`${url}/rss/recommendNew?${new Date() * 1}&incr=0&size=20&openid=28c8b4644db449949f1b4f0ea50b2360&callback=?&_=`)
            .then((res) => {
                console.log( res );
                cb(JSON.parse(res.data.replace(/\?\(|\)/g, '') ))
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }

}

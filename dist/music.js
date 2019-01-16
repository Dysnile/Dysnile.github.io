const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '云烟成雨',
        artist: '房东的猫',
        url: 'https://filemusic.oss-cn-shanghai.aliyuncs.com/%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8%2B%E6%88%BF%E4%B8%9C%E7%9A%84%E7%8C%AB.mp3',
        cover: 'http://jijiantuchuang123.oss-cn-shanghai.aliyuncs.com/18-8-19/99353195.jpg',
      },
      {
        name: 'Alone',
        artist: 'Halsey',
        url: 'http://filemusic.oss-cn-shanghai.aliyuncs.com/Alone%2B-%2BHalsey%252CBig%2BSean%252CStefflon%2BDon.mp3',
        cover: 'http://filemusic.oss-cn-shanghai.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20190116174946.png',
      },
      {
        name: 'Bad_at_Love',
        artist: 'Halsey',
        url: 'http://filemusic.oss-cn-shanghai.aliyuncs.com/Bad%2BAt%2BLove-Halsey.mp3',
        cover: 'http://filemusic.oss-cn-shanghai.aliyuncs.com/QQ%E6%88%AA%E5%9B%BE20190116175443.png',
      }
    ]
});

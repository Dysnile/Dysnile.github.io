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
      }
    ]
});

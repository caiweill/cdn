function switchNightMode(){
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
    if(night == '0'){
        document.body.classList.add('night');
        document.cookie = "night=1;path=/"
        console.log('夜间模式开启');
    }else{
        document.body.classList.remove('night');
        document.cookie = "night=0;path=/"
        console.log('夜间模式关闭');
    }
}
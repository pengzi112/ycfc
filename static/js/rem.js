   function adapt(designWidth, rem2px) {
        var d = window.document.createElement('div');
        d.style.width = '1rem';
        d.style.display = "none";
        var head = window.document.getElementsByTagName('head')[0];
        head.appendChild(d);
        var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
        d.remove();
        document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
        var st = document.createElement('style');
        var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
        var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"
        st.innerHTML = portrait + landscape;
        head.appendChild(st);
        return defaultFontSize
    };
    var defaultFontSize=adapt(750,100);
    window.onresize = function(){
        var defaultFontSize = adapt(750,100);
    };


    
/*(function(doc, win) {
var docEl = doc.documentElement,
isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
docEl.dataset.dpr = dpr;
var recalc = function() {
var width = docEl.clientWidth;
if (width / dpr > 750) {
width = 750 * dpr;
}
docEl.dataset.width = width
docEl.dataset.percent = 100 * (width / 750);
docEl.style.fontSize = 100 * (width / 750) + 'px';
};
recalc()
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
})(document, window);*/
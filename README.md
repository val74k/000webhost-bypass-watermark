# 000webhost-bypass-watermark

##To remove the 000webhost watermark, you must introduce this javascript code in your index.html :

![alt text]([https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png](https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png))

```javascript
for (var i = 0; document.getElementsByTagName("div").length; ++i) {
  if (document.getElementsByTagName("div")[i].style.zIndex == "9999999") {
    document.getElementsByTagName("div")[i].remove()
  } }
```


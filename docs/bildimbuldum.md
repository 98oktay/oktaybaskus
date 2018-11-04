<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bildim Buldum</title>
    <meta property="al:ios:url" content="bildimbuldum://game" />
    <meta property="al:android:url" content="bildimbuldum://game">
    <meta property="al:ios:app_store_id" content="1438994141" />
    <meta property="al:android:package" content="com.gozdebaskus.bildimbuldum">
    <meta property="al:android:app_name" content="Bildim Buldum">
    <meta property="al:ios:app_name" content="Bildim Buldum" />
<script>

var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
    IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
    IS_IOS = IS_IPAD || IS_IPHONE,
    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
    IS_MOBILE = IS_IOS || IS_ANDROID;

 if (IS_IOS) {
        window.location = 'https://itunes.apple.com/app/id' + $("meta[property='al:ios:app_store_id']").attr("content") ;
    }else if (IS_ANDROID) {
        window.location = 'intent:/'+$("meta[property='al:android:url']").attr("content").split(':/')[1]+'#Intent;package='+$("meta[property='al:android:package']").attr("content")+';scheme='+$("meta[property='al:android:url']").attr("content").split(':/')[0]+';launchFlags=268435456;end;';
    }
    </script>
</head>

<body>

</body>

</html>

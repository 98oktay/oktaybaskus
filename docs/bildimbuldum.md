<script>

var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
    IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
    IS_IOS = IS_IPAD || IS_IPHONE,
    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
    IS_MOBILE = IS_IOS || IS_ANDROID;

 if (IS_IOS) {
        window.location = 'https://itunes.apple.com/app/id1438994141';
    }else if (IS_ANDROID) {
        window.location = 'intent://game#Intent;package=com.gozdebaskus.bildimbuldum;scheme=bildimbuldum;launchFlags=268435456;end;';
    }
    </script>

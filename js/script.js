document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // ブラウザチェック
    if (/safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && /iphone|ipad|ipod/i.test(navigator.userAgent)) {
        console.log('Adjusting styles for iOS Safari');
        const fixedBackgroundElements = document.querySelectorAll('.fixed-background');
        // すべての.fixed-background要素に対してスタイルを適用
        fixedBackgroundElements.forEach(element => {
            element.style.backgroundAttachment = 'scroll';
            element.style.backgroundSize = 'auto 100vh';
        });
    }
});

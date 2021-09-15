var filetitle_str;
var language_str;

const relativePortfolioTopPagePath = "top.html";

window.addEventListener('load', function () {
    // 初期化
    filetitle_str = window.location.href.split('/').pop();
    language_str = document.documentElement.lang;
    // alert(language_str);

    Start();

}, false);

function Start() {
    // // RenderHead();
    //
    // // GithubPagesのトップは空白になる
    // if (filetitle_str === "index.html" || filetitle_str === "") {
    //     TeleportByLanguage();
    // }
    // else {
    //     if (filetitle_str === "en_top.html") {
    //         RenderEnglishTopPage();
    //     } else if (filetitle_str === "jp_top.html") {
    //         RenderJapaneseTopPage();
    //     } else if (filetitle_str === "en_qa.html") {
    //         RenderEnglishQaPage();
    //     } else if (filetitle_str === "jp_qa.html") {
    //         RenderJapaneseQaPage();
    //     } else if (filetitle_str === "en_feature.html") {
    //         RenderEnglishFeaturePage();
    //     } else if (filetitle_str === "jp_feature.html") {
    //         RenderJapaneseFeaturePage();
    //     }
    // }
}

function RenderHead() {
    // let headElem = document.querySelector('head');
    // headElem.innerHTML = headHTML;
}

// function RenderEnglishTopPage() {
//     let mainElem = document.querySelector('main');
//     mainElem.innerHTML = GetNavString("en") + englishMainPictureHTML + GetMainAboutHTML("en") +
//         englishMainMovieHTML + englishMainContactHTML + englishMainFooterHTML + copyrightAndBackButton;
// }

// function RenderJapaneseTopPage() {
//     let mainElem = document.querySelector('main');
//     mainElem.innerHTML = GetNavString("ja") + englishMainPictureHTML + GetMainAboutHTML("ja") +
//         englishMainMovieHTML + englishMainContactHTML + englishMainFooterHTML + copyrightAndBackButton;
// }

// function RenderEnglishQaPage() {
//     let mainElem = document.querySelector('main');
//     mainElem.innerHTML = GetNavString("en") + GetQaTopString("en") + GetQaContentString("en") + GetContentCautionString("en") + copyrightAndBackButton;
// }

// function RenderJapaneseQaPage() {
//     let mainElem = document.querySelector('main');
//     mainElem.innerHTML = GetNavString("ja") + GetQaTopString("ja") + GetQaContentString("ja") + GetContentCautionString("ja") + copyrightAndBackButton;
// }

// function RenderEnglishFeaturePage() {
//     let mainElem = document.querySelector('main');
//     mainElem.innerHTML = GetNavString("en") + GetFeatureTopString("en") + GetFeatureTableString("en") + GetContentCautionString("en") + copyrightAndBackButton;
// }

// function RenderJapaneseFeaturePage() {
//     let mainElem = document.querySelector('main');
//     mainElem.innerHTML = GetNavString("ja") + GetFeatureTopString("ja") + GetFeatureTableString("ja") + GetContentCautionString("ja") + copyrightAndBackButton;
// }

function TeleportByLanguage() {
    // try {
    //     var langs = window.navigator.languages || window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage;
    //     var isJapanese = false;
    //     langs.forEach(element => {
    //         if (element == 'ja') isJapanese = true;
    //     });

    //     if (isJapanese) {
    //         location.href = relativeJapaneseTopPagePath;
    //     } else {
    //         location.href = relativeEnglishTopPagePath;
    //     }
    // }
    // catch
    // {
    //     location.href = relativeEnglishTopPagePath;
    // }

    location.href = relativePortfolioTopPagePath;
}



var headHTML = String.raw`
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>RESONARK Series</title>
    <!-- Font Awesome icons (free version)-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
        crossorigin="anonymous"></script>

    <link rel="icon" type="image/png" href="/favicon.png">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@septem47">
    <meta name="twitter:creator" content="@septem47">
    <meta property="og:type" content="website">
    <meta property="og:title" content="septem47 portfolio">
    <meta property="og:site_name" content="septem47 portfolio">
    <meta property="og:url" content="https://sep-neko-ya.github.io/portfolio/">
    <meta property="og:image" content="assets/img/top/pf-maincap.jpg">

    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet">
    <!-- Fonts CSS-->
    <link rel="stylesheet" href="css/heading.css">
    <link rel="stylesheet" href="css/body.css">
    <link rel="stylesheet" href="css/septem47/general.css">
    `;

var copyrightAndBackButton = String.raw`
    <!-- Copyright Section-->
    <section class="copyright py-4 text-center text-white">
        <div class="container"><small class="pre-wrap">Copyright © sep-neko-ya 2020 - 2021 </small></div>
    </section>
    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <div class="scroll-to-top position-fixed"><a
            class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i
                class="fa fa-chevron-up"></i></a></div>
`;
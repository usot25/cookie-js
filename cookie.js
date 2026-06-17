(function () {
    function setCookie(name, value) {
        document.cookie = name + "=" + value + "; path=/";
    }

    setCookie("Performance Cookie", "Performance Cookie!");
    setCookie("Functional Cookie", "Functional Cookie!");
    setCookie("Targeting Cookie", "Targeting Cookie!");
    setCookie("Social Media Cookie", "Social Cookie!");

    console.log("Cookies injected via external script");
})();
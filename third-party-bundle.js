(function () {

    function loadThirdPartyFrame() {
        var iframe = document.createElement("iframe");

        iframe.src = "https://usot25.github.io/cookie-js/cookie_script_3rd_party.html";
        iframe.style.display = "none";
        iframe.width = "0";
        iframe.height = "0";

        document.body.appendChild(iframe);
    }

    if (document.readyState === "complete") {
        loadThirdPartyFrame();
    } else {
        window.addEventListener("load", loadThirdPartyFrame);
    }

})();
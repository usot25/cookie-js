// (function () {
//     function setCookie(name, value) {
//         document.cookie = name + "=" + value + "; path=/";
//     }

//     setCookie("Performance Cookie", "Performance Cookie!");
//     setCookie("Functional Cookie", "Functional Cookie!");
//     setCookie("Targeting Cookie", "Targeting Cookie!");
//     setCookie("Social Media Cookie", "Social Cookie!");

//     console.log("Cookies injected via external script");
// })();

(function () {

    function setCookie(name, value, options = {}) {
        let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        // Expiry
        if (options.days) {
            const date = new Date();
            date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
            cookie += `; expires=${date.toUTCString()}`;
        }

        // Domain (simulate third-party behavior if needed)
        if (options.domain) {
            cookie += `; domain=${options.domain}`;
        }

        // Path
        cookie += `; path=${options.path || "/"}`;

        // Secure flag (required for SameSite=None)
        if (options.secure) {
            cookie += "; Secure";
        }

        // SameSite
        if (options.sameSite) {
            cookie += `; SameSite=${options.sameSite}`;
        }

        document.cookie = cookie;
    }

    // Performance Cookie (Analytics-like)
    setCookie("Performance Cookie", "Performance Cookie!", {
        days: 30,
        sameSite: "Lax"
    });

    // Functional Cookie
    setCookie("Functional Cookie", "Functional Cookie!", {
        days: 30,
        sameSite: "Lax"
    });

    // Targeting Cookie (Ad/Tracking-like → cross-site)
    setCookie("Targeting Cookie", "Targeting Cookie!", {
        days: 90,
        sameSite: "None",
        secure: true
    });

    // Social Media Cookie (cross-site)
    setCookie("Social Media Cookie", "Social Cookie!", {
        days: 90,
        sameSite: "None",
        secure: true
    });

    setCookie("_ga", "GA1.2.123456789", { days: 730, sameSite: "Lax" });
    setCookie("_fbp", "fb.1.123456789", { days: 90, sameSite: "None", secure: true });

    console.log("Cookies injected manually");
})();

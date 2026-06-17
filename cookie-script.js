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
    setCookie("performance_cookie", "performance_Cookie!", {
        days: 30,
        sameSite: "Lax"
    });

    // Functional Cookie
    setCookie("functional_cookie", "functional_cookie!", {
        days: 30,
        sameSite: "Lax"
    });

    // Targeting Cookie (Ad/Tracking-like → cross-site)
    setCookie("targeting_cookie", "targeting_cookie!", {
        days: 90,
        sameSite: "None",
        secure: true
    });

    // Social Media Cookie (cross-site)
    setCookie("social_media_cookie", "social_cookie!", {
        days: 90,
        sameSite: "None",
        secure: true
    });

    setCookie("_ga", "GA1.2.123456789", { days: 730, sameSite: "Lax" });
    setCookie("_fbp", "fb.1.123456789", { days: 90, sameSite: "None", secure: true });
    console.log("first party cookies injected manually (6)");
})();

"use strict";
function getIpInfo() {
    fetch("https://api.ooomn.com/api/ip").then(function (e) {
        return e.json()
    }).then(function (e) {
        var n = e.country,
            t = e.ip,
            r = e.province,
            i = e.city,
            o = e.isp;
        document.getElementById("userAgentIp").innerHTML = t, document.getElementById("userAgentCountry").innerHTML =
            n, document.getElementById("userAgentRegion").innerHTML = r, document.getElementById(
                "userAgentCity").innerHTML = i, document.getElementById("userAgentIsp").innerHTML = o;
        var u = navigator.userAgent;
        document.getElementById("userAgentDevice").innerHTML = u
    })
}
getIpInfo();
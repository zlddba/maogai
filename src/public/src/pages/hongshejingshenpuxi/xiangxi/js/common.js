var _wdVersion = _wdVersion || {};
(_wdVersion.WD = _wdVersion.WD || "0"), (_wdVersion.CN = "1");
var _wdTimeOut = 1800,
  _wdRUTimeout = 30,
  _wdPerfTimeOut = 60,
  _wdED = "expires=Fri, 1 Jan 2038 00:00:00 GMT;",
  _wdCK = "0",
  _wdJE = "0",
  _wdHP = "0",
  _wdFl = 0,
  _wdTZ = 0,
  _wdLG = "",
  _wdCT = "",
  _wdFS = 0,
  _wdErr = "1",
  _wdGidT = 0,
  _wdDT = document.title == "" ? location.href : document.title,
  _wdCS,
  _wdSL = window.location.href,
  _wdHost = window.location.host,
  _wdRDM = "",
  _wdRP = document.referrer,
  _wdUA = navigator.appName + " " + navigator.appVersion,
  _wdRUA = navigator.userAgent,
  _wdWS = window.screen,
  _wdBV = navigator.appVersion.substring(0, 1),
  _wdNN = _wdUA.indexOf("Netscape") != -1,
  _wdMC = _wdUA.indexOf("Mac") != -1,
  _wdIE = _wdUA.indexOf("MSIE") != -1,
  _wdOP = _wdRUA.indexOf("Opera") != -1,
  _wdIEV = 0,
  _wdCID,
  _wdBCID = "0",
  _wdLS = 0,
  _wdTO = "1",
  _wdSID = "",
  _wdDU = 10,
  _wdLP,
  _wdCA,
  curtime = new Date(),
  Aimg;
String.prototype.trim = (function () {
  var e = /^\s+|\s+$/g;
  return function () {
    return this.replace(e, "");
  };
})();
var _webdigObj = _webdigObj || {};
(_webdigObj.getMeta = function (e) {
  var t = document.getElementsByTagName("meta");
  if (t) {
    for (var w = 0; w < t.length; w++)
      if (t[w].name == e) return t[w].content.trim();
  }
  return "";
}),
  (_wdLP = location.protocol.indexOf("https") > -1 ? "https:" : "http:"),
  (_wdCA = _wdLP + _wecl);
function println(e) {}
function _wdEC() {}
window.onerror = _wdEC;
function fesc(e) {
  return (e = new String(e)), escape(e);
}
function wdhex(e) {
  for (var t = "", w, u = 7; u >= 0; u--)
    (w = (e >>> (u * 4)) & 15), (t += w.toString(16));
  return t;
}
function wdHash(e) {
  if (!e || e == "") return 1;
  for (var t = 1732584193, w = 4023233417, u = 0; u < e.length; u++) {
    var g = parseInt(e.charCodeAt(u));
    (t = ((t << 6) | (w >>> 26)) + ((t << 16) | (w >>> 16)) - t),
      (w = (g + (w << 6) - w + (w << 16)) & 4294967295);
  }
  return wdhex(t & 2147483647) + wdhex(w);
}
function wdGenCID() {
  return wdHash(
    document.location + document.cookie + document.referrer + curtime.getTime()
  );
}
function getCookie(e) {
  var t = null,
    w = document.cookie,
    u = w.indexOf(e);
  return (
    u != -1 &&
      ((u += e.length + 1),
      (e = w.indexOf(";", u)),
      e == -1 && (e = w.length),
      (t = w.substring(u, e))),
    t
  );
}
function wdFlash() {
  var a = "",
    b = navigator;
  if (b.plugins && b.plugins.length) {
    for (var c = 0; c < b.plugins.length; c++)
      if (b.plugins[c].name.indexOf("Shockwave Flash") != -1) {
        a = b.plugins[c].description.split("Shockwave Flash ")[1];
        break;
      }
  } else if (window.ActiveXObject)
    for (c = 10; c >= 2; c--)
      try {
        var d = eval(
          "new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + c + "');"
        );
        if (d) {
          a = c + ".0";
          break;
        }
      } catch (e) {}
  return a;
}
function send_ref(e, t) {
  var w = !1,
    u = function () {
      w || ((w = !0), typeof t == "function" && t());
    };
  (e = _wdCA + e),
    (Aimg = new Image()),
    (Aimg.onload = function () {
      u(), (_wdGidT = Aimg.height), Aimg.height == 1 && _wd_ruid(_wdDU);
    }),
    (Aimg.onerror = u),
    (Aimg.src = e);
}
function send_bc(e) {
  navigator.sendBeacon
    ? ((e = _wdCA + e), navigator.sendBeacon(e))
    : send_ref(e);
}
function wd_tracker(e) {
  if ((setup_data({}), e && e != "")) {
    var t = _wdSL;
    e.toLowerCase().indexOf("http") != 0 && (e = _wdLP + "//" + _wdHost + e),
      (_wdSL = e),
      (_wdRP = t);
  }
  write_ref();
}
function wd_reptracker(e, t) {
  setup_data({}),
    e && e != "" && (_wdSL = _wdLP + "//" + _wdHost + e),
    write_ref();
}
function getmetaContents(e) {
  var t = document.getElementsByTagName("meta");
  for (var w in t) if (t[w].name == e) return t[w].content;
}
function setup_metadata(e) {
  (_webdigObj.catalogs =
    e.wdc || _webdigObj.getMeta("catalogs") || _webdigObj.catalogs),
    (_webdigObj.contentid = e.wdci || _webdigObj.getMeta("contentid")),
    (_webdigObj.filetype = _webdigObj.getMeta("filetype")),
    (_webdigObj.pagetype = _webdigObj.getMeta("pagetype")),
    (_webdigObj.publishedtype = _webdigObj.getMeta("publishedtype")),
    (_webdigObj.publishdate = _webdigObj.getMeta("publishdate")),
    (_webdigObj.author = _webdigObj.getMeta("author")),
    (_webdigObj.editor = _webdigObj.getMeta("editor")),
    (_webdigObj.reporter = _webdigObj.getMeta("reporter")),
    (_webdigObj.subject = _webdigObj.getMeta("subject")),
    (_webdigObj.source = _webdigObj.source || _webdigObj.getMeta("source")),
    (_webdigObj.sourcetype = _webdigObj.getMeta("sourcetype")),
    (_webdigObj.pageversion = _webdigObj.getMeta("pageversion")),
    (_webdigObj.partner = _webdigObj.getMeta("partner")),
    (_webdigObj.speical = _webdigObj.getMeta("webterren_speical")),
    (_webdigObj.dept = _webdigObj.getMeta("dept")),
    (_webdigObj.sec = _webdigObj.pro || function () {}),
    _webdigObj.sec(),
    (_webdigObj.url = (function () {
      var t = "";
      return (
        (t = "_wdc=" + escape(_webdigObj.catalogs) + "&"),
        _webdigObj.subject && (t += "_wds=" + escape(_webdigObj.subject) + "&"),
        (t +=
          "_wdt=" +
          escape(_webdigObj.filetype ? _webdigObj.filetype : 0) +
          escape(_webdigObj.publishedtype ? _webdigObj.publishedtype : 0) +
          escape(_webdigObj.pagetype ? _webdigObj.pagetype : 0) +
          "&"),
        _webdigObj.contentid
          ? e.sub_page_id
            ? (t +=
                "_wdci=" +
                escape(_webdigObj.contentid + "-" + e.sub_page_id) +
                "&")
            : (t += "_wdci=" + escape(_webdigObj.contentid) + "&")
          : e.sub_page_id && (t += "_wdci=" + escape(e.sub_page_id) + "&"),
        _webdigObj.publishdate &&
          (t += "_wdp=" + escape(_webdigObj.publishdate) + "&"),
        _webdigObj.author &&
          ((t += "_wda=" + escape(_webdigObj.author) + "&"),
          (t += "_wdmd=" + escape(_webdigObj.author) + "&")),
        _webdigObj.editor && (t += "_wda2=" + escape(_webdigObj.editor) + "&"),
        _webdigObj.reporter &&
          (t += "_wdr=" + escape(_webdigObj.reporter) + "&"),
        _webdigObj.source && (t += "_wdori=" + escape(_webdigObj.source) + "&"),
        _webdigObj.sourcetype &&
          (t += "_wdot=" + escape(_webdigObj.sourcetype) + "&"),
        _webdigObj.speical &&
          (t += "_wdsp=" + escape(_webdigObj.speical) + "&"),
        _webdigObj.pageversion &&
          (t += "_wdvs=" + escape(_webdigObj.pageversion) + "&"),
        _webdigObj.partner &&
          (t += "_wdqd=" + escape(_webdigObj.partner) + "&"),
        _webdigObj.dept && (t += "_wddp=" + escape(_webdigObj.dept) + "&"),
        t
      );
    })());
}
function _wd_write_ref(e, t, w) {
  typeof t == "undefined" && (t = {}),
    (curtime = new Date()),
    setup_data(t),
    setup_metadata(t);
  var u = "";
  for (k in t)
    (typeof k == "string" && k.startsWith("wd")) ||
      (u += encodeURIComponent(k) + "=" + encodeURIComponent(t[k]) + "&");
  (e = u + e),
    _webdigObj.url && (e += "&" + _webdigObj.url),
    (_wdSL = _wdSL.indexOf("?") == -1 ? _wdSL + "?" + e : _wdSL + "&" + e),
    write_ref(w);
}
function _wd_paramtracker(e, t) {
  typeof e == "object"
    ? _wd_write_ref("_wdxid=000000000000000000000000000000000000000000", e, t)
    : _wd_write_ref(e, {}, t);
}
function _wd_write_perf(e, t) {
  var w, u, g;
  if (e) {
    let v = function (h) {
      return m > t.to * 1e3
        ? -1
        : h > 0 && h < t.to * 1e3
          ? h
          : h == 0
            ? 1
            : -1;
    };
    var y = v,
      m = Date.now() - t.start,
      w = v(e.loadEventEnd - e.navigationStart),
      u = v(e.responseEnd - e.requestStart),
      g = v(e.domComplete - e.domLoading);
  } else if (typeof wdPerfLogStart != "undefined") {
    var s = new Date() - wdPerfLogStart;
    s <= t.to * 1e3
      ? ((w = s), (u = s), (g = s))
      : ((w = -1), (u = -1), (g = -1));
  } else (w = -2), (u = -2), (g = -2);
  var O = "_wdplt=" + w + "&_wdrrt=" + u + "&_wdprt=" + g;
  t && t.username && (O += "&_wduser=" + escape(t.username)),
    _wd_write_ref(O, t);
}
function _wd_track_perf(e) {
  _wd_setup_perf(e ? { to: e } : {});
}
function _wd_setup_perf(e) {
  if (
    (e.to || (e.to = _wdPerfTimeOut), typeof window.performance != "undefined")
  ) {
    let s = function () {
        w || (_wd_write_perf(t, e), (w = !0));
      },
      m = function () {
        document.readyState == "complete" && setTimeout(s, 0);
      };
    var u = s,
      g = m;
    e.start = Date.now();
    var t = window.performance.timing,
      w = !1;
    document.readyState == "complete"
      ? m()
      : (document.addEventListener
          ? document.addEventListener("readystatechange", m)
          : document.attachEvent("onreadystatechange", m),
        setTimeout(s, e.to * 1e3));
  } else _wd_write_perf(null, e);
}
function _wd_track_inner_page(e, t) {
  if (!(typeof e == "undefined" || typeof t == "undefined")) {
    curtime = new Date();
    var w = {};
    (w.sub_page_id = e), (w.title = t), setup_data(w), setup_metadata(w);
    var u = _webdigObj.url;
    u && u != "" && (_wdSL += _wdSL.indexOf("?") == -1 ? "?" + u : "&" + u),
      write_ref();
  }
}
function _wd_track_user(e, t, w) {
  if (typeof e != "undefined") {
    curtime = new Date();
    var u = {};
    (u.username = e), (u.to = w), (u.title = t), _wd_setup_perf(u);
  }
}
function _wd_track_external(e) {
  if (!!e.url) {
    (curtime = new Date()), setup_data(e), setup_metadata(e);
    var t = "_wdxid=000000000000000000000000000000000000000000&_wdt=112";
    (_wdSL += _wdSL.indexOf("?") == -1 ? "?" + t : "&" + t), write_bc();
  }
}
function setup_data(e) {
  if (
    ((_wdDT = document.title == "" ? location.href : document.title),
    e.title && (_wdDT = e.title),
    e.sub_page_id)
  ) {
    var t = window.location.href;
    _wdSL =
      t.indexOf("?") == -1
        ? t + "?_spid=" + e.sub_page_id
        : t + "&_spid=" + sub_page_id;
  } else
    e.url
      ? ((_wdSL = e.url), (_wdRP = e.referer))
      : (_wdSL = window.location.href);
  if (
    ((_wdHost = document.location.host),
    document.location.host == "mipcache.bdstatic.com")
  ) {
    var w = document.location.pathname,
      u = document.location.search,
      g = document.location.hash,
      s = w.split("/");
    s.length >= 3 &&
      s[1] == "c" &&
      (s[2] == "s"
        ? ((s = s.splice(2, s.length)), (s[0] = "https:/"))
        : ((s = s.splice(1, s.length)), (s[0] = "http:/")),
      (_wdSL = s.join("/") + u + g),
      (_wdHost = s[1]));
  }
  if (document.location.protocol != "file:") {
    if (
      (document.characterSet
        ? (_wdCS = fesc(document.characterSet))
        : document.charset && (_wdCS = fesc(document.charset)),
      INCLUDESUBHOST && INCLUDESUBHOST != null && INCLUDESUBHOST.length != 0)
    ) {
      for (i = 0; i < INCLUDESUBHOST.length; i++)
        if (
          INCLUDESUBHOST[i] &&
          _wdHost &&
          INCLUDESUBHOST[i].indexOf(_wdHost) != -1
        ) {
          _wdErr = "0";
          break;
        }
    } else _wdErr = "0";
    if (!(_wdErr == "1" && SHOWERRHOST != null && SHOWERRHOST != 1)) {
      if (
        (_wdErr == "1" && println(""),
        ROOTDM &&
          ROOTDM != null &&
          ROOTDM.length != 0 &&
          _wdHost &&
          _wdHost != "")
      )
        for (i = 0; i < ROOTDM.length; i++)
          _wdHost.indexOf(ROOTDM[i]) != -1 && (_wdRDM = ROOTDM[i]);
      println("_wdRP=" + _wdRP),
        !_wdRP || _wdRP == ""
          ? (_wdRP = "")
          : ((r = _wdRP.indexOf(document.domain)),
            (r >= 0 && r <= 8) ||
              (_wdRP.indexOf("[") == 0 &&
                _wdRP.lastIndexOf("]") == _wdRP.length - 1 &&
                (_wdRP = ""))),
        println("_wdRP=" + _wdRP),
        println("_wdUA=" + _wdUA),
        println("_wdRUA=" + _wdRUA),
        _wdIE && (_wdIEV = parseInt(_wdUA.substr(_wdUA.indexOf("MSIE") + 5))),
        _wdIE &&
          _wdIEV >= 5 &&
          (document.body.addBehavior("#default#clientCaps"),
          (_wdCT = document.body.connectionType),
          document.body.addBehavior("#default#homePage"),
          (_wdHP = document.body.isHomePage(location.href) ? "1" : "0"));
      try {
        _wdIE && (_wdFS = document.fileSize);
      } catch (m) {
        _wdFS = 0;
      }
      (_wdFl = wdFlash()),
        (_wdTZ = new Date().getTimezoneOffset() / -60),
        typeof _wdWS != "undefined" &&
          _wdWS != null &&
          ((_wdSW = _wdWS.width),
          (_wdSH = _wdWS.height),
          (_wdCD = _wdWS.colorDepth),
          (_wdSR = _wdSW + "x" + _wdSH),
          _wdNN && _wdBV >= 4 && (_wdCD = _wdWS.pixelDepth)),
        ((_wdNN && _wdBV >= 4) || _wdOP) && (_wdLG = navigator.language),
        _wdIE && _wdBV >= 4 && !_wdOP && (_wdLG = navigator.userLanguage),
        (_wdJE = navigator.javaEnabled() == !0 ? "1" : "0"),
        navigator.cookieEnabled &&
          (_wdCK = navigator.cookieEnabled == !0 ? "1" : "0"),
        _wdCK == 1 && setup_cookie();
    }
  }
}
function _wd_ruid(e) {
  var t = 1;
  if (self == top && e > _wdRUTimeout) {
    for (var w = "", u = navigator.userAgent, g = 0, s = 0; s < u.length; s++) {
      var m = u.charCodeAt(s);
      if ((m <= 127 && ((w += u.charAt(s)), g++), g >= 64)) break;
    }
    var O = Math.random().toString(36).substring(2),
      y = "r-" + wdHash(w) + "-" + O + "-" + t + "-" + e,
      v = _wdCA.replace("1.gif", y),
      j = new Image();
    j.src = v;
  }
}
function setup_cookie() {
  var e = document.cookie,
    t = e.indexOf("wdcid=");
  if (t < 0) {
    if (
      ((_wdBCID = "0"),
      (_wdCID = wdGenCID()),
      (t = ""),
      _wdRDM && _wdRDM != "" && (t = "domain=" + _wdRDM + ";"),
      (document.cookie =
        "wdcid=" + escape(_wdCID) + ";" + _wdED + t + "path=/;"),
      document.cookie.indexOf("wdcid=") < 0)
    ) {
      _wdCK = 0;
      return;
    }
  } else (_wdBCID = "1"), (_wdCID = getCookie("wdcid"));
  (t = document.cookie.indexOf("wdlast=")),
    t < 0
      ? (_wdLS = 0)
      : ((_wdLS = parseInt(getCookie("wdlast"))),
        (_wdDU = Math.round(curtime.getTime() / 1e3 - _wdLS)),
        _wdDU <= _wdTimeOut && (_wdTO = "0")),
    (document.cookie =
      "wdlast=" +
      Math.round(curtime.getTime() / 1e3) +
      ";" +
      _wdED +
      "path=/;"),
    (t = document.cookie.indexOf("wdses=")),
    t < 0 || _wdTO == "1"
      ? ((_wdTO = "1"),
        (_wdSID = wdGenCID()),
        (_wdDU = 10),
        (document.cookie = "wdses=" + _wdSID + ";path=/;"))
      : (_wdSID = getCookie("wdses"));
}
function write_ref(e) {
  _wdCK == "0"
    ? (_dgURL = getGeneralInfo() + getLocalInfo())
    : (_dgURL = getGeneralInfo() + getCookieInfo() + getLocalInfo()),
    send_ref(_dgURL, e);
}
function write_bc() {
  _wdCK == "0"
    ? (_dgURL = getGeneralInfo() + getLocalInfo())
    : (_dgURL = getGeneralInfo() + getCookieInfo() + getLocalInfo()),
    send_bc(_dgURL);
}
function getGeneralInfo() {
  var e = _wdVersion.WD + "-" + _wdVersion.CN;
  return (
    "?z=" +
    _wdUID +
    "&a=" +
    curtime.getTime().toString(16) +
    "&b=" +
    fesc(_wdDT) +
    "&B=" +
    _wdCS +
    "&c=" +
    fesc(_wdSL) +
    "&d=" +
    fesc(_wdRP) +
    "&e=" +
    _wdDU +
    "&f=" +
    _wdSID +
    "&H=" +
    fesc(_wdHost) +
    "&E=" +
    _wdErr +
    "&V=" +
    e
  );
}
function getLocalInfo() {
  return (
    "&i=" +
    fesc(_wdLG) +
    "&j=" +
    _wdJE +
    "&k=" +
    _wdSR +
    "&l=" +
    _wdCD +
    "&m=" +
    _wdFl +
    "&n=" +
    fesc(_wdCT) +
    "&o=" +
    _wdTZ
  );
}
function getCookieInfo() {
  return "&r=" + _wdCID + "&s=" + _wdBCID + "&t=" + _wdLS + "&u=" + _wdTO;
}
(function () {
  if (window._wd_common_loaded) return;
  window._wd_common_loaded = new Date();
  function e(n) {
    switch (n[0]) {
      case "wd_paramtracker":
        _wd_paramtracker(n[1], n[2]);
        break;
      case "wd_track_inner_page":
        var o = Array.prototype.slice.call(n, 1);
        _wd_track_inner_page.apply(null, o);
        break;
      case "wd_track_user":
        var o = Array.prototype.slice.call(n, 1);
        _wd_track_user.apply(null, o);
        break;
      case "wd_track_perf":
        var o = Array.prototype.slice.call(n, 1);
        _wd_track_perf.apply(null, o);
        break;
      default:
    }
  }
  if (typeof _wd_o != "undefined") {
    let n = function () {
      window[_wd_o].q = window[_wd_o].q || [];
      for (var o = window[_wd_o].q, _ = 0; _ < o.length; _++) e(o[_]);
      o.push = function (f) {
        e(f);
      };
    };
    var A = n;
    window[_wd_o].e
      ? window.addEventListener
        ? document.addEventListener("_wd_load_event", n)
        : window[_wd_o].e.attachEvent("onpropertychange", function (o) {
            o.propertyName == "_wd_load_event" && n();
          })
      : n();
  }
  var t = new Array(),
    w = 30,
    u = 0;
  window.screen &&
    typeof window.screen.width == "number" &&
    (u = window.screen.width);
  function g(n) {
    for (
      var o = document.getElementsByTagName("meta"), _ = 0;
      _ < o.length;
      _++
    )
      if (o[_].name == n && o[_].value != 0 && o[_].value != "disabled")
        return !0;
  }
  function s(n) {
    var o = {
        z: _wdUID,
        a: curtime.getTime().toString(16),
        c: fesc(window.location.href),
        d: fesc(n),
        k: u,
        H: fesc(_wdHost),
        r: _wdCID,
      },
      _ = "";
    for (var f in o) _ += "&" + f + "=" + o[f];
    (f = _wdCA.replace("1.gif", "3.gif") + "?" + _.slice(1)),
      (refImg = new Image(1, 1)),
      (refImg.src = f);
  }
  var m = -1;
  function O() {
    var n = y(),
      o = n.y + n.h;
    if (!(o == m || o <= 0)) {
      m = o;
      var _ = {
          z: _wdUID,
          a: curtime.getTime().toString(16),
          c: fesc(window.location.href),
          d: o,
          k: "S",
          H: fesc(_wdHost),
          r: _wdCID,
        },
        n = "";
      for (var f in _) n += "&" + f + "=" + _[f];
      (f = _wdCA.replace("1.gif", "3.gif") + "?" + n.slice(1)),
        (refImg = new Image(1, 1)),
        (refImg.src = f);
    }
  }
  function y() {
    var n = window.innerWidth,
      o = window.innerHeight,
      _ = window.pageXOffset,
      f = window.pageYOffset,
      l =
        document.compatMode == "CSS1Compat"
          ? document.documentElement
          : document.body;
    typeof n != "number" && (n = l.clientWidth),
      typeof o != "number" && (o = l.clientHeight),
      typeof _ != "number" && (_ = l.scrollLeft),
      typeof f != "number" && (f = l.scrollTop);
    var p = {};
    return (
      (p.w = Math.round(n)),
      (p.h = Math.round(o)),
      (p.x = Math.round(_)),
      (p.y = Math.round(f)),
      p
    );
  }
  function v(n) {
    var o = y();
    (this.x = o.x + n.clientX), (this.y = o.y + n.clientY), (this.w = o.w);
  }
  v.prototype.toString = function () {
    return "X: " + this.x + ", Y:" + this.y + ", W:" + this.w;
  };
  function j(n, o) {
    var _ = new v(n);
    o && ((_.x = n.clientX + o.x), (_.y = n.clientY + o.y)),
      t.length > 10 ? D() : t.push(_);
  }
  function C(n) {
    for (var o = "", _ = 0; _ < n.length; _++) {
      var f = n[_];
      o += f.x + "*" + f.y + "*" + f.w + ",";
    }
    return o.slice(0, o.length - 1);
  }
  function D() {
    if (t.length > 0) {
      var n = C(t.splice(0, t.length));
      s(n);
    }
  }
  function h() {
    if (!!g("uctk")) {
      var n = T("iframe"),
        o = function (f) {
          return function (l) {
            j(l, f);
          };
        };
      if (window.addEventListener) {
        document.addEventListener(
          "click",
          function (f) {
            j(f);
          },
          !0
        ),
          window.addEventListener(
            "unload",
            function (f) {
              D();
            },
            !0
          );
        for (var _ = 0; _ < n.length; _++)
          try {
            n[_].contentWindow.document.addEventListener(
              "click",
              o(n[_].position),
              !0
            );
          } catch (f) {}
      } else if (window.attachEvent) {
        document.attachEvent("onclick", function (f) {
          j(f);
        }),
          window.attachEvent("onbeforeunload", function (f) {
            D();
          });
        for (var _ = 0; _ < n.length; _++)
          try {
            n[_].contentWindow.document.attachEvent(
              "onclick",
              o(n[_].position)
            );
          } catch (l) {}
      }
      setInterval(D, 1e3 * w), setInterval(O, 1e3 * 5);
    }
  }
  function L(n) {
    if (n == document.domain) return !0;
    if (ROOTDM && ROOTDM.length != 0 && n)
      for (i = 0; i < ROOTDM.length; i++) {
        var o = ROOTDM[i];
        if (
          n.indexOf(o) != -1 ||
          (o && o.length > 0 && o[0] == "." && n == o.substring(1))
        )
          return !0;
      }
    return !1;
  }
  function I(n, o) {
    if (
      !(!n || !n.hostname || n.href.indexOf("http") != 0) &&
      !(!o && L(n.hostname))
    ) {
      var _ = n.getAttribute("eltkstat");
      _ ||
        (n.addEventListener
          ? (n.addEventListener("click", function (f) {
              var l = f.currentTarget,
                p = {
                  url: l.href,
                  referer: document.location.href,
                  title: l.textContent,
                };
              _wd_track_external(p);
            }),
            n.setAttribute("eltkstat", !0))
          : n.attachEvent &&
            (n.attachEvent("onclick", function () {
              var f = window.event.srcElement,
                l = {
                  url: f.href,
                  referer: document.location.href,
                  title: f.innerText,
                };
              _wd_track_external(l);
            }),
            n.setAttribute("eltkstat", !0)));
    }
  }
  function R() {
    for (
      var n = g("eltk"), o = document.getElementsByTagName("a"), _ = 0;
      _ < o.length;
      _++
    ) {
      var f = o[_],
        l = f.getAttribute("eltk"),
        p = f.getAttribute("eltkf");
      (l != null || n) && I(f, !1), p != null && I(f, !0);
    }
  }
  function T(n, o, _) {
    var f = o;
    f || (f = []);
    var l = 0;
    try {
      var p = _
        ? _.contentWindow.document.getElementsByTagName(n)
        : document.getElementsByTagName(n);
      l = p.length;
    } catch (M) {
      l = 0;
    }
    for (var S = 0; S < l; S++) {
      var E = x(p[S]);
      _ && _.position && ((E.x += _.position.x), (E.y += _.position.y)),
        (p[S].position = E),
        f.push(p[S]),
        T(n, f, p[S]);
    }
    return f;
  }
  function x(n) {
    (position = new Object()), (position.x = 0), (position.y = 0);
    for (var o = n; o != null && o != document.body; )
      (position.x += o.offsetLeft),
        (position.y += o.offsetTop),
        (o = o.offsetParent);
    return position;
  }
  h(), R();
})();

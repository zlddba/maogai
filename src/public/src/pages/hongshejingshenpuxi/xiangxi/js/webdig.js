var ROOTDM = [
    ".haiwainet.cn",
    ".0898.net",
    ".cpcnews.cn",
    ".linliwang.com",
    ".npopss-cn.gov.cn",
    ".osports.com.cn",
    ".people.cn",
    ".people.com.cn",
    ".people.gkcx.eol.cn",
    ".people.nihaowang.com",
    ".peopledaily.com.cn",
    ".urbanchina.org",
    ".zgdsw.org.cn",
    ".zhengwutong.com",
    ".zzdjw.org.cn",
    ".cpta.com.cn",
    ".chinawriter.com.cn",
    ".djyj.cn",
    ".nanhaimuseum.org",
    ".womenvoice.cn",
    ".womencn.cn",
    ".rmxiongan.com",
    ".zghrg.gov.cn",
    ".gjbmj.gov.cn",
    ".chinaql.org",
    ".minge.gov.cn",
    ".chinaxiongan.cn",
    ".qizhiwang.org.cn",
    ".brnn.com",
    ".dswxyjy.org.cn",
    ".chinalianxun.cn",
    ".cidf.net",
    ".fpzg.cpad.gov.cn",
    ".nopss.gov.cn",
    ".hlj.gov.cn",
    ".lmcchina.org",
    ".peopletech.cn",
    ".miguvideo.com",
    ".zyshgzb.gov.cn",
    ".12380.gov.cn",
    ".sxdaily.com.cn",
    "127.0.0.1",
    "127.0.0.1:9000",
  ],
  RECENDM = [],
  INCLUDESUBHOST = ["127.0.0.1:9000"],
  SHOWERRHOST = 1,
  _wdUID = "15",
  _wecl = "//cl0.webterren.com/1.gif",
  _wdVersion = { WD: 1726819015 },
  _wevcl = "//cl0.webterren.com/2.gif";
function _wd_re(n, o) {
  var c = document;
  if (n.length == 0) {
    typeof o == "function" && o();
    return;
  }
  function a() {
    _wd_re(n, o);
  }
  var t = n.splice(0, 1),
    e = c.createElement("script");
  (e.type = "text/javascript"),
    (e.referrerPolicy = "no-referrer-when-downgrade");
  function r() {
    (e.readyState == "loaded" || e.readyState == "complete") &&
      ((e.onreadystatechange = null), a());
  }
  e.readyState ? (e.onreadystatechange = r) : (e.onload = a),
    (e.src = t),
    c.getElementsByTagName("head")[0].appendChild(e);
}
var _wd_ss = [
  "/pages/hongshejingshenpuxi/xiangxi/js/webdig_test.js?z=15&t=202409200756",
];
window._wd_o
  ? (function () {
      var n,
        o = "_wd_load_event",
        c = document,
        a = !!c.createEvent;
      a
        ? ((n = c.createEvent("Event")), n.initEvent(o, !0, !0))
        : ((n = c.createElement("p")), c.body.appendChild(n)),
        (window[_wd_o].e = n),
        _wd_re(_wd_ss, function () {
          a ? c.dispatchEvent(n) : (n[o] = new Date());
        });
    })()
  : (window.wd_paramtracker = function () {
      var n = arguments[0];
      _wd_re(_wd_ss, function () {
        _wd_paramtracker(n);
      });
    });

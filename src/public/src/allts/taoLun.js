function formatDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var day = String(date.getDate()).padStart(2, "0");
    var hours = String(date.getHours()).padStart(2, "0");
    var minutes = String(date.getMinutes()).padStart(2, "0");
    var seconds = String(date.getSeconds()).padStart(2, "0");
    return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
// 明确声明元素类型并使用类型断言
var a = document.getElementById("q");
var b = document.getElementById("aa");
var cs = document.getElementById("cs");
// 使用可选链操作符进行嵌套校验
if ((a === null || a === void 0 ? void 0 : a.addEventListener) && b && cs) {
    a.addEventListener("click", function () {
        var inputValue = b.value.trim();
        if (inputValue) {
            var sanitizedInput = inputValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            var newContent = "\n        <div class=\"taolundendedCard\">\n          <div class=\"tlInfoLine\">\n            <img src=\"tlimg.png\" alt=\"\"> \n            <p class=\"p1\">\u533F\u540D\u7528\u6237</p>\n            <p class=\"p2\">".concat(formatDateTime(), "</p>\n          </div>\n          <p>").concat(sanitizedInput, "</p>\n        </div>\n      ");
            cs.insertAdjacentHTML("beforeend", newContent);
            b.value = "";
        }
    });
}

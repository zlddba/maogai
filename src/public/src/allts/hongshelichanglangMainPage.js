// 滚动触发动画
document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.timeline-item');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });
    items.forEach(function (item) {
        observer.observe(item);
    });
});

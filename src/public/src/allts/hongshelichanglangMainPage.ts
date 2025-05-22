// 滚动触发动画
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    items.forEach(item => {
        observer.observe(item);
    });
});
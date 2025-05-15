var navLinks = 'nav a';
document.querySelectorAll(navLinks).forEach(function (link) {
    link.addEventListener('click', function (event) {
        var _a;
        event.preventDefault();
        var target = event.target;
        var targetId = (_a = target.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('#')[1];
        if (targetId) {
            var targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

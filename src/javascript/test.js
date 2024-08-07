
        document.addEventListener('DOMContentLoaded', () => {
            const navItems = document.querySelectorAll('.nav-item');

            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    const page = item.getAttribute('data-page');

                    // تغییر رنگ آیکن و عنوان
                    navItems.forEach(nav => {
                        const icon = nav.querySelector('.icon');
                        const title = nav.querySelector('.title');

                        if (nav === item) {
                            icon.style.filter = 'invert(1)'; // تغییر رنگ آیکن به سفید
                            title.style.color = 'white'; // تغییر رنگ عنوان به سفید
                        } else {
                            icon.style.filter = 'invert(0)'; // رنگ اصلی آیکن
                            title.style.color = 'white'; // رنگ اصلی عنوان
                        }
                    });

                    // هدایت به صفحه جدید
                    switch (page) {
                        case 'home':
                            window.location.href = 'home.html';
                            break;
                        case 'resume':
                            window.location.href = 'resume.html';
                            break;
                        case 'works':
                            window.location.href = 'works.html';
                            break;
                        case 'contact':
                            window.location.href = 'contact.html';
                            break;
                    }
                });
            });
        });
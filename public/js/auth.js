const form_login = document.forms['auth'];
const priview_login = document.querySelector('.priview_data');

form_login?.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const body = Object.fromEntries(new FormData(form_login));
        const url = form_login.getAttribute('action')
        const response = await fetch (url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        const result = await response.json();
        if (response.status === 200) {
            priview_login.innerText = result.data;
            setTimeout(() => {
                window.location.assign(`${result.redirectUrl}`)
            }, 2500);
        } else {
            priview_login.innerText = result.data;
            setTimeout(() => {
                priview_login.innerText = 'Введите данные для аутентификации';
                form_login.reset();
            }, 2500);
        }
    } catch (error) {
        console.log(error, 'error with use form authentication');
    }
})
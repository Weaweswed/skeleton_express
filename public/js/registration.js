const form_register = document.forms['registration'];
const priview_register = document.querySelector('.priview_data');

form_register?.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const body = Object.fromEntries(new FormData(form_register));
        const url = form_register.getAttribute('action')
        const response = await fetch (url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        const result = await response.json();
        if (response.status === 201) {
            priview_register.innerText = result.data;
            setTimeout(() => {
                window.location.assign(`${result.redirectUrl}`)
            }, 2500);
        } else {
            priview_register.innerText = result.data;
            setTimeout(() => {
                priview_register.innerText = 'Введите данные для регистрации';
                form_register.reset();
            }, 2500);
        }
    } catch (error) {
        console.log(error, 'error with use form registration');
    }
})

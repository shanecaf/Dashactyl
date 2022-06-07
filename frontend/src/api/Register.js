import fetch from 'node-fetch';

export default (event) => {
    event.preventDefault();
    return new Promise((resolve, reject) => {
        console.log(event.target.username.value)
        fetch(`http://personal1.jmgcoding.com:3003/api/auth/register`,
            {
                body: JSON.stringify({
                    username: event.target.username.value,
                    email: event.target.email.value,
                    password: event.target.password.value
                }),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }).then(res => resolve(res.json())).catch(reject);
    });
}
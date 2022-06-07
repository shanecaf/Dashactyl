import fetch from 'node-fetch';

export default (event) => {
    event.preventDefault();
    return new Promise((resolve, reject) => {
        console.log(event.target)
        fetch(`http://personal1.jmgcoding.com:3003/api/auth/login`,
            {
                body: JSON.stringify({
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
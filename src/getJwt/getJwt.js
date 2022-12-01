import { useLocation, useNavigate } from "react-router-dom";

export const SetAuthToken = (user) => {

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state.from.pathname || '/';

    const curentUser = {
        email: user.email
    }

    // get jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(curentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('priverToken', data.token)

            navigate(from, { replace: true })
        });
}












// get jwt token

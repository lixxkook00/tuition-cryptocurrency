import axios from "axios";

export function handleLoginWithGoogle (user, setProfile) {
    axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
            }
        })
        .then((res) => {
            setProfile(res.data);
        })
        .catch((err) => console.log(err));
}
import apiJson from "./axios"

const check_token = async (token) => {
    const get = await apiJson.post("/users/check-token", {
        token: token
    })

    if (get?.data?.status !== true) {
        return false
    }
    return true
}
export default check_token;
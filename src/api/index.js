import axios from "axios";

const Headers = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
    },
};

// ------------------------------- Renter -------------------------------
export const renterLogin = async (loginData) => {
    try {
        const response = await axios.post("auth/renter/login", loginData);
        
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const renterRegister = async (registerData) => {
    try {
        const response = await axios.post("auth/renter/register", registerData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const adminLogin = async (loginData) => {
    try {
        const response = await axios.post("auth/admin", loginData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

// ------------------------------- Host -------------------------------
export const hostLogin = async (loginData) => {
    try {
        const response = await axios.post("auth/host/login", loginData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const hostRegister = async (registerData) => {
    try {
        const response = await axios.post("auth/host/register", registerData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateInfoUser = async (id, userData) => {
    try {
        const response = await axios.put(
            "/" + localStorage.getItem("role") + "/" + id,
            userData,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getUserInfo = async (id) => {
    try {
        const response = await axios.get(
            "/" + localStorage.getItem("role") + "/" + id,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

// ------------------------------- Posts -------------------------------
export const getPosts = async () => {
    try {
        const response = await axios.get("/posts");
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getPostsByQuery = async (params) => {
    try {
        const response = await axios.get("/posts", { params });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getFavorPosts = async (id) => {
    try {
        const response = await axios.get("/posts/myfavor/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getMyPosts = async (id) => {
    try {
        const response = await axios.get("/posts/myposts/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getAPost = async (id) => {
    try {
        const response = await axios.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const createPost = async (data) => {
    try {
        const response = await axios.post("/posts", data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deletePost = async (id) => {
    try {
        const response = await axios.delete("/posts/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updatePost = async (id, data) => {
    try {
        const response = await axios.put(`/posts/${id}`, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const commentPost = async (id, data) => {
    try {
        const response = await axios.put(`/posts/comment/${id}`, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const likePost = async (id) => {
    try {
        const response = await axios.put(
            `/posts/like/${id}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const unlikePost = async (id) => {
    try {
        const response = await axios.put(
            `/posts/unlike/${id}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const approvePost = async (id) => {
    try {
        const response = await axios.put(`/admin/approve/posts/${id}`, {}, Headers);
        return response.data;
    } catch (error) {
        console.log(error)
        return null
    }
}

export const approveHost = async (id) => {
    try {
        const response = await axios.put(`/admin/approve/hosts/${id}`, {}, Headers);
        return response.data;
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getHosts = async (params) => {
    try {
        const response = await axios.get("/host", {
            params,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
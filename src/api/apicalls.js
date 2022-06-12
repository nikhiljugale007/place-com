import axios from "axios";
const auth =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxZjY1YzdlMC1lNWQyLTQ1NTktOWI4Mi04OTE4MmE1NTU2YjgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.C48kdE1B0-zI6Gbtl7EG_FE2bNBezhXGB9yur-OvcwQ";
const headers = { authorization: auth };

const signupuser = async (user) => {
  try {
    const response = await axios.post("/api/auth/signup", { user });
    return { token: response.data.encodedToken, success: true };
  } catch (err) {
    return { token: "", success: false };
  }
};
const loginuser = async (user) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    return { data: response.data, success: true };
  } catch (err) {
    console.log(err);
    return { token: "", success: false };
  }
};

const getAllDrives = async () => {
  try {
    const response = await axios.get("/api/drives");
    return { drives: response.data.drives, success: true };
  } catch (err) {
    return { drives: [], success: false };
  }
};
const getDriveById = async (id) => {
  try {
    const response = await axios.get(`/api/drives/${id}`);
    return { drive: response.data.drive, success: true };
  } catch (err) {
    console.log(err);
    return { drive: [], success: false };
  }
};

const addItemToAppliedDrive = async (video) => {
  console.log(video);
  try {
    const response = await axios.post(
      "/api/user/applied",
      { video },
      { headers }
    );
    console.log(response);
    return { likes: response.data.likes, success: true };
  } catch (err) {
    console.log(err);
    return { likes: [], success: false };
  }
};
const removeFromLikedVideos = async (itemId) => {
  try {
    const response = await axios.delete(`/api/user/likes/${itemId}`, {
      headers,
    });
    return { likes: response.data.likes, success: true };
  } catch (err) {
    return { likes: [], success: false };
  }
};

export {
  getAllDrives,
  getDriveById,
  addItemToAppliedDrive,
  removeFromLikedVideos,
  signupuser,
  loginuser,
};

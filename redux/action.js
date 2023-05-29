import axios from "axios";

const serverUrl = "https://swasthyaserver.onrender.com/api/v1";

export const login = (phone) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${serverUrl}/login`,
      { phone },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};



export const loadUser = () => async (dispatch) => {
  ////('hii');
  try {
    dispatch({ type: "loadUserRequest" });
    
    const res = await axios.get(`${serverUrl}/me`);
    //(res.data);
    dispatch({ type: "loadUserSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};

export const loadProfile = (id) => async (dispatch) => {
  //('hiiload '+id);
  try {
    dispatch({ type: "loadProfileRequest" });
    
    const res = await axios.get(`${serverUrl}/profile/${id}`);
    ////(res);
    loadUser();
    dispatch({ type: "loadProfileSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "loadProfileFailure", payload: error.response.data.message });
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  ////('hiiload '+id);
  try {
    dispatch({ type: "deleteProfileRequest" });
    
    const res = await axios.delete(`${serverUrl}/profile/${id}`);
    ////(res);
    loadUser();
    dispatch({ type: "deleteProfileSuccess", payload: res.data });
  } catch (error) {
    dispatch({ type: "deleteProfileFailure", payload: error.response.data.message });
  }
};

export const addProfile = (name) => async (dispatch) => {
  try {
    dispatch({ type: "addProfileRequest" });

    const { data } = await axios.post(
      `${serverUrl}/newprofile`,
      {
        name
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "addProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "addProfileFailure", payload: error.response.data.message });
  }
};

export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "updateTaskRequest" });

    const { data } = await axios.get(`${serverUrl}/task/${taskId}`);
    dispatch({ type: "updateTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTaskRequest" });

    const { data } = await axios.delete(`${serverUrl}/task/${taskId}`);
    dispatch({ type: "deleteTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const addname = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });
    ////(formData)
    const res = await axios.put(`${serverUrl}/addname`, formData,{
      headers: {
        "Content-Type": "application/json",
      },
    });
    //loadUser();
    dispatch({ type: "updateProfileSuccess", payload: res.data });
    loadUser();
    ////(res.data);
    ////('res');
  } catch (error) {
    //(error);
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};


export const updateProfile = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(`${serverUrl}/updateprofile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });
    //("logout")
    await axios.get(`${serverUrl}/logout`);
    dispatch({ type: "logoutSuccess" });
    loadUser()
    loadProfile()
  } catch (error) {
    dispatch({
      type: "logoutFailure",
      payload: error.response.data.message,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    //dispatch({ type: "registerRequest" });
    const res=await axios.post(`${serverUrl}/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "registerSuccess", payload:res });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
    //(error)
  }
};

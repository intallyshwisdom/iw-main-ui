import { postReqAxios } from "../../axiosConfig/PostReq";

export const getAllUsers = async (type, pageNo, pageSize) => {
    console.log(`/admin/users?type=${type}&pageNo=${pageNo}&pageSize=${pageSize}`);
    return await postReqAxios.get(`/admin/users?type=${type}&pageNo=${pageNo}&pageSize=${pageSize}`)
        .then(res => res.data);
}

export const isNotActiveUser = async (userId) => {
    console.log(`/admin/block-user/${userId}`);
    return await postReqAxios.post(`/admin/block-user/${userId}`).then(res => res.data)
}

export const isActiveUser = async (userId) => {
    console.log(`/admin/unblock-user/${userId}`);
    return await postReqAxios.post(`/admin/unblock-user/${userId}`).then(res => res.data)
}

export const deleteUser = async (userId) => {
    console.log(`/admin/user/delete/${userId}`);
    return await postReqAxios.delete(`/admin/user/delete/${userId}`).then(res => res.data);
}

export const updateUserProfile = async (updateUserReqDto) => {
    try {
      const response = await postReqAxios.put('admin/user/update-profile', updateUserReqDto);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        throw new Error('Session Expired! Please login and try again.');
      } else {
        throw new Error('An error occurred while updating the profile.');
      }
    }
  };

  
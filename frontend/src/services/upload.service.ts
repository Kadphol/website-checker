import http from '../configs/http-common';

export const upload = (file: File , progressEvent: any) => {
  let formData = new FormData();
  formData.append("file", file);
  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: progressEvent,
  })
}
import http from '../http-common';

export const upload = (file: File | undefined, onUploadProgress: any) => {
  let formData = new FormData();
  formData.append("file", file!);
  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    onUploadProgress,
  })
}
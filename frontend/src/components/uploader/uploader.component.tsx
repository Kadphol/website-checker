import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useDropzone  } from "react-dropzone";
import { baseStyle, activeStyle, acceptStyle, rejectStyle, lineStyle, textStyle, iconStyle } from "./uploader.styles";
import csv from "../../assets/csv.png";
import { upload } from "../../services/upload.service";

const Uploader = (props: any) => {
  const [files, setFiles] = useState<File | undefined>();
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length > 0) {
      setFiles(acceptedFiles);
      console.log(files);
      upload(files, (progressEvent: { loaded: number; total: number; }) => {
        setProgress(Math.round((100 * progressEvent.loaded) / progressEvent.total))
        console.log(progress);
      });
    }

  }, [files, progress]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: ".csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values",
    multiple: false
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive? activeStyle : {}),
    ...(isDragAccept? acceptStyle : {}),
    ...(isDragReject? rejectStyle : {})
  }), [
    isDragActive,
    isDragAccept,
    isDragReject
  ]);
  return (
    <>
      <div {...getRootProps({style})}>
        <input {...getInputProps()}/>
        <img alt="csv icon" src={csv} style={iconStyle}/>
        <h5>Drag your .csv file to start uploading.</h5>
        <h5 style={lineStyle}><span style={textStyle}>OR</span></h5>
        <button className="btn btn-primary">Browse File</button>
      </div>
    </>
  );
}

export default Uploader;
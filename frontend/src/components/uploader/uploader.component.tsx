import React, { useCallback, useMemo, useState } from "react";
import { useDropzone  } from "react-dropzone";
import { baseStyle, activeStyle, acceptStyle, rejectStyle, lineStyle, textStyle, iconStyle } from "./uploader.styles";
import csv from "../../assets/csv.png";
import { upload } from "../../services/upload.service";
import UploadCard from "../uploadCard/uploadCard.component";
import ResultCard from "../resultCard/resultCard.component";

interface IstatusList {
  site: String,
  status: String
}

const Uploader = () => {
  const [files, setFiles] = useState<File>();
  const [inProgress, setInProgress] = useState(false);
  const [failStatus, setFailStatus] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusList, setStatusList] = useState<IstatusList[]>([]);
  const [usedTime, setUsedTime] = useState(0);

  const onDrop = useCallback((acceptedFiles : File[]) => {
    if(acceptedFiles !== undefined) {
      setFiles(acceptedFiles[0]);
      if(acceptedFiles[0]) {
        setStatusList([]);
        setFailStatus(false);
        setUsedTime(0);
        setInProgress(true);
        let startTime = Date.now();
        upload(acceptedFiles[0], (progressEvent: any) => {
          setProgress(Math.round((100 * progressEvent.loaded) / progressEvent.total))
        }).then((response: any) => {
          setStatusList(response.data);
          setInProgress(false);
          calculateTime(startTime);
          setFiles(undefined);
        }).catch((error: any) => {
          setInProgress(false);
          setFiles(undefined);
          setFailStatus(true);
        });
      }
    }

  }, [files]);

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

  const calculateTime = (startTime: number) => {
    let now = Date.now();
    setUsedTime(now - startTime);
  }

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
        {
          isDragReject && <h5 className="text-danger">This is not .csv file!</h5>
        }
        {
          !isDragReject && <h5>Drag your .csv file to start uploading.</h5>
        }
        <h5 style={lineStyle}><span style={textStyle}>OR</span></h5>
        <button className="btn btn-primary">Browse File</button>
      </div>
      {
        inProgress && files &&
          <UploadCard progress={progress} fileName={files.name}/>
      }
      {
        !inProgress && statusList.length > 0 &&
          <ResultCard count={statusList.length} 
            upCount={statusList.filter(status => status.status === 'Up').length} 
            downCount={statusList.filter(status => status.status === 'Down').length}
            timeUsed={usedTime}/> 
      }
      {
        failStatus &&
          <h3 className="text-danger">File cannot upload.</h3>
      }
    </>
  );
}

export default Uploader;
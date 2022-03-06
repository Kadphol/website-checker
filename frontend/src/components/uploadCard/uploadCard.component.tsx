import React from 'react';
import csv from '../../assets/csv.png';
import { uploadCardStyle, iconUploadStyle } from './uploadCard.styles';

type uploadCardProp = {
  progress: number,
  fileName: string
}

const UploadCard = ({progress, fileName}: uploadCardProp) => {
  return (
    <div className="card" style={uploadCardStyle}>
      <div className="card-body">
        <div className="row">
          <div className="col-xs-4 col-s-4 col-md-3 col-lg-2">
            <img alt="csv icon" src={csv} style={iconUploadStyle}/>
          </div>
          <div className="col-xs-8 col-s-8 col-md-9 col-lg-10">
            <span className="text-start text-muted">
              {fileName}
              <span className="float-end">
              {progress + "%"}
              </span>
            </span>
            
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: progress + "%" }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadCard;
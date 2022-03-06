import React from "react";
import { resultCardStyle, upCardStyle, downCardStyle } from './resultCard.styles';

type resultCardProps = {
  count: number,
  upCount: number,
  downCount: number,
  timeUsed: number
}

const timeDisplay = (timeUsed: number) => {
  let seconds = timeUsed/1000%60;
  let minutes = Math.round((timeUsed/(1000*60))%60);
  let hours = Math.round(timeUsed/(1000*60*60));
  let display = "";
  if(hours >= 1) display += hours + " hour"
  if(minutes >= 1) display += (hours>=1)? " and " + minutes + " minute":  minutes + " minute";
  if(seconds > 0) display += (minutes>=1)? " and " + seconds + " second": seconds + " second";
  return display;
}

const ResultCard = ({count, upCount, downCount, timeUsed}: resultCardProps) => {
  return (
    <div className="card" style={resultCardStyle}>
      <div className="card-body">
        <h5 className="card-title">{"Total " + count + " Websites"}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{"(Time used " + timeDisplay(timeUsed) + ")"}</h6>
        <div className="row justify-content-center pb-3">
          <div className="col-xs-6 col-s-6 col-md-5 col-lg-5">
            <div className="card" style={upCardStyle}>
              <div className="card-body mb-3">
                <h5 className="card-title">Up</h5>
                <h1 className="card-text text-center">{upCount}</h1>
              </div>
            </div>
          </div>
          <div className="col-xs-0 col-s-0 col-md-1 col-lg-1"></div>
          <div className="col-xs-6 col-s-6 col-md-5 col-lg-5">
            <div className="card" style={downCardStyle}>
              <div className="card-body mb-3">
                <h5 className="card-title">Down</h5>
                <h1 className="card-text text-center">{downCount}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultCard;
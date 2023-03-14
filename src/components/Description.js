import React, { Fragment } from "react";
import "./d.css";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

export default function description() {
  return (
    <Fragment>
      <div className="title">
        <h2>
          How carbon emissions are calculated regarding to your car or truck
        </h2>
      </div>
      <div className="number">
        <div className="explaination">
          First, there are two options for users to calculate the total distance
          they have traveled in kilometers. They can either directly enter the
          trip distance, or they can input their origin and destination into
          specific empty fields. slot.
        </div>
      </div>
      <div className="number">
        2
        <div className="explaination">
          The Waze API will automatically calculate the distance between the two
          points and fill in the trip distance field.
        </div>
      </div>
      <div className="number">
        3
        <div className="explaination">
          To calculate the carbon footprint, the application takes into account
          the details of the user's vehicle such as the engine type, vehicle
          type, and fuel type.
        </div>
      </div>
      <div className="number">
        4
        <div className="explaination">
          Finally, the output will display both the traveled distance and total
          carbon emissions in a card container below.
        </div>
      </div>
    </Fragment>
  );
}

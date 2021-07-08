import React from 'react';
import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
      <div className="featuredInfo">
        <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2.45</span>
            <div className="featuredMoneyRate">
              -11.4 <ArrowDownward className="featuredIcon negative" />
            </div>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$5,451</span>
            <div className="featuredMoneyRate">
              -1.4 <ArrowUpward className="featuredIcon negative" />
            </div>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,246</span>
            <div className="featuredMoneyRate">
              +2.4 <ArrowUpward className="featuredIcon" />{" "}
            </div>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
    );
}

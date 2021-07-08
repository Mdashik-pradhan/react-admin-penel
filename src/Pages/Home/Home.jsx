import React from 'react';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import Chart from '../../Components/Chart/Chart.jsx';
import WidgetSm from "../../Components/WidgetSm/WidgetSm.jsx";
import WidgetLg from "../../Components/WidgetLg/WidgetLg.jsx";
import './Home.css';
import { userData} from '../../dummyData.js'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div class="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
            </div>
    )
}

import StatsInfo from "../app-components/stats-info";
import Card from "../core-components/card";

import "./home-panel.scss";

const HomePage = () => {
  return (
    <div className="home-panel">
      <Card className="first-card" withBorder>
        <StatsInfo />
      </Card>
      <Card className="second-card" title="Test">
        <div>xd</div>
      </Card>
    </div>
  );
};

export default HomePage;

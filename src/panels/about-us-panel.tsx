import Card from "../core-components/card";

import "./about-us-panel.scss";

function AboutUsPanel() {
  return (
    <div className="about-us-panel">
      <Card className="about-us-panel__card" withBorder>
        <div>About Us</div>
      </Card>
    </div>
  );
}

export default AboutUsPanel;

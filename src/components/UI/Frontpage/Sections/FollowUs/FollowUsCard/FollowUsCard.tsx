import React from "react";
import { Card, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";

const FollowUsCard: React.FC<{ linkUrl: string; imageUrl: string }> = (props: {
  linkUrl: string;
  imageUrl: string;
}) => {
  return (
    <div>
      <a href={props.linkUrl}>
        <Card
          style={{ width: 300, height: 50, margin: 0 }}
          bodyStyle={{ padding: "1rem" }}
        >
          <Meta
            avatar={
              <Avatar
                src={props.imageUrl}
                style={{ width: "40%", height: "auto", float: "left" }}
              />
            }
            title="Facebook.com"
          />
        </Card>
      </a>
    </div>
  );
};

export default FollowUsCard;

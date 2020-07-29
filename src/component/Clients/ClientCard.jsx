import React from "react";
import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";

export default function ClientCard(props) {
  const { description, title, subtitle, avatar } = props;
  return (
    <Card>
      <Paper elevation={19}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>

        <CardHeader
          avatar={<Avatar alt="Remy Sharp" src={avatar} />}
          title={title}
          subheader={subtitle}
        />
      </Paper>
    </Card>
  );
}

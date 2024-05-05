import React from "react";
import { IconButton, Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Chip, Divider, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import icon from "../Assets/icon.png";

const Cardone = (props) => {
  return (
    <>
      <h2 className="Activity">{props.Activity}</h2>
      <div className="Card-label" key={props.label}>
        <Card sx={{ padding: "10px", width: "700px" }}>
          <Chip label={props.label} sx={{ height: "24px" }} />
          <CardHeader
            avatar={<img src={icon} alt="" height="64px" width="64px" />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={props.title}
            subheader={props.subheader}
          />
          <Divider />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
          </CardContent>

          {props.src && (
            <CardMedia
              component="img"
              height="194"
              src={props.src}
              alt="Paella dish"
            />
          )}
          {props.content2 && (
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {props.content2}
              </Typography>
            </CardContent>
          )}

          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="small" sx={{ color: "#026450" }}>
              Read More
            </Button>
          </CardActions>

          <Divider />
        </Card>
      </div>
    </>
  );
};

export default Cardone;

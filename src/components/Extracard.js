import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import icon from "../Assets/icon.png";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 600, marginBottom: "25px" }}>
        <Chip
          label={props.label}
          size="small"
          sx={{ marginRight: 25, marginTop: 2,marginLeft:2 }}
        />
        <CardHeader
          avatar={<img src={icon} alt="" height="64px" width="64px" />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{
            variant: "h6",
            sx: {
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "25px",
              textAlign: "left",
            },
          }}
          title={props.title}
          subheader={props.subheader}
        />
        {props.content && (
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        )}
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
        <CardActions disableSpacing>
          <CardActions>
            <Button size="small" style={{ color: "green" }}>
              Read more
            </Button>
          </CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Read more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>
    </>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ColorButton = styled(Button)(() => ({
  color: "#f1f1f1",
  padding: "10px",
  borderRadius: "10px",
  border: "2px purple solid",
  textTransform: "none",
  "&:hover": {
    backgroundColor: purple[700],
  },
  "&:svg": {
    backgroundColor: purple[700],
  },
}));

export default function CustomizedButtons(props) {
  return (
    <Stack spacing={1} direction="row">
      <ColorButton variant="text" type="button">
        {props.texto}
        {props.icon ? (
          <ArrowForwardIcon sx={{ ml: 1 }} />
        ) : (
          <SendIcon sx={{ ml: 1 }} />
        )}
      </ColorButton>
    </Stack>
  );
}

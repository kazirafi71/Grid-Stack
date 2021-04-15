import { Button, Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import buttonData from "./FakeData";

const Add_Benefit = () => {
  return (
    <div>
      <Container>
        <Paper className="p-3" style={{ background: "#F7F7F7" }}>
          <Typography style={{ fontFamily: "Montserrat" }}>
            Choose benefit to add
          </Typography>
          <div className="mt-4">
            {buttonData.map((val) => {
              return (
                <Button
                  key={val.text}
                  variant="outlined"
                  style={{
                    fontFamily: "Montserrat",
                    color: "black",
                    background: "white",
                    borderRadius: "30px",
                    margin: "3px",
                  }}
                  endIcon={
                    <AddIcon
                      style={{
                        color: "white",
                        background: "#F15A29",
                        borderRadius: "30px",
                      }}
                    />
                  }
                >
                  {val.text}
                </Button>
              );
            })}
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Add_Benefit;

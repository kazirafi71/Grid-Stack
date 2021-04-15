import { Button, Container, Paper, Typography } from '@material-ui/core';
import React from 'react';
import AddIcon from "@material-ui/icons/Add";
import buttonData from "./FakeData";

const Add_Benefit = () => {
    return (
        <div>
             <Container>
            <Paper className="p-3" style={{ background: "#6666" }}>
              <Typography>Choose benefit to add</Typography>
              <div className="">
                {buttonData.map((val) => {
                  return (
                    <Button key={val.text}
                      variant="outlined"
                      style={{
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
import React from "react";
import { Button, Container, Paper } from "@material-ui/core";
import { FormImg } from "./FormImage.js";
import styles from "./Form.module.css";
import { Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SendIcon from '@material-ui/icons/Send';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import Footer from "../Footer/Footer.js";
import CustomizedDialogs from "../modal/Modal.js";



const Input_Form = () => {
  return (
    <>
      <Container  className={`${styles.main__div}`}>
        <Paper className={styles.paper__style}>
          <FormImg />
          <div className={styles.input__style}>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>About Company*</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Type in your Summary"
                  rows={3}
                />
              </Form.Group>
              <Form.Row>
                <Col xs={6}>
                  <Form.Label>Website</Form.Label>
                  <Form.Control placeholder="Website (Url)" />
                </Col>
                <Col>
                  <Form.Label>Industry*</Form.Label>
                  <Form.Control as="select">
                    <option>Select industry</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col xs={6}>
                  <Form.Label>Company Size*</Form.Label>
                  <Form.Control placeholder="Employees" />
                </Col>
                <Col>
                  <Form.Label>Headquarters</Form.Label>
                  <Form.Control placeholder="Enter text" />
                </Col>
              </Form.Row>
              <Form.Row>
                <Col xs={6}>
                  <Form.Label>Type</Form.Label>
                  <Form.Control placeholder="Enter text" />
                </Col>
                <Col>
                  <Form.Label>Founded</Form.Label>
                  <Form.Control placeholder="Enter year" />
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Label>Specialties</Form.Label>
                <Form.Control placeholder="Enter text" />
              </Form.Group>
            </Form>

            <div className={styles.benefits}>
              <Link
                style={{ color: "#F15A29", textDecoration: "underLine" }}
                to="/benefits"
              >
                Benefits
              </Link>
              <button className={`btn ${styles.benefit__button}`}>
                <CustomizedDialogs/>
              </button>
            </div><br/>
            <div className="row text-center ">
                <div className="col-sm-6 col-md-4  p-2">
                <Button
                style={{ color: "white", background: "#F77631" , borderRadius:"30px"}}
                variant="contained"
                startIcon={<WifiTetheringIcon/>}
                endIcon={<CheckCircleIcon/>}
              >
                Excellent Health Care
              </Button>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                <Button
                style={{ color: "black" , borderRadius:"30px"}}
                variant="contained"
                startIcon={<WifiTetheringIcon/>}
                endIcon={<RadioButtonUncheckedIcon/>}
              >
                Excellent Health Care
              </Button>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                <Button
                style={{ color: "black" , borderRadius:"30px"}}
                variant="contained"
                startIcon={<WifiTetheringIcon/>}
                endIcon={<RadioButtonUncheckedIcon/>}
              >
                Excellent Health Care
              </Button>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                <Button
                style={{ color: "black" , borderRadius:"30px"}}
                variant="contained"
                startIcon={<WifiTetheringIcon/>}
                endIcon={<RadioButtonUncheckedIcon/>}
              >
                Excellent Health Care
              </Button>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                <Button
                style={{ color: "black" , borderRadius:"30px"}}
                variant="contained"
                startIcon={<WifiTetheringIcon/>}
                endIcon={<RadioButtonUncheckedIcon/>}
              >
                Excellent Health Care
              </Button>
                </div>
                <div className="col-sm-6 col-md-4 p-2">
                <Button
                style={{ color: "black" , borderRadius:"30px"}}
                variant="contained"
                startIcon={<WifiTetheringIcon/>}
                endIcon={<RadioButtonUncheckedIcon/>}
              >
                Excellent Health Care
              </Button>
                </div>
            </div>
             <div className="my-4 text-right">
                <Button  className='border px-2 mx-5' style={{ color: "black" , borderRadius:"30px"}}>
                    Skip
                </Button>
                <Button endIcon={<SendIcon/>} variant='contained' color='primary'  style={{borderRadius:"30px"}}>
                    Save
                </Button>
            </div>
            
          </div>
        </Paper>
      </Container>
      
    </>
  );
};

export default Input_Form;

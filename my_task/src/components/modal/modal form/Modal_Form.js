import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Modal_Form = () => {
    const [formData, setFormData] = useState([
        {
          title: "xyz",
          des: "dsdsds",
        },
      ]);
    
      const [title, setTitle] = useState("");
      const [des, setDes] = useState("");    
      const handleFormData = (e) => {
        e.preventDefault();
        setFormData([...formData, { title: title, des: des }]);
      };
    
    return (
        <div>
             <div className="container card p-4">
            <Form onSubmit={handleFormData}>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                id="standard-full-width"
                label="Title"
                style={{ margin: 8 }}
                placeholder="Group Activites"
                required
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Form.Group>
                <Form.Label style={{ fontSize: "12px" }}>
                  Description*
                </Form.Label>
                <Form.Control
                  onChange={(e) => setDes(e.target.value)}
                  placeholder="Please enter description"
                  required
                  as="textarea"
                  rows={3}
                />
                <Typography
                  style={{ color: "#707070", fontSize: "12px" }}
                  className="text-right"
                  variant="subtitle2"
                >
                  150 Characters
                </Typography>
              </Form.Group>
              <div className=" text-right">
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ borderRadius: "30px" }}
                >
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </div>
    );
};

export default Modal_Form;
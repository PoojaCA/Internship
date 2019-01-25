import React from 'react';
import { Spinner, Col, Container, Row, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';


export default class Example extends React.Component {


  state ={
  isOpen: false
}


  Modaltoggle(){
  this.setState({
    isOpen: !this.state.isOpen
  });
}

  render() {
    return (
      
      <div className="box">
      <h1>SignUp</h1>
      <Form>

        <Row form>
          <Col md={6}>
            <FormGroup>
            <div className="lbl">
              <Label for="firstname">First name</Label>
              </div>
              <Input type="text" name="address2" id="firstname" placeholder="Enter your first name"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <div className="lbl">
              <Label for="lastname">Last name</Label>
               </div>
              <Input type="text" name="address2" id="lastname" placeholder="Enter your last name"/>
            </FormGroup>
          </Col>
        </Row>


        <Row form>

          <Col md={6}>
            <FormGroup>
              <div className="lbl">
              <Label for="exampleEmail">Email</Label>
               </div>
              <Input type="email" name="email" id="exampleEmail" placeholder="Type your Email-Id" />
            </FormGroup>
          </Col>

          <Col>

           <FormGroup tag="fieldset">
            <div className="lbl">
              <Label>Gender</Label>
            </div>
          <FormGroup>
            
            <Row>
            <Col>
            <Label class="radio-inline" check>
              <Input type="radio" name="radio1" />Male
            </Label>
            </Col>
            <Col>
            <Label class="radio-inline" check>
              <Input type="radio" name="radio1" />Female
            </Label>
            </Col>
            <Col>
            <Label class="radio-inline" check>
              <Input type="radio" name="radio1" />Others
            </Label>
            </Col>
            </Row>
          </FormGroup>
          </FormGroup>
          </Col>

          
        </Row>
        <Row form>
         
          <Col md={6}>
            <FormGroup>
              <div className="lbl">
              <Label for="examplePassword">Password</Label>
               </div>
              <Input type="password" name="password" id="examplePassword" placeholder="Type password" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <div className="lbl">
              <Label for="exampleConfPassword">Confirm Password</Label>
               </div>
              <Input type="password" name="Confpassword" id="exampleConfPassword" placeholder="Confirm password" />
            </FormGroup>
          </Col>

         
          </Row>
          <Row>
          <Col md={12}>
            <FormGroup>
              <div className="lbl">
              <Label for="exampleAddress">Street</Label>
               </div>
              <Input type="textarea" name="address" id="exampleAddress" placeholder="1234 Main St, Apartment, studio, or floor"/>
            </FormGroup>
          </Col>
          </Row>


        <Row form>
          <Col md={5}>
            <FormGroup>
              <div className="lbl">
              <Label for="exampleCity">City</Label>
               </div>
              <Input type="text" name="city" id="exampleCity" placeholder="City"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <div className="lbl">
              <Label for="exampleState">State</Label>
               </div>
              <Input type="select" name="state" id="exampleState">
                <option>Karnataka</option>
                <option>Delhi</option>
                <option>Tamil Nadu</option>
                <option>Andhra Pradesh</option>
                <option>Kerala</option>
                <option>Maharashtra</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <div className="lbl">
              <Label for="exampleZip">Pin</Label>
              </div>
              <Input type="number" name="zip" id="exampleZip" placeholder="Pin"/>
            </FormGroup>  
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup check>
              <div className="lbl1">
                <Input type="checkbox" name="check" id="exampleCheck"/>
                <Label for="exampleCheck" check>I'm not a Robot</Label><br/>
                <Input type="checkbox" name="check" id="exampleCheck"/>
                <Label for="exampleCheck" check>I accept the Terms and Policies.</Label>
              </div>
            </FormGroup>
            
          </Col>
        </Row>

      </Form>

        <Button color="primary" onClick={this.Modaltoggle.bind(this)}>SignUp</Button>
        

            <Modal isOpen={this.state.isOpen}>

              <ModalHeader toggle={this.Modaltoggle.bind(this)}>SignUp Sussessfully</ModalHeader>

              <ModalBody>You have been successfually signedup. Now you may Signin.</ModalBody>
              <ModalFooter>
                <Button color="primary">Signin</Button>
                <Button color="secondary" onClick={this.Modaltoggle.bind(this)}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </div>
     
    );
  }
}
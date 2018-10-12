import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import {Button, Table} from 'react-bootstrap';
import {Tab,Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import validator from 'email-validator';

class myModal extends Component{

  state = {
    open: false,
    title: '',
    fname: '',
    surname: '',
    email: '',
    phone: '',
    line1: '',
    line2: '',
    suburb: '',
    state: '',
    code: '',
    country: '',
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  // onEmailChange = (event) => {
  //   if (validator.validate(event.target.value)){
      
  //   }
  //   else {
  //     document.getElementById('mail').style.borderColor = "red";
  //   }
  // }

  emailValidator = () => {
    if (validator.validate(document.getElementById('mail').value)){

        document.getElementById('mail').style.borderColor = "green";

    }
    else {
      document.getElementById('mail').style.borderColor = "red";
      this.setState({
        email: '',
      })

      document.getElementById('mail').placeholder = 'invalid'
    }
  }

  onChangeData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  validateEmail = (event) => {
    return validator.validate(this.state.email); // true
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      open: false,
    })

  }

  render(){

    const {open, title, fname, surname, email, phone, line1, line2, suburb, state, code, country} = this.state;

    const isEnabled = fname.length > 0 && surname.length > 0 && email.length>0 && line1.length>0
        && suburb.length>0 && state.length>0 && code.length>0;

    return(

      <div>
        <Button bsStyle='danger' className='btn-left' onClick={this.onOpenModal}> Edit Details </Button>
        <Modal open={open} onClose={this.onCloseModal} center>

          <Tabs forceRenderTabPanel defaultIndex={0}>
            <TabList>
              <Tab> Name </Tab>
              <Tab> Address </Tab>
            </TabList>

            <TabPanel>
              <form>
                <Table className='modal-design borderless'>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td><label> Title: </label></td>
                      <td><input type='text' name='title' value={title} onChange={this.onChangeData} /></td>
                    </tr>

                    <tr>
                      <td><label> First Name: </label></td>
                      <td><input type='text' name='fname' value={fname} onChange={this.onChangeData} /></td>
                      <td> <span> * </span></td>
                    </tr>

                    <tr>
                      <td><label> Surname: </label></td>
                      <td><input type='text' name='surname' value={surname} onChange={this.onChangeData} /></td>
                      <td> <span> * </span></td>
                    </tr>

                    <tr>
                      <td><label> Email Address: </label></td>
                      <td><input type='email' name='email' id='mail' value={email} onChange={this.onChangeData} onBlur={this.emailValidator} /></td>
                      <td> <span> * </span></td>
                    </tr>

                    <tr>
                      <td><label> Phone Number: </label></td>
                      <td><input type='number' name='phone' value={phone} onChange={this.onChangeData} /></td>
                    </tr>

                    <tr>
                      <td><Button disabled={!isEnabled} bsStyle='success' onClick={event => this.onSubmit(event)}> Save </Button></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </form>
            </TabPanel>

            <TabPanel>
              <form>
                <Table className='modal-design borderless'>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td><label> Line 1: </label></td>
                      <td><input type='text' name='line1' value={line1} onChange={this.onChangeData} /></td>
                      <td> <span> * </span></td>
                    </tr>

                    <tr>
                      <td><label> Line 2: </label></td>
                      <td><input type='text' name='line2' value={line2} onChange={this.onChangeData}/></td>
                    </tr>

                    <tr>
                      <td><label> Suburb: </label></td>
                      <td><input type='text' name='suburb'value={suburb} onChange={this.onChangeData} /></td>
                      <td> <span> * </span></td>
                    </tr>

                    <tr>
                      <td><label> State: </label></td>
                      <td><input type='text' name='state' value={state} onChange={this.onChangeData} /></td>
                      <td> <span> * </span></td>
                    </tr>

                    <tr>
                      <td><label> Post Code: </label></td>
                      <td><input type='number' name='code' value={code} onChange={this.onChangeData} /></td>
                      <td> <span> * </span></td>
                    </tr>

                    <tr>
                      <td><label> Country: </label></td>
                      <td><input type='text' name='country' value={country} onChange={this.onChangeData}/></td>
                    </tr>

                    <tr>
                      <td><Button disabled={!isEnabled} bsStyle='success' onClick={event => this.onSubmit(event)}> Save </Button></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </form>
            </TabPanel>
          </Tabs>

        </Modal>
      </div>

    );
  }
}

export default myModal;

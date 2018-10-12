import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Modal from './Modal';
import Tilt from 'react-tilt';

class Profile extends Component{

  constructor() {
    super();
    this.state={
      name: ''
    }
  }

  getData = (data) => {
    this.setState({
      name: data.fname +" "+ data.surname +" "+ data.title,

    })
  }

  handleChange(event){
    this.setState({name: this.props.data.title})
  }

  render(){

    return(

      <div>
        <h1> Your Name and Address</h1>

        <div className='col-sm-4 info'>
          <Table className='borderless'>
            <thead></thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td><input type='text' name='name' value={this.state.name} onChange={this.handleChange.bind(this)} readOnly/></td>
              </tr>
              <tr>
                <td>Address:</td>
                <td><input type='text' name='address' onChange={this.handleChange.bind(this)} /></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input type='email' name='email' onChange={this.handleChange.bind(this)} /></td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td><input type='number' name='phone' onChange={this.handleChange.bind(this)} /></td>
              </tr>

              {/* {
                profile.map((item,i) => {
                    return(
                      <tr key={i}>
                        <td className='left'> <label> {profile[i]} </label> </td>
                        <td>
                          <input type='text' name={profile[i]} disabled/>
                        </td>
                      </tr>
                    )
                  })
                } */}

            </tbody>
          </Table>

          <Modal onSubmit={data => this.getData(data)}/>
        </div>

        <div className='col-sm-4'></div>
        <div className='col-sm-4'></div>

        <div className='ma4 mt0'>
          <Tilt className="Tilt br2 shadow-2 paddingg" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner pa3">
           <img alt='Logo' src={require('./github.png')} style={{paddingTop:'5px'}} />
          </div>
          </Tilt>
        </div>

      </div>
    );
  }
}

export default Profile;

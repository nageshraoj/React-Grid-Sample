import React, { Component } from "react";
import {connect} from "react-redux";
import {FetchUser} from "../actions";
import { Button, Header, Image, Modal } from 'semantic-ui-react';


class UserCardView extends Component {

    state={open:true};

    componentDidMount(){
        this.props.FetchUser(this.props.userid);
    }
    
    render(){
        const {user} = this.props;
        const address = user.address;
        console.log(address);
        // const user = this.props.user.find(user=>this.user.userid===this.props.userid);
        if(!user) return null;
        return(
            <Modal
            onClose={() => this.setState({open:false})}
            onOpen={() => this.setState({open:true})}
            open={this.state.open}

          >
            <Modal.Header>User Details</Modal.Header>
            <Modal.Content image>
              <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
              <Modal.Description>
                <Header>{user.name}</Header>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>

                <p>Address</p> 
                {
                    address?
                    <div>
                        <p>{address.street}</p>
                        <p>{address.suite}</p>
                        <p>{address.zipcode}</p>        
                    </div>:null
                }
              

              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              {/* <Button color='black' onClick={() => this.setState({open:false})}>
                Nope
              </Button> */}
              <Button
                content="Close"
                labelPosition='right'
                icon='checkmark'
                onClick={() => this.setState({open:false})}
                positive
              />
            </Modal.Actions>
          </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps,{FetchUser})(UserCardView);
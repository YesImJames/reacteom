import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { getAllUsers, getUserInfoFromAllUsers } from '../common/UserUtil';
import './Login.css'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userError: "",
            allUsers: [],

        }
    }
    async componentDidMount() {
        const allUsers = await getAllUsers();
        this.setState({allUsers})
    }
    handleClick(event) {
        const {userId, allUsers}=this.state
        const userInfo = getUserInfoFromAllUsers(userId, allUsers)
        if (userInfo) {
            this.setState({userError: ""})
            this.props.history.push('/vote', {user:userInfo,allUsers:allUsers})
        }
        else {
            this.setState({userError: "User not Found"})
        }
    }
    render() {
        return (
            <div className="Login">
                <MuiThemeProvider>
                    <div>
                        <h1>Employee of The Month</h1>
                        <TextField 
                            hintText="Enter User ID" 
                            floatingLabelText="User ID"
                            onChange={(e,v) => this.setState({userId:v})}
                            error={this.state.userError}
                            errorText={this.state.userError}
                            />
                        <br />
                        <RaisedButton 
                            label="Submit"
                            onClick={(event) => this.handleClick(event)}
                        />
                        
        
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
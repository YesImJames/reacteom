import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RadioButton, RadioButtonGroup } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'

export default class Vote extends Component {
    constructor(props) {
        super(props)
        this.state={
            vote: "",
            candidates: [],
        }
    
    }

    async componentDidMount() {
        const {
            user,
            allUsers
        } = this.props.location.state
        let candidates = allUsers
        candidates = candidates.filter(o => o.id !== user.id)
        this.setState({candidates})
    }
    handleClick () {
        //make it actually vote
        this.props.history.push('/thanks')
        console.log("You voted for:" + this.state.vote)
    }

    render() {
        return (
            <div className="Vote">
                <MuiThemeProvider>
                    <h1>Hello {this.props.location.state.user.name}, please vote for the employee of your choice:</h1>
                    <RadioButtonGroup 
                        name="Candidates"
                        onChange={(e,v) => this.setState({vote:v})}>
                        {this.state.candidates.map(
                            candidate => <RadioButton 
                                label={candidate.name}
                                value={candidate.id}
                                key={candidate.id} />

                        )}
                        </RadioButtonGroup>
                        <br/>
                        <RaisedButton 
                            label="Vote" 
                            onClick={() => this.handleClick()} />
                </MuiThemeProvider>
            </div>
        )
    }
}
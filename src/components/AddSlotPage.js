import  React, {Component} from 'react';
import SlotForm from './SlotForm';
import {connect} from 'react-redux';
import {addSlot} from "../actions/slots";

class AddSlotPage extends Component {
    render() {
        return (
            <div>
                <h1>Add slot</h1>
                <SlotForm
                    onSubmit={(slot)=>{
                        this.props.dispatch(addSlot(slot));
                        this.props.history.push('/');
                    }}
                />
            </div>
        )
    }
}

export default connect()(AddSlotPage);
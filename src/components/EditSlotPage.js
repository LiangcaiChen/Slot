import  React, {Component} from 'react';
import SlotForm from "./SlotForm";
import {connect} from 'react-redux';
import {editSlot, removeSlot} from '../actions/slots';

class EditSlotPage extends Component {
    render() {
        return (
            <div>
                <h1>Edit your slot:</h1>
                <SlotForm
                    slot={this.props.slots}
                    onSubmit={(slot)=>{
                        this.props.dispatch(editSlot(this.props.slots.id, slot));
                        this.props.history.push('/');
                    }}
                />

                <button onClick={()=>{
                    const id = this.props.slots.id;
                    this.props.dispatch(removeSlot({id}));
                    this.props.history.push('/');
                }}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    slots: state.slots.find((slot)=> slot.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditSlotPage);
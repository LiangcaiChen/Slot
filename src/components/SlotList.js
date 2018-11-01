import  React from 'react';
import {connect} from 'react-redux';
import SlotListItem from './SlotListItem';

const SlotList = (props) => (
    <div>
        <h1>Slot List</h1>
        {props.slots.map((slot)=>{
            return <SlotListItem key={slot.id} {...slot} />
        })}
    </div>
);

const mapStateToProps = (state) => ({
    slots: state.slots
});

export default connect(mapStateToProps)(SlotList);
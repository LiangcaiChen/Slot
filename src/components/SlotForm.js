import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class SlotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.slot ? props.slot.description : '',
            finishDate: props.slot ? moment(props.slot.finishDate) : moment(),
            percentageFinished: props.slot ? props.slot.percentageFinished : "",
            expectedFinishTime: props.slot ? props.slot.expectedFinishTime : '',
            calendarFocused:false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({ description }));
    };

    onDateChange = (finishDate) => {
        if(finishDate) {
            this.setState(()=>({finishDate}));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused:focused}));
    };

    onPercentageFinishedChange = (e) => {
        const percentageFinished = e.target.value;
        this.setState(()=>({ percentageFinished }));
    };

    onExpectedFinishTimeChange = (e) => {
        const expectedFinishTime = e.target.value;
        this.setState(()=>({ expectedFinishTime }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.finishDate) {
            this.setState(()=>({error:'Please provide description and date.'}))
        } else {
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                finishDate: this.state.finishDate.valueOf(),
                percentageFinished: this.state.percentageFinished,
                expectedFinishTime: this.state.expectedFinishTime
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <SingleDatePicker
                        date={this.state.finishDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                    />

                    <input
                        type="number"
                        placeholder="Percentage Finished"
                        value={this.state.percentageFinished}
                        onChange={this.onPercentageFinishedChange}
                    />

                    <input
                        type="number"
                        placeholder="Expected finish in ...hours"
                        value={this.state.expectedFinishTime}
                        onChange={this.onExpectedFinishTimeChange}
                    />
                    <button>Add Slot</button>
                </form>
            </div>
        )
    }
}
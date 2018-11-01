import  React, {Component} from 'react';
import SlotList from './SlotList';


export default class DashboardPage extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <SlotList />
            </div>
        )
    }
}

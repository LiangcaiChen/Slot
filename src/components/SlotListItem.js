import  React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const SlotListItem = ({id, description, finishDate, percentageFinished, expectedFinishTime}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>End date: {moment(finishDate).format('MMMM Do YYYY')}</p>
        {percentageFinished>0 && <p>Finished: {percentageFinished}%</p>}
        {expectedFinishTime>0 && <p>Will finish in {expectedFinishTime} hours</p>}
    </div>

);

export default SlotListItem;

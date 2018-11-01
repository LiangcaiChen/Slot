import uuid4 from 'uuid4';

export const addSlot = ({description = '', finishDate=0, percentageFinished=0, expectedFinishTime=0} = {}) => ({
    type: 'ADD_SLOT',
    slot: {
        id:uuid4(),
        description,
        finishDate,
        percentageFinished,
        expectedFinishTime
    }
});

export const removeSlot = ({id}={}) => ({
    type: 'REMOVE_SLOT',
    id
});

export const editSlot = (id, updates) => ({
    type: "EDIT_SLOT",
    id,
    updates
});
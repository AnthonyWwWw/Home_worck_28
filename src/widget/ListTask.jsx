import React from 'react';
import List from '@mui/material/List';
import ListTaskItem from './ListTaskItem';

function ListTask({ tasks, deleteTask }) {
  return (
    <List style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {tasks.map((task, index) => (
        <ListTaskItem key={task.id} task={task} deleteTask={deleteTask}>{index+1}</ListTaskItem>
      ))}
    </List>
  );
}

export default ListTask;

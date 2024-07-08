import React, { useState } from 'react';
import UseForm from './widget/UserForm';
import ListTask from './widget/ListTask';
import { Formik, Form } from 'formik';
import validateTask from './helpers/Validate/validate';

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const idCreate = () => {
    const id = Math.floor(Math.random() * 10000);
    return id;
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  return (
    <Formik
      initialValues={{ task: '' }}
      validate={validateTask}
      onSubmit={(values, { resetForm }) => {
        addNewTask({ id: idCreate(), text: values.task });
        resetForm();
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 20 }}>
          <UseForm id='task-field' label='New ToDo' errors={errors} touched={touched} />
          <ListTask tasks={tasks} deleteTask={deleteTask} />
        </Form>
      )}
    </Formik>
  );
}

export default App;
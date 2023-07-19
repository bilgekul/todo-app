  import React from 'react'
  import { Formik, Form, Field } from 'formik'
  import validations from './Validations'
  import { useTodo } from '../../../contexts/TodoContext'
  import {v4 as uuidv4} from 'uuid'
  function TodoForm() {
    const {setTodos} = useTodo();
    return (
      <Formik
      initialValues={{
        text:""
      }}
      onSubmit={async(values, bag) =>{
        await new Promise((r) => setTimeout(r,1000))
        console.log(values)
        setTodos(prev => [...prev,{id: uuidv4(), text:values.text, completed:false }])
        bag.resetForm();
      }}
      validationSchema={validations}>
        <Form>
            <Field
            className="new-todo"
            placeholder = "What needs to be done?"
            autoFocus
            id="text"
            name="text"
            />
        </Form>
      </Formik>
    )
  }
  
  export default TodoForm
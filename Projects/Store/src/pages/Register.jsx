import React from 'react'
import { FormInput, SubmitBtn } from '../components';
import { Form, Link} from 'react-router-dom';
import { toast } from 'react-toastify';

const registerInputs=[
  {type: 'text', label:"username", name:"username", defaultValue:"james smith"},
  {type: 'email', label:"email", name:"identifier", defaultValue:"james@gmail.com"},
  {type: 'password', label:"password", name:"password", defaultValue:"secret"},
]


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || // optional chaning methodology
      'please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
};

function Register() {
  return (
    <section className='h-screen grid place-items-center'>
    <Form
      method='POST'
      className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
    >
      <h4 className='text-center text-3xl font-bold'>Register</h4>
      {registerInputs.map(input=>{
         return <FormInput key={input.name} type = {input.type} label = {input.label} name = {input.name} defaultValue={input.defaultValue}/>
        })}
      <div className='mt-4'>
        <SubmitBtn text='register' />
      </div>
      <p className='text-center'>
        Already a member?
        <Link
          to='/login'
          className='ml-2 link link-hover text-sky-600 capitalize'
        >
          login
        </Link>
      </p>
    </Form>
  </section>
  )
}

export default Register
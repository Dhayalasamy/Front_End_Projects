import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';


const formInputs=[
  {type: 'email', label:"email", name:"identifier", },
  {type: 'password', label:"password", name:"password", },
]
  // we are getting this store from app.jsx file and passing into this action function.
export const action =(store) => async ({ request }) => { // a function returns another function but it is an asyn func. 
  console.log(store)
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/auth/local', data);
      store.dispatch(loginUser(response.data)); // ...................................??
      console.log(response.data)
      toast.success('logged in successfully');
      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error. please try again');
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4" // card - daisy UI
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        {formInputs.map(input=>{
         return <FormInput  key={input.name} type = {input.type} label = {input.label} name = {input.name} defaultValue = {input.defaultValue}/>
        })}
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover text-sky-600 capitalize"  // link - daisy UI
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;

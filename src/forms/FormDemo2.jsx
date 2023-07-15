import React from 'react'
import {useForm} from 'react-hook-form'
// use of useForms or react-hook-form for forms

const FormDemo2 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const showData=(data)=>{
        console.log(data)
    }
    const handleErrors=(errors)=>{};

    const registerOptions={
        name:{required:"Name is required..."},
        email:{required:"Email is required..."},
        password:{
            required:"Password is required...",
            minLength:{
                value:8,
                message:"Password should be between 8-15 characters.."
            }
        }
    }

    // for unmounting lifeCycle methods of components----------




  return (

    <div>
      <form onSubmit={handleSubmit(showData,handleErrors)}>
        <label htmlFor="name">Enter your name</label><br /><br />
        <input type="text" name='name' {...register('name',registerOptions.name)} />
        {errors?.name && errors?.name.message}<br /><br />
        <label htmlFor="email">Enter your email</label><br /><br />
        <input type="email" name='email' {...register('email',registerOptions.email)} />
        {errors?.email && errors?.email.message}<br /><br />
        <label htmlFor="password">Enter your password</label><br /><br />
        <input type="password" name='password' {...register('password',registerOptions.password)} />
        {errors?.password && errors?.password.message}<br /><br />
        <button>send Data</button>
      </form>
    </div>






    // without errors


    // <div>
    //   <form onSubmit={handleSubmit(showData)}>
    //     <label htmlFor="name">Enter your name</label><br /><br />
    //     <input type="text" name='name' {...register('name')} /><br /><br />
    //     <label htmlFor="email">Enter your email</label><br /><br />
    //     <input type="email" name='email' {...register('email')} /><br /><br />
    //     <label htmlFor="password">Enter your password</label><br /><br />
    //     <input type="password" name='password' {...register('password')} /><br /><br />
    //     <button>send Data</button>
    //   </form>
    // </div>
  )
}

export default FormDemo2

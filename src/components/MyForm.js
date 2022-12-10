import React from 'react';
import { useForm } from "react-hook-form";

const MyForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className='border-2 border-red-500'  {...register("example" , {required: true})} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className='border-2 border-red-500' {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is a must</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default MyForm;
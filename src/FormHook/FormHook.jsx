import {  useForm } from "react-hook-form"

export default function FormHook() {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState:{errors},
       
        } = useForm();

    const onSubmit = (data)=>{
        //  console.log(data) 
        alert( `Student Name: ${data.studentname}
            Email: ${data.email}
            Grade: ${data.grade}
            Subjects: ${Array.isArray(data.subject) ? data.subject.join(", ") : data.subject}
            
            `);
         reset();
    };


      


  return (
    <div className="min-h-screen bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 ring-1 ring-zinc-900/5">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">Student Registration</h1>
         <div>
               <label htmlFor="" >Student Name</label>
            <input type="text"  className="border block text-sm p-2 w-full rounded font-medium text-zinc-700"
            {...register('studentname', {required : 'student name is required'})}
            />
            {errors.studentname && <p className="text-red-500">{errors.studentname.message}</p>}
         </div>
         <div>
               <label htmlFor="">Email</label>
            <input type='email' className="border w-full block p-2 rounded text-sm font-medium text-zinc-700"
            {...register("email",{required: 'email is required'})}
            />
             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
         </div>
         <label>grade Level</label>
        <select {...register("grade", {required: 'select your grade grade'})} className="block p-2 rounded border mt-2 w-full text-zinc-700 focus:ring-blue-500">
            <option value="">select grade</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        {errors.grade && <p className="text-red-500">{errors.grade.message}</p>}

       

        <div className="block  text-sm font-medium text-zinc-700 ">

             <label className="block  text-sm font-medium text-zinc-700 my-4 "> Subject Interest </label>
            
          
            
           <label  className="block  text-sm font-medium text-zinc-700 gap-1.5" ><input value="mathematics" {...register('subject', {required: "select at least one "})} type="checkbox" className="mb-2" />mathematics</label>
          

           <label  className="block  text-sm font-medium text-zinc-700 gap-1.5" ><input value="english" {...register('subject', {required: "select at least one " })} type="checkbox" className="mb-2" />english</label>
          

           <label className="block  text-sm font-medium text-zinc-700 gap-1.5" ><input value="arabic" {...register('subject', {required: "select at least one "})}  type="checkbox" className="mb-2" />arabic</label>
          
              {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
   
        </div>
        

        <button type="submit"
       
        className="border p-1 w-full rounded bg-red-500 text-white">Register</button>
            </form>
        </div>
    </div>
  )
}

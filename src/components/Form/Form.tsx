import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl p-5 mx-auto border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input type="text" className="w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500" {...register("name")} />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input type="text" className="w-full" {...register("name")} />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input type="radio" className="" {...register("name")} />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input type="checkbox" className="" {...register("name")} />
          </div>
         
       

        </div>
      </form>
    </div>
  );
};

export default Form;

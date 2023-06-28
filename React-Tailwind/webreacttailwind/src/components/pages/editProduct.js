import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { UpdateProducts } from "../../redux/action/actionReducer";

const EditProduct = (props) => {
  let data = props.data;
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pesan, setPesan] = useState("");

  const handleRegistration = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('image', data.image[0]);
    formData.append('category_id', data.category_id);
    formData.append('description', data.description);
    formData.append('price', data.price);
    const update = await dispatch(UpdateProducts(data));
    setPesan("sukses");
  };
  
  const registerOptions = {
    name: { required: "Name is required" },
    description: { required: "Description is required" },
    category_id: { required: "Category ID is required" },
    price: { required: "Price is required" },
    image: { required: "Image is required" },
  };
  
  return (
    <div>
      <Transition appear show={props.showEdit} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Products
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      <input
                        name="id"
                        type="hidden"
                        {...register("id", registerOptions.id)}
                        defaultValue={data.id}
                      />
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="grid grid-cols-1 gap-4 max-w-xl -auto">
                          <div className="col-span-1">
                            <input
                              name="name"
                              type="text"
                              {...register("name", {
                                ...registerOptions.name,
                                value: data.name,
                              })}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="name"
                            />
                            {errors?.name && errors?.name.message}
                          </div>
                          <div className="col-span-1">
                            <input
                              name="description"
                              type="text"
                              {...register("description", {
                                ...registerOptions.description,
                                value: data.description,
                              })}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="description"
                            />
                            {errors?.description && errors?.description.message}
                          </div>
                          <div className="col-span-1">
                            <select
                              name="category_id"
                              {...register("category_id", registerOptions.category_id)}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                            >
                              <option value="">Select Category</option>
                              {/* Render category options */}
                            </select>
                            {errors?.category_id && errors?.category_id.message}
                          </div>
                          <div className="col-span-1">
                            <input
                              name="price"
                              type="number"
                              {...register("price", {
                                ...registerOptions.price,
                                value: data.price,
                              })}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="price"
                            />
                            {errors?.price && errors?.price.message}
                          </div>
                          <div className="col-span-1">
                            {data.image && (
                              <img
                                src={`http://localhost:7300/image/${data.image}`} // URL gambar sebelumnya
                                alt="Previous Image"
                                className="w-full h-auto"
                              />
                            )}
                            <input
                              name="image"
                              type="file"
                              {...register("image", registerOptions.image)}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="image"
                            />
                            {errors?.image && errors?.image.message}
                          </div>
                          {pesan}
                          <div className="flex-row space-x-4 mt-4 text-right">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                              Submit
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={() => props.closeModalEdit()}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditProduct;

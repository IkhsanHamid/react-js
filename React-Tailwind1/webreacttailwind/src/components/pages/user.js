import React, { Fragment, useEffect, useState } from "react";
import apiMethod from "../api/apiMethod";
import Content from "./content";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical, BsFillPencilFill, BsTrash } from "react-icons/bs";
import AddUser from "./addUser";
import EditUser from "./editUser";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // const [whatToDelete, setWhatToDelete] = useState('');
  const [data, setData] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { name: "#No" },
    { name: "user_name" },
    { name: "firstname" },
    { name: "lastname" },
  ];

  useEffect(() => {
    const getData = async () => {
      const result = await apiMethod.JoinAll();
      setUser(result.data[0]);
      // console.log(result.data[0]);
      // console.log(result.data);
    };
    getData();
  }, [isDelete]);

  const GetbyId = async (id) => {
    const result = await apiMethod.GetbyId(id);
    const hasil = {
      id: result.data[0][0].id,
      username: result.data[0][0].user_name,
      firstname: result.data[0][0].firstname,
      lastname: result.data[0][0].lastname,
    };
    // console.log(hasil);
    setData(hasil);
    setIsEdit(true);
  };

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await apiMethod.DeleteUserAndCust(id);
        // const updatedUsers = users.filter((user) => user.id !== id);
        // setUsers(updatedUsers);
        setIsDelete(true);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        Swal.fire("Cancelled", "Your file is safe.", "info");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      Swal.fire("Error!", "Failed to delete data. Please try again.", "error");
    }
  };

  // const filteredUsers = users.filter((user) => {
  //   const { user_name, firstname, lastname } = user;
  //   const searchLower = searchTerm.toLowerCase();

  //   return (
  //     user_name.toLowerCase().includes(searchLower) ||
  //     firstname.toLowerCase().includes(searchLower) ||
  //     lastname.toLowerCase().includes(searchLower)
  //   );
  // });

  return (
    <div>
      <Content title="users"  fungsi={() => setIsOpen(true)}>
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              {(columns || []).map((col) => (
                <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">{col.name}</span>
                </th>
              ))}
              <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {(users || []).map((dt, index) => (
              <tr key={dt.id}>
                {/* {console.log(dt)} */}
                <td className="px-6 py-3 text-sm text-gray-900">{index + 1}</td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  {dt.user_name}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  {dt.firstname}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  {dt.lastname}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <BsThreeDotsVertical
                            className="ml-2 mr-1  text-gray-700 hover:text-gray-400 sm:flex"
                            aria
                            hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => GetbyId(dt.id)}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsFillPencilFill
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsFillPencilFill
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => handleDelete(dt.id)}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      {isOpen ? (
        <AddUser show={isOpen} closeModal={() => setIsOpen(false)} />
      ) : (
        ""
      )}
      {isEdit ? (
        <EditUser
          showEdit={isEdit}
          closeModalEdit={() => setIsEdit(false)}
          data={data}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;

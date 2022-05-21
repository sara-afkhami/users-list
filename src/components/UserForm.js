import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import Buttons from "./AddEditUserButtons"
import add from "../utils/addUser"
import edit from "../utils/editUser"
import validator from "validator"

const UserForm = (props) => {
  let editing = props.users.filter(user => user.id == props.editId)
  console.log("editing" + JSON.stringify(editing[0]))
  return (
    <div>
      <Formik
        initialValues={props.editId ? editing[0] :
          ({
            firstName: "",
            lastName: "",
            email: "",
          })
        }

        onSubmit={(values) => {
          if (validator.isEmpty(values.firstName) || validator.isEmpty(values.lastName)|| validator.isEmpty(values.email)) { 
            alert("please fill all inputs")
          }
          else {
            props.editId ? edit(props.users, props.setUsers, values, props.editId) : add(props.users, props.setUsers, values, props.userId, props.setUserId)
            props.setShowModal(false);
          }
        }}
      >
        <Form className="relative p-6 flex-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
                htmlFor="firstName"
              >
                First Name
              </label>
              <Field
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Field
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>
          {/* <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <Field
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Zip
              </label>
              <Field
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
          </div> */}
          {/* <button type="submit">Submit</button> */}
          <Buttons setShowModal={props.setShowModal} />
        </Form>
      </Formik>
    </div>
  );
};
export default UserForm;

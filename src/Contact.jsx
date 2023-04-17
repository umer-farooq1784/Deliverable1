import React from 'react';
import Header from "./Header"

function Contact() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="card-number" className="sr-only">
                  Email
                </label>
                <input
                  id="card-number"
                  name="card-number"
                  type="text"
                  autoComplete="cc-number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="expiry-date" className="sr-only">
                  Message
                </label>
                <input
                  id="expiry-date"
                  name="expiry-date"
                  type="text"
                  autoComplete="cc-exp"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-between">
  Send
</button>
              
            </div>

            <div>

           

        </div>
        </form>
  </div>
    </div>
    </div>
    </div>
    )
}
export default Contact;
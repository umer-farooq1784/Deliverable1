import React from 'react';
import Header from "./Header"

function payment() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Payment Details
          </h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="card-number" className="sr-only">
                  Card number
                </label>
                <input
                  id="card-number"
                  name="card-number"
                  type="text"
                  autoComplete="cc-number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Card number"
                />
              </div>
              <div>
                <label htmlFor="expiry-date" className="sr-only">
                  Expiry date
                </label>
                <input
                  id="expiry-date"
                  name="expiry-date"
                  type="text"
                  autoComplete="cc-exp"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="MM / YY"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="sr-only">
                  CVC
                </label>
                <input
                  id="cvc"
                  name="cvc"
                  type="text"
                  autoComplete="off"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="CVC"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Save payment details for future purchases
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Learn more about how we protect your privacy
                </a>
              </div>
            </div>

            <div>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  Submit
</button>

        </div>
        </form>
  </div>
    </div>
    </div>
    </div>
    )
}
export default payment;
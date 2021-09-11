import { useState, useRef } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Fetcher from '@/lib/fetcher';
import { REPORT } from '@/lib/endpoints';

export default function Solution(props) {
  const [form, setForm] = useState({
    popup: false,
    isLoading: false,
    isMessageReported: false,
    isError: false
  });
  const reasonInput = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    setForm({ isLoading: true, ...form });

    const REQUEST_DATA = {
      report_reason: reasonInput.current.value,
      report_question_id: props.questionID || 'NaNa'
    };

    Fetcher(REPORT, REQUEST_DATA)
      .then(() => {
        setForm({
          isMessageReported: true,
          ...form
        });
      })
      .catch(() => {
        setForm({
          isError: true,
          ...form
        });
      });
  };

  const popupTonggle = () => {
    setForm({ popup: !form.popup });
  };
  const downloadHnadler = () => {
    console.log('Donwload');
  };

  return (
    <div className="bg-white mt-2 text-black">
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <div className="mt-2">
        <h2 className="font-bold text-xl md:text-4xl tracking-tight mb-4 mt-8 text-black">
          Solution
        </h2>
      </div>
      <div className="mt-2">
        {props.children}
        <div className="flex items-center mx-auto my-0 text-gray-900">
          <div>
            <button
              className="py-2 px-2 mx-1 rounded-md text-white bg-red-600 sm:py-2 sm:px-2 hover:bg-red-500"
              onClick={popupTonggle}
            >
              Report
            </button>
            {form.popup && (
              <form
                className="fixed z-10 inset-0 overflow-y-auto"
                onSubmit={formHandler}
              >
                <div className="block bg-black bg-opacity-10 items-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {form.isMessageReported
                              ? 'Thank You For your Contribution'
                              : form.isError
                              ? 'Something Went Wrong'
                              : 'Report Wrong Answer'}
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              {form.isMessageReported || form.isError
                                ? ''
                                : 'Pelese tell us why this answer is wrong'}
                            </p>
                          </div>
                          {form.isMessageReported || form.isError ? (
                            ''
                          ) : (
                            <input
                              placeholder="Reason*"
                              className="focus:outline-none focus:ring focus:border-gray-100 border-2 p-2 mt-4 w-full rounded"
                              ref={reasonInput}
                              aria-label="Reason for reporting answer"
                              required
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      {form.isMessageReported || form.isError ? (
                        ''
                      ) : (
                        <button
                          type="submit"
                          aria-label="Report incorrect Problem Solution"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 hover:bg-red-700 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          {form.isLoading ? <LoadingSpinner /> : 'Report'}
                        </button>
                      )}
                      <button
                        type="button"
                        aria-label="Cancel"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={popupTonggle}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
            <button
              type="button"
              aria-label="Download Problem Solution"
              className="py-2 px-2 mx-1 text-gray-900 rounded-md sm:py-2 sm:px-2 bg-gray-200 hover:bg-gray-100"
              onClick={downloadHnadler}
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

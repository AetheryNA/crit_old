import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

const QuizCompleteModel = ({ response }) => {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  console.log(response);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="quiz-completed__overlay fixed inset-0 transition-opacity" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="quiz-completed__wrap px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center">
                  <div className="mt-3 text-center sm:mt-0 w-full">
                    <Dialog.Title as="h3" className="quiz-completed__heading">
                      <p> You are a </p>
                      { response.type }
                    </Dialog.Title>
                    <div className="mt-4">
                      <p className="font-semibold">
                        This is your personality
                      </p>
                      <p className="mt-4">
                        {response.personality_msg}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quiz-completed__btn px-4 py-3 pb-4 sm:px-6 sm:flex sm:flex-row sm:items-center sm:justify-center">
                <button
                  type="button"
                  className="button button--primary"
                  onClick={() => router.push('/lobby')}
                >
                  Go back to Lobby
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default QuizCompleteModel

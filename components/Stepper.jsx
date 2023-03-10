import { CheckIcon } from '@heroicons/react/24/solid'
import { step_status, steps } from '../constants'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ steps, stepChange }) {
  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
        <ol
          role="list"
          className="overflow-hidden rounded-md lg:flex lg:rounded-none "
        >
          {steps.map((step, stepIdx) => (
            <li key={step.id} className="relative overflow-hidden lg:flex-1" onClick={() => stepChange && stepChange(step.name)}>
              <div
                className={classNames(
                  stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                  stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                  'border border-gray-200 overflow-hidden lg:border-0'
                )}
              >
                {step.status === 'complete' ? (
                  <a className="group">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-transparent  lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                          <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                ) : step.status === 'current' ? (
                  <a aria-current="step">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-yellow-500 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-yellow-500">
                          <span className="text-yellow-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-yellow-500">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                ) : (
                  <a className="group">
                    <span
                      className="absolute top-0 left-0 h-full w-1 bg-transparent  lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        stepIdx !== 0 ? 'lg:pl-9' : '',
                        'px-6 py-5 flex items-start text-sm font-medium'
                      )}
                    >
                      <span className="flex-shrink-0">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                          <span className="text-gray-500">{step.id}</span>
                        </span>
                      </span>
                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-gray-500">{step.name}</span>
                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
                      </span>
                    </span>
                  </a>
                )}

                {stepIdx !== 0 ? (
                  <>
                    {/* Separator */}
                    <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 12 82"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
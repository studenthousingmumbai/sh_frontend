import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Example({ errors }) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          {/* <h3 className="text-sm font-medium text-red-800">
                There {errors && (errors.length > 1 || errors.length === 0) ? 'were' : 'was'} {errors.length} {(errors.length > 1 || errors.length === 0) ? 'errors': 'error'} with your submission
            </h3> */}
          <div className="text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {errors && errors.map((error) => <li>{error.message}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

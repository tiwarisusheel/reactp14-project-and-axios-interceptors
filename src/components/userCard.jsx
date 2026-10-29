
function UserCard({ user }) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}
      <div className="bg-indigo-600 px-6 py-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-indigo-100 text-3xl font-bold uppercase text-indigo-700">
          {user.name.firstname.charAt(0)}
          {user.name.lastname.charAt(0)}
        </div>

        <h2 className="mt-3 text-xl font-bold capitalize text-white">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="mt-1 text-sm text-indigo-100">
          @{user.username}
        </p>
      </div>

      {/* User Details */}
      <div className="space-y-4 p-6">

        <div className="flex items-start gap-3">
          <span className="text-lg">✉️</span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-gray-400">
              Email
            </p>
            <p className="break-all text-sm text-gray-700">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-lg">📞</span>
          <div>
            <p className="text-xs font-semibold uppercase text-gray-400">
              Phone
            </p>
            <p className="text-sm text-gray-700">
              {user.phone}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-lg">📍</span>
          <div>
            <p className="text-xs font-semibold uppercase text-gray-400">
              Address
            </p>
            <p className="text-sm capitalize text-gray-700">
              {user.address.street}, {user.address.number}
            </p>
            <p className="text-sm capitalize text-gray-500">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-400">
            User ID: <span className="font-medium text-gray-600">{user.id}</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default UserCard;

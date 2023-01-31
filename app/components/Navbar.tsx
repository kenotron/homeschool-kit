async function getData() {
  const res = await fetch("http://localhost:5333/api/navigation?populate=*");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const NavList = (props: any) => {
  return (
    <ul className="mt-4 flex flex-col  p-4 dark:border-gray-100 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
      {props.children}
    </ul>
  );
};

const NavItem = (props: any) => {
  return (
    <a
      className="block py-2 pl-3 pr-4 text-gray-100  md:bg-transparent md:p-0 "
      {...props}
    >
      {props.children}
    </a>
  );
};

export const NavBar = async () => {
  const data = (await getData())?.data.attributes;
  const links = data.links.data;

  return (
    <nav className="bg-blue-900 px-2 py-2.5 drop-shadow-2xl dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-100">
            Legacy Homeschool Center
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg> */}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <NavList>
            {links.map((linkData: any) => {
              return (
                <NavItem key={linkData.id} href={linkData.attributes.url}>
                  {linkData.attributes.label}
                </NavItem>
              );
            })}
          </NavList>
        </div>
      </div>
    </nav>
  );
};

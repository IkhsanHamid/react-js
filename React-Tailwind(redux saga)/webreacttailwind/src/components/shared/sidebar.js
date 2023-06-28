import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdCottage, MdGroup, MdShopTwo, MdCategory } from "react-icons/md";
import logo from "./codex.png";

const SideBar = forwardRef(({ showNav }, ref) => {
  const { pathname } = useLocation();
  const listMenu = [
    { to: "/", path: "/", icon: <MdCottage />, name: "Home" },
    { to: "Users", path: "users", icon: <MdGroup />, name: "Users" },
    {
      to: "Category",
      path: "category",
      icon: <MdCategory />,
      name: "Category",
    },
    { to: "Product", path: "product", icon: <MdShopTwo />, name: "Product" },
  ];

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img className="w-32 h-auto" src={logo} alt="company logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        {(listMenu || []).map((mn) => (
          <Link to={`${mn.to}`}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                pathname === mn.path
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">{mn.icon}</div>
              <div>
                <p>{mn.name}</p>
              </div>
            </div>
          </Link>
        ))}
        {/* <Link href="/account">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/account"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <UserIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Account</p>
              </div>
            </div>
          </Link>
          <Link href="/billing">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/billing"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <CreditCardIcon className="h-5 w-5" />
              </div>
              <div>
                <p>Billing</p>
              </div>
            </div>
          </Link> */}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;

// const SideBar = forwardRef({ showNav }, ref) => {
//   const {pathname} = useLocation()
//   const listMenu = [
//     {to: '/', path:'/', icon:<MdCottage/>, name: 'Home'},
//     {to: 'user', path:'user', icon:<MdGroup/>, name: 'User'},
//     {to: 'category', path:'category', icon:<MdCategory/>, name: 'Category'},
//     {to: 'product', path:'product', icon:<MdShopTwo/>, name: 'Product'},
//   ]

//   return (
//     <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
//       <div className="flex justify-center mt-6 mb-14">
//         <picture>
//           <img
//             className="w-32 h-auto"
//             src="/ferox-transparent.png"
//             alt="company logo"
//           />
//         </picture>
//       </div>

//       <div className="flex flex-col">

// {
//     (listMenu || []).map((mn)=>
// <Link to={`${mn.to}`}>
//   <div
//     className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
//       pathname == mn.path
//         ? "bg-orange-100 text-orange-500"
//         : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
//     }`}
//           >
//             <div className="mr-2">
//               {mn.icon}
//             </div>
//             <div>
//               <p>{mn.name}</p>
//             </div>
//           </div>
//         </Link>
//             )
//         }

//     </div>
//   );
// };

// SideBar.displayName = "SideBar";

// export default SideBar;

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-10 p-6 bg-gray-200">
      {/* Left Section: Logo and Text */}
      <div className="md:w-1/3">
        <h1 className="text-xl font-bold">🛒 Gromouse</h1>
        <p className="text-sm text-gray-600 mt-4">
          Gromouse is the best grocery shopping platform
        </p>
      </div>

      {/* Right Section: Table */}
      <div className="overflow-x-auto w-full md:w-2/3">
        <table className="w-full table-auto text-sm border-separate border-spacing-x-6">
          <thead>
            <tr className="font-semibold text-gray-800">
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">About Us</th>
              <th className="p-2 text-left">Services</th>
              <th className="p-2 text-left">Help</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Fashion</td>
              <td className="p-2">About Shopcart</td>
              <td className="p-2">Gift Card</td>
              <td className="p-2">Shopcart Help</td>
            </tr>
            <tr>
              <td className="p-2">Education Product</td>
              <td className="p-2">Careers</td>
              <td className="p-2">Mobile App</td>
              <td className="p-2">Returns</td>
            </tr>
            <tr>
              <td className="p-2">Frozen food</td>
              <td className="p-2">News & Blog</td>
              <td className="p-2">Shipping & Delivery</td>
              <td className="p-2">Track Orders</td>
            </tr>
            <tr>
              <td className="p-2">Beverages</td>
              <td className="p-2">Help</td>
              <td className="p-2">Order Pickup</td>
              <td className="p-2">Contact Us</td>
            </tr>
            <tr>
              <td className="p-2">Organic Grocery</td>
              <td className="p-2">Press Center</td>
            </tr>
            <tr>
              <td className="p-2">Office Supplies</td>
            </tr>
            <tr>
              <td className="p-2">Beauty Product</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}

export default Footer;

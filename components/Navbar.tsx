export default function Navbar() {
  return (
    <nav className="sticky top-5 z-10 bg-navBackground backdrop-blur-md text-white p-4 rounded-full mx-[10rem] px-[3.75rem] py-1">
      <div className="container mx-auto flex justify-between items-center py-[16px]">
        <a href="#home" className="text-xl font-bold">
          <img
            src="/logo.svg"
            alt="CRM Logo"
            className="h-8 inline-block mr-2"
          />
        </a>
        <ul className="flex space-x-[51px] cursor-pointer text-2xl font-semibold">
          <li>
            <a href="#home" className="text-secondary underline">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="text-primary">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="text-primary">
              How it Works
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-primary">
              Pricing
            </a>
          </li>
        </ul>
        <button className="bg-primary text-background px-[24px] py-[10px] rounded-full text-[24px]">
          login
        </button>
      </div>
    </nav>
  );
}

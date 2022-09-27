import Nav from "@/components/Nav";
const Layout = ({ children }) => {
  return (
    <div>
      <br />
      <Nav />
      <br />
      <hr />

      {children}
    </div>
  );
};

export default Layout;

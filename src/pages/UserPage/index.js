import "./style.css";

//Components
import UserHeader from "../../components/UserHeader";
import useFiles from "../../hooks/useFiles";

const UserPage = () => {
  useFiles();

  return (
    <section>
      <UserHeader />
    </section>
  );
};

export default UserPage;

import { signOutFirebase } from "../../api/firebase/Auth";

const HomeTemplate = () => {
  return (
    <div>
      HomeTemplate
      <button onClick={signOutFirebase}>cerrar</button>
    </div>
  );
};

export default HomeTemplate;

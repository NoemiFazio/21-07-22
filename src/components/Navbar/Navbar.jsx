import "./index.css";
import Button from "../Button";

const Navbar = ({ funzione, condizione }) => {
  return (
    <div className="Navbar">
      <Button
        onHandleClick={funzione}
        btnTextCont={condizione ? "Nascondi" : "Mostra"}
      />
    </div>
  );
};
export default Navbar;

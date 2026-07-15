import { useAppContext } from "../../context/hooks/useAppContext";
import { BORDER_COLOR, MAIN_BG_COLOR } from "../../UIKit";

export const Popup = ({ type }: { type: string }) => {
  const { setPopup } = useAppContext();
  return (
    <div
      onClick={() => setPopup(null)}
      style={{
        position: "absolute",
        display: "flex",
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e: any) => e.stopPropagation()}
        style={{
          position: "absolute",
          border: `solid 1px ${BORDER_COLOR}`,
          width: 400,
          height: 300,
          zIndex: 999,
          top: "50vh",
          left: "50vw",
          transform: "translate(-50%, -50%)",
          background: MAIN_BG_COLOR,
          borderRadius: 12,
          boxShadow: "0px 0px 19px -4px #222",
          padding: "10px 20px",
        }}
      >
        <h3>Popup</h3>
        <p>This is a popup.</p>
      </div>
    </div>
  );
};

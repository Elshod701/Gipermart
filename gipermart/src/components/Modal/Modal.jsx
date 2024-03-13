import { useGetCategory } from "../../service/query/useGetGategory";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Modal = ({ isOpen, onClose }) => {
  const { data: category } = useGetCategory();
  const modalref = useRef();
  const prevModalRef = useRef();

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleCloseModal);
    }
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [isOpen]); // Re-run effect when `isOpen` changes

  return (
    <>
      {isOpen && (
        <div
          ref={prevModalRef}
          className="modal-overlay absolute bg-[#00000058] w-[100vw] h-[100vh] top-0 left-0 items-center justify-center flex-wrap z-[7777]"
        >
          <div
            ref={modalref}
            className="modal absolute left-[20%] top-[20%] w-[1007px] h-[464px] bg-white shadow-xl rounded-xl py-[52px] px-[88px] flex items-center justify-between flex-wrap"
          >
            {category?.map((e) => (
              <Link to={`about/${e.datakey}`} key={e.datakey}>
                <div id="categ-card">
                  <img
                    className="w-[76px] h-[76px] bg-cover bg-center"
                    src={e.img}
                    id="categ-img"
                  />
                  <p className="text-[16px] text-center font-jost-medium leading-[22px]">
                    {e.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

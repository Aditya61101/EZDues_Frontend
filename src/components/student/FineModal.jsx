import { Dialog, DialogContent } from "@/components/ui/dialog";
import { images } from "@/constants";
import { CloudUpload } from "lucide-react";
// {
//     name: "Chemistry Lab Breaking",
//     payment: "700",
//     issued_on: "18-01-2024",
//     issued_by: "Academic",
//     reason_for_fine: "Student broke the test tube in the Chemistry lab",
//   },
const FineModal = ({ isOpen, setIsOpen, data }) => {
  return (
    <Dialog
      className="rounded-[40px]"
      open={isOpen}
      onOpenChange={() => setIsOpen(false)}
    >
      <DialogContent className="!max-w-fit px-[70px] py-12 sm:rounded-[40px]">
        <div className="flex items-center gap-x-3">
          <div>
            <p className="text-[40px]">{data.name}</p>
            <p className="text-[#253D91] text-xl">Rs {data.payment}</p>
            <div className="flex flex-col mt-12 gap-y-6">
              <p className="text-xl">
                <span className="font-bold">Fine Issued On:</span>{" "}
                <span>{data.issued_on}</span>
              </p>
              <p className="text-xl">
                <span className="font-bold">Issued By:</span>{" "}
                <span>{data.issued_by}</span>
              </p>
              <p className="text-xl">
                <span className="font-bold">Reason:</span>{" "}
                <span>{data.reason}</span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-2xl text-center">Pay Here</p>
            <img src={images.FineQR} loading="lazy" className="!max-w-fit" />
            <button className="flex mx-auto items-center rounded-3xl gap-x-1 text-xl text-white py-6 px-9 bg-[#253D91]">
              <p>Payment Proof</p>
              <CloudUpload />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FineModal;

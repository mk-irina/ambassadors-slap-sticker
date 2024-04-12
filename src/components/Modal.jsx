import { Dialog } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { GoShareAndroid } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { SlPicture } from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";
import { Button, IconButton } from "./Button";


export const Modal = ({picture, setTitle, title}) => {
  const [open, setOpen] = useState(false)

    console.log(picture)
    const handleOpen = () => setOpen((isOpen) => !isOpen)

    useEffect(()=>{
      if (picture !== undefined) {
        setOpen(true);
      }
    }, [picture]);

    return (
      
        <Dialog open={open} handler={handleOpen} className="py-5 px-7 flex flex-col gap-5 text-[#23374B]">
            <div>
              {/* <input
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              /> */}
            <section className="gallery">
              <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl">Cherish this moment forever!</h3>
              <IconButton onClick={handleOpen} icon={<SlClose />} />
              </div>
        {picture && (
          <div className="picture">

            <div className="flex gap-3 items-center p-1">
            <h3 className="text-xl">{picture.title}</h3>
            <IconButton icon={<FiEdit />} />
            </div>

            <img src={picture.dataUri} alt="slap" />

            <div className="flex justify-between mt-5">
            <div className="flex gap-5">
              <Button text={'Share'} icon={<GoShareAndroid />} />
              <Button text={'Download'} icon={<FiDownload />} />
              </div>
              <Button text={'See in gallery'} icon={<SlPicture />} />
            </div>

          </div>
        )}
      </section>
      </div>
      </Dialog>
    

    )
}
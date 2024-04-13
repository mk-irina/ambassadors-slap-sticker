import { Dialog } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ShareButton } from "./Button";
import { DownloadButton } from "./Button";
import { SlPicture } from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button, IconButton } from "./Button";
import { Link } from "react-router-dom";

export const Modal = ({picture, setTitle, title}) => {
  const [open, setOpen] = useState(false)
  const [activeEdit, setActiveEdit] = useState(false)

    const handleOpen = () => setOpen((isOpen) => !isOpen)
    const handleEdit = () => setActiveEdit(true)
    const handleSaveEdit = () => setActiveEdit(false)

    useEffect(()=>{
      if (picture !== undefined) {
        setOpen(true);
      }
    }, [picture]);

    return (
        <Dialog open={open} handler={handleOpen} className="py-5 px-7 flex flex-col gap-5 text-[#23374B]">
            <div>
            <section className="gallery">
              <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl">Cherish this moment forever!</h3>
              <IconButton onClick={handleOpen} icon={<SlClose />} />
              </div>
        {picture && (
          <div className="picture">

            <div className="flex gap-3 items-center p-1">
            {activeEdit ? (
              <div className='flex items-center gap-3'>
              <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              className="border-b-2"
            />
            <IconButton onClick={handleSaveEdit} icon={<IoCheckmarkCircleOutline className="size-7" />} />
            </div>
            ) : (
              <div className='flex gap-3'> 
                <h3 className="text-xl">{picture.title}</h3>
                <IconButton onClick={handleEdit} icon={<FiEdit />} />
              </div>
            )}
            </div>

            <img src={picture.dataUri} alt="slap" />

            <div className="flex justify-between mt-5">
            <div className="flex gap-5">
              <ShareButton />
              <DownloadButton />
              </div>
              <Link to="/gallery">
              <Button text={'See in gallery'} icon={<SlPicture />} />
              </Link>
            </div>
          </div>
        )}
      </section>
      </div>
      </Dialog>
    )
}
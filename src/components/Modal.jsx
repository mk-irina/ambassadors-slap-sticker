import { Dialog } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { SlPicture } from 'react-icons/sl';
import { SlClose } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { shareFile } from '../utils/shareFile';
import { Button, IconButton, ShareButton, DownloadButton } from './Button';

export const Modal = ({ picture, onPictureReset, onPictureUpdate }) => {
  const DEFAULT_TITLE = 'SLAPPE!';

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(DEFAULT_TITLE);

  const downLoadPicture = () => {
    saveAs(picture.dataUri, picture.title);
  };

  const handleModal = () => {
    setOpen(false);
    onPictureReset();
    setTitle(DEFAULT_TITLE);
  };

  const handleSaveEdit = () => {
    onPictureUpdate({ ...picture, title });
  };

  useEffect(() => {
    if (picture !== undefined) {
      setOpen(true);
    }
  }, [picture]);

  return (
    <Dialog
      size="xl"
      open={open}
      handler={handleModal}
      className="py-5 px-7 flex flex-col gap-5 text-[#23374B]"
    >
      <div>
        <section className="gallery">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl">Cherish this moment forever!</h3>
            <IconButton
              onClick={handleModal}
              icon={<SlClose size={'25px'} />}
            />
          </div>
          {picture && (
            <div className="picture">
              <div className="flex gap-3 items-center p-1">
                <div className="flex items-center gap-3 h-9">
                  <h3 className="text-lg">Give it a name</h3>
                  <input
                    type="text"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                    onBlur={handleSaveEdit}
                    className="border-b-2 text-xl w-min"
                  />
                </div>
              </div>
              <img src={picture.dataUri} alt="slap" />
              <div className="flex justify-between mt-5">
                <div className="flex gap-5">
                  <ShareButton onClick={() => shareFile(picture)} />
                  <DownloadButton onClick={downLoadPicture} />
                </div>
                <Link to="/gallery">
                  <Button
                    onClick={handleModal}
                    text={'See in gallery'}
                    icon={<SlPicture />}
                  />
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </Dialog>
  );
};

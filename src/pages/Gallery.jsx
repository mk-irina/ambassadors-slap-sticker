import { Picture } from "../components/Picture";

export const Gallery = ({pictures, title}) => {

    return (
        <div className="max-w-screen-xl mt-14 m-auto">
            <div className="flex justify-start items-center gap-4 flex-wrap">
            {pictures.map((picture, ind) => <Picture key={ind} picture={picture} />)}
            </div>
        </div>
    )
}
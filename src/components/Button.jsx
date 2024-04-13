import { GoShareAndroid } from "react-icons/go";
import { FiDownload } from "react-icons/fi";


export const Button = ({text, onClick, icon}) => {
    return (
        <button onClick={onClick} className="py-1 px-3 flex gap-3 justify-between items-center border border-[#D1D4D8] bg-[#F1F3F5] rounded-md ">
            {text} 
            {icon} 
        </button>
    )
}

export const IconButton = ({icon, onClick}) => {
    return (
        <button onClick={onClick} className="p-1 text-xl">
            {icon}
        </button>
    )
}

export const ShareButton = () => {
    return (
        <Button text={'Share'} icon={<GoShareAndroid />} />
    )
}

export const DownloadButton = () => {
    return (
        <Button text={'Download'} icon={<FiDownload />} />
    )
}


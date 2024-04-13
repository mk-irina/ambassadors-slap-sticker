import { ShareButton } from "./Button";
import { DownloadButton } from "./Button";

export const Picture = ({img}) => {

    return (
        <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group w-[49%]">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 flex items-end">
                    <div className="transform-gpu p-4 space-y-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out flex justify-between w-full items-end">
                    <div className="font-semibold text-white text-2xl">Title</div>
                        <div className="flex gap-3">
                            <ShareButton />
                            <DownloadButton />
                        </div>
                    </div>
            </div>
            <img
                alt=""
                class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src=""
            />
        </div>
    )
}
export const StickersGallery = ({setSticker, stickers}) => {
    return (
        <section className="flex flex-col gap-5 mt-14 mb-10">
          <h3 className="text-2xl">
          Select your sticker...
          </h3>
      
      <div className="flex  gap-3 w-full overflow-x-auto">
      {stickers.map((sticker, idx) => {
          return (
          <button onClick={() => setSticker(sticker)} key={idx} className="size-28 shadow-sm bg-white rounded-md flex-shrink-0">
            <img src={sticker.url} alt="slap" className="h-full w-full object-contain"/>
          </button>
          )
        })}
      </div>
 
      </section>
    )
}
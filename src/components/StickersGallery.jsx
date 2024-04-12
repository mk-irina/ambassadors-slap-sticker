export const StickersGallery = ({setSticker, stickers}) => {
    return (
        <section className="flex flex-col gap-5 mt-14 mb-10">
          <h3 className="text-2xl">
          Select your sticker...
          </h3>
      
      <div className="flex gap-5 m-2 p-2">
      {stickers.map((sticker, ind) => {
          return (
          <button onClick={() => setSticker(sticker)} key={ind}>
            <img src={sticker.url} alt="slap" className="h-28 shadow-sm bg-white rounded-md"/>
          </button>
          )
        })}
      </div>
 
      </section>
    )
}
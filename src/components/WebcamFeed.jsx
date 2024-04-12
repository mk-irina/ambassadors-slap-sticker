export const WebcamFeed = ({handleVideoRef, handleCanvasRef, handleCapture}) => {
    return (
    <section className="flex flex-col gap-5">
      <h3 className="text-2xl">
        Slap yourself!
      </h3>

    <video ref={handleVideoRef} />
    <canvas
      ref={handleCanvasRef}
      width={2}
      height={2}
      onClick={handleCapture}
      // className="max-w-screen-lg max-h-[550px]"
    />
  </section>
  )
}
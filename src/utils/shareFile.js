export const shareFile = async (picture) => {
  const response = await fetch(picture.dataUri);
  const blob = await response.blob();

  const filesArray = [
    new File([blob], `${picture.title}.jpg`, { type: 'image/png' })
  ];

  const shareData = {
    files: filesArray
  };

  try {
    await navigator.share(shareData);
  } catch (e) {
    if (e.name !== 'AbortError') {
      alert('Share is not supported in this browser or without HTTPS');
    }
    console.error(e);
  }
};

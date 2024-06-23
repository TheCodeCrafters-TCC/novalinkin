export function generateRandomName() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length = 10; // Length of the random string
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `image_${result}.jpg`; // Filename format
}

export function handleDownload(fullImage: string) {
  if (fullImage) {
    const link = document.createElement("a");
    link.href = fullImage;
    link.download = generateRandomName();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export const capitalizeAndRemoveHyphen = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

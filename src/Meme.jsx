import { useState, useEffect } from "react";
import data from "./data";
const Meme = () => {
  const [myImages, setMyImages] = useState([]);

  useEffect(() => {
    return window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [myImages]);
  const showImage = (id) => {
    let chosenImage = data.find((item) => item.id === id);
    // console.log(self.crypto.randomUUID(),)
    setMyImages((prev) => [
      ...prev,
      {
        id: self.crypto.randomUUID(),
        img: chosenImage.img,
      },
    ]);
  };
  const deletImage = (id) => {
    setMyImages(myImages.filter((item) => item.id !== id));
  };
  return (
    <>
      {myImages.map(({ id, img }) => (
        <img onClick={() => deletImage(id)} key={id} src={img} />
      ))}

      <main>
        <button onClick={() => showImage(1)}>Insane</button>
        <button onClick={() => showImage(2)}>Volume</button>
        <button onClick={() => showImage(3)}>Rock</button>
      </main>
    </>
  );
};
export default Meme;

import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(props) {
  const [loading, isloading] = useState(false);
  const [slips, setSlips] = useState(null);

  // console.log("Outside =>", props.getRandomNum);

  useEffect(() => {
    let umount = true;
    // console.log("Inside Hook", props.getRandomNum);
    isloading(true);
    axios
      .get(`https://api.adviceslip.com/advice/${props.getRandomNum}`)
      .then((res) => {
        isloading(false);
        // console.log(res);
        if (res.status === 200) {
          if (res.data.message) {
            setSlips({
              advice:
                "If you get stuck, try doing the opposite of what the solution requires.",
              id: 1,
            });
          } else {
            setSlips(res.data.slip);
          }
        }
      })
      .catch((error) => {
        console.error("error", error);
      });

    return () => {
      umount = false;
    };
  }, [props.getRandomNum]);

  return { slips, loading };
}

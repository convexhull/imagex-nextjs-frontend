"use client";
// Libs
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Backdrop from "@/components/UI/Backdrop/Backdrop";
// Styles
import classes from "./ProfileMenu.module.css";
// Actions
import { logoutUser } from "@/lib/actions";

const ProfileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Image
        src={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAM1BMVEXh4eGjo6OgoKDk5OSdnZ3e3t6qqqrV1dXY2NimpqbLy8vPz8+xsbGtra22trbFxcW/v7/rniADAAAD60lEQVR4nO2c2XLrIAxAAbEaDPz/117sJE3bxDFyIXLucB66TB96RmxBks3YYDAYDAaDwf8HADBVWH84LcXR5xDmQgjZF1tqo6com2YhJb8ipZiTVdRWj5jopOA/ENJFQ+31E1CR/7K8uvKozjMBgE3uqeaq6qazzFVgccvyQjyHKaiwGc5rUMMpht/qHc9iqi21ZRnUedezmM7ko69ihWcxjdQ7aq7yLKaZ1tO7Ok/Onaf0hJoJeg3pTDhLYZL7hjfkRGeq5npPzmey9QQTxpNzspBWbk036LYoiwso50TnE2opLVAtJ8CN/DL2RJNU4zw51zSeCuvJOc1qssgpWiYpyWoCgxc1FJMUveiplv0QbS76KXP0Y1Y9U8iDqRxNNPso4E+mcda/Fv2UT0/MVl9BLziyfAn2Ez6VJ8PemchEGe4WSuf5Mff6j8mUMGbqc0/EZYdUm81LtJ5li6qappJua/qiMuNMz26tYa02UFsuqL3Rl+R58SuQn5ftruHkmbrQ8AX47YkqZsKT8wFQUTyvhYoz1UIXwGb3ewII7rI9lyZbeh/sFLWQYglt+SKFjpM9aR+EsmaKYdZ6DnEyZ+wquANrMwmcuqVkMBgMBoPBYFDNpWfYWmOML5Rv1p6ug3hxtD7lGLRz5bN9QQjndIg5ebvYUhsulJiZFLVb7x/i58Vu+d3pmAxxYMt/tz5r+btl+OEqKqXO3lJFFliJZLl51jURlhtpiSxBzyPYFFyd5F3WhfTm67PyASd5lw3+bZfTEkx9TPOiqt8TVrARWQd7xMXuqmA2kkzYsMaupXtQabvhHqnqUr/sGfj9BnGEqvadTHczy1j6ZKLB1Be/ahFz+5kKvrXlhebDX1v4wtK4UAapj+ZCahhT8J3iuSAajn59afYIDcu52HYcHM1aOLoO/GraaPAR3QMHRdv0HIDp7FlMm+z7PbemG022KLXz6F8Lmhz6KvQXbVPP73V63ml1ju63OPzRM7Tx7L7s2yz6BWQPHpaGnQe1zyoeoenzjRWdOIc923bwVDz3e9Cz8dPCYPqYCt381mRaJB4ePEX71kLwrXIP3zxdj6t92/TD6tkpBQHmVcPYAU/eLf/UdO13fTsA8pHVl559OwtVqzNK5N6J5xdv+kBouv6dhWD/fpyK8J6aQ/rb3i9EelO9YfOFNFWa731pzXS8fPPevldQSR/IP0vdMXO/pcomjZsAgmua9/8UVcRcLXOT8jVFJs97teXVUupM/KwIFNfAxfbSWv4UMkVd+UEVlEk5aPesscDpkJNR5+iBuPVqTDnq1e4C1zFP5+nU+M7a2azsihp9zoPBYDAYDAaU/AP9hCpvEnJv1QAAAABJRU5ErkJggg=="
        }
        alt="user's dp"
        width={48}
        height={48}
        onClick={() => setIsVisible(true)}
      />
      {isVisible && (
        <div className={classes["responsive-dropdown"]}>
          <Backdrop opacity="transparent" hideBackdrop={toggleVisibility} />
          <ul className={classes["responsive-topnav"]}>
            <li className={classes["link"]}>
              <Link href="/profile/favourite-images">Favorites</Link>
            </li>
            <li className={classes["link"]}>
              <Link href="/account">Account Settings</Link>
            </li>
            <li className={classes["link"]} onClick={logoutUser}>
              <Link href="#">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;

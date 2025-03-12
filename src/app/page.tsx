import Image from "next/image";
import "./style.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <nav className="">Pokedex</nav>
        <div className="card">
          <Image src="/images.png" alt="alt" width={400} height={400} />
          <div className="contents">
            <h1>Catch Em All!</h1>
            <p>Explore with Our Interactive Pokedex</p>
            <button>View Pokedex</button>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-zinc-800 px-10 container mx-auto rounded-b-lg">
        <ul className="mx-5 p-3 flex justify-around">
          <li className="font-semibold hover:font-extrabold p-3">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="font-semibold hover:font-extrabold p-3">
            <Link href={`/users`}>Users</Link>
          </li>
          <li className="font-semibold hover:font-extrabold p-3">
            <Link href={`/users/get-user`}>Search User</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

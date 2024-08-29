"use client";

import { increment, decrement } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function HomePage() {
  //                                       All  Slice  Variable
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClickIncrement = () => {
    dispatch(increment());
  };

  const handleClickDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h2 className="text-5xl font-extrabold text-center my-10">
        Count: {count}
      </h2>

      <div className="container mx-auto">
        <div className="w-full max-w-sm mx-auto">
          <button
            className="bg-emerald-800 p-2 my-2 w-full font-bold hover:bg-emerald-900"
            onClick={handleClickIncrement}
          >
            Increment
          </button>
          <br />
          <button
            className="bg-emerald-800 p-2 my-2 w-full font-bold hover:bg-emerald-900"
            onClick={handleClickDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

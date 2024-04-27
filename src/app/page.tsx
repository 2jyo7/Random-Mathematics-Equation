import QueGen from "@/component/queGen ";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center m-20 p-4 w-[42rem]
    bg-[url('https://media.istockphoto.com/id/1061654986/photo/white-multiply-symbol.webp?b=1&s=170667a&w=0&k=20&c=o9xLYZMjzbDphFqBco-XK3FJVXb62X0ru8TVFDooQfs=')]">
   <QueGen />
    </div>
  );
}

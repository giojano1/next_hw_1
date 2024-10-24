import GetInTouch from "@/components/getintouch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className=" w-fit mx-auto mt-10">
        <GetInTouch />
      </div>
    </>
  );
}

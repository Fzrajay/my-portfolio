export default function Glow() {
  return (
    <>
      <div
        className="
          absolute
          -top-56
          -left-56
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-500/20
          blur-[150px]
        "
      />
    </>
  );
}

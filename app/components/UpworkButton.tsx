import Image from "next/image";

const UPWORK_URL =
  "https://www.upwork.com/freelancers/shihabiiuc?mp_source=share";

export default function UpworkButton() {
  return (
    <a
      href={UPWORK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-20 flex items-center gap-2.5 rounded-full border border-line bg-card py-2 pl-2 pr-4 shadow-[0_18px_40px_-20px_rgba(27,36,48,0.45)] transition-all duration-200 hover:-translate-y-1 hover:border-navy"
    >
      <Image
        src="/headshot-sm.png"
        alt="Shihabiiuc"
        width={36}
        height={36}
        className="h-9 w-9 rounded-full object-cover"
      />
      <span className="font-label text-xs font-medium uppercase tracking-[0.1em] text-navy transition-colors group-hover:text-brass">
        Upwork Profile
      </span>
    </a>
  );
}

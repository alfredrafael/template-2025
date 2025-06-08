import CloseBtn from "./icons/CloseBtn";

export default function Modal({ open, onClose, children, title }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center z-50 transition-colors
        ${open ? "visible bg-black/40" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative bg-white rounded-xl shadow-2xl border border-slate-200
          p-6 md:p-8 transition-all w-full mx-3 md:mx-0 md:max-w-2xl
          ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}
        `}
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 6px 0 rgba(60, 60, 60, 0.08)",
        }}
      >
        <div className="flex justify-between mb-2 mt-0.5">
          <div className="font-serif text-lg text-slate-900 -mt-3 md:-mt-6">
            {title}
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 min-h-5 min-w-5 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition"
            aria-label="Close"
          >
            <CloseBtn className="cursor-pointer min-h-5 min-w-5" />
          </button>
        </div>
        <hr className="border-slate-200 mb-3" />

        <div className="text-slate-700">{children}</div>
      </div>
    </div>
  );
}

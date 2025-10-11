// components/sub/ProjectCard.tsx
<div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
{images.map((img, i) => (
<img
key={img + i}
src={img}
alt={`${title} screenshot ${i + 1}`}
className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
i === index ? "translate-x-0" : i < index ? "-translate-x-full" : "translate-x-full"
}`}
draggable={false}
/>
))}


{hasMultiple && (
<>
{/* Controls */}
<button
aria-label="Previous image"
onClick={prev}
className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-black/40 p-2 backdrop-blur-sm hover:bg-black/60"
>
<ChevronLeft className="h-4 w-4" />
</button>
<button
aria-label="Next image"
onClick={next}
className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-black/40 p-2 backdrop-blur-sm hover:bg-black/60"
>
<ChevronRight className="h-4 w-4" />
</button>


{/* Dots */}
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
{images.map((_, i) => (
<button
key={i}
onClick={() => setIndex(i)}
aria-label={`Go to image ${i + 1}`}
className={`h-1.5 w-4 rounded-full transition-all ${
i === index ? "bg-white/90" : "bg-white/40 hover:bg-white/60"
}`}
/>
))}
</div>
</>
)}
</div>


{/* Text */}
<div className="p-5">
<h3 className="text-xl font-semibold text-white">{title}</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
</div>
</div>
);
}

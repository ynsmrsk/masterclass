export default function VideoPlayer({
  videoRef,
  isPlaying,
  setIsPlaying,
  videoProgress,
  handleTimeUpdate,
  handleVideoEnd,
  isControlsVisible,
  onClose
}) {
  return (
    <>
      <video
        ref={videoRef}
        src="/film/film.mp4"
        poster="/film/film-poster.avif"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        onClick={() => {
          if (isPlaying) videoRef.current.pause()
          else videoRef.current.play()
          setIsPlaying(!isPlaying)
        }}
      />
      <div
        className={`absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white transition-opacity duration-300 ${isControlsVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <button
          onClick={() => {
            if (isPlaying) {
              videoRef.current.pause()
            } else {
              videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
          }}
          className="p-2 hover:bg-white/10 rounded-full"
        >
          {isPlaying
            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            : <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          }
        </button>
        <div
          className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const x = e.clientX - rect.left
            const percentage = (x / rect.width) * 100
            const time = (percentage / 100) * videoRef.current.duration
            videoRef.current.currentTime = time
          }}
        >
          <div
            className="h-full bg-white"
            style={{ width: `${videoProgress}%` }}
          />
        </div>
      </div>
      <button
        className="absolute top-6 right-6 z-50 text-white tracking-wider font-medium flex gap-2 items-center drop-shadow-lg"
        onClick={onClose}>
        <span>Kapat</span>
        <span className="text-sm flex items-center gap-1">[ <span className="text-xs">X</span> ]</span>
      </button>
    </>
  )
}

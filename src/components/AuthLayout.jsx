export default function AuthLayout({ children, tall = false }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-off-white p-5">
      <div
        className={`flex w-full max-w-[670px] flex-col items-center rounded-card p-[50px] ${tall ? 'min-h-[700px]' : ''}`}
      >
        {children}
      </div>
    </div>
  )
}

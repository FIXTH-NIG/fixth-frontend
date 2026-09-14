export default function Button({ variant = 'primary', className = '', ...props }) {
  const base =
    'flex-1 rounded-control px-5 py-4 font-medium text-[13px] tracking-[-0.52px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-primary-blue text-off-white hover:bg-[#0c2bb0]',
    secondary: 'bg-light-ash text-black hover:bg-[#d6d6d6]',
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}

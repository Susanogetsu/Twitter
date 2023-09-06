import { AuthButtonServer } from '../components/auth-button-server'

export default function LoginPage() {
    return (
        <div className='flex flex-col h-screen justify-center items-center gap-4'>
            <h1 className='flex gap-2'>Inicia sesión en Twitter
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler cursor-pointer icon-tabler-brand-twitter hover:text-[#60a5fa] " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                </svg>
            </h1>
            <AuthButtonServer />
        </div>
    )
}

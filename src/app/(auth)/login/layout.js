import dynamic from 'next/dynamic'

export const metadata = {
    title: 'Đăng nhập'
}
// const Login = dynamic(() => import('./page'), {
//     loading: () => <p>Loading...</p>
// })
export default function DashboardLayout({ children }) {
    return <section>{children}</section>
}

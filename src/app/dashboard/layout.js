import Navbar from "@/components/Navbar"
export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
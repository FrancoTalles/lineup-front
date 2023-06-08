export default function MainContainer({ children }) {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-MainBlue">
            <div className="w-full space-y-8">
                {children}
            </div>
        </div>
    )
}
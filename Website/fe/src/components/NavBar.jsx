export const NavBar = () => {
    return (
        <div className="h-20 flex justify-between items-center px-50">
            <div>
                <img src="src/assets/icon.png" alt="" className="w-16 h-12" />
            </div>
            <div className="flex gap-3">
                <div className="text-right">
                    <h2 className="text-[#989898] text-sm italic">Handicrafted by</h2>
                    <h2 className="text-sm">Jim HLS</h2>
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src="src/assets/avatar.jpg" alt="hello" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
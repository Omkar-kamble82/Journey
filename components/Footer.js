export default function Footer() {
    return(
        <div className="bg-[#242324] min-h-[200px] py-10 px-6 lg:py-14 lg:px-20 flex flex-wrap flex-col justify-between lg:items-center lg:flex-row">
            <div className="max-w-[450px] mr-8">
            <a href="#"><img className=" z-20 h-[60px]" src="/travel_icon.png" alt="icon"/></a>
                <p className="text-[#F4F8EB] text-sm my-6">Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.</p>
                <p className="text-[#F4F8EB] text-xl font-bold">© Journey All Rights Reserved.</p>
            </div>
            <div className="my-16">
                <h1 className="text-3xl font-bold text-[#40E0D0] pb-8">Links</h1>
                <a href="#aboutus"><li className="text-xl text-[#F4F8EB] font-medium cursor-pointer hover:text-[#ebebeb] hover:duration-700">About Us</li></a>
                <a href="#packages"><li className="text-xl text-[#F4F8EB] my-3 font-medium cursor-pointer hover:text-[#ebebeb] hover:duration-700">Packages</li></a>
                <a href="#offer"><li className="text-xl text-[#F4F8EB] font-medium cursor-pointer hover:text-[#ebebeb] hover:duration-700">Services</li></a>
            </div>
            <div className="flex flex-col text-[#F4F8EB]">
                <h1 className="text-3xl font-bold pb-14 text-[#40E0D0]">Contact Us</h1>
                <h2 className="mb-4">Tempus metus mattis risus volutpat egestas.</h2>
                <h2>(333)-425-6825</h2>
            </div>
        </div>
    )
}
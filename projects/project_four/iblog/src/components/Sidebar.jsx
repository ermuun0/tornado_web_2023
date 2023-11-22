const Sidebar = () =>{
    return(
        <div className="">
            <h2 className="text-amber-500 text-3xl font-normal font-['Okta Neue'] flex items-center"><img src="img/Group.jpg" alt="" className="w-5 h-[26.70px]"/>iblog</h2>
            <h3 className="text-black text-opacity-20 text-sm font-semibold font-['Inter'] mt-[45]">Lifestyle</h3>
            <ul className="list-none" >
                <li className="text-black text-opacity-20 text-sm font-normal font-['Inter'] leading-[21px]">Hobby</li>
                <li className="text-black text-opacity-20 text-sm font-normal font-['Inter'] leading-[21px]">Travel</li>
                <li className="text-black text-opacity-20 text-sm font-normal font-['Inter'] leading-[21px]">Food&Beverage</li>
                <li className="text-black text-opacity-20 text-sm font-normal font-['Inter'] leading-[21px]">Home and decor
                </li>
            </ul>

        </div>
    )
}
export default Sidebar;
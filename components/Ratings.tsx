import Link from "next/link";
import Image from "next/image";
import { Rounded } from "@/components";
import { brand01, brand02, brand03 } from "@/public";

export default function Ratings() {
	return (
		<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
			<div className="w-[49.5%] sm:w-full xm:w-full justify-between h-[60vh] sm:h-[50vh] xm:h-[50vh] gap-[10px]">
				<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-marquee relative">
					<Image
						src={brand01}
						alt="brandImg"
						width={150}
						height={150}
					/>
					<div className="absolute bottom-[35px] left-[25px] flex items-center justify-center border border-about px-[12px] py-[8px] cursor-pointer rounded-full">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] text-about uppercase font-normal font-Formiga tracking-wider"
							href={"/"}>
							Balloora Gorup
						</Link>
					</div>
				</div>
			</div>
			<div className="w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col flex gap-[15px]">
				<div className="w-full flex items-center justify-center rounded-[10px] bg-[#ABFC00]/20 relative h-[60vh] sm:h-[50vh] xm:h-[50vh]">
					<Image
						src={brand02}
						alt="brandImg"
						width={150}
						height={150}
					/>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-Formiga text-white uppercase tracking-wider"
							href="https://supermarkoo.com">
							<Rounded
								backgroundColor="#fff"
								className="">
								<p className="z-10 px-[12px] py-[8px] hover:text-black">
									Power of AI Agents
								</p>
							</Rounded>
						</Link>
					</div>
				</div>
				<div className="w-full flex items-center justify-center rounded-[10px] bg-[#6CC571]/20 relative h-[60vh] sm:h-[50vh] xm:h-[50vh]">
					<Image
						src={brand03}
						alt="brandImg"
						width={150}
						height={150}
					/>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-Formiga text-white uppercase tracking-wider"
							href="https://coddly.com">
							<Rounded
								backgroundColor="#fff"
								className="">
								<p className="z-10 px-[12px] py-[8px] hover:text-black">
									Coding Platform
								</p>
							</Rounded>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

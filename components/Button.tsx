import Link from "next/link";
import { TButtonProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

export default function Button({ href, title, showArrow = true }: TButtonProps) {
	return (
		<div className="flex flex-col pb-[10px] w-fit">
			<div className="flex items-center gap-[5px] group">
				<div className="rounded-[50px] border border-secondry group-hover:bg-[#AEEC7A] group-hover:border-[#AEEC7A] py-[3px] px-[12px] cursor-pointer">
					<Link
						className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-[#102E2A] transition-all duration-300 ease-in-out"
						href={href}>
						{title}
					</Link>
				</div>
				{showArrow && (
					<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#AEEC7A] rounded-[50px] group-hover:bg-[#AEEC7A] transition-all duration-200 ease-in-out cursor-pointer scale-0 group-hover:scale-100 sm:hidden xm:hidden">
						<p className="small-text font-normal text-secondry group-hover:text-[#102E2A]">
							<ArrowUpRight
								strokeWidth={1.25}
								size={24}
							/>
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

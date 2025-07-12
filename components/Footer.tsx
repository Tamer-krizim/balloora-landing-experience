import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	const phrase = ["Eye-", "opening"];
	const phrase1 = ["PRESENTATIONS"];
	return (
		<footer className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-between sm:flex-col xm:flex-col">
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h1 className="text-[90px] leading-[115px] lg:text-[70px] lg:leading-[98px] md:text-[75px] md:leading-[75px] sm:text-[44px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-Formiga text-secondry uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h1 className="text-[90px] leading-[115px] lg:text-[70px] lg:leading-[98px] md:text-[40px] md:leading-[75px] sm:text-[44px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-Formiga text-secondry uppercase">
							<TextMask>{phrase1}</TextMask>
						</h1>
						<div className="pt-[50px]">
							<h1 className="paragraph font-normal font-Formiga text-secondry pb-[20px]">
								S:
							</h1>
							{footerItems.map((item) => (
								<LinkHover
									title={item.title}
									href={item.href}
									key={item.id}
									className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
								/>
							))}
						</div>
						<div className="flex justify-between">
							<div className="pt-[50px]">
								<h1 className="paragraph font-normal font-Formiga text-secondry pb-[20px]">
									L:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`Saudi Arabia, Riyadh`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`Egypt, Cairo`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`Jordan, Amman`}
										href="/"
									/>
								</div>
							</div>
							<div className="pt-[50px]">
								<h1 className="paragraph font-normal font-Formiga text-secondry pb-[20px]">
									M:
								</h1>
								{footernavbarItems.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
									/>
								))}
							</div>
						</div>
						<div className="pt-[50px] flex gap-x-[20px]">
							<h1 className="paragraph font-normal font-Formiga text-secondry">
								E:
							</h1>
							<LinkHover
								title="info@balloora.com"
								href="/"
								className="before:h-[1px] after:h-[1px] paragraph font-medium before:bottom-[-3px] after:bottom-[-3px]"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full pt-[40px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Link href={"/"}>
						<Image
							src={logo}
							alt="Balloora Co. logo"
							width={70}
							height={70}
						/>
					</Link>
				</div>
				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<h1 className="paragraph font-light font-Formiga text-secondry opacity-40">
							© Balloora Co. {new Date().getFullYear()}.
						</h1>
					</div>
				</div>
			</div>
		</footer>
	);
}

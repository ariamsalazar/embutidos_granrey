interface InputProps {
	label: string;
	className: string;
	textArea?: boolean;
}

function InputComponent(props: InputProps): JSX.Element {
	const { label, className, textArea } = props;

	return (
		<>
			<label
				className={`${className} text-[14px] md:text-[12px] font-bold mt-4 block`}
			>
				{label}
			</label>
			{!(textArea ?? false) ? (
				<>
					<input
						className={`${className} border-b-2	border-b-black outline-0 font-light text-[15px] md:text-[13px] w-full pb-1 bg-trans`}
					/>
				</>
			) : (
				<>
					<textarea
						className={`${className} bg-trans border-b-2	border-b-black outline-0 font-light text-[15px] md:text-[13px] w-full h-[100px]`}
					></textarea>
				</>
			)}
		</>
	);
}

export default InputComponent;

import React from 'react';
import styled from 'styled-components';
import s from 'csd';
import SubtitleComponent from '../common/subtitle';
import TitleComponent from '../common/title';

import {
	CategoryOne,
	CategorySecond,
	CategoryThird,
	CategoryFourth,
} from './products_items';

const StyledTab = styled.li`
	flex: 1;
	height: 100%;
	font-size: 13px;
	button {
		cursor: pointer;
		transition: color 0.3s;
		color: ${(props: { isFocused: boolean }) =>
			props.isFocused ? '#A10010' : '#000'};
		border-bottom: ${(props: { isFocused: boolean }) =>
			props.isFocused ? '2px solid #A10010' : '2px solid black'};
		width: 100%;
		height: 100%;
		padding-bottom: 6px;
		font-weigth: bold;
	}
`;

const Tab = ({ title, onClick, isFocused }: any): JSX.Element => {
	return (
		<StyledTab onClick={onClick} isFocused={isFocused}>
			<button>{title}</button>
		</StyledTab>
	);
};

const StyledTabs = styled.div`
	position: relative;
	list-style: none;
	height: 30px;
	${s.row}
`;

const Tabs = ({ focusedIdx, children, onChange, duration = 300 }: any): any => {
	return (
		<StyledTabs>
			{React.Children.map(children, (child, i) =>
				React.cloneElement(child, {
					key: i,
					isFocused: focusedIdx === i,
					onClick: () => {
						onChange(i);
					},
				})
			)}
		</StyledTabs>
	);
};
const StyledOuterSliders = styled.div`
	overflow: hidden;
`;

const StyledSliders = styled.div`
	display: flex;
	flex-wrap: no-wrap;
	width: 100%;

	transform: translateX(${(props: any) => `${props.offset}%`});
	transition: transform ${(props: any) => props.duration}ms;

	div {
		flex-shrink: 0;
		width: 100%;
	}
`;

const Sliders = ({ focusedIdx, children, duration = 300 }: any): any => {
	const offset = -100 * focusedIdx;

	return (
		<StyledOuterSliders>
			<StyledSliders offset={offset} duration={duration}>
				{children}
			</StyledSliders>
		</StyledOuterSliders>
	);
};

export default function CarouselProduct(): JSX.Element {
	const [focusedIdx, setFocusedIdx] = React.useState(0);

	return (
		<>
			<div className='App md:flex w-full md:items-end mb-5 md:justify-between'>
				<div className='w-full md:w-[40%] p-4 md:p-0'>
					<SubtitleComponent titleText='Products' color='black' />
					<TitleComponent
						titleText='CÁTALOGO NUEVO DE PRODUCTOS'
						classNameText='text-red-dark text-[48px] md:text-[54px] mt-4'
					/>
				</div>
				<div className='w-[90%] ml-[5%] md:ml-0 md:w-[50%] lg:w-[40%]'>
					<Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
						<Tab title='Categoria 1' />
						<Tab title='Categoria 2' />
						<Tab title='Categoria 3' />
						<Tab title='Categoria 4' />
					</Tabs>
				</div>
			</div>
			<Sliders focusedIdx={focusedIdx}>
				<CategoryOne />
				<CategorySecond />
				<CategoryThird />
				<CategoryFourth />
			</Sliders>
		</>
	);
}

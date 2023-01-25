/* eslint-disable react/jsx-key */
import React from 'react';
import styled from 'styled-components';
import s from 'csd';
import CarouselHistoryItems from './carousel_history_items';
import { dates } from '../../components/data/history';

const StyledTab = styled.li`
	flex: 1;
	height: 100%;
	font-size: 13px;
	button {
		cursor: pointer;
		transition: color 0.3s;
		color: ${(props: { isFocused: boolean }) =>
			props.isFocused ? '#D50000' : '#000'};
		border-bottom: ${(props: { isFocused: boolean }) =>
			props.isFocused ? '2px solid black' : '2px solid #d50000'};
		width: 100%;
		height: 100%;
		padding-bottom: 10px;
		font-weight: ${(props: { isFocused: boolean }) =>
			props.isFocused ? 'bold' : 'normal'};
	}
`;

const Tab = ({ title, date, onClick, isFocused }: any): JSX.Element => {
	return (
		<StyledTab onClick={onClick} isFocused={isFocused} className='button-c'>
			<h1 className='w-full text-red text-center block font-bold text-[14px] my-0'>
				{date}
			</h1>
			<button className='font-[15px] !font-light text-center'>
				{title}
			</button>
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

export default function CarouselHistory(): JSX.Element {
	const [focusedIdx, setFocusedIdx] = React.useState(0);

	return (
		<div className='App'>
			<div className='w-[100%]'>
				<Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
					{dates?.map(date => {
						return <Tab title={date.event} date={date.date} />;
					})}
				</Tabs>
			</div>
			<Sliders focusedIdx={focusedIdx}>
				{dates?.map(date => {
					return (
						<CarouselHistoryItems
							description={date.description}
							image={date.image}
						/>
					);
				})}
			</Sliders>
		</div>
	);
}

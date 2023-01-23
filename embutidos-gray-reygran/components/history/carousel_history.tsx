import React from 'react';
import styled from 'styled-components';
import s from 'csd';
import CarouselHistoryItems from './carousel_history_items';

const StyledTabIndicator = styled.div`
	position: absolute;
	width: ${props => 100 / props.tabCount}%;
	top: 100%;
	left: 0;

	transform: translate(${props => props.offset}, -100%);

	transition: transform ${props => props.duration}ms;

	border-top-style: solid;
	border-top-width: 1px;
`;

const StyledTab = styled.li`
	flex: 1;
	height: 100%;
	font-size: 13px;
	button {
		cursor: pointer;
		transition: color 0.3s;
		color: ${(props: { isFocused: boolean }) =>
			props.isFocused ? '#000' : '#777'};
		border-bottom: ${(props: { isFocused: boolean }) =>
			props.isFocused ? '2px solid black' : '2px solid red'};
		width: 100%;
		height: 100%;
		padding-bottom: 6px;
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
			<StyledTabIndicator
				duration={duration}
				tabCount={children.length}
				offset={`${100 * focusedIdx}%`}
			/>
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
			<div className='w-[60%]'>
				<Tabs focusedIdx={focusedIdx} onChange={setFocusedIdx}>
					<Tab title='History 1' />
					<Tab title='History 2' />
					<Tab title='History 3' />
					<Tab title='History 4' />
					<Tab title='History 5' />
				</Tabs>
			</div>
			<Sliders focusedIdx={focusedIdx}>
				<CarouselHistoryItems date='' textHistory='1' photoHistory='' />
				<CarouselHistoryItems date='' textHistory='2' photoHistory='' />
				<CarouselHistoryItems date='' textHistory='3' photoHistory='' />
				<CarouselHistoryItems date='' textHistory='4' photoHistory='' />
				<CarouselHistoryItems date='' textHistory='5' photoHistory='' />
			</Sliders>
		</div>
	);
}

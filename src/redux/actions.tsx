// type safety for actions
export type Action = {
	type: 'INCREMENT_COUNTER',
	incCounter: number
} 
	|
{
	type: 'DECREMENT_COUNTER',
	decCounter: number
} 
    |
{
    type: 'RESET_COUNTER'
}

// define actions
export const decrementCounter = (decCounter: number): Action => ({
	type: 'DECREMENT_COUNTER',
	decCounter
})

export const incrementCounter = (incCounter: number): Action => ({
	type: 'INCREMENT_COUNTER',
	incCounter
})

export const resetCounter = (): Action => ({
	type: 'RESET_COUNTER'
})
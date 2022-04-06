import { createSlice } from '@reduxjs/toolkit'

export const rawData = createSlice({
	name: 'rawData',
	initialState: {
		data: [],
		loading: false,
	},
	reducers: {
		setRawData: state => {
			state.dark = !state.dark
		},
		setLanguage: (state, action) => {
			state.language = action.payload
		}
	}
})

export const { setDarkMode, setLanguage } = site.actions

export default site.reducer
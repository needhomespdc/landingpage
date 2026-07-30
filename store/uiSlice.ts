import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isMobileMenuOpen: boolean;
  activeFAQIndex: number | null;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  activeFAQIndex: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => { state.isMobileMenuOpen = !state.isMobileMenuOpen; },
    closeMobileMenu:  (state) => { state.isMobileMenuOpen = false; },
    setActiveFAQ:     (state, action: PayloadAction<number | null>) => { state.activeFAQIndex = action.payload; },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setActiveFAQ } = uiSlice.actions;
export default uiSlice.reducer;

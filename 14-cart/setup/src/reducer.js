const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    }
  }

  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return {
      ...state,
      cart: tempCart,
    }
  }

  if (action.type === 'DECREASE') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)

    return {
      ...state,
      cart: tempCart,
    }
  }

  // dont understand fully this
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount
        cartTotal.total += itemTotal
        cartTotal.amount += amount

        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )

    total = parseFloat(total.toFixed(2))

    return {
      ...state,
      total,
      amount,
    }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload }
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...item, amount: item.amount + 1 }
          } else if (action.payload.type === 'dec') {
            return { ...item, amount: item.amount - 1 }
          }
        }

        return item
      })
      .filter((item) => item.amount !== 0)

    return { ...state, cart: tempCart }
  }

  throw new Error('No matching action type')
}

export default reducer

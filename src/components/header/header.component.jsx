import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartToggle } from '../../redux/cart/cart.selectors'

import './header.style.scss'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, cartToggle }) => {
  return (
    <div className='header'>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()} to='/signin'>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartToggle ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  cartToggle: selectCartToggle(state)
})

export default connect(mapStateToProps)(Header)

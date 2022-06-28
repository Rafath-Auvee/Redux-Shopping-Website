import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((a) => a.cart);
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>redux Shop</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
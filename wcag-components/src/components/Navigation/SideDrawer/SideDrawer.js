// import React from 'react';
// import styles from './SideDrawer.module.css';

// import Backdrop from '../../UI/Backdrop/Backdrop';
// import Aux from '../../../hoc/Aux/Aux';

// import NavigationItems from '../NavigationItems/NavigationItems';

// const sideDrawer = props => {

//   let attachedStyles = [styles.SideDrawer, styles.Close];

//   if (props.open) {
//     attachedStyles = [styles.SideDrawer, styles.Open];
//   }

//   return (
//     <Aux>
//     <Backdrop show={props.open} clicked={props.closed} />
//       <div className={attachedStyles.join(' ')} onClick={props.closed}>
//         <div className={styles.Menu}>
//             <p>Menu</p>
//         </div>
//         <nav>
//           <NavigationItems />
//         </nav>
//       </div>
//     </Aux>
//   )
// }

// export default sideDrawer;
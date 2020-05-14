import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

import classes from './SideDrawer.css';

const sideDrawer = props => {

    let attachedClasses = [classes.SideDrawer];

    if(props.showState){   
        attachedClasses = [classes.SideDrawer, classes.Open];
    }    
    else{
        attachedClasses = [classes.SideDrawer, classes.Close];
    }

    return(
        <Auxiliary>
            <Backdrop show = {props.showState} cancel = {props.sideDrawerClosed} />
            <div className = {attachedClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>    
        </Auxiliary>
    );
}

export default sideDrawer;
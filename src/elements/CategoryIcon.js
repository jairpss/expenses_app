import React from 'react'
import {ReactComponent as FoodIcon} from './../images/cat_comida.svg';
import {ReactComponent as ShoppingIcon} from './../images/cat_compras.svg';
import {ReactComponent as BillsIcon} from './../images/cat_cuentas-y-pagos.svg';
import {ReactComponent as FunIcon} from './../images/cat_diversion.svg';
import {ReactComponent as HomeIcon} from './../images/cat_hogar.svg';
import {ReactComponent as ClothingIcon} from './../images/cat_ropa.svg';
import {ReactComponent as HealthIcon} from './../images/cat_salud-e-higiene.svg';
import {ReactComponent as TransportIcon} from './../images/cat_transporte.svg';

const CategoryIcon = ({id}) => {
    switch (id){
        case 'food':
            return <FoodIcon />;
        case 'shopping':
            return <ShoppingIcon />;
        case 'bills':
            return <BillsIcon />;
        case 'fun':
            return <FunIcon />;
        case 'home':
            return <HomeIcon />;
        case 'clothing':
            return <ClothingIcon />;
        case 'health':
            return <HealthIcon />;
        case 'transport':
            return <TransportIcon />;
        default:
            return <></>;
        break;
    }
}
 
export default CategoryIcon;
import {Link } from 'react-router-dom'
import bir from '../../assets/img/aga.jpg'
import iki from '../../assets/img/f.jpg'
import uc from '../../assets/img/g.jpg'
import dord from '../../assets/img/l.jpg'
import bes from '../../assets/img/r.jpg'

const data1 = {
    blog:[
        {
            id:1,
             img: bir,
            // desc1:"SEASONAL",
            // desc2: "SWEETS",
            title: 	'detective genre',
            time:  'November 6,  1939',
            link: <Link to="/blogs/1" className='link'>READ MORE</Link>,
            text: 'Agatha Christie named this book "Ten Little Negroes"but...'
        },
        {
            id:2,
             img: iki,
            // desc1:"DISHES",
            // desc2: "OCCASIONS",
            title: 'Animal and human',
            time: 'June 1, 2011',
            link: <Link to="/blogs/2" className='link'>READ MORE</Link>,
            text: 'Amazing True Stories of Angelic Animals Paperback...'
        },
        {
            id:3,
             img: uc,
            // desc1:"SEASONAL",
            // desc2: "SWEETS",
            title: 'Magic book',
            time: 'November 7, 2017',
            link: <Link to="/blogs/3" className='link'>READ MORE</Link>,
            text: 'A Collection of YA Fantasy and Paranormal Romances...'
        },
        {
            id:4,
             img: dord,
            // desc1:"DISHES",
            // desc2: " SEASONAL SWEETS",
            title: 'Action book',
            time: '2008',
            link: <Link to="/blogs/4" className='link'>READ MORE</Link>,
            text: "The Hunger Games is a series of young adult dystopian novels written by American author Suzanne Collins..."
        },
        {
            id:5,
             img: bes,
            // desc1:"SEASONAL",
            // desc2: "SWEETS",
            title: 'Fantastic book',
            time: 'July 17, 2012',
            link: <Link to="/blogs/5" className='link'>READ MORE</Link>,
            text: 'The Land of Stories is a series of childrens fiction, adventure and fantasy books written by American author,...'
        },

    ],


};
export default data1;
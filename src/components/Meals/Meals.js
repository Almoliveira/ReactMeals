import React, {Fragment} from 'react';
import AvaialableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
    return <Fragment>
        <MealsSummary />
        <AvaialableMeals />
    </Fragment>
}

export default Meals;
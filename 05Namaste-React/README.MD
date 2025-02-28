// React.createElement=> ReactElement-JS Object =>HTMLELement(rendering ke baad)

// JSX(transpiled before it reaches to JS Engine)- PARCEL =>use package- Babel(takes js into browser understand js)

// JSX => Babel transpiles it to => React.createElement => ReactElement-JS Object =<HTMLElement(after rendering)

/**
 * Header
 * -Logo
 * -NavItems
 * Body
 * -Search
 * -RestaurantContainer
 *    -RestarauntCard
 *      -Img
 *      -NameOfRestaurant,cuisines,delivery time
 *
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 *
 */


Two types of Export/Import

-Default Export/Import
    export default Component;
    import Component from "path";

-Names Export/Import
    export const Component;
    import {Component} from "path";

#React Hooks
(Normal JS utility Functions)
-useState() -> SuperPowerful State variables in react
-useEffect()
*Import as like names imports => (import {useState} from "react")


#Routing in Web Apps
1.Client Side Routing
2.Server Side Routing
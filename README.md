# Awesome Sweepstakes

## Overview

This branch intorduces the following functionality:
- A utility function to return a unique alphanumeric tracking ID to the Regisration component. 
-  A new OrderStatus component to display submission status based on the passed props.
- Defined propTypes for props passed to Order Status.
- Refactored OrderStatusLookup component to render the new OrderStatus component in the conditional statement.
- Using a spread operator to pass the order status object from OrderStatusLookup to OrderSatus.
- Refactored how the form's validity state is updated on change to enable or disable the `Submit` button.



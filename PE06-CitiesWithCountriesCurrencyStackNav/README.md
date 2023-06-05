This is a basic React Native application that utilizes React Navigation to create a bottom tab navigation with four screens: "CitiesNav," "AddCity," "CountriesNav," and "AddCountry." The app also incorporates stack navigation for the "CitiesNav" and "CountriesNav" screens. Each screen is associated with a component and configured with initial parameters.

Here are the steps to achieve this:

Create instances of createBottomTabNavigator and createNativeStackNavigator using Tab and Stack variables, respectively.

Define a functional component CitiesStackScreen that represents the stack-based navigation for the cities and countries section. It uses createNativeStackNavigator and configures the header style and color.

Initialize the component state with empty cities and countries arrays.

Define functions like addCity, addCountry, addLocation, and addCurrency to update the component state with new data.

Wrap the entire app with NavigationContainer to enable navigation functionality.

Configure the Tab.Navigator component, which represents the bottom tab navigation.

Configure individual tab screens using Tab.Screen. Each screen is associated with a specific name and component to render. Additionally, you can pass initial parameters using the initialParams prop. For example, the cities and addCity parameters are passed to the "CitiesNav" and "AddCity" screens, while countries and addCountry parameters are passed to the "CountriesNav" and "AddCountry" screens.

The app's functionality relies on the initial state, empty cities and countries arrays, inside the App component. The addCity and addCountry methods update the state by adding new cities or countries, respectively. The render method returns the main structure of the app, with the Tab.Navigator wrapped within NavigationContainer to provide navigation functionality. Each Tab.Screen represents a screen in the bottom tab navigation, with specified names and associated components. The initialParams prop is used to pass initial parameters to the screen components, such as cities and addCity to the "CitiesNav" and "AddCity" screens, and countries and addCountry to the "CountriesNav" and "AddCountry" screens.

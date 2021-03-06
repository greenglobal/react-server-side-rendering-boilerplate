import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class MasterLayout extends React.Component {

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className="wrapper-container">
        <Header/>
        <main className="main-container">
          {childrenWithProps}
        </main>
        <Footer/>
      </div>
    );
  }
}

export default MasterLayout;

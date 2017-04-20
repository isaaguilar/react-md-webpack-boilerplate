import React from "react"
import Button from "react-md/lib/Buttons"
import Toolbar from "react-md/lib/Toolbars"

const nav = <Button key="nav" icon>menu</Button>

export default class App extends React.Component {
  render() {
    const actions = [<Button key="search" icon>search</Button>]

    return (
      <div>
        <Toolbar colored title="Colored" nav={nav} actions={actions} />
        {this.props.children}
      </div>
    )
  }
}

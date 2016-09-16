import React from 'react';
import NodeDocked from 'NodeDocked';

export default class extends React.Component{

  constructor(props) {
    super(props);
    console.log("props", this.props);
  }

  getIsOpen(name) {
    return this.props.node === name;
  }

  render() {
    return (
      <div>
        <NodeDocked name="Kampagner" isOpen={this.getIsOpen('Kampagner')}/>
        <NodeDocked name="Opgaver / Aftaler" isOpen={this.getIsOpen('Opgaver / Aftaler')}/>
        <NodeDocked name="Sagen" isOpen={this.getIsOpen('Sagen')}/>
        <NodeDocked name="Kunder" isOpen={this.getIsOpen('Kunder')}/>
        <NodeDocked name="Butikken" isOpen={this.getIsOpen('Butikken')}/>
        <NodeDocked name="Kæden" isOpen={this.getIsOpen('Kæden')}/>
        <NodeDocked name="Markedspladsen" isOpen={this.getIsOpen('Markedspladsen')}/>
      </div>
    );
  }
}

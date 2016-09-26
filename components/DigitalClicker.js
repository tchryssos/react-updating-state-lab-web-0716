const React=require('react')


class DigitalClicker extends React.Component{
  constructor(props){
    super()
    this.state={
      timesClicked:0
    }
    this.buttonClick=this.buttonClick.bind(this)
  }

  buttonClick(){
    let firstNum=this.state.timesClicked
    let secondNum=firstNum+1
    this.setState(function(previousState, props) {
      return {timesClicked:previousState.timesClicked+1}
    })


  }


  render(){
    return(
      <button type="button" onClick={this.buttonClick}>{this.state.timesClicked}</button>
    )
  }
}


module.exports=DigitalClicker

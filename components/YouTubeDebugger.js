const React=require('react')


class YouTubeDebugger extends React.Component{
  constructor(props){
    super()
    this.state={
      errors:[],
      user:null,
      settings:{
        bitrate:8,
        video:{
          resolution:'1080p'
        }
      }
    }
    this.bitrateChange=this.bitrateChange.bind(this)
    this.resolutionChange=this.resolutionChange.bind(this)
  }

  bitrateChange(){
    this.setState({
      settings: Object.assign({}, this.state.settings,{
        bitrate: 12
      })
    })
  }

  resolutionChange(){
    this.setState({
      settings: {
        video: Object.assign({}, this.state.settings.video,{
          resolution: "720p"
        })
      }
    })
  }

  render(){
    return(
      <div>
        <button class="bitrate" type="button" onClick={this.bitrateChange}>Bitrate!
        </button>

        <button class="resolution" type="button" onClick={this.resolutionChange}>Resolution!
        </button>
      </div>
    )
  }
}


module.exports=YouTubeDebugger

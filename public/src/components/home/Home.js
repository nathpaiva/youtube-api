'use stict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadVideosApi, selectVideo, loadMoreVideosApi } from '../../logics/youtubeApi';

import Highlight from '../highlight/Highlight';
import List from '../list/List';

import baseCss from './base.scss';

class Home extends Component {
  state = {
    totalVideos: 4,
    isFetching: false,
  };

  componentDidUpdate(prevProp, prevStatus) {
    if (prevProp.videos.size !== prevStatus.totalVideos) {
      if (this.state.totalVideos == 50) {
        this.setState({ isFetching: true });
        return;
      }

      this.setState({
        isFetching: false
      });
    }
  }

  componentDidMount() {
    this.props.list({ term: '', maxResults: this.state.totalVideos });
  }

  render() {
    return (
      <div className='container'>
        {this.props.selectedVideo.map(video => {
          return <Highlight key={video.id.videoId} selectedVideo={video} />
        })}
        <List
          titleList='+ Vídeo'
          videos={this.props.videos}
          videoSelect={video => {
            this.props.changeVideo(video);
          }}
          isFetching={this.state.isFetching}
          moreVideos={(e) => {
            let newTotal = this.state.totalVideos + 10;
            newTotal = newTotal > 50 ? 50 : newTotal
            this.setState({ totalVideos: newTotal, isFetching: true });
            this.props.list({ term: '', maxResults: newTotal });
          }}
          classBtn={'list__more'}
          classList='list__container'
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    list: (opt) => {
      dispatch(loadVideosApi(opt));
    },
    changeVideo: (video) => {
      dispatch(selectVideo(video));
    }
  }
}

const mapStateToProps = state => {
  return {
    videos: state.listVideosReducer,
    selectedVideo: state.selectVideoReducer,
  }
}

const HomeRedux = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeRedux;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadVideosApi, selectVideo, loadMoreVideosApi } from '../../logics/youtubeApi';

import Highlight from '../highlight/Highlight';
import List from '../list/List';
import Modal from '../modal/Modal';

import allVideos from './listfull.scss'

class ListFull extends Component {
  state = {
    totalVideos: 20,
    isActive: false,
    isFetching: false,
  };

  checkParameter() {
    let term = '';
    if (!!this.props.match.params.q) {
      term = this.props.match.params.q;
    }
    return term;
  }

  componentDidMount() {
    this.props.list({ term: this.checkParameter(), maxResults: this.state.totalVideos });
  }

  componentWillReceiveProps(props) {
    if (props.match.params.q !== this.props.match.params.q) {
      this.props.list({ term: props.match.params.q, maxResults: this.state.totalVideos });
    }
  }

  render() {
    let titleList = !this.props.match.params.q ? "Todos os vídeos do Canal" : `Resultados para: "${this.props.match.params.q}"`
    return (
      <div className={allVideos.container_allvideos}>
        <div className={allVideos.allvideos}>
          <List
            titleList={titleList}
            videos={this.props.videos}
            videoSelect={video => {
              this.setState({ isActive: true });
              this.props.changeVideo(video);
            }}
            moreVideos={() => {
              let newTotal = this.state.totalVideos + 10;
              newTotal = newTotal > 50 ? 50 : newTotal
              this.setState({ totalVideos: newTotal, isFetching: true });
              this.props.list({ term: '', maxResults: newTotal });
            }}
            classBtn={'list__more'}
            classList='allvideos'
          />
        </div>
        {this.props.selectedVideo.map(video => <Modal key={video.id.videoId} close={() => {
          this.setState({ isActive: false });
        }} isActive={this.state.isActive} selectedVideo={video} />)}
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

const ListFullRedux = connect(mapStateToProps, mapDispatchToProps)(ListFull);

export default ListFullRedux;

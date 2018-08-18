import React, { Component } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LinkedinShareCount,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  EmailIcon,
  EmailShareButton
} from 'react-share';
import styled from 'styled-components';
import urljoin from 'url-join';

import config from '../../../config';

const StyledShareButtons = styled.div`
  margin: 0 auto;
  padding: 1rem;

  h4 {
    font-size: 1.2rem !important;
    text-align: center;
  }

  div.social-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 15px 0;

    > div {
      margin: 5px 15px;
    }

    .share-count {
      text-align: center;
    }
  }
`;

export class BlogShareButtons extends Component {
  render() {
    const { postNode, postPath, mobile, shareImg = false } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.url, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : '');
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    );

    return (
      <StyledShareButtons>
        <h4>Share This Post:</h4>

        <div className="social-links">
          <TwitterShareButton url={url} title={post.title}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>

          {shareImg && (
            <PinterestShareButton
              url={url}
              title={post.title}
              media={urljoin(config.url, shareImg)}
            >
              <PinterestIcon round size={iconSize} />
              <PinterestShareCount url={url}>
                {shareCount => renderShareCount(shareCount)}
              </PinterestShareCount>
            </PinterestShareButton>
          )}

          <FacebookShareButton url={url} quote={postNode.excerpt}>
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {shareCount => renderShareCount(shareCount)}
            </FacebookShareCount>
          </FacebookShareButton>

          <LinkedinShareButton
            url={url}
            title={post.title}
            description={postNode.excerpt}
          >
            <LinkedinIcon round size={iconSize} />
            <LinkedinShareCount url={url}>
              {shareCount => renderShareCount(shareCount)}
            </LinkedinShareCount>
          </LinkedinShareButton>

          <EmailShareButton
            subject="Check Out This Link From StoutLabs.com"
            url={url}
          >
            <EmailIcon round size={iconSize} />
          </EmailShareButton>
        </div>
      </StyledShareButtons>
    );
  }
}

export default BlogShareButtons;

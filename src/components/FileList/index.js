import React from 'react';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://uploadimg3.s3.amazonaws.com/d21e33b5fcd71d9466e8d12fddfc5af8-fastfeet.png" />
        <div>
          <strong>profile.png</strong>
        </div>
      </FileInfo>
    </li>
  </Container>
)

export default FileList;
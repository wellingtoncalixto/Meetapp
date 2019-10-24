import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { Container } from './styles';

import {MdAddAPhoto} from 'react-icons/md'
import api from '~/service/api';

export default function Banner() {
  const ref = useRef();

  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    const response = await api.post('file', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
      {preview && <img src={preview} alt="banner_meetapp" />}

      {!preview && (
        <div className="icon-add">
          <MdAddAPhoto size={60} color="rgba(255, 255, 255, .7)" />
        </div>
      )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

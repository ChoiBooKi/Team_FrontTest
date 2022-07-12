import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const Board = () => {
  const API = '/api/img'
  const API_URL = "/api/img";
  const uploadAdapter = (loader) => {
    return{
      upload : () => {
        return ((resolve, reject) => {//new Promise를 지우니까 제대로 됨
          const body = new FormData()
          loader.file.then((file) => {
            body.append("uploadImg", file)
            axios.post('/api/img', body)
            .then((res) => console.log(res.data))
            .then((res) => resolve({default: `${API_URL}/${res.filename}`}))
            .catch((err) => reject(err))//에러발생함
          })
        })
      }
    }

    // return {
    //   upload: () => {
    //     return new Promise((resolve, reject) => {
    //       const body = new FormData();
    //       loader.file.then((file) => {
    //         body.append("files", file);
    //         fetch(`${API_URL}`, {
    //           method: "post",
    //           body: body
    //         })
    //           .then((res) => res.json())
    //           // .then((res) => {
    //           //   resolve({
    //           //     default: `${API_URL}/${res.filename}`
    //           //   });
    //           // })
    //           .catch((err) => {
    //             reject(err);
    //           });
    //       });
    //     });
    //   }
    // }

  }
  // const uploadPlugin = (editor) => {
  //   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
  //     return uploadAdapter(loader);
  //   }
  // }
  //화살표 함수랑 익명함수랑 같은 내용인데 화살표 함수는 constructor 에러뜸
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return(
    <CKEditor className='editor'
    config={{
      extraPlugins: [uploadPlugin]
    }}
    data="<p>게시글을 작성해주세요</p>"
    editor={ClassicEditor}
    onReady={(editor) => {}}
    onBlur={(event, editor) => {}}
    onFocus={(event, editor) => {}}
    onChange={(event, editor) => {
      const data2 = editor.getData();
      // console.log(data2)
    }}
    />
  )
}
export default Board
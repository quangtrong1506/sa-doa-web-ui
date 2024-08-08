'use client';
import { ChangeEvent, useRef } from 'react';

const TestPage = () => {
   const videoRef = useRef<HTMLVideoElement>(null);
   function previewVideo(input: ChangeEvent<HTMLInputElement>) {
      const file = input.target.files?.[0];
      if (file) {
         const videoUrl = URL.createObjectURL(file);
         console.log(videoUrl);
         videoRef.current?.setAttribute('src', videoUrl);
         //  videoRef.current?.play();
         const uploadUrl = 'https://api.jwplayer.com/v2/sites/QQwadfQ6/media'; // Replace with your actual upload URL

         const siteId = 'QQwadfQ6'; // Replace with your actual site ID
         const v2ApiSecret = 'RcfB8PHOVe3DvrN8rrgFlGInWTBscFUyVjZWelZ2WlhkV2JYVTJUamhHU1dOcE5rMXon'; // Replace with your actual API secret

         const url = 'https://api.jwplayer.com/v2/sites/' + siteId + '/media';
         const headers = {
            Authorization: 'Bearer ' + v2ApiSecret,
            'Content-Type': 'application/json',
         };

         const data = {
            upload: { method: 'multipart' },
            metadata: { title: 'My Multipart Upload Video' },
            video: videoUrl,
         };

         fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
         })
            .then((response) => response.json())
            .then((result) => {
               console.log('Response:', result);
            })
            .catch((error) => {
               console.error('Error:', error);
            });
      }
   }

   return (
      <div>
         <input
            type="file"
            accept="video/*"
            onChange={(e) => {
               previewVideo(e);
            }}
         />
         <video ref={videoRef} id="preview" controls></video>
      </div>
   );
};

export default TestPage;

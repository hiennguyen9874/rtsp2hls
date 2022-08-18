#!/bin/bash

if [ "$SOURCE_URL" != "" ]; then\
    echo "Start!"
    ffmpeg -rtsp_transport tcp \
        -i $SOURCE_URL \
        -fflags flush_packets \
        -max_delay 2 \
        -c:v libx265 -vtag hvc1 \
        -flags -global_header \
        -hls_segment_type fmp4 \
        -hls_time 2 \
        -hls_list_size 3 \
        -hls_flags delete_segments+append_list+split_by_time \
        -hls_playlist_type event \
        -vcodec copy \
        -y /tmp/stream/index.m3u8
else
    echo "Won't restream a source feed to the server because SOURCE_URL was not defined"
fi

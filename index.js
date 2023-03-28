const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');

// MP4ファイルのパス
const inputPath = process.argv[2];

// 出力M3U8ファイルのパス
const outputPath = 'output.m3u8';

// ffmpegのパスを強制的に設定
ffmpeg.setFfmpegPath(ffmpegStatic);

// MP4からM3U8への変換処理
ffmpeg(inputPath)
  .outputOptions([
    '-codec:v libx264',
    '-codec:a aac',
    '-hls_time 10',
    '-hls_list_size 0',
    '-f hls'
  ])
  .output(outputPath)
  .on('end', () => {
    console.log('変換が完了しました。');
  })
  .on('error', (err) => {
    console.error('変換エラー: ', err.message);
  })
  .run();


/*
fixture('Getting Started').page('https://www.google.com/');

test('1st test',async t => {

    //For class we use .   for id we use #

     
    await t.typeText('#APjFqb' , 'Abcd')
   
    
    await t.wait(2000)


})
//Run the code    npx testcafe chrome "D:\TestCafeHome1\TestCafeDemo\Tests\Test_video.js"
// or   npx testcafe chrome D:\TestCafeHome1\TestCafeDemo\Tests\Test_video.js


*/
import { Selector } from 'testcafe';

fixture('My Fixture')
    .page('https://www.example.com')
    .video('D:/TestCafeHome1/TestCafeDemo/Video', {
        singleFile: true,
        ffmpegPath: 'C:/PATH_Programs/ffmpeg.exe', // Replace with your FFmpeg path
    });

test('My Test', async t => {
    await t
        .typeText(Selector('#search-input'), 'TestCafe')
        .click(Selector('#search-button'))
        .wait(2000);
});

/*Create a Json object here so that the data can be passed to the AppController and the data can flow
* from controller through renderFrames
* */
var json = {
  "Name": "Untitled-3.indd",
  "Spreads": [
    {
      "Index": "0",
      "Pages": [
        {
          "Frames": [
            {
              "LeftBottom": "(326,647.5)",
              "RightBottom": "(442,647.5)",
              "RightTop": "(442,299)",
              "TopLeft": "(326,299)"
            },
            {
              "LeftBottom": "(131,647.5)",
              "RightBottom": "(262,647.5)",
              "RightTop": "(262,299)",
              "TopLeft": "(131,299)"
            },
            {
              "LeftBottom": "(131,269.5)",
              "RightBottom": "(442,269.5)",
              "RightTop": "(442,129.5)",
              "TopLeft": "(131,129.5)"
            }
          ],
          "Index": "0",
          "PageC": [
            {
              "LeftBottom": "(0,792)",
              "RightBottom": "(612,792)",
              "RightTop": "(612,0)",
              "TopLeft": "(0,0)"
            }
          ]
        }
      ]
    }
  ]
};
React.render(<AppController data={json} />, document.getElementById("container"));

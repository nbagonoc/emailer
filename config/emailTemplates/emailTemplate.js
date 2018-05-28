const key = require("../db_secret");

module.exports = survey => {
  return `
  <html>
  <head>
    <style type="text/css">
    html,body{
        margin: 0 auto;
        font-family: helvetica, sans-serif;
    }
    .featured{
        background: #17a2b8;
        padding: 64px 0;
    }
    .content{
        margin: 0 auto;
        padding: 0 15px;
        max-width: 720px;
    }
    h3{
        max-width: 720px;
        color: #FFFF;
        text-align: center;
        font-size: 42px;
        margin: 0 auto;
        padding: 0 15px;
        text-transform: capitalize;
        font-weight: bolder;
    }
    p{
        color: #666666;
        font-size: 22px;
        font-weight: lighter;
        line-height: 28px;
    }
    a{
        text-align: center;
        padding: 15px 0;
        border-radius: 6px;
        width: 280px;
        background-color: #17a2b8;
        color: #FFFFFF;
        text-decoration: none;
        display: block;
        margin: 0 auto 15px;          
    }
    </style> 
  </head>
  <body>
      <div class="featured">
          <h3>We would like to hear from you!</h3>
      </div>
      <div class="content">
          <p>${survey.body}</p>
            <a
                style="color: #FFFFFF;"
                href="${key.redirectDomain}/api/surveys/${survey.id}/yes"
            >
                YES
            </a>
            <a
                style="color: #FFFFFF;"
                href="${key.redirectDomain}/api/surveys/${survey.id}/no"
            >
                NO
            </a>
      </div>
  </body>
</html>
  `;
};

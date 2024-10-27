/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'richblack800':'#161D29',
      'richblack50':'#C5C7D4',
      'richblack100':"#AFB2BF",
      'richblack200':'#999DAA',
      'richblack300':'#838894',
      'richblack600':'#424854',
      'richblack900':'#000814',
      'richblack5':'#F1F2FF',
      'blue25':'#B4DAEC',
      'blue50':'#7EC0D9',
      'blue100':'#47A5C5',
      'blue200':'#118AB2',
      'blue300':'#0F7A9D',
      'blue500':'#0A5A72',
      'yellow':'#FFD60A',
      'pink200':'#EF476F',
      'pink300':'#D43D63',
      'green200':'#0FBF8E',
      'green700':"#014A32",
      'brown100':'#E7BC5B',
      'pink25':'#FBC7D1',
      'pink800':'#4F0A25',
      'brown25':'#FFE395',
      'brown800':'#41260B'
      
      

    },
    boxShadow: {
      'button': '2px 2px 0px 0px #424854',
      'homepageBox1':'12px 12px 0px 0px rgba(10,90,114,0.1)',
      'homepageBox2':'12px 12px 0px 0px rgba(79,10,37,0.1)',
      'homepageBox3':'12px 12px 0px 0px rgba(65, 38, 11, 0.1)',
      'homePageUpperBox': '12px 12px 0px 0px rgba(255, 214, 10, 1)',
      'toggle':'0px 1px 0px 0px rgba(255, 255, 255, 1.8)'
      

    },
    extend:{
      backgroundClip: ['text'],
      backgroundImage: {
        "invertedSq" : "url('assets/images/invertedSquareBg.png')"
      }
    }
  },
  plugins: [],
}


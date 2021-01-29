
    import styled from "styled-components";
    export const StyledHorizontalBlinds = styled.div`
 

    height: 591px;
    overflow: hidden;


    #blinds {
        position: relative;
        padding-bottom: 56.5%;
        perspective: 1800px;
        transform-style: preserve-3d;
        max-height: 1000px;
      }

    
      #blinds img {
        top: 0;
        left: 0;
        position: absolute;
        transition: 1s;
      }

    
      #blinds img.first {
        transform: rotateX(0deg);
        transform: ${(props) => (props.change ? "rotateX(-180deg)" : null)};
      }

    
      #blinds img.second {
        transform: rotateX(-180deg) translateZ(10px);
        transform: ${(props) => props.change ? "rotateX(0deg) translateZ(10px)" : null};
      } 

        #blinds img:nth-child(1),
        #blinds img:nth-child(51) {
        clip: rect(0px, 1000px, 20px, 0px);
        transform-origin: 0px 50px; 
        transition-delay: ${props => props.dark ? '0ms' : '450ms'};
    }

        #blinds img:nth-child(2),
        #blinds img:nth-child(52) {
        clip: rect(20px, 1000px, 40px, 0px);
        transform-origin: 0px 70px; 
        transition-delay: ${props => props.dark ? '9ms' : '441ms'};
    }

        #blinds img:nth-child(3),
        #blinds img:nth-child(53) {
        clip: rect(40px, 1000px, 60px, 0px);
        transform-origin: 0px 90px; 
        transition-delay: ${props => props.dark ? '18ms' : '432ms'};
    }

        #blinds img:nth-child(4),
        #blinds img:nth-child(54) {
        clip: rect(60px, 1000px, 80px, 0px);
        transform-origin: 0px 110px; 
        transition-delay: ${props => props.dark ? '27ms' : '423ms'};
    }

        #blinds img:nth-child(5),
        #blinds img:nth-child(55) {
        clip: rect(80px, 1000px, 100px, 0px);
        transform-origin: 0px 130px; 
        transition-delay: ${props => props.dark ? '36ms' : '414ms'};
    }

        #blinds img:nth-child(6),
        #blinds img:nth-child(56) {
        clip: rect(100px, 1000px, 120px, 0px);
        transform-origin: 0px 150px; 
        transition-delay: ${props => props.dark ? '45ms' : '405ms'};
    }

        #blinds img:nth-child(7),
        #blinds img:nth-child(57) {
        clip: rect(120px, 1000px, 140px, 0px);
        transform-origin: 0px 170px; 
        transition-delay: ${props => props.dark ? '54ms' : '396ms'};
    }

        #blinds img:nth-child(8),
        #blinds img:nth-child(58) {
        clip: rect(140px, 1000px, 160px, 0px);
        transform-origin: 0px 190px; 
        transition-delay: ${props => props.dark ? '63ms' : '387ms'};
    }

        #blinds img:nth-child(9),
        #blinds img:nth-child(59) {
        clip: rect(160px, 1000px, 180px, 0px);
        transform-origin: 0px 210px; 
        transition-delay: ${props => props.dark ? '72ms' : '378ms'};
    }

        #blinds img:nth-child(10),
        #blinds img:nth-child(60) {
        clip: rect(180px, 1000px, 200px, 0px);
        transform-origin: 0px 230px; 
        transition-delay: ${props => props.dark ? '81ms' : '369ms'};
    }

        #blinds img:nth-child(11),
        #blinds img:nth-child(61) {
        clip: rect(200px, 1000px, 220px, 0px);
        transform-origin: 0px 250px; 
        transition-delay: ${props => props.dark ? '90ms' : '360ms'};
    }

        #blinds img:nth-child(12),
        #blinds img:nth-child(62) {
        clip: rect(220px, 1000px, 240px, 0px);
        transform-origin: 0px 270px; 
        transition-delay: ${props => props.dark ? '99ms' : '351ms'};
    }

        #blinds img:nth-child(13),
        #blinds img:nth-child(63) {
        clip: rect(240px, 1000px, 260px, 0px);
        transform-origin: 0px 290px; 
        transition-delay: ${props => props.dark ? '108ms' : '342ms'};
    }

        #blinds img:nth-child(14),
        #blinds img:nth-child(64) {
        clip: rect(260px, 1000px, 280px, 0px);
        transform-origin: 0px 310px; 
        transition-delay: ${props => props.dark ? '117ms' : '333ms'};
    }

        #blinds img:nth-child(15),
        #blinds img:nth-child(65) {
        clip: rect(280px, 1000px, 300px, 0px);
        transform-origin: 0px 330px; 
        transition-delay: ${props => props.dark ? '126ms' : '324ms'};
    }

        #blinds img:nth-child(16),
        #blinds img:nth-child(66) {
        clip: rect(300px, 1000px, 320px, 0px);
        transform-origin: 0px 350px; 
        transition-delay: ${props => props.dark ? '135ms' : '315ms'};
    }

        #blinds img:nth-child(17),
        #blinds img:nth-child(67) {
        clip: rect(320px, 1000px, 340px, 0px);
        transform-origin: 0px 370px; 
        transition-delay: ${props => props.dark ? '144ms' : '306ms'};
    }

        #blinds img:nth-child(18),
        #blinds img:nth-child(68) {
        clip: rect(340px, 1000px, 360px, 0px);
        transform-origin: 0px 390px; 
        transition-delay: ${props => props.dark ? '153ms' : '297ms'};
    }

        #blinds img:nth-child(19),
        #blinds img:nth-child(69) {
        clip: rect(360px, 1000px, 380px, 0px);
        transform-origin: 0px 410px; 
        transition-delay: ${props => props.dark ? '162ms' : '288ms'};
    }

        #blinds img:nth-child(20),
        #blinds img:nth-child(70) {
        clip: rect(380px, 1000px, 400px, 0px);
        transform-origin: 0px 430px; 
        transition-delay: ${props => props.dark ? '171ms' : '279ms'};
    }

        #blinds img:nth-child(21),
        #blinds img:nth-child(71) {
        clip: rect(400px, 1000px, 420px, 0px);
        transform-origin: 0px 450px; 
        transition-delay: ${props => props.dark ? '180ms' : '270ms'};
    }

        #blinds img:nth-child(22),
        #blinds img:nth-child(72) {
        clip: rect(420px, 1000px, 440px, 0px);
        transform-origin: 0px 470px; 
        transition-delay: ${props => props.dark ? '189ms' : '261ms'};
    }

        #blinds img:nth-child(23),
        #blinds img:nth-child(73) {
        clip: rect(440px, 1000px, 460px, 0px);
        transform-origin: 0px 490px; 
        transition-delay: ${props => props.dark ? '198ms' : '252ms'};
    }

        #blinds img:nth-child(24),
        #blinds img:nth-child(74) {
        clip: rect(460px, 1000px, 480px, 0px);
        transform-origin: 0px 510px; 
        transition-delay: ${props => props.dark ? '207ms' : '243ms'};
    }

        #blinds img:nth-child(25),
        #blinds img:nth-child(75) {
        clip: rect(480px, 1000px, 500px, 0px);
        transform-origin: 0px 530px; 
        transition-delay: ${props => props.dark ? '216ms' : '234ms'};
    }

        #blinds img:nth-child(26),
        #blinds img:nth-child(76) {
        clip: rect(500px, 1000px, 520px, 0px);
        transform-origin: 0px 550px; 
        transition-delay: ${props => props.dark ? '225ms' : '225ms'};
    }

        #blinds img:nth-child(27),
        #blinds img:nth-child(77) {
        clip: rect(520px, 1000px, 540px, 0px);
        transform-origin: 0px 570px; 
        transition-delay: ${props => props.dark ? '234ms' : '216ms'};
    }

        #blinds img:nth-child(28),
        #blinds img:nth-child(78) {
        clip: rect(540px, 1000px, 560px, 0px);
        transform-origin: 0px 590px; 
        transition-delay: ${props => props.dark ? '243ms' : '207ms'};
    }

        #blinds img:nth-child(29),
        #blinds img:nth-child(79) {
        clip: rect(560px, 1000px, 580px, 0px);
        transform-origin: 0px 610px; 
        transition-delay: ${props => props.dark ? '252ms' : '198ms'};
    }

        #blinds img:nth-child(30),
        #blinds img:nth-child(80) {
        clip: rect(580px, 1000px, 600px, 0px);
        transform-origin: 0px 630px; 
        transition-delay: ${props => props.dark ? '261ms' : '189ms'};
    }

        #blinds img:nth-child(31),
        #blinds img:nth-child(81) {
        clip: rect(600px, 1000px, 620px, 0px);
        transform-origin: 0px 650px; 
        transition-delay: ${props => props.dark ? '270ms' : '180ms'};
    }

        #blinds img:nth-child(32),
        #blinds img:nth-child(82) {
        clip: rect(620px, 1000px, 640px, 0px);
        transform-origin: 0px 670px; 
        transition-delay: ${props => props.dark ? '279ms' : '171ms'};
    }

        #blinds img:nth-child(33),
        #blinds img:nth-child(83) {
        clip: rect(640px, 1000px, 660px, 0px);
        transform-origin: 0px 690px; 
        transition-delay: ${props => props.dark ? '288ms' : '162ms'};
    }

        #blinds img:nth-child(34),
        #blinds img:nth-child(84) {
        clip: rect(660px, 1000px, 680px, 0px);
        transform-origin: 0px 710px; 
        transition-delay: ${props => props.dark ? '297ms' : '153ms'};
    }

        #blinds img:nth-child(35),
        #blinds img:nth-child(85) {
        clip: rect(680px, 1000px, 700px, 0px);
        transform-origin: 0px 730px; 
        transition-delay: ${props => props.dark ? '306ms' : '144ms'};
    }

        #blinds img:nth-child(36),
        #blinds img:nth-child(86) {
        clip: rect(700px, 1000px, 720px, 0px);
        transform-origin: 0px 750px; 
        transition-delay: ${props => props.dark ? '315ms' : '135ms'};
    }

        #blinds img:nth-child(37),
        #blinds img:nth-child(87) {
        clip: rect(720px, 1000px, 740px, 0px);
        transform-origin: 0px 770px; 
        transition-delay: ${props => props.dark ? '324ms' : '126ms'};
    }

        #blinds img:nth-child(38),
        #blinds img:nth-child(88) {
        clip: rect(740px, 1000px, 760px, 0px);
        transform-origin: 0px 790px; 
        transition-delay: ${props => props.dark ? '333ms' : '117ms'};
    }

        #blinds img:nth-child(39),
        #blinds img:nth-child(89) {
        clip: rect(760px, 1000px, 780px, 0px);
        transform-origin: 0px 810px; 
        transition-delay: ${props => props.dark ? '342ms' : '108ms'};
    }

        #blinds img:nth-child(40),
        #blinds img:nth-child(90) {
        clip: rect(780px, 1000px, 800px, 0px);
        transform-origin: 0px 830px; 
        transition-delay: ${props => props.dark ? '351ms' : '99ms'};
    }

        #blinds img:nth-child(41),
        #blinds img:nth-child(91) {
        clip: rect(800px, 1000px, 820px, 0px);
        transform-origin: 0px 850px; 
        transition-delay: ${props => props.dark ? '360ms' : '90ms'};
    }

        #blinds img:nth-child(42),
        #blinds img:nth-child(92) {
        clip: rect(820px, 1000px, 840px, 0px);
        transform-origin: 0px 870px; 
        transition-delay: ${props => props.dark ? '369ms' : '81ms'};
    }

        #blinds img:nth-child(43),
        #blinds img:nth-child(93) {
        clip: rect(840px, 1000px, 860px, 0px);
        transform-origin: 0px 890px; 
        transition-delay: ${props => props.dark ? '378ms' : '72ms'};
    }

        #blinds img:nth-child(44),
        #blinds img:nth-child(94) {
        clip: rect(860px, 1000px, 880px, 0px);
        transform-origin: 0px 910px; 
        transition-delay: ${props => props.dark ? '387ms' : '63ms'};
    }

        #blinds img:nth-child(45),
        #blinds img:nth-child(95) {
        clip: rect(880px, 1000px, 900px, 0px);
        transform-origin: 0px 930px; 
        transition-delay: ${props => props.dark ? '396ms' : '54ms'};
    }

        #blinds img:nth-child(46),
        #blinds img:nth-child(96) {
        clip: rect(900px, 1000px, 920px, 0px);
        transform-origin: 0px 950px; 
        transition-delay: ${props => props.dark ? '405ms' : '45ms'};
    }

        #blinds img:nth-child(47),
        #blinds img:nth-child(97) {
        clip: rect(920px, 1000px, 940px, 0px);
        transform-origin: 0px 970px; 
        transition-delay: ${props => props.dark ? '414ms' : '36ms'};
    }

        #blinds img:nth-child(48),
        #blinds img:nth-child(98) {
        clip: rect(940px, 1000px, 960px, 0px);
        transform-origin: 0px 990px; 
        transition-delay: ${props => props.dark ? '423ms' : '27ms'};
    }

        #blinds img:nth-child(49),
        #blinds img:nth-child(99) {
        clip: rect(960px, 1000px, 980px, 0px);
        transform-origin: 0px 1010px; 
        transition-delay: ${props => props.dark ? '432ms' : '18ms'};
    }

        #blinds img:nth-child(50),
        #blinds img:nth-child(100) {
        clip: rect(980px, 1000px, 1000px, 0px);
        transform-origin: 0px 1030px; 
        transition-delay: ${props => props.dark ? '441ms' : '9ms'};
    }
`;
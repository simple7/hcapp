<template>
  <div class="index-card container my-clearfix">
    <div class="contra">
      <p class="slogan">{{slogan}}</p>
      <img src="../../assets/img/home-img1.png" alt="xx1">
    </div>
    <div class="contra">
      <p class="p-contra">{{contra.p1}}</p>
      <p class="p-contra">{{contra.p2}}</p>
    </div>
    <div class="ad-card-row">
      <div v-for="item in adList" class="ad-card">
        <p class="ad-title">{{item.title}}</p>
        <p class="ad-text">{{item.text}}</p>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    props: {
      slogan: {
        type: String,
        default: '保全网——存证、增信、鉴真'
      },
      contra: {
        type: Object,
        default: function () {
          return {
            p1: '数据时代来临，每个人将面临数据主权维护，数据存证司法有效性、',
            p2: '数据时代来临，每个人将面临数据主权维护，数据存证司法有效性、'

          }
        }
      },
      adList: {
        type: Array,
        default(){
          return [
            {
              title: '文件保全',
              text: '协议、凭证、合约、原创作品、邮件等文件，通过区块链技术提供完整、真实、可靠的保全服务'
            },
            {
              title: '文件保全',
              text: '协议、凭证、合约、原创作品、邮件等文件，通过区块链技术提供完整、真实、可靠的保全服务'
            },
            {
              title: '文件保全',
              text: '协议、凭证、合约、原创作品、邮件等文件，通过区块链技术提供完整、真实、可靠的保全服务'
            },
            {
              title: '文件保全',
              text: '协议、凭证、合约、原创作品、邮件等文件，通过区块链技术提供完整、真实、可靠的保全服务'
            }
          ]
        }

      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/common.scss";
  @media screen and (min-width: 1200px){
    .index-card{
      height: $pc-ad;
    }
  }
  .index-card {
    padding: 30px 0;
  }

  .contra {
    margin-bottom: 10px;
    text-align: center;
    .slogan {
      color:$balck;
      font-weight: 700;
      font-size: 1.3em;
      margin-bottom: 10px;
    }
    .p-contra {
      text-align: center;
    }
  }

  .ad-card-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 30px;
    .ad-card {
      height: 150px;
      width: 280px;
      background-color: $grey-ground;
      padding: 20px;
      margin: 0 10px 10px 0;
      .ad-title {
        color: $balck;
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .ad-text {
        color: $small-black;
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .index-card {
      /*padding: 0 20px;*/
      width: 80%;
    }
    .ad-card {
      width: 100% !important;
      margin: 0 0 30px 5px !important;
    }
  }

</style>

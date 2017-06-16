<template>
  <div class="index-card container">
    <div class="contra">
      <p class="slogan">保全网——存证、增信、鉴真</p>
      <img src="../../assets/img/home-img1.png" alt="xx1">
    </div>
    <div class="contra">
      <p class="p-contra">数据时代来临，每个人将面临数据主权维护，数据存证司法有效性、</p>
      <p class="p-contra">数据保全不被篡改的需求，保全网将提供给您一站式的数据保全，取证公证服务</p>
    </div>
    <div class="ad-card-row">
        <div class="ad-card">
          <p>文件保全</p>
          <p>协议、凭证、合约、原创作品、邮件等文件，通过区块链技术提供完整、真实、可靠的保全服务</p>
        </div>
      <div class="ad-card">
          <p>文件保全</p>
          <p>协议、凭证、合约、原创作品、邮件等文件，通过区块链技术提供完整、真实、可靠的保全服务</p>
        </div>
      <div class="ad-card">
          <p>文件保全</p>
          <p>协议、凭证、合约、原创作品、邮件等文件，通过区块链技术提供完整、真实、可靠的保全服务</p>
        </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="scss" scoped>
  @import "../../style/common.scss";

  .index-card {
    height: $pc-ad;
    padding: 30px 0;
  }

  .contra {
    margin-bottom: 10px;
    text-align: center;
    .slogan {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .p-contra {
      text-align: center;
      font-size: 16px;
    }
  }

  .ad-card-row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 30px;
    .ad-card{
      height:150px;
      width:300px;
      background-color: #f6f6f6;
      padding:20px;
      margin: 0 10px 10px 0;
      p:first-child{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }

</style>

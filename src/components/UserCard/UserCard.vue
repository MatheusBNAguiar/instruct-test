<template>
  <Card class="col-xs-12 col-sm-9 col-md-6 user-card-container">
    <div class="col-xs-12 col-sm-5 flex-row user-card__photo-container">
      <img class="user-card__photo" :src="userPhoto" />
    </div>
    <div class="col-xs-12 col-sm-7 --no-margin flex-row">
      <div class="col-xs-12 user-card__info">
        <div class="user-info__name">{{user.name}}</div>
        <div class="user-info__email">{{user.email}}</div>
        <div class="user-info__username">{{user.username}}</div>
        <div class="user-info__extra-info">
          <span>
            <i class="fa fa-phone" />
            {{user.phone}}
          </span>
          <span>
            <i class="fa fa-at" />
            {{user.email}}
          </span>
          <span>
            <i class="fa fa-address-card" />
            {{address.street}}, {{address.suite}}, {{address.city}}
          </span>
        </div>
      </div>
      <!-- <a class="col-xs-12 user-card__button">Ver Perfil</a> -->
    </div>
  </Card>
</template>

<script>
import Card from "../Card/Card";

export default {
  components: { Card },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    address() {
      return (this.user && this.user.address) || {};
    }
  },
  data() {
    const photoId = Math.floor(Math.random() * 40);
    const gender = Math.round(Math.random()) ? "women" : "men";
    return {
      userPhoto: `https://randomuser.me/api/portraits/${gender}/${photoId}.jpg`
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";

.user-card {
  &-container {
    margin: 0 auto;
  }

  &__photo-container {
    padding: 10px;
  }

  &__photo {
    border-radius: 50%;
    margin: 15px auto;
    width: 90%;
  }

  &__info {
    padding: 25px 5px 15px;
  }

  &__button {
    flex-basis: 100%;
    cursor: pointer;
    line-height: 40px;
    background-color: $primary-medium-blue;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    &__info {
      text-align: center;
    }

    &__photo {
      width: 50%;
    }
  }

  @media screen and (max-width: 468px) {
    &__photo {
      width: 75%;
    }
  }
}

.user-info {
  &__name {
    font-size: 24px;
    font-weight: bold;
    font-family: $primary-font;
    color: $primary-dark-blue;
    margin-bottom: 5px;
  }

  &__email {
    font-size: 18px;
    color: $primary-medium-blue;
  }

  &__username {
    font-size: 18px;
    color: $secondary-green;
  }

  &__extra-info {
    font-size: 14px;

    padding: 20px 0 0;
    color: $primary-light-blue;

    span {
      margin-bottom: 5px;
      display: block;
    }
  }
}
</style>
